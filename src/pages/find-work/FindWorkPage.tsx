import React, { useState, useEffect } from "react";
import { PublicPageLayout } from "@/components/templates";
import { ListingInterface } from "@/components/organisms/ListingInterface";
import { getJobListings, getJobCategories } from "@/shared/services/job.service";
import { useNavigation } from "@/shared/hooks";
import type { JobOpportunityWithCategory } from "@/shared/models/dashboard";

export const FindWorkPage = () => {
 const [jobListings, setJobListings] = useState<JobOpportunityWithCategory[]>([]);
 const [categories, setCategories] = useState<Array<{ value: string; label: string }>>([]);
 const [isLoading, setIsLoading] = useState(true);
 const [error, setError] = useState<string | null>(null);

 const { goToJobDetails } = useNavigation();

 const handleDetails = (jobId: string | number) => {
  goToJobDetails(String(jobId), true);
 };

 useEffect(() => {
  const fetchData = async () => {
   try {
    setIsLoading(true);
    setError(null);
    const [jobsData, categoriesData] = await Promise.all([
     getJobListings(),
     getJobCategories(),
    ]);
    setJobListings(jobsData);
    
    const categoryOptions = categoriesData.map(cat => ({ 
     value: cat, 
     label: cat === "All" ? "All Categories" : cat 
    }));
    setCategories(categoryOptions);
   } catch (err) {
    setError(err instanceof Error ? err.message : "Failed to load job listings");
   } finally {
    setIsLoading(false);
   }
  };

  fetchData();
 }, []);

 const renderJobItem = (job: JobOpportunityWithCategory) => (
  <div
   key={job.id}
   className="p-6 bg-white border rounded-lg hover:shadow-md transition-shadow cursor-pointer"
   onClick={() => handleDetails(job.id)}
  >
   <h3 className="text-lg font-semibold mb-2">{job.title}</h3>
   <p className="text-muted-foreground mb-4 line-clamp-2">{job.description}</p>
   <div className="flex items-center justify-between">
    <span className="text-lg font-medium text-primary">{job.budget}</span>
    <span className="text-sm text-muted-foreground">{job.postedDate}</span>
   </div>
   <div className="flex items-center gap-2 mt-3">
    {job.tags?.slice(0, 3).map((tag) => (
     <span
      key={tag}
      className="px-2 py-1 text-xs bg-secondary text-secondary-foreground rounded-md"
     >
      {tag}
     </span>
    ))}
   </div>
  </div>
 );

 const filterFn = (job: JobOpportunityWithCategory, activeFilters: Record<string, string>) => {
  const categoryFilter = activeFilters.category;
  if (categoryFilter && categoryFilter !== "All") {
   return job.category === categoryFilter;
  }
  return true;
 };

 return (
  <PublicPageLayout
   title="Find Work"
   description="Discover opportunities to collaborate with clients from around the world on blockchain and web3 jobs."
   breadcrumbs={[]}
  >
   <ListingInterface
    items={jobListings}
    categories={categories}
    renderItem={renderJobItem}
    searchFields={['title', 'description']}
    filterFn={filterFn}
    searchPlaceholder="Search jobs..."
    emptyTitle="No jobs found"
    emptyMessage="Try adjusting your search filters or check back later for new opportunities."
    pageSize={12}
    isLoading={isLoading}
    error={error}
    onRetry={() => window.location.reload()}
   />
  </PublicPageLayout>
 );
};
