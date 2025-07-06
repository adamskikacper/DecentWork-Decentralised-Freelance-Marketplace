import React from "react";
import { useParams } from "react-router-dom";
import { DashboardSection } from "@/components/Dashboard";
import { Breadcrumbs } from "@/components/Layout";
export const FreelancerDetails: React.FC = () => {
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
     <p className="text-muted-foreground mt-1">Freelancer ID: {freelancerId}</p>
    </div>
   </div>
  </div>
 );
};
