import React, { memo } from "react";
import { Clock } from "lucide-react";
import SectionHeader from "../../../components/Layout/SectionHeader";
import JobsList from "../../../components/Job/JobsList";
import Breadcrumbs from "@/components/Layout/Breadcrumbs";
import { NAV_LINKS } from "@/constants";

interface FreelancerMyJobsProps {
 onJobDetails: (jobId: string) => void;
}

// Sample job data
const ACTIVE_JOBS = [
 {
  id: "job1",
  title: "DeFi Dashboard UI Design",
  client: {
   id: "client1",
   name: "FinDEX",
  },
  freelancer: {
   id: "freelancer1",
   name: "Alex Johnson",
  },
  status: "In Progress",
  cost: "1.5-2.0 ETH",
  dueDate: "Due in 10 days",
  progress: 60,
 },
 {
  id: "job2",
  title: "Smart Contract Development for NFT Platform",
  client: {
   id: "client2",
   name: "ArtChain",
  },
  freelancer: {
   id: "freelancer1",
   name: "Alex Johnson",
  },
  status: "Just Started",
  cost: "3.0-4.0 ETH",
  dueDate: "Due in 30 days",
  progress: 15,
 },
];

const COMPLETED_JOBS = [
 {
  id: "job3",
  title: "Wallet Integration for Web App",
  client: {
   id: "client3",
   name: "CryptoTrade",
  },
  freelancer: {
   id: "freelancer1",
   name: "Alex Johnson",
  },
  status: "Completed",
  cost: "2.5 ETH",
  dueDate: "Completed June 2023",
  progress: 100,
 },
];

const FreelancerMyJobs = memo(({ onJobDetails }: FreelancerMyJobsProps) => {
 return (
  <>
   <Breadcrumbs
    items={[
     { label: "Home", path: NAV_LINKS.HOME },
     { label: "Dashboard", path: NAV_LINKS.DASHBOARD },
     { label: "My Jobs", path: "/dashboard/jobs" },
    ]}
   />

   <SectionHeader
    title="My Jobs"
    description="Manage all your current and past jobs."
   />

   {ACTIVE_JOBS.length > 0 && (
    <div className="mb-8">
     <div className="flex items-center gap-2 mb-4">
      <Clock className="h-5 w-5 text-primary" />
      <h2 className="text-xl font-bold">Active Jobs</h2>
     </div>
     <JobsList jobs={ACTIVE_JOBS} onDetails={onJobDetails} showCreationDate />
    </div>
   )}

   {COMPLETED_JOBS.length > 0 && (
    <div>
     <div className="flex items-center gap-2 mb-4">
      <Clock className="h-5 w-5 text-primary" />
      <h2 className="text-xl font-bold">Completed Jobs</h2>
     </div>
     <JobsList
      jobs={COMPLETED_JOBS}
      onDetails={onJobDetails}
      showCreationDate
     />
    </div>
   )}

   {ACTIVE_JOBS.length === 0 && COMPLETED_JOBS.length === 0 && (
    <div className="text-center py-16">
     <h3 className="text-lg font-semibold mb-2">No Jobs Yet</h3>
     <p className="text-muted-foreground mb-6">
      You haven't started any jobs yet.
     </p>
     <button
      onClick={() => (window.location.href = "/dashboard/find-jobs")}
      className="px-4 py-2 rounded-md bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
     >
      Find Jobs
     </button>
    </div>
   )}
  </>
 );
});

FreelancerMyJobs.displayName = "FreelancerMyJobs";

export default FreelancerMyJobs;
