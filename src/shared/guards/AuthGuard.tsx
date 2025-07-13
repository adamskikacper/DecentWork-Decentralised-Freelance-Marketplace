import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "@/app/providers/AuthProvider";
import { LoadingScreen } from "@/shared/ui";

export const AuthGuard = () => {
 const { user, loading } = useAuth();

 if (loading) {
  return <LoadingScreen />;
 }

 if (!user) {
  return <Navigate to="/login" replace />;
 }

 return <Outlet />;
};
