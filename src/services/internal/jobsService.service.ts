import type { JobsData, JobsPageConfig } from "@/types/dashboard";
import * as externalJobsService from "../external/jobsService.service";

export const getClientJobsInternal = async (): Promise<JobsData> => {
 return await externalJobsService.getClientJobsExternal();
};

export const getFreelancerJobsInternal = async (): Promise<JobsData> => {
 return await externalJobsService.getFreelancerJobsExternal();
};

export const getJobsDataInternal = async (
 userType: "client" | "freelancer"
): Promise<JobsData> => {
 return await externalJobsService.getJobsDataExternal(userType);
};

export const getJobsPageConfigInternal = (
 userType: "client" | "freelancer"
): JobsPageConfig => {
 return externalJobsService.getJobsPageConfigExternal(userType);
};
