import React, { useEffect, useCallback, useState } from "react";
import { useAuth } from "../../hooks/useAuth";
import { Navigate, useNavigate } from "react-router-dom";
import { isValidUser } from "../../utils/userValidation";
import LoadingScreen from "@/components/common/LoadingScreen";
import ClientDashboard from "./client/ClientDashboard";
import FreelancerDashboard from "./freelancer/FreelancerDashboard";
import Breadcrumbs from "@/components/Breadcrumbs";
import { NAV_LINKS } from "@/constants";

/**
 * Dashboard - Unified dashboard page for both client and freelancer users
 */
const Dashboard = () => {
 const { user, userType, loading } = useAuth();
 const navigate = useNavigate();
 const [activeSection, setActiveSection] = useState("dashboard");

 // Navigation handlers - defined before early returns to avoid React Hook conditional calls
 const handleSectionChange = useCallback((section: string) => {
  setActiveSection(section);
 }, []);

 const handleProjectDetails = useCallback(
  (projectId: string) => {
   navigate(`/dashboard/projects/${projectId}`);
  },
  [navigate]
 );

 const handleMessage = useCallback(
  (userId: string) => {
   navigate(`/dashboard/messages/${userId}`);
  },
  [navigate]
 );

 const handleFreelancerDetails = useCallback(
  (freelancerId: string) => {
   navigate(`/dashboard/freelancers/${freelancerId}`);
  },
  [navigate]
 );

 const handleClientDetails = useCallback(
  (clientId: string) => {
   navigate(`/clients/${clientId}`);
  },
  [navigate]
 );

 // Add debug logging
 useEffect(() => {
  console.log("Dashboard - Current auth state:", {
   user,
   userType,
   loading,
   isValidUser: user ? isValidUser(user) : false,
  });
 }, [user, userType, loading]);

 // Early return with loading state
 if (loading) {
  return <LoadingScreen />;
 }

 // Early return with redirect for unauthenticated users
 if (!user) {
  console.log("Access denied: User not authenticated");
  return <Navigate to="/login" replace />;
 }

 // Check that userType is valid (client or freelancer)
 if (userType !== "client" && userType !== "freelancer") {
  console.log("Access denied: Invalid user type", { userType });
  return <Navigate to="/login" replace />;
 }

 return (
  <>
   {/* Render the appropriate dashboard based on user type */}
   {userType === "client" ? (
    <ClientDashboard
     activeSection={activeSection}
     user={user}
     onMessage={handleMessage}
     onProjectDetails={handleProjectDetails}
     onFreelancerDetails={handleFreelancerDetails}
    />
   ) : (
    <FreelancerDashboard
     activeSection={activeSection}
     user={user}
     onMessage={handleMessage}
     onProjectDetails={handleProjectDetails}
     onClientDetails={handleClientDetails}
    />
   )}
  </>
 );
};

export default Dashboard;
