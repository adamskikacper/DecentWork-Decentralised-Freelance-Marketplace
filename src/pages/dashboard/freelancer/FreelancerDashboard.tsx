import React from "react";
import { User as UserType } from "../../../types";
import FreelancerDashboardHome from "./FreelancerDashboardHome";
import FreelancerFindJobs from "./FreelancerFindJobs";
import FreelancerMyContracts from "./FreelancerMyContracts";

interface FreelancerDashboardProps {
 activeSection: string;
 user: Partial<UserType>;
 onMessage: (userId: string) => void;
 onProjectDetails: (projectId: string) => void;
 onClientDetails: (clientId: string) => void;
}

const FreelancerDashboard: React.FC<FreelancerDashboardProps> = ({
 activeSection,
 user,
 onMessage,
 onProjectDetails,
 onClientDetails,
}) => {
 // Render different content based on the active section
 switch (activeSection) {
  case "dashboard":
   return (
    <FreelancerDashboardHome
     user={user}
     onMessage={onMessage}
     onProjectDetails={onProjectDetails}
     onClientDetails={onClientDetails}
    />
   );
  case "findJobs":
   return <FreelancerFindJobs />;
  case "myProjects":
   return <FreelancerMyContracts />;
  default:
   return null;
 }
};

export default FreelancerDashboard;
