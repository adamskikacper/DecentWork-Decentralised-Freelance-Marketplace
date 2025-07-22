import { PageLayout } from "@/components/templates";
import { DashboardSection } from "@/components/organisms/DashboardSection";
import { FindJobsSection, MyJobsSection } from "./components";
import { Separator } from "@/shared/ui";

export const JobsPage = () => {
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
     title="My Jobs"
     description="View and manage your job applications and posted jobs."
    >
     <MyJobsSection />
    </DashboardSection>
   </div>
  </PageLayout>
 );
};
