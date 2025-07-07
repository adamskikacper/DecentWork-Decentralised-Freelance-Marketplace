import React from "react";
import { DashboardSection } from "@/components/Dashboard/Views/DashboardSection";
import { Breadcrumbs } from "@/components/Layout/Breadcrumbs";
export const Messages: React.FC = () => {
 return (
  <div className="space-y-8">
   <Breadcrumbs
    items={[{ label: "Dashboard", path: "/dashboard" }, { label: "Messages" }]}
   />
   <DashboardSection title="Messages" description="Your conversations">
    <div className="p-6 text-center text-muted-foreground">
     <p>Message functionality will be implemented in a future update.</p>
    </div>
   </DashboardSection>
  </div>
 );
};
