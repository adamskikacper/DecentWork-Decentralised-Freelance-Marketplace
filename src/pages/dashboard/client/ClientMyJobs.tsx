import React, { memo } from "react";
import { JobSummary } from "../../../types";
import SectionHeader from "../../../components/layout/SectionHeader";
import JobsList from "../../../components/job/JobsList";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import { DASHBOARD_LINKS, NAV_LINKS } from "@/constants";

interface ClientMyJobsProps {
 onMessage: (userId: string) => void;
 onJobDetails: (jobId: string) => void;
}

// Sample job data for client
const CLIENT_JOBS: JobSummary[] = [
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
];

const ClientMyJobs = memo(({ onMessage, onJobDetails }: ClientMyJobsProps) => {
 return (
  <>
   <Breadcrumbs
    items={[
     { label: "Dashboard", path: DASHBOARD_LINKS.HOME },
     { label: "Jobs" },
    ]}
   />
   <SectionHeader
    title="Jobs"
    description="View and manage all your current and past jobs."
   />

   <JobsList
    jobs={CLIENT_JOBS}
    showCreationDate={true}
    onMessage={onMessage}
    onDetails={onJobDetails}
   />
  </>
 );
});

ClientMyJobs.displayName = "ClientMyJobs";

export default ClientMyJobs;
