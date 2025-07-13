import React from "react";
import { JobSummary } from "@/shared/models/dashboard";
import { JobCard } from "@/components/organisms/JobCard";
import { Button } from "@/shared/ui";

interface JobsListProps {
 jobs: JobSummary[];
 onMessage?: (userId: string) => void;
 onDetails?: (jobId: string) => void;
 showCreationDate?: boolean;
 title?: string;
 showViewAll?: boolean;
 onViewAll?: () => void;
 className?: string;
}

export const JobsList = ({
 jobs,
 onMessage,
 onDetails,
 showCreationDate = false,
 title,
 showViewAll = false,
 onViewAll,
 className = "",
}: JobsListProps) => {
 return (
  <div className={`slide-in ${className}`}>
   {(title || showViewAll) && (
    <div className="flex justify-between items-center mb-6">
     {title && <h2 className="text-xl font-bold">{title}</h2>}
     {showViewAll && (
      <Button variant="ghost" className="text-sm text-primary font-medium" onClick={onViewAll}>
       View all
      </Button>
     )}
    </div>
   )}

   <div className="space-y-4">
    {jobs.map((job) => (
     <JobCard
      key={job.id}
      job={job}
      onMessage={onMessage}
      onDetails={onDetails}
      showCreationDate={showCreationDate}
     />
    ))}
   </div>
  </div>
 );
};
