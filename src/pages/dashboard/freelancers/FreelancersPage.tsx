import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/shared/ui";
import { PageLayout } from "@/components/templates";
import { DashboardSection, FreelancerTable } from "@/components";
import { SearchInput } from "@/components/molecules";
import { useFetchFreelancers, useSearch, useNavigation } from "@/shared/hooks";

export interface FreelancersPageProps {
 isLoading?: boolean;
 onMessage?: (userId: string) => void;
 onFreelancerDetails?: (freelancerId: string) => void;
}

export const FreelancersPage: React.FC<FreelancersPageProps> = ({
 isLoading = false,
}) => {
 const {
  freelancers: allFreelancers,
  isLoading: dataLoading,
  error,
 } = useFetchFreelancers();

 const { goToMessages, goToFreelancerDetails } = useNavigation();

 const {
  query: searchQuery,
  setQuery: setSearchQuery,
  filteredItems: filteredFreelancers
 } = useSearch(allFreelancers, {
  searchFields: ['name', 'title', 'specialty']
 });

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
   actions={
    <Button asChild>
     <Link to="/dashboard/post-job">Post a Job</Link>
    </Button>
   }
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
