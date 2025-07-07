import React from "react";
import { Breadcrumbs } from "@/components/Layout";
import { FreelancerDetails as FreelancerDetailsComponent } from "@/components/Profile";

export const FreelancerDetails: React.FC = () => {
 return (
  <div className="space-y-8">
   <Breadcrumbs
    items={[
     { label: "Dashboard", path: "/dashboard" },
     { label: "Freelancers", path: "/dashboard/freelancers" },
     { label: "Freelancer Profile" },
    ]}
   />
   <FreelancerDetailsComponent />
  </div>
 );
};
