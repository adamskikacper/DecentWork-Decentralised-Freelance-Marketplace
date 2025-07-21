import { Badge } from "@/shared/ui";
import { JobSummary } from "@/shared/models/dashboard";

interface JobHeaderProps {
 job?: JobSummary;
 title?: string;
 showFreelancerInfo?: boolean;
}

export const JobHeader = ({
 job,
 title,
 showFreelancerInfo = false,
}: JobHeaderProps) => {
 const jobTitle = job?.title || title;

 return (
  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
   <div>
    <h3 className="text-heading-4 md:text-heading-5 mb-2">{jobTitle}</h3>
    {showFreelancerInfo && job && (
     <div className="flex items-center gap-2 text-label-md text-muted-foreground">
      <span>Freelancer: {job.freelancer.name}</span>
      <span>•</span>
      <span>{job.dueDate}</span>
     </div>
    )}
   </div>
   {job && (
    <div className="flex items-center gap-3">
     <Badge
      variant={
       job.status === "In Progress"
        ? "default"
        : job.status === "Just Started"
        ? "secondary"
        : job.status === "Completed"
        ? "outline"
        : "secondary"
      }
      className={
       job.status === "In Progress"
        ? "bg-green-100 text-green-800 border-green-200 hover:bg-green-200"
        : job.status === "Just Started"
        ? "bg-blue-100 text-blue-800 border-blue-200 hover:bg-blue-200"
        : job.status === "Completed"
        ? "bg-gray-100 text-gray-800 border-gray-200 hover:bg-gray-200"
        : "bg-yellow-100 text-yellow-800 border-yellow-200 hover:bg-yellow-200"
      }
     >
      {job.status}
     </Badge>
     <span className="text-label-md font-medium">{job.cost}</span>
    </div>
   )}
  </div>
 );
};
