import React from "react";
import { JobCard } from "../JobCard";

interface AvailableJob {
 id: string | number;
 title: string;
 description: string;
 postedDate: string;
 proposals: number;
 tags: string[];
 budget: string;
}

export interface AvailableJobsListProps {
 jobs: AvailableJob[];
 onDetails?: (jobId: string | number) => void;
 className?: string;
}

export const AvailableJobsList: React.FC<AvailableJobsListProps> = ({
 jobs,
 onDetails,
 className = "",
}) => {
 return (
  <div
   className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ${className}`}
  >
   {jobs.map((job) => (
    <JobCard
     key={job.id}
     id={job.id}
     title={job.title}
     description={job.description}
     postedDate={job.postedDate}
     proposals={job.proposals}
     tags={job.tags}
     budget={job.budget}
     onDetails={onDetails}
    />
   ))}
  </div>
 );
};
