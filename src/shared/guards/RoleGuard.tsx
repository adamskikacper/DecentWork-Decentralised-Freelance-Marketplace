import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "@/app/providers/AuthProvider";
import { NAV_LINKS, UserRole } from "@/shared/constants";

type RoleGuardProps = {
 allowedRoles: UserRole[];
};

export const RoleGuard: React.FC<RoleGuardProps> = ({ allowedRoles }) => {
 const { userType } = useAuth();

 if (!userType || !allowedRoles.includes(userType as UserRole)) {
  return <Navigate to={NAV_LINKS.DASHBOARD} replace />;
 }

 return <Outlet />;
};
