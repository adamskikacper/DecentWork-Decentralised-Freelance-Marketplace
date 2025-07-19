import React, { useState } from "react";
import { Button } from "@/shared/ui";
import { PageLayout } from "@/components/templates";
import { DashboardSection, FreelancerTable } from "@/components";
import { SearchInput } from "@/components/molecules";
import { useFreelancers, useNavigation } from "@/shared/hooks";

export interface FreelancersPageProps {
 isLoading?: boolean;
 onMessage?: (userId: string) => void;
 onFreelancerDetails?: (freelancerId: string) => void;
}

export const FreelancersPage = ({
 isLoading = false,
}: FreelancersPageProps) => {
 const [searchQuery, setSearchQuery] = useState("");

 const {
  filteredFreelancers,
  isLoading: dataLoading,
  error,
 } = useFreelancers({ searchQuery });

 const { goToMessages, goToFreelancerDetails, goToPostJob } = useNavigation();

 const activeFreelancers = filteredFreelancers.filter(
  (freelancer) => freelancer.hireHistory === "current"
 );
 const previousFreelancers = filteredFreelancers.filter(
  (freelancer) => freelancer.hireHistory === "previous"
 );
 const browseFreelancers = filteredFreelancers.filter(
  (freelancer) => freelancer.hireHistory === "never"
 );

 return (
  <PageLayout
   title="Freelancers"
   description="View and manage your freelancers."
   breadcrumbs={[
    { label: "Dashboard", href: "/dashboard" },
    { label: "Freelancers" },
   ]}
   actions={<Button onClick={goToPostJob}>Post a Job</Button>}
   isLoading={dataLoading}
   error={error}
  >
   <div className="space-y-8">
    {/* Search */}
    <SearchInput
     placeholder="Search freelancers..."
     value={searchQuery}
     onChange={setSearchQuery}
     disabled={isLoading}
    />

    {/* Active Freelancers Section */}
    <DashboardSection
     title="Active Freelancers"
     description="Freelancers currently working on your projects"
     isLoading={isLoading}
    >
     <FreelancerTable
      freelancers={activeFreelancers}
      onMessage={goToMessages}
      onView={goToFreelancerDetails}
     />
    </DashboardSection>

    {/* Previous Freelancers Section */}
    <DashboardSection
     title="Previous Freelancers"
     description="Freelancers you've worked with before"
     isLoading={isLoading}
    >
     <FreelancerTable
      freelancers={previousFreelancers}
      onMessage={goToMessages}
      onView={goToFreelancerDetails}
     />
    </DashboardSection>

    {/* Browse Freelancers Section */}
    <DashboardSection
     title="Browse Freelancers"
     description="Discover and hire new talent for your projects"
     isLoading={isLoading}
    >
     <FreelancerTable
      freelancers={browseFreelancers}
      onMessage={goToMessages}
      onView={goToFreelancerDetails}
     />
    </DashboardSection>
   </div>
  </PageLayout>
 );
};
