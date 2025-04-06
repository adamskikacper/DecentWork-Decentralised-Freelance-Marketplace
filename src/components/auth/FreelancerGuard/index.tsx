import React from "react";
import RoleGuard from "../RoleGuard";

/**
 * FreelancerGuard - Ensures the user is a freelancer before rendering children
 */
const FreelancerGuard: React.FC = () => {
 return <RoleGuard allowedRoles={["freelancer"]} />;
};

export default FreelancerGuard;
