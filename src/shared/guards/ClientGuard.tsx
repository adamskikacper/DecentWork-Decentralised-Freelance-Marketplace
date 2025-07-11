import React from "react";
import { RoleGuard } from "./RoleGuard";
import { UserRole } from "@/shared/constants";

export const ClientGuard = () => {
 return <RoleGuard allowedRoles={[UserRole.CLIENT]} />;
};
