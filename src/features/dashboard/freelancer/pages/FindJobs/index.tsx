import React, { useState, useMemo } from "react";
import { Button } from "@/components/UI";
import { DashboardSection } from "@/features/dashboard";
import { AvailableJobsList, SearchFilterBar } from "@/components/Job";
import { Breadcrumbs } from "@/components/Layout";
import { LoadingScreen } from "@/components/Common/LoadingScreen";
import { useFetchJobOpportunities } from "@/features/dashboard/hooks";
import { useNavigate } from "react-router-dom";

export interface FindJobsProps {
 isLoading?: boolean;
 onJobDetails?: (jobId: string) => void;
}
export const FindJobs: React.FC<FindJobsProps> = ({ isLoading = false }) => {
 const [searchQuery, setSearchQuery] = useState("");
 const [categoryFilter, setCategoryFilter] = useState("All");
 const {
  jobOpportunities,
  isLoading: dataLoading,
  error,
 } = useFetchJobOpportunities();

 const allJobOpportunities = useMemo(() => {
  return jobOpportunities.map((job) => ({
   ...job,
   category: job.tags.includes("Security")
    ? "Security"
    : job.tags.includes("Design") || job.tags.includes("NFT")
    ? "Design"
    : job.tags.includes("Tokenomics")
    ? "Consulting"
    : "Development",
  }));
 }, [jobOpportunities]);
 const filteredJobs = allJobOpportunities.filter((job) => {
  const matchesSearch =
   searchQuery === "" ||
   job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
   job.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
   job.tags.some((tag) =>
    tag.toLowerCase().includes(searchQuery.toLowerCase())
   );
  const matchesCategory =
   categoryFilter === "All" || job.category === categoryFilter;
  return matchesSearch && matchesCategory;
 });
 const categories = ["All", "Development", "Design", "Security", "Consulting"];

 const navigate = useNavigate();

 const handleDetails = (jobId: string) => {
  navigate(`/dashboard/jobs/${jobId}`);
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
      { label: "Find Jobs" },
     ]}
    />
    <div className="flex items-center justify-center min-h-[400px]">
     <div className="text-center">
      <h2 className="text-xl font-semibold text-destructive mb-2">
       Error Loading Jobs
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
    items={[{ label: "Dashboard", path: "/dashboard" }, { label: "Find Jobs" }]}
   />

   {/* Job Opportunities Section */}
   <DashboardSection
    title="Available Jobs"
    description={`${filteredJobs.length} jobs found matching your criteria`}
    isLoading={isLoading}
    contentPadding={false}
   >
    {/* Search and Filter */}
    <SearchFilterBar
     searchQuery={searchQuery}
     setSearchQuery={setSearchQuery}
     categoryFilter={categoryFilter}
     setCategoryFilter={setCategoryFilter}
     categories={categories}
    />
    {filteredJobs.length > 0 ? (
     <AvailableJobsList jobs={filteredJobs} onDetails={handleDetails} />
    ) : (
     <div className="p-6 text-center text-muted-foreground">
      <p>No jobs found matching your criteria.</p>
      <Button
       variant="outline"
       className="mt-4"
       onClick={() => {
        setSearchQuery("");
        setCategoryFilter("All");
       }}
      >
       Clear Filters
      </Button>
     </div>
    )}
   </DashboardSection>
  </div>
 );
};
