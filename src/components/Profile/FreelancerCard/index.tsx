import React from "react";
import { User } from "lucide-react";
import { FreelancerSummary } from "@/types";

interface FreelancerCardProps {
 freelancer: FreelancerSummary;
 onMessage?: (userId: string) => void;
 onView?: (freelancerId: string) => void;
 onHire?: (freelancerId: string) => void;
}

export const FreelancerCard = ({
 freelancer,
 onMessage,
 onView,
 onHire,
}: FreelancerCardProps) => {
 return (
  <tr className="border-b border-border">
   <td className="py-4 px-4">
    <div className="flex items-center gap-3">
     <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center">
      <User className="h-4 w-4" />
     </div>
     <div>
      <p className="font-medium">{freelancer.name}</p>
      <p className="text-xs text-muted-foreground">{freelancer.title}</p>
     </div>
    </div>
   </td>
   <td className="py-4 px-4">{freelancer.specialty}</td>
   {freelancer.rating && (
    <td className="py-4 px-4">
     <div className="flex items-center">
      <span className="font-medium mr-1">{freelancer.rating}</span>
      <svg
       width="14"
       height="14"
       viewBox="0 0 24 24"
       fill="#FFD700"
       xmlns="http://www.w3.org/2000/svg"
      >
       <path
        d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
        stroke="#FFD700"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
       />
      </svg>
     </div>
    </td>
   )}
   {freelancer.jobsCount !== undefined && (
    <td className="py-4 px-4">
     <div className="mt-2 space-y-1">
      <div className="text-sm">
       <span className="text-muted-foreground">Jobs: </span>
       {typeof freelancer.jobsCount === "number"
        ? freelancer.jobsCount
        : freelancer.jobsCount}
      </div>
     </div>
    </td>
   )}
   {freelancer.status && (
    <td className="py-4 px-4">
     <span className="px-2.5 py-1 text-xs font-medium rounded-full bg-green-100 text-green-800">
      {freelancer.status}
     </span>
    </td>
   )}
   <td className="py-4 px-4">
    <div className="flex gap-2">
     {onMessage && (
      <button
       onClick={() => onMessage(freelancer.id)}
       className="px-3 py-1 text-xs font-medium rounded-md bg-secondary text-foreground hover:bg-secondary/80 transition-colors"
      >
       Message
      </button>
     )}
     {onView && (
      <button
       onClick={() => onView(freelancer.id)}
       className="px-3 py-1 text-xs font-medium rounded-md bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
      >
       View
      </button>
     )}
     {onHire && (
      <button
       onClick={() => onHire(freelancer.id)}
       className="px-4 py-2 text-sm font-medium rounded-md bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
      >
       Hire
      </button>
     )}
    </div>
   </td>
  </tr>
 );
};
