import React from "react";
import { User as UserType } from "../../../types";
import ClientDashboardHome from "./ClientDashboardHome";
import ClientMyFreelancers from "./ClientMyFreelancers";
import ClientMyJobs from "./ClientMyJobs";
import ClientPostJob from "./ClientPostJob";

import ProfileContent from "../../dashboard/ProfileContent";

interface ClientDashboardProps {
 activeSection: string;
 user: Partial<UserType>;
 onMessage: (userId: string) => void;
 onJobDetails: (jobId: string) => void;
 onFreelancerDetails: (freelancerId: string) => void;
}

const ClientDashboard: React.FC<ClientDashboardProps> = ({
 activeSection,
 user,
 onMessage,
 onJobDetails,
 onFreelancerDetails,
}) => {
 // Render different content based on the active section
 switch (activeSection) {
  case "dashboard":
   return (
    <ClientDashboardHome
     user={user}
     onMessage={onMessage}
     onJobDetails={onJobDetails}
    />
   );
  case "myFreelancers":
   return (
    <ClientMyFreelancers
     onMessage={onMessage}
     onFreelancerDetails={onFreelancerDetails}
    />
   );
  case "myJobs":
   return <ClientMyJobs onMessage={onMessage} onJobDetails={onJobDetails} />;
  case "postJob":
   return <ClientPostJob />;
  case "profile":
   return <ProfileContent user={user} />;
  default:
   return null;
 }
};

export default ClientDashboard;
