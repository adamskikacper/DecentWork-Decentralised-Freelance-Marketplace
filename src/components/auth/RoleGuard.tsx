import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";

type RoleGuardProps = {
 allowedRoles: ("client" | "freelancer")[];
};

/**
 * RoleGuard - Ensures the user has one of the allowed roles before rendering children
 * Redirects to dashboard home if user's role is not allowed
 */
const RoleGuard: React.FC<RoleGuardProps> = ({ allowedRoles }) => {
 const { userType } = useAuth();

 if (!userType || !allowedRoles.includes(userType)) {
  return <Navigate to="/dashboard" replace />;
 }

 return <Outlet />;
};

export default RoleGuard;
