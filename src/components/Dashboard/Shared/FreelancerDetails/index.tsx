import React from "react";
import { useParams } from "react-router-dom";
import { DashboardSection } from "../../Common";
import Breadcrumbs from "@/components/Layout/Breadcrumbs";
const FreelancerDetails: React.FC = () => {
  const { freelancerId } = useParams<{ freelancerId: string }>();
  return (
    <div className="space-y-8">
      <Breadcrumbs
        items={[
          { label: "Dashboard", path: "/dashboard" },
          { label: "Freelancers", path: "/dashboard/freelancers" },
          { label: `Freelancer ${freelancerId}` },
        ]}
      />
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Freelancer Profile</h1>
          <p className="text-muted-foreground mt-1">
            Freelancer ID: {freelancerId}
          </p>
        </div>
      </div>
      <DashboardSection
        title="Freelancer Information"
        description="Details about this freelancer"
      >
        <div className="p-6 text-center text-muted-foreground">
          <p>Freelancer details functionality will be implemented in a future update.</p>
        </div>
      </DashboardSection>
    </div>
  );
};
export default FreelancerDetails;
