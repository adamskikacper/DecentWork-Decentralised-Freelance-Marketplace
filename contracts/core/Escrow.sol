// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "../interfaces/IEscrow.sol";
import "../interfaces/IFreelanceMarketplace.sol";

/**
 * @title Escrow
 * @dev Contract for handling secure payments between clients and freelancers
 */
contract Escrow is IEscrow {
    // Contract owner (arbitrator)
    address private _owner;
    
    // Reentrancy guard
    uint256 private constant _NOT_ENTERED = 1;
    uint256 private constant _ENTERED = 2;
    uint256 private _status;
    
    // Contract counter
    struct Counter {
        uint256 _value;
    }
    Counter private _escrowIds;

    // Protocol fee percentage (in basis points, e.g., 250 = 2.5%)
    uint256 private _protocolFeeRate;

    // Treasury address to receive protocol fees
    address private _treasury;

    // Marketplace contract reference
    IFreelanceMarketplace private _marketplace;

    // Mappings
    mapping(uint256 => EscrowPayment) private _escrows;
    mapping(uint256 => uint256[]) private _projectEscrows;
    mapping(uint256 => mapping(uint256 => uint256)) private _milestoneEscrows;

    // Events
    event OwnershipTransferred(address indexed previousOwner, address indexed newOwner);

    // Modifier to ensure only the marketplace contract can call certain functions
    modifier onlyMarketplace() {
        require(msg.sender == address(_marketplace), "Only marketplace can call this function");
        _;
    }

    // Modifier to ensure only an arbitrator can call certain functions
    modifier onlyArbitrator() {
        require(msg.sender == _owner, "Only arbitrator can call this function");
        _;
    }

    // Modifier to ensure only the owner can call certain functions
    modifier onlyOwner() {
        require(msg.sender == _owner, "Only owner can call this function");
        _;
    }

    // Modifier to prevent reentrancy attacks
    modifier nonReentrant() {
        require(_status != _ENTERED, "ReentrancyGuard: reentrant call");
        _status = _ENTERED;
        _;
        _status = _NOT_ENTERED;
    }

    /**
     * @dev Constructor for the Escrow contract
     * @param initialOwner The initial owner of the contract (arbitrator)
     * @param marketplaceAddress The address of the Freelance Marketplace contract
     * @param treasuryAddress The address of the treasury to receive protocol fees
     * @param protocolFeeRate The protocol fee rate in basis points (e.g., 250 = 2.5%)
     */
    constructor(
        address initialOwner,
        address marketplaceAddress,
        address treasuryAddress,
        uint256 protocolFeeRate
    ) {
        require(initialOwner != address(0), "Invalid owner address");
        require(marketplaceAddress != address(0), "Invalid marketplace address");
        require(treasuryAddress != address(0), "Invalid treasury address");
        require(protocolFeeRate <= 1000, "Fee cannot exceed 10%");
        
        _owner = initialOwner;
        _marketplace = IFreelanceMarketplace(marketplaceAddress);
        _treasury = treasuryAddress;
        _protocolFeeRate = protocolFeeRate;
        _status = _NOT_ENTERED;
    }

    /**
     * @dev Transfers ownership of the contract to a new account
     * @param newOwner The address of the new owner
     */
    function transferOwnership(address newOwner) public onlyOwner {
        require(newOwner != address(0), "New owner is the zero address");
        address oldOwner = _owner;
        _owner = newOwner;
        emit OwnershipTransferred(oldOwner, newOwner);
    }

    /**
     * @dev Returns the address of the current owner
     */
    function owner() public view returns (address) {
        return _owner;
    }

    /**
     * @dev Function to increment counter safely
     */
    function _increment(Counter storage counter) private {
        counter._value += 1;
    }

    /**
     * @dev Function to get current counter value
     */
    function _current(Counter storage counter) private view returns (uint256) {
        return counter._value;
    }

    /**
     * @dev Sets the marketplace contract address
     * @param marketplaceAddress The address of the Freelance Marketplace contract
     */
    function setMarketplace(address marketplaceAddress) external onlyOwner {
        require(marketplaceAddress != address(0), "Invalid marketplace address");
        _marketplace = IFreelanceMarketplace(marketplaceAddress);
    }

    /**
     * @dev Sets the treasury address
     * @param treasuryAddress The address of the treasury to receive protocol fees
     */
    function setTreasury(address treasuryAddress) external onlyOwner {
        require(treasuryAddress != address(0), "Invalid treasury address");
        _treasury = treasuryAddress;
    }

    /**
     * @dev Sets the protocol fee rate
     * @param protocolFeeRate The protocol fee rate in basis points (e.g., 250 = 2.5%)
     */
    function setProtocolFeeRate(uint256 protocolFeeRate) external onlyOwner {
        require(protocolFeeRate <= 1000, "Fee cannot exceed 10%");
        _protocolFeeRate = protocolFeeRate;
    }

    /**
     * @dev Creates a new escrow payment
     * @param projectId The ID of the project
     * @param milestoneId The ID of the milestone
     * @param client The address of the client
     * @param freelancer The address of the freelancer
     * @return The ID of the newly created escrow
     */
    function createEscrow(
        uint256 projectId,
        uint256 milestoneId,
        address client,
        address freelancer
    ) external payable override nonReentrant returns (uint256) {
        require(msg.value > 0, "Amount must be greater than 0");
        require(client != address(0), "Invalid client address");
        require(freelancer != address(0), "Invalid freelancer address");
        require(client != freelancer, "Client and freelancer cannot be the same");

        _increment(_escrowIds);
        uint256 escrowId = _current(_escrowIds);

        EscrowPayment storage escrow = _escrows[escrowId];
        escrow.id = escrowId;
        escrow.projectId = projectId;
        escrow.milestoneId = milestoneId;
        escrow.client = client;
        escrow.freelancer = freelancer;
        escrow.amount = msg.value;
        escrow.status = EscrowStatus.Funded;
        escrow.createdAt = block.timestamp;

        _projectEscrows[projectId].push(escrowId);
        _milestoneEscrows[projectId][milestoneId] = escrowId;

        emit EscrowCreated(
            escrowId,
            projectId,
            milestoneId,
            client,
            freelancer,
            msg.value
        );

        return escrowId;
    }

    /**
     * @dev Releases the escrow payment to the freelancer
     * @param escrowId The ID of the escrow
     */
    function releaseEscrow(uint256 escrowId) external override nonReentrant {
        EscrowPayment storage escrow = _escrows[escrowId];
        require(escrow.id == escrowId, "Escrow does not exist");
        require(escrow.status == EscrowStatus.Funded, "Escrow is not in funded state");
        
        // Only client or marketplace can release funds
        IFreelanceMarketplace.Project memory project = _marketplace.getProject(escrow.projectId);
        require(
            msg.sender == escrow.client || 
            msg.sender == address(_marketplace) || 
            msg.sender == owner(),
            "Only client, marketplace, or arbitrator can release funds"
        );

        escrow.status = EscrowStatus.Released;

        // Calculate protocol fee
        uint256 fee = (escrow.amount * _protocolFeeRate) / 10000;
        uint256 freelancerAmount = escrow.amount - fee;

        // Transfer funds to freelancer and treasury
        (bool freelancerSuccess, ) = payable(escrow.freelancer).call{value: freelancerAmount}("");
        require(freelancerSuccess, "Transfer to freelancer failed");

        if (fee > 0) {
            (bool treasurySuccess, ) = payable(_treasury).call{value: fee}("");
            require(treasurySuccess, "Transfer to treasury failed");
        }

        emit EscrowReleased(
            escrowId,
            escrow.projectId,
            escrow.milestoneId,
            escrow.freelancer,
            freelancerAmount
        );
    }

    /**
     * @dev Refunds the escrow payment to the client
     * @param escrowId The ID of the escrow
     */
    function refundEscrow(uint256 escrowId) external override nonReentrant {
        EscrowPayment storage escrow = _escrows[escrowId];
        require(escrow.id == escrowId, "Escrow does not exist");
        require(escrow.status == EscrowStatus.Funded, "Escrow is not in funded state");
        
        // Only freelancer, marketplace or arbitrator can refund
        require(
            msg.sender == escrow.freelancer || 
            msg.sender == address(_marketplace) || 
            msg.sender == owner(),
            "Only freelancer, marketplace, or arbitrator can refund"
        );

        escrow.status = EscrowStatus.Refunded;

        // Transfer funds back to client
        (bool success, ) = payable(escrow.client).call{value: escrow.amount}("");
        require(success, "Transfer to client failed");

        emit EscrowRefunded(
            escrowId,
            escrow.projectId,
            escrow.milestoneId,
            escrow.client,
            escrow.amount
        );
    }

    /**
     * @dev Disputes an escrow payment
     * @param escrowId The ID of the escrow
     */
    function disputeEscrow(uint256 escrowId) external override nonReentrant {
        EscrowPayment storage escrow = _escrows[escrowId];
        require(escrow.id == escrowId, "Escrow does not exist");
        require(escrow.status == EscrowStatus.Funded, "Escrow is not in funded state");
        require(
            msg.sender == escrow.client || 
            msg.sender == escrow.freelancer || 
            msg.sender == address(_marketplace),
            "Only client, freelancer, or marketplace can dispute"
        );

        escrow.status = EscrowStatus.Disputed;

        emit EscrowDisputed(
            escrowId,
            escrow.projectId,
            escrow.milestoneId,
            msg.sender
        );
    }

    /**
     * @dev Resolves a disputed escrow payment
     * @param escrowId The ID of the escrow
     * @param recipient The address to receive the funds
     * @param amount The amount to send to the recipient
     */
    function resolveDispute(
        uint256 escrowId,
        address payable recipient,
        uint256 amount
    ) external override onlyArbitrator nonReentrant {
        EscrowPayment storage escrow = _escrows[escrowId];
        require(escrow.id == escrowId, "Escrow does not exist");
        require(escrow.status == EscrowStatus.Disputed, "Escrow is not in disputed state");
        require(amount <= escrow.amount, "Amount exceeds escrow amount");
        require(
            recipient == escrow.client || 
            recipient == escrow.freelancer,
            "Recipient must be client or freelancer"
        );

        // Calculate remaining amount after resolving to the specified recipient
        uint256 remaining = escrow.amount - amount;

        // Determine the other party
        address payable otherParty;
        if (recipient == escrow.client) {
            otherParty = payable(escrow.freelancer);
        } else {
            otherParty = payable(escrow.client);
        }

        // Mark escrow as released to prevent re-entrancy
        escrow.status = EscrowStatus.Released;

        // Transfer the specified amount to the recipient
        if (amount > 0) {
            (bool successRecipient, ) = recipient.call{value: amount}("");
            require(successRecipient, "Transfer to recipient failed");
        }

        // Transfer any remaining amount to the other party
        if (remaining > 0) {
            (bool successOther, ) = otherParty.call{value: remaining}("");
            require(successOther, "Transfer to other party failed");
        }

        // Emit appropriate event based on who received funds
        if (recipient == escrow.freelancer) {
            emit EscrowReleased(
                escrowId,
                escrow.projectId,
                escrow.milestoneId,
                escrow.freelancer,
                amount
            );
        } else {
            emit EscrowRefunded(
                escrowId,
                escrow.projectId,
                escrow.milestoneId,
                escrow.client,
                amount
            );
        }
    }

    /**
     * @dev Gets an escrow payment by ID
     * @param escrowId The ID of the escrow
     * @return The escrow payment details
     */
    function getEscrow(uint256 escrowId) external view override returns (EscrowPayment memory) {
        require(_escrows[escrowId].id == escrowId, "Escrow does not exist");
        return _escrows[escrowId];
    }

    /**
     * @dev Gets all escrow payments for a project
     * @param projectId The ID of the project
     * @return An array of escrow IDs
     */
    function getProjectEscrows(uint256 projectId) external view override returns (uint256[] memory) {
        return _projectEscrows[projectId];
    }

    /**
     * @dev Gets the escrow payment for a milestone
     * @param projectId The ID of the project
     * @param milestoneId The ID of the milestone
     * @return The ID of the escrow
     */
    function getMilestoneEscrow(uint256 projectId, uint256 milestoneId) external view override returns (uint256) {
        return _milestoneEscrows[projectId][milestoneId];
    }

    /**
     * @dev Gets the total amount held in escrow for a project
     * @param projectId The ID of the project
     * @return The total amount held in escrow
     */
    function getProjectEscrowBalance(uint256 projectId) external view override returns (uint256) {
        uint256[] memory escrowIds = _projectEscrows[projectId];
        uint256 totalBalance = 0;

        for (uint256 i = 0; i < escrowIds.length; i++) {
            EscrowPayment storage escrow = _escrows[escrowIds[i]];
            if (escrow.status == EscrowStatus.Funded) {
                totalBalance += escrow.amount;
            }
        }

        return totalBalance;
    }

    /**
     * @dev Gets the protocol fee rate
     * @return The protocol fee rate in basis points
     */
    function getProtocolFeeRate() external view returns (uint256) {
        return _protocolFeeRate;
    }

    /**
     * @dev Gets the treasury address
     * @return The address of the treasury
     */
    function getTreasury() external view returns (address) {
        return _treasury;
    }

    /**
     * @dev Gets the marketplace contract address
     * @return The address of the marketplace contract
     */
    function getMarketplace() external view returns (address) {
        return address(_marketplace);
    }
}