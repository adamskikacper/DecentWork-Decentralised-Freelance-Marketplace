import React from "react";
import RoleGuard from "./RoleGuard";

/**
 * ClientGuard - Ensures the user is a client before rendering children
 */
const ClientGuard: React.FC = () => {
 return <RoleGuard allowedRoles={["client"]} />;
};

export default ClientGuard;
