import { PageLayout } from "@/components/templates";
import { JobCard } from "@/components/organisms/JobCard";
import { DataSection } from "@/components/molecules/DataSection";
import { useJobListings, useNavigation } from "@/shared/hooks";

export const FindJobsPage = () => {
 const { jobListings, isLoading, error } = useJobListings();
 const { goToJobDetails } = useNavigation();

 const handleDetails = (jobId: string | number) => {
  goToJobDetails(String(jobId), false);
 };

 return (
  <PageLayout
   title="Find Jobs"
   description="Discover opportunities to collaborate with clients from around the world on blockchain and web3 jobs."
   breadcrumbs={[
    { label: "Dashboard", href: "/dashboard" },
    { label: "Find Jobs" },
   ]}
  >
   <div className="space-y-6">
    <DataSection
     isLoading={isLoading}
     error={error}
     isEmpty={jobListings.length === 0}
     emptyTitle="No jobs found"
     emptyMessage="Check back later for new opportunities."
     onRetry={() => window.location.reload()}
    >
     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {jobListings.map((job) => (
       <JobCard
        key={job.id}
        id={job.id}
        title={job.title}
        description={job.description}
        postedDate={job.postedDate}
        tags={job.tags}
        budget={job.budget}
        onDetails={handleDetails}
       />
      ))}
     </div>
    </DataSection>
   </div>
  </PageLayout>
 );
};
