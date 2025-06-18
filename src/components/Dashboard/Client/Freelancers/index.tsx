import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button, Input } from "@/components/UI";
import { DashboardSection } from "../../Common";
import { FreelancerTable } from "@/components/Profile";
import { Breadcrumbs } from "@/components/Layout";
import { Search } from "lucide-react";
export interface FreelancersProps {
 isLoading?: boolean;
 onMessage?: (userId: string) => void;
 onFreelancerDetails?: (freelancerId: string) => void;
}
const Freelancers: React.FC<FreelancersProps> = ({
 isLoading = false,
 onMessage,
 onFreelancerDetails,
}) => {
 const [searchQuery, setSearchQuery] = useState("");
 const allFreelancers = [
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
  {
   id: "sarah123",
   name: "Sarah Lee",
   title: "Blockchain Developer",
   specialty: "Ethereum, Solidity",
   jobsCount: "1 Active",
   status: "Active",
   rating: 4.6,
  },
  {
   id: "james123",
   name: "James Wilson",
   title: "Smart Contract Auditor",
   specialty: "Security, Audits",
   jobsCount: "Completed",
   status: "Available",
   rating: 4.9,
  },
 ];
 const filteredFreelancers = searchQuery
  ? allFreelancers.filter(
     (freelancer) =>
      freelancer.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      freelancer.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      freelancer.specialty.toLowerCase().includes(searchQuery.toLowerCase())
    )
  : allFreelancers;
 const handleHireFreelancer = (freelancerId: string) => {
  console.log(`Hiring freelancer: ${freelancerId}`);
 };
 return (
  <div className="space-y-8">
   <Breadcrumbs
    items={[
     { label: "Dashboard", path: "/dashboard" },
     { label: "Freelancers" },
    ]}
   />
   {/* Header */}
   <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
    <div>
     <h1 className="text-2xl font-bold tracking-tight">Freelancers</h1>
     <p className="text-muted-foreground mt-1">
      View and manage your freelancers.
     </p>
    </div>
    <Button asChild>
     <Link to="/dashboard/post-job">Post a Job</Link>
    </Button>
   </div>
   {/* Search and Filter */}
   <div className="flex items-center gap-4">
    <div className="relative flex-1">
     <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
     <Input
      placeholder="Search freelancers..."
      className="pl-10"
      value={searchQuery}
      onChange={(e) => setSearchQuery(e.target.value)}
     />
    </div>
   </div>
   {/* Active Freelancers Section */}
   <DashboardSection
    title="Active Freelancers"
    description="Freelancers currently working on your projects"
    isLoading={isLoading}
   >
    <FreelancerTable
     freelancers={filteredFreelancers.filter(
      (freelancer) => freelancer.status === "Active"
     )}
     onHire={handleHireFreelancer}
     onMessage={onMessage}
     onView={onFreelancerDetails}
    />
   </DashboardSection>
   {/* Available Freelancers Section */}
   <DashboardSection
    title="Available Freelancers"
    description="Freelancers you've worked with who are available for new projects"
    isLoading={isLoading}
   >
    <FreelancerTable
     freelancers={filteredFreelancers.filter(
      (freelancer) => freelancer.status === "Available"
     )}
     onHire={handleHireFreelancer}
     onMessage={onMessage}
     onView={onFreelancerDetails}
    />
   </DashboardSection>
  </div>
 );
};
export default Freelancers;
