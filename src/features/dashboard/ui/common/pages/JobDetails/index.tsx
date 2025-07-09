import React from "react";
import { Breadcrumbs } from "@/shared/ui";
import { JobDetails as JobDetailsComponent } from "@/features/jobs";

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
