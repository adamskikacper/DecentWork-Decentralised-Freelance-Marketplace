// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

/**
 * @title IEscrow
 * @dev Interface for the Escrow contract that handles secure payments
 */
interface IEscrow {
    /**
     * @dev Enum representing the status of an escrow payment
     */
    enum EscrowStatus {
        Funded,
        Released,
        Refunded,
        Disputed
    }

    /**
     * @dev Struct representing an escrow payment
     */
    struct EscrowPayment {
        uint256 id;
        uint256 projectId;
        uint256 milestoneId;
        address client;
        address freelancer;
        uint256 amount;
        EscrowStatus status;
        uint256 createdAt;
    }

    /**
     * @dev Emitted when a new escrow payment is created
     */
    event EscrowCreated(
        uint256 indexed escrowId,
        uint256 indexed projectId,
        uint256 indexed milestoneId,
        address client,
        address freelancer,
        uint256 amount
    );

    /**
     * @dev Emitted when an escrow payment is released to the freelancer
     */
    event EscrowReleased(
        uint256 indexed escrowId,
        uint256 indexed projectId,
        uint256 indexed milestoneId,
        address freelancer,
        uint256 amount
    );

    /**
     * @dev Emitted when an escrow payment is refunded to the client
     */
    event EscrowRefunded(
        uint256 indexed escrowId,
        uint256 indexed projectId,
        uint256 indexed milestoneId,
        address client,
        uint256 amount
    );

    /**
     * @dev Emitted when an escrow payment is disputed
     */
    event EscrowDisputed(
        uint256 indexed escrowId,
        uint256 indexed projectId,
        uint256 indexed milestoneId,
        address initiator
    );

    /**
     * @dev Creates a new escrow payment
     */
    function createEscrow(
        uint256 projectId,
        uint256 milestoneId,
        address client,
        address freelancer
    ) external payable returns (uint256);

    /**
     * @dev Releases the escrow payment to the freelancer
     */
    function releaseEscrow(uint256 escrowId) external;

    /**
     * @dev Refunds the escrow payment to the client
     */
    function refundEscrow(uint256 escrowId) external;

    /**
     * @dev Disputes an escrow payment
     */
    function disputeEscrow(uint256 escrowId) external;

    /**
     * @dev Resolves a disputed escrow payment
     */
    function resolveDispute(uint256 escrowId, address payable recipient, uint256 amount) external;

    /**
     * @dev Gets an escrow payment by ID
     */
    function getEscrow(uint256 escrowId) external view returns (EscrowPayment memory);

    /**
     * @dev Gets all escrow payments for a project
     */
    function getProjectEscrows(uint256 projectId) external view returns (uint256[] memory);

    /**
     * @dev Gets all escrow payments for a milestone
     */
    function getMilestoneEscrow(uint256 projectId, uint256 milestoneId) external view returns (uint256);

    /**
     * @dev Gets the total amount held in escrow for a project
     */
    function getProjectEscrowBalance(uint256 projectId) external view returns (uint256);
} 