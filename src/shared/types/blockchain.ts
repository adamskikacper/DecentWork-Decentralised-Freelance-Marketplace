export enum JobStatus {
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

export enum JobDuration {
 LessThanOneWeek = 0,
 OneToTwoWeeks = 1,
 TwoToFourWeeks = 2,
 OneToThreeMonths = 3,
 ThreeToSixMonths = 4,
 MoreThanSixMonths = 5,
}

export enum JobType {
 OneTime = 0,
 Ongoing = 1,
}

export interface Job {
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
 jobDuration: number;
 jobType: number;
 attachmentHashes: string[];
}

export interface Proposal {
 id: string;
 jobId: string;
 freelancer: string;
 description: string;
 price: string;
 estimatedTime: number;
 status: string;
 timestamp: Date;
}

export interface EscrowPayment {
 id: string;
 jobId: string;
 milestoneId: string;
 client: string;
 freelancer: string;
 amount: string;
 createdAt: Date;
 status: string;
}

export interface Review {
 id: string;
 jobId: string;
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
export interface CreateJobFormData {
 title: string;
 description: string;
 budget: string;
 deadline: string;
 requiredSkills: string[];
 skillInput?: string;
 experienceLevel: ExperienceLevel;
 jobDuration: JobDuration;
 jobType: JobType;
 files: File[];
}

export interface SubmitProposalFormData {
 description: string;
 price: string;
 estimatedTime: number;
}
export interface SubmitReviewFormData {
 rating: number;
 comment: string;
}
