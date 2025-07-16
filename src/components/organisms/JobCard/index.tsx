import { User } from "lucide-react";
import { JobSummary } from "@/shared/models/dashboard";
import { Button, Card, CardContent } from "@/shared/ui";

interface JobCardProps {
 job?: JobSummary;
 id?: number | string;
 title?: string;
 description?: string;
 postedDate?: string;
 proposals?: number;
 tags?: string[];
 budget?: string;
 onMessage?: (userId: string) => void;
 onDetails?: (jobId: string | number) => void;
 showCreationDate?: boolean;
}

export const JobCard = ({
 job,
 id,
 title,
 description,
 postedDate,
 proposals,
 tags,
 budget,
 onMessage,
 onDetails,
 showCreationDate = false,
}: JobCardProps) => {
 const jobId = job?.id || id;
 const jobTitle = job?.title || title;
 const jobTags = tags;

 return (
  <Card>
   <CardContent className="p-6">
    {job ? (
     <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
      <div>
       <h3 className="text-lg font-semibold mb-1">{job.title}</h3>
       <div className="flex items-center gap-2 text-sm text-muted-foreground">
        <span>Freelancer: {job.freelancer.name}</span>
        <span>•</span>
        <span>{job.dueDate}</span>
       </div>
      </div>
      <div className="flex items-center gap-2">
       <span
        className={`px-2.5 py-1 text-xs font-medium rounded-full ${
         job.status === "In Progress"
          ? "bg-green-100 text-green-800"
          : job.status === "Just Started"
          ? "bg-blue-100 text-blue-800"
          : job.status === "Completed"
          ? "bg-gray-100 text-gray-800"
          : "bg-yellow-100 text-yellow-800"
        }`}
       >
        {job.status}
       </span>
       <span className="text-sm font-medium">{job.cost}</span>
      </div>
     </div>
    ) : (
     <div className="flex flex-col gap-4 mb-4">
      <div>
       <h3 className="text-lg font-semibold mb-1">{jobTitle}</h3>
       <p className="text-sm text-muted-foreground line-clamp-2">
        {description}
       </p>
      </div>
      <div className="flex flex-wrap gap-2">
       {jobTags?.map((tag, index) => (
        <span
         key={index}
         className="px-2 py-1 text-xs font-medium rounded-full bg-secondary/50"
        >
         {tag}
        </span>
       ))}
      </div>
      <div className="flex justify-between items-center text-sm">
       <span>{postedDate}</span>
       <span className="font-medium">{budget}</span>
      </div>
      {proposals !== undefined && (
       <div className="text-sm text-muted-foreground">
        Proposals: {proposals}
       </div>
      )}
     </div>
    )}

    {job && (
     <div className="space-y-3">
      <div>
       <div className="flex justify-between text-sm mb-1">
        <span className="text-muted-foreground">Progress</span>
        <span className="font-medium">{job.progress}%</span>
       </div>
       <div className="w-full h-2 bg-secondary rounded-full overflow-hidden">
        <div
         className="h-full bg-primary rounded-full"
         style={{ width: `${job.progress}%` }}
        ></div>
       </div>
      </div>

      <div className="flex justify-between items-center">
       {showCreationDate ? (
        <div className="flex">
         <div className="text-sm text-muted-foreground">
          Created: <span className="text-foreground">April 12, 2023</span>
         </div>
        </div>
       ) : (
        <div className="flex -space-x-2">
         <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center border-2 border-background">
          <User className="h-4 w-4" />
         </div>
        </div>
       )}

       <div className="flex gap-2">
        {onMessage && job.freelancer && (
         <Button
          onClick={() => onMessage(job.freelancer.id)}
          variant="secondary"
         >
          Message
         </Button>
        )}
        {onDetails && jobId && (
         <Button onClick={() => onDetails(jobId)}>Details</Button>
        )}
       </div>
      </div>
     </div>
    )}

    {!job && onDetails && jobId && (
     <Button onClick={() => onDetails(jobId)} className="w-full mt-2">
      View Details
     </Button>
    )}
   </CardContent>
  </Card>
 );
};
