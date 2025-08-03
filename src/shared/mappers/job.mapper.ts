import type {
 JobSummary,
 JobOpportunity,
 JobOpportunityWithCategory,
} from "@/shared/models/dashboard";

export type JobDatabaseItem = {
 id: string;
 title: string;
 description: string;
 category: string;
 budget: string;
 postedDate: string;
 dueDate: string;
 status: string;
 proposals: number;
 tags: string[];
 freelancer: {
  id: string;
  name: string;
 };
 clientId: string;
 daysLeft: number;
};

export const transformToJobSummary = (job: JobDatabaseItem): JobSummary => ({
 id: job.id,
 title: job.title,
 freelancer: job.freelancer,
 dueDate: job.dueDate,
 status: job.status,
 cost: job.budget,
 daysLeft: job.daysLeft,
});

export const transformToJobOpportunity = (
 job: JobDatabaseItem
): JobOpportunityWithCategory => ({
 id: job.id,
 title: job.title,
 description: job.description,
 category: job.category,
 budget: job.budget,
 postedDate: job.postedDate,
 proposals: job.proposals,
 tags: job.tags,
});

export const transformToJobOpportunityBasic = (
 job: JobDatabaseItem
): JobOpportunity => ({
 id: job.id,
 title: job.title,
 description: job.description,
 budget: job.budget,
 postedDate: job.postedDate,
 proposals: job.proposals,
 tags: job.tags,
});
