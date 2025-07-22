import { User, Clock } from "lucide-react";
import { Button } from "@/shared/ui";
import { JobSummary } from "@/shared/models/dashboard";

interface JobActionsProps {
 job?: JobSummary;
 jobId?: string | number;
 showCreationDate?: boolean;
 onMessage?: (userId: string) => void;
 onDetails?: (jobId: string | number) => void;
}

export const JobActions = ({
 job,
 jobId,
 showCreationDate = false,
 onMessage,
 onDetails,
}: JobActionsProps) => {
 return (
  <div className="flex justify-between items-center pt-4 mt-auto ">
   {job ? (
    <>
     {showCreationDate ? (
      <div className="flex items-center gap-1.5 text-muted-foreground">
       <Clock className="h-4 w-4" />
       <span className="text-label-md">Created: April 12, 2023</span>
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
        variant="outline"
        size="sm"
       >
        Message
       </Button>
      )}
      {onDetails && jobId && (
       <Button onClick={() => onDetails(jobId)} size="sm">
        Details
       </Button>
      )}
     </div>
    </>
   ) : (
    onDetails &&
    jobId && (
     <Button onClick={() => onDetails(jobId)} className="w-full">
      View Details
     </Button>
    )
   )}
  </div>
 );
};
