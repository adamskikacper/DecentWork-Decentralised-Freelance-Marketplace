import React from "react";
import { User as UserType } from "../../../types";
import FreelancerDashboardHome from "./FreelancerDashboardHome";
import FreelancerFindJobs from "./FreelancerFindJobs";
import FreelancerMyContracts from "./FreelancerMyContracts";

interface FreelancerDashboardProps {
 activeSection: string;
 user: Partial<UserType>;
 onMessage: (userId: string) => void;
 onJobDetails: (jobId: string) => void;
 onClientDetails: (clientId: string) => void;
}

const FreelancerDashboard: React.FC<FreelancerDashboardProps> = ({
 activeSection,
 user,
 onMessage,
 onJobDetails,
 onClientDetails,
}) => {
 // Render different content based on the active section
 switch (activeSection) {
  case "dashboard":
   return (
    <FreelancerDashboardHome
     user={user}
     onMessage={onMessage}
     onJobDetails={onJobDetails}
     onClientDetails={onClientDetails}
    />
   );
  case "findJobs":
   return <FreelancerFindJobs />;
  case "myJobs":
   return (
    <FreelancerMyContracts
     onMessage={onMessage}
     onJobDetails={onJobDetails}
     onClientDetails={onClientDetails}
    />
   );
  default:
   return null;
 }
};

export default FreelancerDashboard;
