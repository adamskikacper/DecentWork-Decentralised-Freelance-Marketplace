import React from "react";
import { FreelancerSummary } from "@/types";
import FreelancerCard from "../ProfileCard/FreelancerCard";

interface FreelancerTableProps {
 freelancers: FreelancerSummary[];
 showRating?: boolean;
 showJobsCount?: boolean;
 showStatus?: boolean;
 onMessage?: (userId: string) => void;
 onView?: (freelancerId: string) => void;
 onHire?: (freelancerId: string) => void;
}

const FreelancerTable: React.FC<FreelancerTableProps> = ({
 freelancers,
 showRating = true,
 showJobsCount = true,
 showStatus = true,
 onMessage,
 onView,
 onHire,
}) => {
 return (
  <div className="glass-card rounded-xl overflow-hidden">
   <div className="overflow-x-auto">
    <table className="w-full">
     <thead>
      <tr className="border-b border-border">
       <th className="text-left py-4 px-4 text-sm font-medium">Freelancer</th>
       <th className="text-left py-4 px-4 text-sm font-medium">Specialty</th>
       {showRating && (
        <th className="text-left py-4 px-4 text-sm font-medium">Rating</th>
       )}
       {showJobsCount && (
        <th className="text-left py-4 px-4 text-sm font-medium">Jobs</th>
       )}
       {showStatus && (
        <th className="text-left py-4 px-4 text-sm font-medium">Status</th>
       )}
       <th className="text-left py-4 px-4 text-sm font-medium">Action</th>
      </tr>
     </thead>
     <tbody>
      {freelancers.map((freelancer) => (
       <FreelancerCard
        key={freelancer.id}
        freelancer={freelancer}
        onMessage={onMessage}
        onView={onView}
        onHire={onHire}
       />
      ))}
     </tbody>
    </table>
   </div>
  </div>
 );
};

export default FreelancerTable;
