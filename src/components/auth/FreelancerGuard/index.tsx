import React from "react";
import RoleGuard from "../RoleGuard";

/**
 * FreelancerGuard - Ensures the user has the freelancer role before rendering children
 * Redirects to dashboard home if user is not a freelancer
 */
const FreelancerGuard: React.FC = () => {
 return <RoleGuard allowedRoles={["freelancer"]} />;
};

export default FreelancerGuard;
