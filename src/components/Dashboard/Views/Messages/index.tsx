import React from "react";
import { DashboardSection } from "@/components/Dashboard";
import { Breadcrumbs } from "@/components/Layout";
export const Messages: React.FC = () => {
 return (
  <div className="space-y-8">
   <Breadcrumbs
    items={[{ label: "Dashboard", path: "/dashboard" }, { label: "Messages" }]}
   />
   <DashboardSection
    title="Messages"
    description="Your conversations"
   ></DashboardSection>
  </div>
 );
};
