import React from "react";
import { DashboardSection } from "@/components/Dashboard";
import { Breadcrumbs } from "@/components/Layout";
export const Messages: React.FC = () => {
 return (
  <div className="space-y-8">
   <Breadcrumbs
    items={[{ label: "Dashboard", path: "/dashboard" }, { label: "Messages" }]}
   />
   <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
    <div>
     <h1 className="text-2xl font-bold tracking-tight">Messages</h1>
     <p className="text-muted-foreground mt-1">
      Communicate with clients and freelancers
     </p>
    </div>
   </div>
   <DashboardSection title="Messages" description="Your conversations">
    <div className="p-6 text-center text-muted-foreground">
     <p>Message functionality will be implemented in a future update.</p>
    </div>
   </DashboardSection>
  </div>
 );
};
