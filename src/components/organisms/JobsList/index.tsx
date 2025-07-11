import React from "react";
import { JobSummary } from "@/shared/models";
import { JobCard } from "@/components/organisms/JobCard";

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

export const JobsList: React.FC<JobsListProps> = ({
 jobs,
 onMessage,
 onDetails,
 showCreationDate = false,
 title,
 showViewAll = false,
 onViewAll,
 className = "",
}) => {
 return (
  <div className={`slide-in ${className}`}>
   {(title || showViewAll) && (
    <div className="flex justify-between items-center mb-6">
     {title && <h2 className="text-xl font-bold">{title}</h2>}
     {showViewAll && (
      <button className="text-sm text-primary font-medium" onClick={onViewAll}>
       View all
      </button>
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
