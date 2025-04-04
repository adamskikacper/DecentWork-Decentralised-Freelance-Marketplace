// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

/**
 * @title IFreelanceMarketplace
 * @dev Interface for the Freelance Marketplace contract
 */
interface IFreelanceMarketplace {
    /**
     * @dev Enum representing the status of a project
     */
    enum ProjectStatus {
        Open,
        InProgress,
        Completed,
        Cancelled
    }

    /**
     * @dev Enum representing the status of a milestone
     */
    enum MilestoneStatus {
        Pending,
        InProgress,
        Completed
    }

    /**
     * @dev Struct representing a project
     */
    struct Project {
        uint256 id;
        address client;
        address freelancer;
        string title;
        string description;
        uint256 totalBudget;
        uint256 createdAt;
        uint256 deadline;
        ProjectStatus status;
        uint256[] milestoneIds;
        string[] requiredSkills;
        string experienceLevel;
        string projectDuration;
        string projectType;
        string[] attachmentHashes;
    }

    /**
     * @dev Struct representing a milestone in a project
     */
    struct Milestone {
        uint256 id;
        uint256 projectId;
        string description;
        uint256 amount;
        uint256 deadline;
        MilestoneStatus status;
    }

    /**
     * @dev Struct representing a proposal for a project
     */
    struct Proposal {
        uint256 id;
        uint256 projectId;
        address freelancer;
        string description;
        uint256 estimatedCompletionTime;
        uint256 proposedBudget;
        bool accepted;
    }

    /**
     * @dev Emitted when a new project is created
     */
    event ProjectCreated(uint256 indexed projectId, address indexed client, string title, uint256 totalBudget);

    /**
     * @dev Emitted when a project's status is updated
     */
    event ProjectStatusUpdated(uint256 indexed projectId, ProjectStatus status);

    /**
     * @dev Emitted when a new milestone is added to a project
     */
    event MilestoneCreated(uint256 indexed projectId, uint256 indexed milestoneId, uint256 amount);

    /**
     * @dev Emitted when a milestone's status is updated
     */
    event MilestoneStatusUpdated(uint256 indexed milestoneId, MilestoneStatus status);

    /**
     * @dev Emitted when a new proposal is submitted
     */
    event ProposalSubmitted(uint256 indexed projectId, uint256 indexed proposalId, address indexed freelancer);

    /**
     * @dev Emitted when a proposal is accepted
     */
    event ProposalAccepted(uint256 indexed projectId, uint256 indexed proposalId, address indexed freelancer);

    /**
     * @dev Emitted when funds are released for a milestone
     */
    event MilestoneFundsReleased(uint256 indexed projectId, uint256 indexed milestoneId, address freelancer, uint256 amount);

    /**
     * @dev Creates a new project
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
    ) external payable returns (uint256);

    /**
     * @dev Adds a milestone to a project
     */
    function addMilestone(
        uint256 projectId,
        string calldata description,
        uint256 amount,
        uint256 deadline
    ) external returns (uint256);

    /**
     * @dev Submits a proposal for a project
     */
    function submitProposal(
        uint256 projectId,
        string calldata description,
        uint256 estimatedCompletionTime,
        uint256 proposedBudget
    ) external returns (uint256);

    /**
     * @dev Accepts a proposal for a project
     */
    function acceptProposal(uint256 projectId, uint256 proposalId) external;

    /**
     * @dev Starts a milestone
     */
    function startMilestone(uint256 projectId, uint256 milestoneId) external;

    /**
     * @dev Completes a milestone
     */
    function completeMilestone(uint256 projectId, uint256 milestoneId) external;

    /**
     * @dev Approves a completed milestone and releases funds
     */
    function approveMilestone(uint256 projectId, uint256 milestoneId) external;

    /**
     * @dev Gets a project by ID
     */
    function getProject(uint256 projectId) external view returns (Project memory);

    /**
     * @dev Gets a milestone by ID
     */
    function getMilestone(uint256 milestoneId) external view returns (Milestone memory);

    /**
     * @dev Gets a proposal by ID
     */
    function getProposal(uint256 proposalId) external view returns (Proposal memory);

    /**
     * @dev Gets all projects created by a client
     */
    function getClientProjects(address client) external view returns (uint256[] memory);

    /**
     * @dev Gets all projects assigned to a freelancer
     */
    function getFreelancerProjects(address freelancer) external view returns (uint256[] memory);

    /**
     * @dev Gets all proposals for a project
     */
    function getProjectProposals(uint256 projectId) external view returns (uint256[] memory);
} 