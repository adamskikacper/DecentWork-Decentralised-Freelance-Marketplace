import React from "react";
import { RoleGuard } from "./RoleGuard";
import { UserRole } from "@/shared/constants";

export const FreelancerGuard: React.FC = () => {
 return <RoleGuard allowedRoles={[UserRole.FREELANCER]} />;
};
