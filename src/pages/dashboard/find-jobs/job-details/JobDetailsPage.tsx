import React from "react";
import { PageLayout } from "@/components/templates";
import { JobDetails } from "@/components/organisms/JobDetails";

export const FindJobsJobDetailsPage = () => {
 return (
  <PageLayout
   breadcrumbs={[
    { label: "Dashboard", href: "/dashboard" },
    { label: "Find Jobs", href: "/dashboard/find-jobs" },
    { label: "Job Details" },
   ]}
  >
   <JobDetails />
  </PageLayout>
 );
};
