import React from "react";
import { Link } from "react-router-dom";
import { FileText, User, DollarSign, Briefcase } from "lucide-react";
import { Button } from "@/components/UI";
import {
 DashboardSection,
 DashboardStats,
 JobsList,
} from "@/features/dashboard";
import { FreelancerTable } from "@/components/Profile";
import { Breadcrumbs } from "@/components/Layout";
export interface HomeProps {
 user?: {
  name?: string;
  email?: string;
 };
 isLoading?: boolean;
 onMessage?: (userId: string) => void;
 onJobDetails?: (jobId: string) => void;
 onFreelancerDetails?: (freelancerId: string) => void;
}
export const Home: React.FC<HomeProps> = ({
 isLoading = false,
 onMessage,
 onJobDetails,
 onFreelancerDetails,
}) => {
 const dashboardStats = [
  {
   title: "Active Jobs",
   value: "5",
   icon: <Briefcase className="h-5 w-5 text-primary" />,
   change: {
    value: "2",
    isPositive: true,
    label: "from last month",
   },
  },
  {
   title: "Hired Freelancers",
   value: "12",
   icon: <User className="h-5 w-5 text-primary" />,
   change: {
    value: "3",
    isPositive: true,
    label: "from last month",
   },
  },
  {
   title: "Total Spent",
   value: "32.5 ETH",
   icon: <DollarSign className="h-5 w-5 text-primary" />,
   change: {
    value: "12.5 ETH",
    isPositive: true,
    label: "from last month",
   },
  },
  {
   title: "Completed Jobs",
   value: "28",
   icon: <FileText className="h-5 w-5 text-primary" />,
   change: {
    value: "5",
    isPositive: true,
    label: "from last month",
   },
  },
 ];
 const activeJobs = [
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
 const topFreelancers = [
  {
   id: "alex123",
   name: "Alex Kotov",
   title: "Frontend Developer",
   specialty: "React, Web3",
   jobsCount: "2 Active",
   status: "Active",
   rating: 4.9,
  },
  {
   id: "maria123",
   name: "Maria Solovey",
   title: "Smart Contract Developer",
   specialty: "Solidity, Audits",
   jobsCount: "1 Active",
   status: "Active",
   rating: 4.8,
  },
  {
   id: "david123",
   name: "David Chen",
   title: "UI/UX Designer",
   specialty: "Figma, Web Design",
   jobsCount: "1 Active",
   status: "Active",
   rating: 4.7,
  },
 ];
 const handleHireFreelancer = (freelancerId: string) => {
  console.log(`Hiring freelancer: ${freelancerId}`);
 };
 return (
  <div className="space-y-8">
   <Breadcrumbs
    items={[{ label: "Dashboard", path: "/dashboard" }, { label: "Home" }]}
   />
   {/* Header */}
   <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
    <div>
     <h1 className="text-2xl font-bold tracking-tight">Statistics</h1>
     <p className="text-muted-foreground mt-1">
      Information about your activity
     </p>
    </div>
    <Button asChild>
     <Link to="/dashboard/post-job">Post a Job</Link>
    </Button>
   </div>
   {/* Summary Stats */}
   <DashboardStats stats={dashboardStats} isLoading={isLoading} />
   {/* Active Jobs Section */}
   <DashboardSection
    title="Active Jobs"
    description="Your current and recently completed jobs"
    action={
     <Button variant="outline" size="sm" asChild>
      <Link to="/dashboard/jobs">View All</Link>
     </Button>
    }
    isLoading={isLoading}
   >
    <JobsList
     jobs={activeJobs}
     onMessage={onMessage}
     onDetails={onJobDetails}
    />
   </DashboardSection>
   {/* Top Freelancers Section */}
   <DashboardSection
    title="Top Rated Freelancers"
    description="Discover top talent for your projects"
    action={
     <Button variant="outline" size="sm" asChild>
      <Link to="/dashboard/freelancers">View All</Link>
     </Button>
    }
    isLoading={isLoading}
   >
    <FreelancerTable
     freelancers={topFreelancers}
     onHire={handleHireFreelancer}
     onMessage={onMessage}
     onView={onFreelancerDetails}
    />
   </DashboardSection>
  </div>
 );
};
