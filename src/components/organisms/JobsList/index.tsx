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
