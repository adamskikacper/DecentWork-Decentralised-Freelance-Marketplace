import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";
import LoadingScreen from "@/components/Common/LoadingScreen";

/**
 * AuthGuard - Ensures the user is authenticated before rendering children
 * Redirects to login if unauthenticated
 */
const AuthGuard: React.FC = () => {
 const { user, loading } = useAuth();

 if (loading) {
  return <LoadingScreen />;
 }

 if (!user) {
  return <Navigate to="/login" replace />;
 }

 return <Outlet />;
};

export default AuthGuard;
