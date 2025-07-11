import React from "react";
import { Breadcrumbs } from "@/shared/ui";
import { useAuth } from "@/app/providers/AuthProvider";
import { FreelancerProfile, ClientProfile } from "@/components";

interface ProfilePageProps {
 user?: { email?: string; uid?: string } | null;
}

export const ProfilePage: React.FC<ProfilePageProps> = ({ user }) => {
 const { userType } = useAuth();

 return (
  <div className="space-y-8">
   <Breadcrumbs
    items={[{ label: "Dashboard", path: "/dashboard" }, { label: "Profile" }]}
   />

   <div className="pb-8">
    {userType === "freelancer" && <FreelancerProfile />}
    {userType === "client" && <ClientProfile />}
   </div>
  </div>
 );
};
