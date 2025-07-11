import React from "react";
import { useAuth } from "@/app/providers/AuthProvider";
import { Navigate } from "react-router-dom";
import { DashboardLayout } from "@/components";
import { LoadingScreen } from "@/shared/ui";

export const DashboardRoute: React.FC = () => {
 const { user, loading } = useAuth();

 if (loading) {
  return <LoadingScreen />;
 }

 if (!user) {
  return <Navigate to="/login" replace />;
 }

 return <DashboardLayout />;
};
