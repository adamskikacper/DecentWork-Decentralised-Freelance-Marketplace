// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "../interfaces/IFreelanceMarketplace.sol";
import "../interfaces/IEscrow.sol";
import "../interfaces/IReputationSystem.sol";

/**
 * @title FreelanceMarketplace
 * @dev Main contract for the decentralized freelance marketplace
 */
contract FreelanceMarketplace is IFreelanceMarketplace {
    // Contract owner
    address private _owner;
    
    // Reentrancy guard
    uint256 private constant _NOT_ENTERED = 1;
    uint256 private constant _ENTERED = 2;
    uint256 private _status;
    
    // Contract counters
    struct Counter {
        uint256 _value;
    }
    Counter private _projectIds;
    Counter private _milestoneIds;
    Counter private _proposalIds;

    // Associated contracts
    IEscrow private _escrowContract;
    IReputationSystem private _reputationSystem;

    // Protocol fee percentage (in basis points, e.g., 250 = 2.5%)
    uint256 private _protocolFeeRate = 250;

    // Mappings
    mapping(uint256 => Project) private _projects;
    mapping(uint256 => Milestone) private _milestones;
    mapping(uint256 => Proposal) private _proposals;
    mapping(address => uint256[]) private _clientProjects;
    mapping(address => uint256[]) private _freelancerProjects;
    mapping(uint256 => uint256[]) private _projectProposals;
    
    // Events
    event OwnershipTransferred(address indexed previousOwner, address indexed newOwner);

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
     * @dev Constructor for the FreelanceMarketplace contract
     * @param initialOwner The initial owner of the contract
     */
    constructor(address initialOwner) {
        require(initialOwner != address(0), "Invalid owner address");
        _owner = initialOwner;
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
     * @dev Sets the escrow contract address
     * @param escrowAddress The address of the escrow contract
     */
    function setEscrowContract(address escrowAddress) external onlyOwner {
        _escrowContract = IEscrow(escrowAddress);
    }

    /**
     * @dev Sets the reputation system contract address
     * @param reputationAddress The address of the reputation system contract
     */
    function setReputationSystem(address reputationAddress) external onlyOwner {
        _reputationSystem = IReputationSystem(reputationAddress);
    }

    /**
     * @dev Sets the protocol fee rate
     * @param feeRate The protocol fee rate in basis points (e.g., 250 = 2.5%)
     */
    function setProtocolFeeRate(uint256 feeRate) external onlyOwner {
        require(feeRate <= 1000, "Fee cannot exceed 10%");
        _protocolFeeRate = feeRate;
    }

    /**
     * @dev Creates a new project
     * @param title The title of the project
     * @param description The description of the project
     * @param totalBudget The total budget for the project
     * @param deadline The deadline for the project completion
     * @param requiredSkills The skills required for the project
     * @param experienceLevel The required experience level
     * @param projectDuration The expected duration of the project
     * @param projectType The type of project (e.g., Full Time, Part Time)
     * @param attachmentHashes IPFS or other hashes for project attachments
     * @return The ID of the newly created project
     */
    function createProject(
        string calldata title,
        string calldata description,
        uint256 totalBudget,
        uint256 deadline,
        string[] calldata requiredSkills,
        string calldata experienceLevel,
        string calldata projectDuration,
        string calldata projectType,
        string[] calldata attachmentHashes
    ) external payable override nonReentrant returns (uint256) {
        require(bytes(title).length > 0, "Title cannot be empty");
        require(bytes(description).length > 0, "Description cannot be empty");
        require(totalBudget > 0, "Budget must be greater than 0");
        require(deadline > block.timestamp, "Deadline must be in the future");
        require(msg.value == totalBudget, "Sent value must match the budget");

        _increment(_projectIds);
        uint256 projectId = _current(_projectIds);

        Project storage project = _projects[projectId];
        project.id = projectId;
        project.client = msg.sender;
        project.title = title;
        project.description = description;
        project.totalBudget = totalBudget;
        project.createdAt = block.timestamp;
        project.deadline = deadline;
        project.status = ProjectStatus.Open;
        
        // Store the new fields
        for (uint256 i = 0; i < requiredSkills.length; i++) {
            project.requiredSkills.push(requiredSkills[i]);
        }
        project.experienceLevel = experienceLevel;
        project.projectDuration = projectDuration;
        project.projectType = projectType;
        for (uint256 i = 0; i < attachmentHashes.length; i++) {
            project.attachmentHashes.push(attachmentHashes[i]);
        }

        _clientProjects[msg.sender].push(projectId);

        emit ProjectCreated(projectId, msg.sender, title, totalBudget);

        return projectId;
    }

    /**
     * @dev Adds a milestone to a project
     * @param projectId The ID of the project
     * @param description The description of the milestone
     * @param amount The amount allocated for the milestone
     * @param deadline The deadline for the milestone completion
     * @return The ID of the newly created milestone
     */
    function addMilestone(
        uint256 projectId,
        string calldata description,
        uint256 amount,
        uint256 deadline
    ) external override nonReentrant returns (uint256) {
        Project storage project = _projects[projectId];
        require(project.id == projectId, "Project does not exist");
        require(msg.sender == project.client, "Only client can add milestones");
        require(project.status == ProjectStatus.Open || project.status == ProjectStatus.InProgress, "Project must be open or in progress");
        require(bytes(description).length > 0, "Description cannot be empty");
        require(amount > 0, "Amount must be greater than 0");
        require(deadline > block.timestamp, "Deadline must be in the future");
        require(deadline <= project.deadline, "Milestone deadline cannot exceed project deadline");

        uint256 totalMilestoneAmount = 0;
        for (uint256 i = 0; i < project.milestoneIds.length; i++) {
            totalMilestoneAmount += _milestones[project.milestoneIds[i]].amount;
        }
        
        require(totalMilestoneAmount + amount <= project.totalBudget, "Total milestone amounts exceed project budget");

        _increment(_milestoneIds);
        uint256 milestoneId = _current(_milestoneIds);

        Milestone storage milestone = _milestones[milestoneId];
        milestone.id = milestoneId;
        milestone.projectId = projectId;
        milestone.description = description;
        milestone.amount = amount;
        milestone.deadline = deadline;
        milestone.status = MilestoneStatus.Pending;

        project.milestoneIds.push(milestoneId);

        emit MilestoneCreated(projectId, milestoneId, amount);

        return milestoneId;
    }

    /**
     * @dev Submits a proposal for a project
     * @param projectId The ID of the project
     * @param description The description of the proposal
     * @param estimatedCompletionTime The estimated completion time in seconds
     * @param proposedBudget The proposed budget for the project
     * @return The ID of the newly created proposal
     */
    function submitProposal(
        uint256 projectId,
        string calldata description,
        uint256 estimatedCompletionTime,
        uint256 proposedBudget
    ) external override nonReentrant returns (uint256) {
        Project storage project = _projects[projectId];
        require(project.id == projectId, "Project does not exist");
        require(project.status == ProjectStatus.Open, "Project must be open for proposals");
        require(msg.sender != project.client, "Client cannot submit proposals");
        require(bytes(description).length > 0, "Description cannot be empty");
        require(estimatedCompletionTime > 0, "Estimated completion time must be greater than 0");
        require(proposedBudget > 0, "Proposed budget must be greater than 0");

        for (uint256 i = 0; i < _projectProposals[projectId].length; i++) {
            Proposal storage existingProposal = _proposals[_projectProposals[projectId][i]];
            require(existingProposal.freelancer != msg.sender, "Freelancer already submitted a proposal");
        }

        _increment(_proposalIds);
        uint256 proposalId = _current(_proposalIds);

        Proposal storage proposal = _proposals[proposalId];
        proposal.id = proposalId;
        proposal.projectId = projectId;
        proposal.freelancer = msg.sender;
        proposal.description = description;
        proposal.estimatedCompletionTime = estimatedCompletionTime;
        proposal.proposedBudget = proposedBudget;
        proposal.accepted = false;

        _projectProposals[projectId].push(proposalId);

        emit ProposalSubmitted(projectId, proposalId, msg.sender);

        return proposalId;
    }

    /**
     * @dev Accepts a proposal for a project
     * @param projectId The ID of the project
     * @param proposalId The ID of the proposal
     */
    function acceptProposal(uint256 projectId, uint256 proposalId) external override nonReentrant {
        Project storage project = _projects[projectId];
        require(project.id == projectId, "Project does not exist");
        require(msg.sender == project.client, "Only client can accept proposals");
        require(project.status == ProjectStatus.Open, "Project must be open for proposals");

        Proposal storage proposal = _proposals[proposalId];
        require(proposal.id == proposalId, "Proposal does not exist");
        require(proposal.projectId == projectId, "Proposal is not for this project");
        require(!proposal.accepted, "Proposal already accepted");

        project.freelancer = proposal.freelancer;
        project.status = ProjectStatus.InProgress;
        
        proposal.accepted = true;

        _freelancerProjects[proposal.freelancer].push(projectId);

        emit ProposalAccepted(projectId, proposalId, proposal.freelancer);
        emit ProjectStatusUpdated(projectId, ProjectStatus.InProgress);
    }

    /**
     * @dev Starts a milestone
     * @param projectId The ID of the project
     * @param milestoneId The ID of the milestone
     */
    function startMilestone(uint256 projectId, uint256 milestoneId) external override nonReentrant {
        Project storage project = _projects[projectId];
        require(project.id == projectId, "Project does not exist");
        require(msg.sender == project.freelancer, "Only freelancer can start milestones");
        require(project.status == ProjectStatus.InProgress, "Project must be in progress");

        Milestone storage milestone = _milestones[milestoneId];
        require(milestone.id == milestoneId, "Milestone does not exist");
        require(milestone.projectId == projectId, "Milestone is not for this project");
        require(milestone.status == MilestoneStatus.Pending, "Milestone must be pending");

        milestone.status = MilestoneStatus.InProgress;

        // Create escrow for this milestone
        _escrowContract.createEscrow{value: milestone.amount}(
            projectId,
            milestoneId,
            project.client,
            project.freelancer
        );

        emit MilestoneStatusUpdated(milestoneId, MilestoneStatus.InProgress);
    }

    /**
     * @dev Completes a milestone
     * @param projectId The ID of the project
     * @param milestoneId The ID of the milestone
     */
    function completeMilestone(uint256 projectId, uint256 milestoneId) external override nonReentrant {
        Project storage project = _projects[projectId];
        require(project.id == projectId, "Project does not exist");
        require(msg.sender == project.freelancer, "Only freelancer can complete milestones");
        require(project.status == ProjectStatus.InProgress, "Project must be in progress");

        Milestone storage milestone = _milestones[milestoneId];
        require(milestone.id == milestoneId, "Milestone does not exist");
        require(milestone.projectId == projectId, "Milestone is not for this project");
        require(milestone.status == MilestoneStatus.InProgress, "Milestone must be in progress");

        milestone.status = MilestoneStatus.Completed;

        emit MilestoneStatusUpdated(milestoneId, MilestoneStatus.Completed);
    }

    /**
     * @dev Approves a completed milestone and releases funds
     * @param projectId The ID of the project
     * @param milestoneId The ID of the milestone
     */
    function approveMilestone(uint256 projectId, uint256 milestoneId) external override nonReentrant {
        Project storage project = _projects[projectId];
        require(project.id == projectId, "Project does not exist");
        require(msg.sender == project.client, "Only client can approve milestones");
        require(project.status == ProjectStatus.InProgress, "Project must be in progress");

        Milestone storage milestone = _milestones[milestoneId];
        require(milestone.id == milestoneId, "Milestone does not exist");
        require(milestone.projectId == projectId, "Milestone is not for this project");
        require(milestone.status == MilestoneStatus.Completed, "Milestone must be completed");

        // Get the escrow ID for this milestone
        uint256 escrowId = _escrowContract.getMilestoneEscrow(projectId, milestoneId);
        
        // Release the escrow funds
        _escrowContract.releaseEscrow(escrowId);

        // Check if all milestones are completed
        bool allCompleted = true;
        for (uint256 i = 0; i < project.milestoneIds.length; i++) {
            if (_milestones[project.milestoneIds[i]].status != MilestoneStatus.Completed) {
                allCompleted = false;
                break;
            }
        }

        // If all milestones are completed, mark the project as completed
        if (allCompleted) {
            project.status = ProjectStatus.Completed;
            emit ProjectStatusUpdated(projectId, ProjectStatus.Completed);
        }

        emit MilestoneFundsReleased(projectId, milestoneId, project.freelancer, milestone.amount);
    }

    /**
     * @dev Gets a project by ID
     * @param projectId The ID of the project
     * @return The project details
     */
    function getProject(uint256 projectId) external view override returns (Project memory) {
        require(_projects[projectId].id == projectId, "Project does not exist");
        return _projects[projectId];
    }

    /**
     * @dev Gets a milestone by ID
     * @param milestoneId The ID of the milestone
     * @return The milestone details
     */
    function getMilestone(uint256 milestoneId) external view override returns (Milestone memory) {
        require(_milestones[milestoneId].id == milestoneId, "Milestone does not exist");
        return _milestones[milestoneId];
    }

    /**
     * @dev Gets a proposal by ID
     * @param proposalId The ID of the proposal
     * @return The proposal details
     */
    function getProposal(uint256 proposalId) external view override returns (Proposal memory) {
        require(_proposals[proposalId].id == proposalId, "Proposal does not exist");
        return _proposals[proposalId];
    }

    /**
     * @dev Gets all projects created by a client
     * @param client The address of the client
     * @return An array of project IDs
     */
    function getClientProjects(address client) external view override returns (uint256[] memory) {
        return _clientProjects[client];
    }

    /**
     * @dev Gets all projects assigned to a freelancer
     * @param freelancer The address of the freelancer
     * @return An array of project IDs
     */
    function getFreelancerProjects(address freelancer) external view override returns (uint256[] memory) {
        return _freelancerProjects[freelancer];
    }

    /**
     * @dev Gets all proposals for a project
     * @param projectId The ID of the project
     * @return An array of proposal IDs
     */
    function getProjectProposals(uint256 projectId) external view override returns (uint256[] memory) {
        require(_projects[projectId].id == projectId, "Project does not exist");
        return _projectProposals[projectId];
    }

    /**
     * @dev Gets the protocol fee rate
     * @return The protocol fee rate in basis points
     */
    function getProtocolFeeRate() external view returns (uint256) {
        return _protocolFeeRate;
    }

    /**
     * @dev Gets the escrow contract address
     * @return The address of the escrow contract
     */
    function getEscrowContract() external view returns (address) {
        return address(_escrowContract);
    }

    /**
     * @dev Gets the reputation system contract address
     * @return The address of the reputation system contract
     */
    function getReputationSystem() external view returns (address) {
        return address(_reputationSystem);
    }
} 