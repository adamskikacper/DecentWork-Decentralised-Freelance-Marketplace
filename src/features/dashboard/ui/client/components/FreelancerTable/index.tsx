import React from "react";
import { FreelancerSummary } from "@/shared/types";
import { FreelancerCard } from "../FreelancerCard";

interface FreelancerTableProps {
 freelancers: FreelancerSummary[];
 showRating?: boolean;
 showJobsCount?: boolean;
 showStatus?: boolean;
 onMessage?: (userId: string) => void;
 onView?: (freelancerId: string) => void;
 onHire?: (freelancerId: string) => void;
}

export const FreelancerTable: React.FC<FreelancerTableProps> = ({
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
    <table className="w-full table-fixed">
     <thead>
      <tr className="border-b border-border">
       <th className="text-left py-4 px-4 text-sm font-medium w-1/4 min-w-[200px]">
        Freelancer
       </th>
       <th className="text-left py-4 px-4 text-sm font-medium w-1/4 min-w-[180px]">
        Specialty
       </th>
       {showRating && (
        <th className="text-left py-4 px-4 text-sm font-medium w-20">Rating</th>
       )}
       {showJobsCount && (
        <th className="text-left py-4 px-4 text-sm font-medium w-20">Jobs</th>
       )}
       {showStatus && (
        <th className="text-left py-4 px-4 text-sm font-medium w-24">Status</th>
       )}
       <th className="text-left py-4 px-4 text-sm font-medium w-32">Action</th>
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
