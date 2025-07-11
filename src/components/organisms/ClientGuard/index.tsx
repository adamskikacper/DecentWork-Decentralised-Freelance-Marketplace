import React from "react";
import RoleGuard from "../RoleGuard";

/**
 * ClientGuard - Ensures the user has the client role before rendering children
 * Redirects to dashboard home if user is not a client
 */
const ClientGuard: React.FC = () => {
 return <RoleGuard allowedRoles={["client"]} />;
};

export default ClientGuard;
