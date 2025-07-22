import React from "react";
import { PageLayout } from "@/components/templates";
import { JobDetails as JobDetailsComponent } from "@/components";

export const JobDetailsPage = () => {
 return (
  <PageLayout
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
