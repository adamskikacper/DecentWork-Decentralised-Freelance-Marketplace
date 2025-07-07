import React, { useState } from "react";
import { Button } from "@/components/UI";
import { DashboardSection } from "@/features/dashboard";
import { SearchFilterBar, AvailableJobsList } from "@/components/Job";
import { Breadcrumbs } from "@/components/Layout";
export interface FindJobsProps {
 isLoading?: boolean;
 onJobDetails?: (jobId: string) => void;
}
export const FindJobs: React.FC<FindJobsProps> = ({
 isLoading = false,
 onJobDetails,
}) => {
 const [searchQuery, setSearchQuery] = useState("");
 const [categoryFilter, setCategoryFilter] = useState("All");
 const allJobOpportunities = [
  {
   id: "opp1",
   title: "Solidity Smart Contract Developer",
   description:
    "Looking for an experienced Solidity developer to create a DeFi protocol with staking and yield farming features.",
   budget: "5.0-8.0 ETH",
   postedDate: "2 days ago",
   proposals: 5,
   tags: ["Solidity", "DeFi", "Smart Contracts"],
   category: "Development",
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
   category: "Development",
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
   category: "Security",
  },
  {
   id: "opp4",
   title: "NFT Collection Designer",
   description:
    "We need a creative designer to create a collection of 10,000 unique NFTs for our upcoming project.",
   budget: "2.5-4.0 ETH",
   postedDate: "4 days ago",
   proposals: 8,
   tags: ["NFT", "Design", "Art"],
   category: "Design",
  },
  {
   id: "opp5",
   title: "Tokenomics Consultant",
   description:
    "Looking for an expert to help design the tokenomics for our new DeFi platform.",
   budget: "3.0-5.0 ETH",
   postedDate: "2 days ago",
   proposals: 4,
   tags: ["Tokenomics", "DeFi", "Economics"],
   category: "Consulting",
  },
  {
   id: "opp6",
   title: "Smart Contract for NFT Marketplace",
   description:
    "Need a Solidity developer to create smart contracts for our NFT marketplace with royalty support.",
   budget: "4.0-7.0 ETH",
   postedDate: "5 days ago",
   proposals: 6,
   tags: ["Solidity", "NFT", "Smart Contracts"],
   category: "Development",
  },
 ];
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
 return (
  <div className="space-y-8">
   <Breadcrumbs
    items={[{ label: "Dashboard", path: "/dashboard" }, { label: "Find Jobs" }]}
   />
   {/* Header */}
   <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
    <div>
     <h1 className="text-2xl font-bold tracking-tight">Find Jobs</h1>
     <p className="text-muted-foreground mt-1">
      Discover job opportunities that match your skills and experience.
     </p>
    </div>
   </div>
   {/* Search and Filter */}
   <SearchFilterBar
    searchQuery={searchQuery}
    setSearchQuery={setSearchQuery}
    categoryFilter={categoryFilter}
    setCategoryFilter={setCategoryFilter}
    categories={categories}
   />
   {/* Job Opportunities Section */}
   <DashboardSection
    title="Available Jobs"
    description={`${filteredJobs.length} jobs found matching your criteria`}
    isLoading={isLoading}
    contentPadding={false}
   >
    {filteredJobs.length > 0 ? (
     <AvailableJobsList
      jobs={filteredJobs}
      onDetails={onJobDetails}
      className="p-6"
     />
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
