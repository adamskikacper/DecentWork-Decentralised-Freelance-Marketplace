import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Navbar, Footer } from "@/shared/ui";
import { SearchFilterBar } from "@/components/organisms/SearchFilterBar";
import { AvailableJobsList } from "@/components/organisms/AvailableJobsList";
import { getJobListings, getJobCategories } from "@/shared/services/job.service";
import type { JobOpportunityWithCategory } from "@/shared/models/dashboard";

export const FindWorkPage = () => {
 const navigate = useNavigate();
 const [searchQuery, setSearchQuery] = useState("");
 const [categoryFilter, setCategoryFilter] = useState("All");
 const [jobListings, setJobListings] = useState<JobOpportunityWithCategory[]>([]);
 const [categories, setCategories] = useState<string[]>([]);
 const [isLoading, setIsLoading] = useState(true);

 const handleDetails = (jobId: string | number) => {
  navigate(`/jobs/${jobId}`);
 };

 useEffect(() => {
  const fetchData = async () => {
   try {
    setIsLoading(true);
    const [jobsData, categoriesData] = await Promise.all([
     getJobListings(),
     getJobCategories(),
    ]);
    setJobListings(jobsData);
    setCategories(categoriesData);
   } catch (error) {
    console.error("Error fetching job data:", error);
   } finally {
    setIsLoading(false);
   }
  };

  fetchData();
 }, []);

 // Filter jobs based on search query and category
 const filteredJobs = jobListings.filter((job) => {
  const matchesSearch =
   job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
   job.description.toLowerCase().includes(searchQuery.toLowerCase());
  const matchesCategory =
   categoryFilter === "All" || job.category === categoryFilter;

  return matchesSearch && matchesCategory;
 });

 if (isLoading) {
  return (
   <div className="min-h-screen flex flex-col">
    <Navbar />
    <main className="flex-grow pt-24 pb-12 bg-background">
     <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex justify-center items-center h-64">
       <div className="text-center">
        <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
        <p className="text-muted-foreground">Loading job listings...</p>
       </div>
      </div>
     </div>
    </main>
    <Footer />
   </div>
  );
 }

 return (
  <div className="min-h-screen flex flex-col">
   <Navbar />

   <main className="flex-grow pt-24 pb-12 bg-background">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
     {/* Page Header */}
     <div className="mb-8 slide-in">
      <h1 className="text-3xl font-bold mb-2">Find Work</h1>
      <p className="text-muted-foreground max-w-3xl">
       Discover opportunities to collaborate with clients from around the world
       on blockchain and web3 jobs.
      </p>
     </div>

     {/* Search and Filters */}
     <SearchFilterBar
      searchQuery={searchQuery}
      setSearchQuery={setSearchQuery}
      categoryFilter={categoryFilter}
      setCategoryFilter={setCategoryFilter}
      categories={categories}
     />

     {/* Job Listings */}
     {filteredJobs.length > 0 ? (
      <AvailableJobsList jobs={filteredJobs} onDetails={handleDetails} />
     ) : (
      <div className="col-span-3 py-16 text-center slide-up">
       <div className="w-16 h-16 rounded-full bg-secondary/50 flex items-center justify-center mx-auto mb-4">
        <svg
         width="24"
         height="24"
         viewBox="0 0 24 24"
         fill="none"
         xmlns="http://www.w3.org/2000/svg"
        >
         <path
          d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
         />
         <path
          d="M21 21L16.65 16.65"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
         />
        </svg>
       </div>
       <h3 className="text-lg font-medium mb-2">No jobs found</h3>
       <p className="text-muted-foreground">
        Try adjusting your search filters or check back later for new
        opportunities.
       </p>
      </div>
     )}

     {/* Pagination */}
     <div className="flex justify-center">
      <nav className="inline-flex gap-1" aria-label="Pagination">
       <button className="px-3 py-2 rounded text-sm font-medium bg-primary text-white">
        1
       </button>
       <button className="px-3 py-2 rounded text-sm font-medium text-foreground hover:bg-secondary transition-colors">
        2
       </button>
       <button className="px-3 py-2 rounded text-sm font-medium text-foreground hover:bg-secondary transition-colors">
        3
       </button>
       <button className="px-3 py-2 rounded text-sm font-medium text-foreground hover:bg-secondary transition-colors">
        ...
       </button>
       <button className="px-3 py-2 rounded text-sm font-medium text-foreground hover:bg-secondary transition-colors">
        10
       </button>
      </nav>
     </div>
    </div>
   </main>

   <Footer />
  </div>
 );
};
