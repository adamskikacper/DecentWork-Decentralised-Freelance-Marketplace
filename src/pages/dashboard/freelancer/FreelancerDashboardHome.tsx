import React, { memo } from "react";
import { User as UserType, ProjectSummary } from "../../../types";
import SectionHeader from "../../../components/layout/SectionHeader";
import StatsGrid from "../../../components/common/StatsGrid";
import ProjectsList from "../../../components/project/ProjectList/ProjectsList";

interface FreelancerDashboardHomeProps {
 user: Partial<UserType>;
 onMessage: (userId: string) => void;
 onProjectDetails: (projectId: string) => void;
 onClientDetails?: (clientId: string) => void;
}

// Sample project data
const SAMPLE_PROJECTS: ProjectSummary[] = [
 {
  id: "project1",
  title: "Frontend Development for DEX Platform",
  freelancer: {
   id: "current-user",
   name: "You",
  },
  dueDate: "Due in 5 days",
  status: "In Progress",
  cost: "1.2 ETH",
  progress: 75,
 },
 {
  id: "project2",
  title: "Smart Contract Audit for NFT Marketplace",
  freelancer: {
   id: "current-user",
   name: "You",
  },
  dueDate: "Due in 12 days",
  status: "Just Started",
  cost: "2.5 ETH",
  progress: 25,
 },
];

// Sample available jobs
const AVAILABLE_JOBS = [
 {
  id: "job1",
  title: "DeFi Dashboard UI Design",
  client: {
   id: "client1",
   name: "FinDEX",
  },
  budget: "1.5-2.0 ETH",
  posted: "2 days ago",
  duration: "10-15 day project",
 },
 {
  id: "job2",
  title: "Solidity Smart Contract for Staking",
  client: {
   id: "client2",
   name: "StakeCoin",
  },
  budget: "3.0-4.5 ETH",
  posted: "5 days ago",
  duration: "5-7 day project",
 },
 {
  id: "job3",
  title: "Web3 Integration for E-commerce",
  client: {
   id: "client3",
   name: "CryptoShop",
  },
  budget: "5.0-8.0 ETH",
  posted: "1 week ago",
  duration: "20+ day project",
 },
];

const FreelancerDashboardHome = memo(
 ({ user, onMessage, onProjectDetails }: FreelancerDashboardHomeProps) => {
  // Stats configuration
  const dashboardStats = [
   {
    title: "Current Balance",
    value: "3.2 ETH",
    icon: (
     <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
     >
      <path
       d="M2 17L12 22L22 17"
       stroke="currentColor"
       strokeWidth="2"
       strokeLinecap="round"
       strokeLinejoin="round"
      />
      <path
       d="M2 12L12 17L22 12"
       stroke="currentColor"
       strokeWidth="2"
       strokeLinecap="round"
       strokeLinejoin="round"
      />
      <path
       d="M12 2L2 7L12 12L22 7L12 2Z"
       stroke="currentColor"
       strokeWidth="2"
       strokeLinecap="round"
       strokeLinejoin="round"
      />
     </svg>
    ),
    change: {
     value: "3.2",
     isPositive: false,
     label: "from last month",
    },
   },
   {
    title: "Client Rating",
    value: "4.8/5",
    icon: (
     <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="#FFD700"
      xmlns="http://www.w3.org/2000/svg"
     >
      <path
       d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
       stroke="#FFD700"
       strokeWidth="2"
       strokeLinecap="round"
       strokeLinejoin="round"
      />
     </svg>
    ),
    change: {
     value: "0.3",
     isPositive: true,
     label: "from last month",
    },
   },
  ];

  return (
   <>
    {/* Header */}
    <SectionHeader
     title={`Welcome back, ${user.name || "Freelancer"} 👋`}
     description="Here's an overview of your freelance activity."
    />

    {/* Summary Cards */}
    <StatsGrid stats={dashboardStats} columns={2} className="mb-8" />

    {/* Active Projects */}
    <ProjectsList
     title="Active Projects"
     projects={SAMPLE_PROJECTS}
     onMessage={onMessage}
     onDetails={onProjectDetails}
     showViewAll={true}
     className="mb-10"
    />

    {/* Available Jobs */}
    <div className="mb-8 slide-in" style={{ animationDelay: "0.6s" }}>
     <div className="flex justify-between items-center mb-6">
      <h2 className="text-xl font-bold">Open Job Opportunities</h2>
      <button className="text-sm text-primary font-medium">View all</button>
     </div>

     <div className="glass-card rounded-xl overflow-hidden">
      <div className="overflow-x-auto">
       <table className="w-full">
        <thead>
         <tr className="border-b border-border">
          <th className="text-left py-4 px-6 text-sm font-medium">Job Title</th>
          <th className="text-left py-4 px-6 text-sm font-medium">Client</th>
          <th className="text-left py-4 px-6 text-sm font-medium">Budget</th>
          <th className="text-left py-4 px-6 text-sm font-medium">Posted</th>
          <th className="text-left py-4 px-6 text-sm font-medium">Action</th>
         </tr>
        </thead>
        <tbody>
         {AVAILABLE_JOBS.map((job) => (
          <tr key={job.id} className="border-b border-border">
           <td className="py-4 px-6">
            <div>
             <p className="font-medium">{job.title}</p>
             <p className="text-sm text-muted-foreground">{job.duration}</p>
            </div>
           </td>
           <td className="py-4 px-6">
            <div className="flex items-center gap-2">
             <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center">
              <svg
               width="16"
               height="16"
               viewBox="0 0 24 24"
               fill="none"
               xmlns="http://www.w3.org/2000/svg"
              >
               <path
                d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
               />
               <path
                d="M12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
               />
              </svg>
             </div>
             <span>{job.client.name}</span>
            </div>
           </td>
           <td className="py-4 px-6">{job.budget}</td>
           <td className="py-4 px-6">{job.posted}</td>
           <td className="py-4 px-6">
            <button className="px-4 py-2 text-sm font-medium rounded-md bg-primary text-primary-foreground hover:bg-primary/90 transition-colors">
             Bid Now
            </button>
           </td>
          </tr>
         ))}
        </tbody>
       </table>
      </div>
     </div>
    </div>
   </>
  );
 }
);

FreelancerDashboardHome.displayName = "FreelancerDashboardHome";

export default FreelancerDashboardHome;
