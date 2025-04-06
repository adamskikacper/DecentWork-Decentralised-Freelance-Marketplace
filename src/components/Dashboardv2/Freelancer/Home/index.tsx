import React from "react";
import { Link } from "react-router-dom";
import { Briefcase, DollarSign, Star, Clock } from "lucide-react";
import { Button } from "@/components/UI/button";
import { DashboardSection, DashboardStats } from "../../Common";
import { JobsList } from "@/components/Job";
import Breadcrumbs from "@/components/Layout/Breadcrumbs";

export interface HomeProps {
 /**
  * User data
  */
 user?: {
  name?: string;
  email?: string;
 };
 /**
  * Whether the component is in a loading state
  * @default false
  */
 isLoading?: boolean;
 /**
  * Callback when a message button is clicked
  */
 onMessage?: (userId: string) => void;
 /**
  * Callback when a job details button is clicked
  */
 onJobDetails?: (jobId: string) => void;
 /**
  * Callback when a client details button is clicked
  */
 onClientDetails?: (clientId: string) => void;
}

/**
 * Home - Freelancer dashboard home component
 * Displays an overview of the freelancer's activity, jobs, and available opportunities
 */
const Home: React.FC<HomeProps> = ({
 user,
 isLoading = false,
 onMessage,
 onJobDetails,
 onClientDetails,
}) => {
 // Sample data - would come from API in a real app
 const dashboardStats = [
  {
   title: "Current Balance",
   value: "3.2 ETH",
   icon: <DollarSign className="h-5 w-5 text-primary" />,
   change: {
    value: "0.5 ETH",
    isPositive: true,
    label: "from last month",
   },
  },
  {
   title: "Active Jobs",
   value: "3",
   icon: <Briefcase className="h-5 w-5 text-primary" />,
   change: {
    value: "1",
    isPositive: true,
    label: "from last month",
   },
  },
  {
   title: "Completed Jobs",
   value: "12",
   icon: <Clock className="h-5 w-5 text-primary" />,
   change: {
    value: "3",
    isPositive: true,
    label: "from last month",
   },
  },
  {
   title: "Average Rating",
   value: "4.8/5",
   icon: <Star className="h-5 w-5 text-primary" />,
   change: {
    value: "0.2",
    isPositive: true,
    label: "from last month",
   },
  },
 ];

 // Sample jobs data
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

 // Sample job opportunities data
 const jobOpportunities = [
  {
   id: "opp1",
   title: "Solidity Smart Contract Developer",
   description:
    "Looking for an experienced Solidity developer to create a DeFi protocol with staking and yield farming features.",
   budget: "5.0-8.0 ETH",
   postedDate: "2 days ago",
   proposals: 5,
   tags: ["Solidity", "DeFi", "Smart Contracts"],
  },
  {
   id: "opp2",
   title: "Frontend Developer for Web3 Dashboard",
   description:
    "Need a React developer to build a dashboard for our Web3 application with wallet integration and transaction history.",
   budget: "3.0-5.0 ETH",
   postedDate: "1 day ago",
   proposals: 3,
   tags: ["React", "Web3", "Frontend"],
  },
  {
   id: "opp3",
   title: "Blockchain Security Auditor",
   description:
    "Looking for a security expert to audit our smart contracts and provide a detailed report with recommendations.",
   budget: "4.0-6.0 ETH",
   postedDate: "3 days ago",
   proposals: 2,
   tags: ["Security", "Audit", "Solidity"],
  },
 ];

 return (
  <div className="space-y-8">
   <Breadcrumbs
    items={[{ label: "Dashboard", path: "/dashboard" }, { label: "Home" }]}
   />

   {/* Header */}
   <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
    <div>
     <h1 className="text-2xl font-bold tracking-tight">
      Welcome back, {user?.name || "Freelancer"} 👋
     </h1>
     <p className="text-muted-foreground mt-1">
      Here's an overview of your freelance activity.
     </p>
    </div>
    <Button asChild>
     <Link to="/dashboard/freelancer/find-jobs">Find Jobs</Link>
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
      <Link to="/dashboard/freelancer/jobs">View All</Link>
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

   {/* Job Opportunities Section */}
   <DashboardSection
    title="Job Opportunities"
    description="Recommended jobs based on your skills and experience"
    action={
     <Button variant="outline" size="sm" asChild>
      <Link to="/dashboard/freelancer/find-jobs">View All</Link>
     </Button>
    }
    isLoading={isLoading}
   >
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
     {jobOpportunities.map((job) => (
      <div
       key={job.id}
       className="bg-card/50 rounded-lg p-4 border border-border hover:border-primary/50 transition-colors"
      >
       <h3 className="font-semibold mb-2 line-clamp-1">{job.title}</h3>
       <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
        {job.description}
       </p>
       <div className="flex justify-between items-center mb-3">
        <span className="text-sm font-medium">{job.budget}</span>
        <span className="text-xs text-muted-foreground">{job.postedDate}</span>
       </div>
       <div className="flex flex-wrap gap-1 mb-3">
        {job.tags.map((tag) => (
         <span
          key={tag}
          className="px-2 py-1 bg-secondary text-xs rounded-full"
         >
          {tag}
         </span>
        ))}
       </div>
       <Button variant="outline" size="sm" className="w-full" asChild>
        <Link to={`/dashboard/jobs/${job.id}`}>View Details</Link>
       </Button>
      </div>
     ))}
    </div>
   </DashboardSection>
  </div>
 );
};

export default Home;
