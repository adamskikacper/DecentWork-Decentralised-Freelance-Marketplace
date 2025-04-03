import React, { memo } from "react";
import { FileText } from "lucide-react";
import {
 User as UserType,
 ProjectSummary,
 FreelancerSummary,
} from "../../../types";
import SectionHeader from "../../../components/SectionHeader";
import FreelancerTable from "../../../components/FreelancerTable";
import ProjectsList from "../../../components/ProjectsList";
import StatsGrid from "../../../components/StatsGrid";
import Breadcrumbs from "@/components/Breadcrumbs";
import { NAV_LINKS } from "@/constants";

interface ClientDashboardHomeProps {
 user: Partial<UserType>;
 onMessage: (userId: string) => void;
 onProjectDetails: (projectId: string) => void;
}

// Sample project data - in a real app, this would come from an API
const SAMPLE_PROJECTS: ProjectSummary[] = [
 {
  id: "project1",
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
  id: "project2",
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
];

// Sample freelancer data
const TOP_FREELANCERS: FreelancerSummary[] = [
 {
  id: "alex123",
  name: "Alex Kotov",
  title: "Frontend Developer",
  specialty: "React, Web3",
  rating: 4.9,
  projectsCount: 23,
  status: "Available",
 },
 {
  id: "maria123",
  name: "Maria Solovey",
  title: "Smart Contract Developer",
  specialty: "Solidity, Audits",
  rating: 4.8,
  projectsCount: 18,
  status: "Available",
 },
 {
  id: "david123",
  name: "David Chen",
  title: "Blockchain Architect",
  specialty: "DeFi, Tokenomics",
  rating: 4.7,
  projectsCount: 27,
  status: "Available",
 },
];

const ClientDashboardHome = memo(
 ({ user, onMessage, onProjectDetails }: ClientDashboardHomeProps) => {
  // Freelancer hire handler
  const handleHireFreelancer = (freelancerId: string) => {
   console.log(`Hiring freelancer: ${freelancerId}`);
   // Implementation would go here
  };

  // Stats configuration
  const dashboardStats = [
   {
    title: "Active Projects",
    value: "3",
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
     value: "1",
     isPositive: true,
     label: "from last month",
    },
    delay: "0.2s",
   },
   {
    title: "Pending Proposals",
    value: "7",
    icon: <FileText className="h-5 w-5" />,
    change: {
     value: "2",
     isPositive: true,
     label: "from last week",
    },
    delay: "0.3s",
   },
   {
    title: "Total Spent",
    value: "12.5 ETH",
    icon: (
     <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
     >
      <path
       d="M12 1V23"
       stroke="currentColor"
       strokeWidth="2"
       strokeLinecap="round"
       strokeLinejoin="round"
      />
      <path
       d="M17 5H9.5C8.57174 5 7.6815 5.36875 7.02513 6.02513C6.36875 6.6815 6 7.57174 6 8.5C6 9.42826 6.36875 10.3185 7.02513 10.9749C7.6815 11.6313 8.57174 12 9.5 12H14.5C15.4283 12 16.3185 12.3687 16.9749 13.0251C17.6313 13.6815 18 14.5717 18 15.5C18 16.4283 17.6313 17.3185 16.9749 17.9749C16.3185 18.6313 15.4283 19 14.5 19H6"
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
    delay: "0.4s",
   },
  ];

  return (
   <>
    <Breadcrumbs
     items={[
      { label: "Dashboard", path: NAV_LINKS.DASHBOARD },
      { label: "Home" },
     ]}
    />

    {/* Header */}
    <SectionHeader
     title="Client Dashboard"
     description="Find and manage your projects with top freelancers."
    />

    {/* Summary Cards */}
    <StatsGrid stats={dashboardStats} className="mb-8" />

    {/* Active Projects */}
    <ProjectsList
     title="Active Projects"
     projects={SAMPLE_PROJECTS}
     onMessage={onMessage}
     onDetails={onProjectDetails}
     showViewAll={true}
     className="mb-10"
    />

    {/* Top Freelancers */}
    <div className="mb-8 slide-in" style={{ animationDelay: "0.6s" }}>
     <div className="flex justify-between items-center mb-6">
      <h2 className="text-xl font-bold">Top Rated Freelancers</h2>
      <button className="text-sm text-primary font-medium">View all</button>
     </div>

     <FreelancerTable
      freelancers={TOP_FREELANCERS}
      onHire={handleHireFreelancer}
     />
    </div>
   </>
  );
 }
);

ClientDashboardHome.displayName = "ClientDashboardHome";

export default ClientDashboardHome;
