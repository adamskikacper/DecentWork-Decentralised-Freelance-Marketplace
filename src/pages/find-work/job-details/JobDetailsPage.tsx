import React from "react";
import { PublicPageLayout } from "@/components/templates";
import { JobDetails } from "@/components/organisms/JobDetails";

export const JobDetailsPage = () => {
 return (
  <PublicPageLayout
   title="Job Details"
   description="View details and apply for this job."
   breadcrumbs={[
    { label: "Find Work", href: "/find-work" },
    { label: "Job Details" },
   ]}
  >
   <JobDetails />
  </PublicPageLayout>
 );
};
