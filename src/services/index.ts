import * as internalServices from "./internal";

export const dashboardService = {
 getDashboardStats: internalServices.getDashboardStatsInternal,
 getActiveJobs: internalServices.getActiveJobsInternal,
 getTopFreelancers: internalServices.getTopFreelancersInternal,
 getJobOpportunities: internalServices.getJobOpportunitiesInternal,
 getDashboardData: internalServices.getDashboardDataInternal,
 getAllFreelancers: internalServices.getAllFreelancersInternal,
 getAllJobOpportunities: internalServices.getAllJobOpportunitiesInternal,
};

export const jobsService = {
 getClientJobs: internalServices.getClientJobsInternal,
 getFreelancerJobs: internalServices.getFreelancerJobsInternal,
 getJobsData: internalServices.getJobsDataInternal,
};
