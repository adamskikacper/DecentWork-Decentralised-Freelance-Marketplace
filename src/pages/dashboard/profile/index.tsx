import React from "react";
import { PageLayout } from "@/components/templates";
import { useAuth } from "@/app/providers/AuthProvider";
import { FreelancerProfile, ClientProfile } from "@/components";

interface ProfilePageProps {
 user?: { email?: string; uid?: string } | null;
}

export const ProfilePage = ({ user }: ProfilePageProps) => {
 const { userType } = useAuth();

 return (
  <PageLayout
   title="Profile"
   description="Manage your profile and account settings."
   breadcrumbs={[
    { label: "Dashboard", href: "/dashboard" },
    { label: "Profile" },
   ]}
  >
   <div className="pb-8">
    {userType === "freelancer" && <FreelancerProfile />}
    {userType === "client" && <ClientProfile />}
   </div>
  </PageLayout>
 );
};
