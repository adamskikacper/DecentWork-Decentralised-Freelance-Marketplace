import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/UI";
import { DashboardSection } from "@/features/dashboard";
import { JobsList } from "@/components/Job";
import { Breadcrumbs } from "@/components/Layout";
export interface JobsProps {
 isLoading?: boolean;
 onMessage?: (userId: string) => void;
 onJobDetails?: (jobId: string) => void;
}
export const Jobs: React.FC<JobsProps> = ({
 isLoading = false,
 onMessage,
 onJobDetails,
}) => {
 const clientJobs = [
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
   dueDate: "Due in 20 days",
   status: "In Progress",
   cost: "6.0 ETH",
   progress: 35,
  },
  {
   id: "job5",
   title: "Smart Contract Audit",
   freelancer: {
    id: "james123",
    name: "James W.",
   },
   dueDate: "Completed on March 15, 2023",
   status: "Completed",
   cost: "3.0 ETH",
   progress: 100,
  },
 ];
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
    <JobsList
     jobs={clientJobs.filter((job) => job.status !== "Completed")}
     showCreationDate={true}
     onMessage={onMessage}
     onDetails={onJobDetails}
    />
   </DashboardSection>
   {/* Completed Jobs Section */}
   <DashboardSection
    title="Completed Jobs"
    description="Your past completed jobs"
    isLoading={isLoading}
   >
    <JobsList
     jobs={clientJobs.filter((job) => job.status === "Completed")}
     showCreationDate={true}
     onMessage={onMessage}
     onDetails={onJobDetails}
    />
   </DashboardSection>
  </div>
 );
};
