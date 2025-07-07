import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button, Input } from "@/components/UI";
import { DashboardSection } from "@/features/dashboard";
import { FreelancerTable } from "../../components";
import { Breadcrumbs } from "@/components/Layout";
import { LoadingScreen } from "@/components/Common/LoadingScreen";
import { useFetchFreelancers } from "@/features/dashboard/hooks";
import { Search } from "lucide-react";
export interface FreelancersProps {
 isLoading?: boolean;
 onMessage?: (userId: string) => void;
 onFreelancerDetails?: (freelancerId: string) => void;
}
export const Freelancers: React.FC<FreelancersProps> = ({
 isLoading = false,
 onMessage,
 onFreelancerDetails,
}) => {
 const [searchQuery, setSearchQuery] = useState("");
 const {
  freelancers: allFreelancers,
  isLoading: dataLoading,
  error,
 } = useFetchFreelancers();
 const filteredFreelancers = searchQuery
  ? allFreelancers.filter(
     (freelancer) =>
      freelancer.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      freelancer.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      freelancer.specialty.toLowerCase().includes(searchQuery.toLowerCase())
    )
  : allFreelancers;

 const handleMessageFreelancer = (freelancerId: string) => {
  console.log(`Messaging freelancer: ${freelancerId}`);
 };

 if (dataLoading) {
  return <LoadingScreen />;
 }

 if (error) {
  return (
   <div className="space-y-8">
    <Breadcrumbs
     items={[
      { label: "Dashboard", path: "/dashboard" },
      { label: "Freelancers" },
     ]}
    />
    <div className="flex items-center justify-center min-h-[400px]">
     <div className="text-center">
      <h2 className="text-xl font-semibold text-destructive mb-2">
       Error Loading Freelancers
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
     { label: "Freelancers" },
    ]}
   />
   {/* Header */}
   <DashboardSection
    title="Freelancers"
    description="View and manage your freelancers."
    action={
     <Button asChild>
      <Link to="/dashboard/post-job">Post a Job</Link>
     </Button>
    }
    isLoading={isLoading}
   >
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
   </DashboardSection>
   {/* Active Freelancers Section */}
   <DashboardSection
    title="Active Freelancers"
    description="Freelancers currently working on your projects"
    isLoading={isLoading}
   >
    <FreelancerTable
     freelancers={filteredFreelancers.filter(
      (freelancer) =>
       freelancer.status === "Online" || freelancer.status === "Offline"
     )}
     onMessage={handleMessageFreelancer}
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
     onMessage={handleMessageFreelancer}
     onView={onFreelancerDetails}
    />
   </DashboardSection>
  </div>
 );
};
