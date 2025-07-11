import React from "react";
import { PageLayout } from "@/components/templates";
import { JobDetails as JobDetailsComponent } from "@/components";

export const DashboardJobDetailsPage = () => {
 return (
  <PageLayout
   title="Job Details"
   description="View the details of the job posting."
   breadcrumbs={[
    { label: "Dashboard", href: "/dashboard" },
    { label: "Jobs", href: "/dashboard/jobs" },
    { label: "Job Details" },
   ]}
  >
   <JobDetailsComponent />
  </PageLayout>
 );
};
