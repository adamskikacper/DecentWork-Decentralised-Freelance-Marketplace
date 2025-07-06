import React from "react";
import { DashboardSection } from "@/features/dashboard";
import { Breadcrumbs } from "@/components/Layout";
interface ProfileContentProps {
 user?: any;
}
export const ProfileContent: React.FC<ProfileContentProps> = ({ user }) => {
 return (
  <div className="space-y-8">
   <Breadcrumbs
    items={[{ label: "Dashboard", path: "/dashboard" }, { label: "Profile" }]}
   />

   <DashboardSection
    title="Profile Information"
    description="Your personal details"
   >
    <div className="p-6">
     <div className="space-y-4">
      <div>
       <h3 className="text-sm font-medium text-muted-foreground">Email</h3>
       <p>{user?.email || "Not available"}</p>
      </div>
      <div>
       <h3 className="text-sm font-medium text-muted-foreground">User ID</h3>
       <p>{user?.uid || "Not available"}</p>
      </div>
     </div>
    </div>
   </DashboardSection>
  </div>
 );
};
