import React from "react";
import { FreelancerSummary } from "@/shared/models/dashboard";
import { FreelancerCard } from "../FreelancerCard";
import { NoDataCard } from "@/components/atoms";
import { Card } from "@/shared/ui/Card";
import { User } from "lucide-react";

interface FreelancerTableProps {
 freelancers: FreelancerSummary[];
 showRating?: boolean;
 showJobsCount?: boolean;
 showStatus?: boolean;
 onMessage?: (userId: string) => void;
 onView?: (freelancerId: string) => void;
 onHire?: (freelancerId: string) => void;
}

export const FreelancerTable = ({
 freelancers,
 showRating = true,
 showJobsCount = true,
 showStatus = true,
 onView,
 onMessage,
 onHire,
}: FreelancerTableProps) => {
 if (freelancers.length === 0) {
  return (
   <NoDataCard
    title="No freelancers found"
    description="There are no freelancers to display in this category."
    icon={<User className="w-12 h-12" />}
   />
  );
 }

 return (
  <Card className="overflow-hidden">
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
  </Card>
 );
};
