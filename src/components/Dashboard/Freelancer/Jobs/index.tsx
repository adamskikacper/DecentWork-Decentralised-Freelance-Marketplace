import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/UI";
import { DashboardSection } from "@/components/Dashboard";
import { JobsList } from "@/components/Job";
import { Breadcrumbs } from "@/components/Layout";
import { Clock, CheckCircle } from "lucide-react";
export interface JobsProps {
 isLoading?: boolean;
 onMessage?: (userId: string) => void;
 onJobDetails?: (jobId: string) => void;
 onClientDetails?: (clientId: string) => void;
}
export const Jobs: React.FC<JobsProps> = ({
 isLoading = false,
 onMessage,
 onJobDetails,
}) => {
 const allJobs = [
  {
   id: "job1",
   title: "Wallet Integration for NFT Marketplace",
   freelancer: {
    id: "alex123",
    name: "Alex K.",
   },
   dueDate: "Due in 8 days",
   status: "In Progress",
   cost: "3.5 ETH",
   progress: 60,
  },
  {
   id: "job2",
   title: "Smart Contract for Token Vesting",
   freelancer: {
    id: "maria123",
    name: "Maria S.",
   },
   dueDate: "Due in 15 days",
   status: "Just Started",
   cost: "5.0 ETH",
   progress: 15,
  },
  {
   id: "job3",
   title: "DeFi Interface Redesign",
   freelancer: {
    id: "david123",
    name: "David C.",
   },
   dueDate: "Completed on April 2, 2023",
   status: "Completed",
   cost: "4.0 ETH",
   progress: 100,
  },
  {
   id: "job4",
   title: "Blockchain Analytics Dashboard",
   freelancer: {
    id: "sarah123",
    name: "Sarah L.",
   },
   dueDate: "Completed on March 15, 2023",
   status: "Completed",
   cost: "6.0 ETH",
   progress: 100,
  },
  {
   id: "job5",
   title: "Smart Contract Audit",
   freelancer: {
    id: "james123",
    name: "James W.",
   },
   dueDate: "Completed on February 28, 2023",
   status: "Completed",
   cost: "3.0 ETH",
   progress: 100,
  },
 ];
 const activeJobs = allJobs.filter((job) => job.status !== "Completed");
 const completedJobs = allJobs.filter((job) => job.status === "Completed");
 return (
  <div className="space-y-8">
   <Breadcrumbs
    items={[{ label: "Dashboard", path: "/dashboard" }, { label: "Jobs" }]}
   />
   {/* Active Jobs Section */}
   <DashboardSection
    title="Active Jobs"
    description="Your current jobs in progress"
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
      <p>You don't have any active jobs at the moment.</p>
      <Button variant="outline" className="mt-4" asChild>
       <Link to="/dashboard/freelancer/find-jobs">Find Jobs</Link>
      </Button>
     </div>
    )}
   </DashboardSection>
   {/* Completed Jobs Section */}
   <DashboardSection
    title="Completed Jobs"
    description="Your past completed jobs"
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
      <p>You haven't completed any jobs yet.</p>
     </div>
    )}
   </DashboardSection>
  </div>
 );
};
