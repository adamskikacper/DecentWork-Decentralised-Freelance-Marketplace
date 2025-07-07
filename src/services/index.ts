import * as internalDashboard from "./internal/dashboardService";
import * as internalJobs from "./internal/jobsService";

export const dashboardService = {
 getDashboardStats: internalDashboard.getDashboardStatsInternal,
 getActiveJobs: internalDashboard.getActiveJobsInternal,
 getTopFreelancers: internalDashboard.getTopFreelancersInternal,
 getJobOpportunities: internalDashboard.getJobOpportunitiesInternal,
 getDashboardData: internalDashboard.getDashboardDataInternal,
 getAllFreelancers: internalDashboard.getAllFreelancersInternal,
 getAllJobOpportunities: internalDashboard.getAllJobOpportunitiesInternal,
};

export const jobsService = {
 getClientJobs: internalJobs.getClientJobsInternal,
 getFreelancerJobs: internalJobs.getFreelancerJobsInternal,
 getJobsData: internalJobs.getJobsDataInternal,
 getJobsPageConfig: internalJobs.getJobsPageConfigInternal,
};
