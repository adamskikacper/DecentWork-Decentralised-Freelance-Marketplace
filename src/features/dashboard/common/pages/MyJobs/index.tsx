import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/UI";
import { DashboardSection, JobsList } from "@/features/dashboard";
import { Breadcrumbs } from "@/components/Layout";
import { LoadingScreen } from "@/components/Common/LoadingScreen";
import { useAuth } from "@/hooks/useAuth";
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
 const { userType } = useAuth();
 const isClient = userType === "client";
 const {
  activeJobs,
  completedJobs,
  pageTitle,
  pageDescription,
  breadcrumbLabel,
  actionButtonText,
  actionButtonLink,
  activeSectionTitle,
  activeSectionDescription,
  completedSectionTitle,
  completedSectionDescription,
  emptyActiveMessage,
  emptyCompletedMessage,
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
     items={[
      { label: "Dashboard", path: "/dashboard" },
      { label: breadcrumbLabel },
     ]}
    />
    <div className="flex items-center justify-center min-h-[400px]">
     <div className="text-center">
      <h2 className="text-xl font-semibold text-destructive mb-2">
       Error Loading {pageTitle}
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
    items={[
     { label: "Dashboard", path: "/dashboard" },
     { label: breadcrumbLabel },
    ]}
   />

   {!isClient && (
    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
     <div>
      <h1 className="text-2xl font-bold tracking-tight">{pageTitle}</h1>
      <p className="text-muted-foreground mt-1">{pageDescription}</p>
     </div>
     <Button asChild>
      <Link to={actionButtonLink}>{actionButtonText}</Link>
     </Button>
    </div>
   )}

   <DashboardSection
    title={activeSectionTitle}
    description={activeSectionDescription}
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
      <p>{emptyActiveMessage}</p>
      <Button variant="outline" className="mt-4" asChild>
       <Link to={actionButtonLink}>
        {isClient ? "Post a Job" : "Find Jobs"}
       </Link>
      </Button>
     </div>
    )}
   </DashboardSection>

   <DashboardSection
    title={completedSectionTitle}
    description={completedSectionDescription}
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
      <p>{emptyCompletedMessage}</p>
     </div>
    )}
   </DashboardSection>
  </div>
 );
};
