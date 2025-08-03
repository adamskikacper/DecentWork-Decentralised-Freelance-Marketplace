import { PageLayout } from "@/components/templates";
import { DashboardSection, JobsList } from "@/components/organisms";
import { FindJobsSection, MyJobsSection } from "./components";
import { Separator } from "@/shared/ui";
import { useActiveJobs, useNavigation } from "@/shared/hooks";

export const JobsPage = () => {
 const { goToJobDetails } = useNavigation();
 const {
  jobs: activeJobs,
  isLoading: activeJobsLoading,
  error: activeJobsError,
 } = useActiveJobs();

 const handleJobDetails = (jobId: string) => {
  goToJobDetails(jobId);
 };

 return (
  <PageLayout
   breadcrumbs={[{ label: "Dashboard", href: "/dashboard" }, { label: "Jobs" }]}
  >
   <div className="space-y-8">
    <DashboardSection
     title="Find Jobs"
     description="Discover opportunities to collaborate with clients from around the world on blockchain and web3 jobs."
    >
     <FindJobsSection />
    </DashboardSection>
    <Separator />
    <DashboardSection
     title="Active Jobs"
     description="Your current and recently completed jobs"
     isLoading={activeJobsLoading}
    >
     <JobsList
      jobs={activeJobs}
      onDetails={handleJobDetails}
      error={activeJobsError}
      isLoading={activeJobsLoading}
     />
    </DashboardSection>
    <Separator />
    <DashboardSection
     title="My Jobs"
     description="View and manage your job applications and posted jobs."
    >
     <MyJobsSection />
    </DashboardSection>
   </div>
  </PageLayout>
 );
};
