import React from "react";
import { PageLayout } from "@/components/templates";
import { useAuth } from "@/app/providers/AuthProvider";
import {
 FreelancerProfile,
 ClientProfile,
 DashboardSection,
} from "@/components";

interface ProfilePageProps {
 user?: { email?: string; uid?: string } | null;
}

export const ProfilePage = ({ user }: ProfilePageProps) => {
 const { userType } = useAuth();

 return (
  <PageLayout
   breadcrumbs={[
    { label: "Dashboard", href: "/dashboard" },
    { label: "Profile" },
   ]}
  >
   <DashboardSection
    title="Profile"
    description="Manage your profile information."
   >
    {userType === "freelancer" && <FreelancerProfile />}
    {userType === "client" && <ClientProfile />}
   </DashboardSection>
  </PageLayout>
 );
};
