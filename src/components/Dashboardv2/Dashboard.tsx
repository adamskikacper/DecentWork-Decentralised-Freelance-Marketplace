import React from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";
import { LoadingScreen } from "@/components/Common";

/**
 * Dashboard - Main dashboard component that redirects to the appropriate dashboard based on user type
 */
const Dashboard = () => {
  const { user, userType, loading } = useAuth();
  const navigate = useNavigate();

  // Early return with loading state
  if (loading) {
    return <LoadingScreen />;
  }

  // Early return with redirect for unauthenticated users
  if (!user) {
    console.log("Access denied: User not authenticated");
    return <Navigate to="/login" replace />;
  }

  // Redirect based on user type
  if (userType === "client") {
    return <Navigate to="/dashboard/home" replace />;
  } else if (userType === "freelancer") {
    return <Navigate to="/dashboard/freelancer/home" replace />;
  } else {
    console.log("Access denied: Invalid user type", { userType });
    return <Navigate to="/login" replace />;
  }
};

export default Dashboard;
