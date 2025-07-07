import React from "react";
import { User } from "lucide-react";
import { FreelancerSummary } from "@/types";
import { Button, Badge } from "@/components/UI";

interface FreelancerCardProps {
 freelancer: FreelancerSummary;
 onMessage?: (userId: string) => void;
 onView?: (freelancerId: string) => void;
 onHire?: (freelancerId: string) => void;
}

const getStatusVariant = (status: string) => {
 switch (status) {
  case "Online":
   return "default";
  case "Offline":
   return "destructive";
  case "Available":
   return "secondary";
  default:
   return "default";
 }
};

export const FreelancerCard = ({
 freelancer,
 onMessage,
 onView,
 onHire,
}: FreelancerCardProps) => {
 return (
  <tr className="border-b border-border">
   <td className="py-4 px-4 w-1/4 min-w-[200px]">
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
   <td className="py-4 px-4 w-1/4 min-w-[180px]">{freelancer.specialty}</td>
   {freelancer.rating && (
    <td className="py-4 px-4 w-20">
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
    <td className="py-4 px-4 w-20">
     <div className="text-sm">
      <span className="text-muted-foreground">Jobs: </span>
      {typeof freelancer.jobsCount === "number"
       ? freelancer.jobsCount
       : freelancer.jobsCount}
     </div>
    </td>
   )}
   {freelancer.status && (
    <td className="py-4 px-4 w-24">
     <Badge variant={getStatusVariant(freelancer.status)}>
      {freelancer.status}
     </Badge>
    </td>
   )}
   <td className="py-4 px-4 w-32">
    <div className="flex gap-2">
     {onMessage && (
      <Button
       onClick={() => onMessage(freelancer.id)}
       size="sm"
       variant="default"
      >
       Message
      </Button>
     )}
     {onView && (
      <Button onClick={() => onView(freelancer.id)} size="sm" variant="outline">
       View
      </Button>
     )}
     {onHire && (
      <Button onClick={() => onHire(freelancer.id)} size="sm" variant="default">
       Hire
      </Button>
     )}
    </div>
   </td>
  </tr>
 );
};
