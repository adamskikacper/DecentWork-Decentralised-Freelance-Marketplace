import React from "react";
import { useParams } from "react-router-dom";
import { DashboardSection } from "../../Common";
import Breadcrumbs from "@/components/Layout/Breadcrumbs";
const JobDetails: React.FC = () => {
  const { jobId } = useParams<{ jobId: string }>();
  return (
    <div className="space-y-8">
      <Breadcrumbs
        items={[
          { label: "Dashboard", path: "/dashboard" },
          { label: "Jobs", path: "/dashboard/jobs" },
          { label: `Job ${jobId}` },
        ]}
      />
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Job Details</h1>
          <p className="text-muted-foreground mt-1">
            Job ID: {jobId}
          </p>
        </div>
      </div>
      <DashboardSection
        title="Job Information"
        description="Details about this job"
      >
        <div className="p-6 text-center text-muted-foreground">
          <p>Job details functionality will be implemented in a future update.</p>
        </div>
      </DashboardSection>
    </div>
  );
};
export default JobDetails;
