import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/UI";
import { DashboardSection, JobsList } from "@/features/dashboard";
import { Breadcrumbs } from "@/components/Layout";
import { LoadingScreen } from "@/components/Common/LoadingScreen";
import { useFetchMyJobs } from "@/features/dashboard/hooks";

export interface MyJobsProps {
 isLoading?: boolean;
 onMessage?: (userId: string) => void;
 onJobDetails?: (jobId: string) => void;
 onClientDetails?: (clientId: string) => void;
}

export const MyJobs: React.FC<MyJobsProps> = ({
 isLoading = false,
 onMessage,
 onJobDetails,
}) => {
 const {
  activeJobs,
  completedJobs,
  isLoading: dataLoading,
  error,
 } = useFetchMyJobs();

 if (dataLoading) {
  return <LoadingScreen />;
 }

 if (error) {
  return (
   <div className="space-y-8">
    <Breadcrumbs
     items={[{ label: "Dashboard", path: "/dashboard" }, { label: "My Jobs" }]}
    />
    <div className="flex items-center justify-center min-h-[400px]">
     <div className="text-center">
      <h2 className="text-xl font-semibold text-destructive mb-2">
       Error Loading My Jobs
      </h2>
      <p className="text-muted-foreground">{error}</p>
     </div>
    </div>
   </div>
  );
 }

 return (
  <div className="space-y-8">
   <Breadcrumbs
    items={[{ label: "Dashboard", path: "/dashboard" }, { label: "My Jobs" }]}
   />

   <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
    <div>
     <h1 className="text-2xl font-bold tracking-tight">My Jobs</h1>
     <p className="text-muted-foreground mt-1">
      Manage your jobs and track their progress
     </p>
    </div>
    <Button asChild>
     <Link to="/dashboard/find-jobs">Find More Work</Link>
    </Button>
   </div>

   <DashboardSection
    title="Active Jobs"
    description="Your ongoing projects and contracts"
    isLoading={isLoading}
   >
    {activeJobs.length > 0 ? (
     <JobsList
      jobs={activeJobs}
      showCreationDate={true}
      onMessage={onMessage}
      onDetails={onJobDetails}
     />
    ) : (
     <div className="p-6 text-center text-muted-foreground">
      <p>No active jobs at the moment. Start by exploring new opportunities!</p>
      <Button variant="outline" className="mt-4" asChild>
       <Link to="/dashboard/find-jobs">Find Jobs</Link>
      </Button>
     </div>
    )}
   </DashboardSection>

   <DashboardSection
    title="Completed Jobs"
    description="Your completed work and past contracts"
    isLoading={isLoading}
   >
    {completedJobs.length > 0 ? (
     <JobsList
      jobs={completedJobs}
      showCreationDate={true}
      onMessage={onMessage}
      onDetails={onJobDetails}
     />
    ) : (
     <div className="p-6 text-center text-muted-foreground">
      <p>No completed jobs yet. Finished projects will be shown here.</p>
     </div>
    )}
   </DashboardSection>
  </div>
 );
};
