import React from "react";
import { Breadcrumbs } from "@/components/Layout";
import { JobDetails as JobDetailsComponent } from "@/components/Job";

export const JobDetails: React.FC = () => {
 return (
  <div className="space-y-8">
   <Breadcrumbs
    items={[
     { label: "Dashboard", path: "/dashboard" },
     { label: "Jobs", path: "/dashboard/jobs" },
     { label: "Job Details" },
    ]}
   />
   <JobDetailsComponent />
  </div>
 );
};
