import React from "react";
import { DashboardSection } from "../../Common";
import { Breadcrumbs } from "@/components/Layout";
interface ProfileContentProps {
 user?: any;
}
const ProfileContent: React.FC<ProfileContentProps> = ({ user }) => {
 return (
  <div className="space-y-8">
   <Breadcrumbs
    items={[{ label: "Dashboard", path: "/dashboard" }, { label: "Profile" }]}
   />
   <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
    <div>
     <h1 className="text-2xl font-bold tracking-tight">My Profile</h1>
     <p className="text-muted-foreground mt-1">
      Manage your personal information and settings
     </p>
    </div>
   </div>
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
   <DashboardSection
    title="Account Settings"
    description="Manage your account preferences"
   >
    <div className="p-6 text-center text-muted-foreground">
     <p>
      Account settings functionality will be implemented in a future update.
     </p>
    </div>
   </DashboardSection>
  </div>
 );
};
export default ProfileContent;
