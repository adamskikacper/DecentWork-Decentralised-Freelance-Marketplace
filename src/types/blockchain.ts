export enum ProjectStatus {
 Open = 0,
 InProgress = 1,
 Completed = 2,
 Cancelled = 3,
}

export enum MilestoneStatus {
 Pending = 0,
 Funded = 1,
 Completed = 2,
 Cancelled = 3,
}

export enum ProposalStatus {
 Pending = 0,
 Accepted = 1,
 Rejected = 2,
}

export enum ExperienceLevel {
 Beginner = 0,
 Intermediate = 1,
 Expert = 2,
}

export enum ProjectDuration {
 LessThanOneWeek = 0,
 OneToTwoWeeks = 1,
 TwoToFourWeeks = 2,
 OneToThreeMonths = 3,
 ThreeToSixMonths = 4,
 MoreThanSixMonths = 5,
}

export enum ProjectType {
 OneTime = 0,
 Ongoing = 1,
}

export interface Project {
 id: string;
 title: string;
 description: string;
 client: string;
 freelancer: string;
 budget: string;
 deadline: Date;
 createdAt: Date;
 status: string;
 requiredSkills: string[];
 experienceLevel: number;
 projectDuration: number;
 projectType: number;
 attachmentHashes: string[];
}

export interface Proposal {
 id: string;
 projectId: string;
 freelancer: string;
 description: string;
 price: string;
 estimatedTime: number;
 status: string;
 timestamp: Date;
}

export interface Milestone {
 id: string;
 projectId: string;
 description: string;
 amount: string;
 deadline: Date;
 status: string;
}

export interface EscrowPayment {
 id: string;
 projectId: string;
 milestoneId: string;
 client: string;
 freelancer: string;
 amount: string;
 createdAt: Date;
 status: string;
}

export interface Review {
 id: string;
 projectId: string;
 reviewer: string;
 reviewee: string;
 rating: number;
 comment: string;
 timestamp: Date;
}

export interface Reputation {
 totalRating: number;
 reviewCount: number;
}

// Form data interfaces
export interface CreateProjectFormData {
 title: string;
 description: string;
 budget: string;
 deadline: string;
 requiredSkills: string[];
 skillInput?: string;
 experienceLevel: ExperienceLevel;
 projectDuration: ProjectDuration;
 projectType: ProjectType;
 files: File[];
}

export interface SubmitProposalFormData {
 description: string;
 price: string;
 estimatedTime: number;
}

export interface CreateMilestoneFormData {
 description: string;
 amount: string;
 deadline: string;
}

export interface SubmitReviewFormData {
 rating: number;
 comment: string;
}
