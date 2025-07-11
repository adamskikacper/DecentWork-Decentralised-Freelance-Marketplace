import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "@/app/providers/AuthProvider";

type RoleGuardProps = {
 allowedRoles: ("client" | "freelancer")[];
};

const RoleGuard: React.FC<RoleGuardProps> = ({ allowedRoles }) => {
 const { userType } = useAuth();

 if (!userType || !allowedRoles.includes(userType)) {
  return <Navigate to="/dashboard" replace />;
 }

 return <Outlet />;
};

export default RoleGuard;
