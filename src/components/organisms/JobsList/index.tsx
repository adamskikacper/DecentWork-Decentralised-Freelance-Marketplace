import { JobSummary } from "@/shared/models/dashboard";
import { JobCard } from "@/components/organisms/JobCard";
import { NoDataCard } from "@/components/atoms";

import { Calendar } from "lucide-react";
import { NO_DATA_CONFIGS } from "@/shared/constants";

interface JobsListProps {
 jobs: JobSummary[];
 onMessage?: (userId: string) => void;
 onDetails?: (jobId: string) => void;
 showCreationDate?: boolean;
 title?: string;
 showViewAll?: boolean;
 onViewAll?: () => void;
 className?: string;
 error?: string | null;
 isLoading?: boolean;
}

export const JobsList = ({
 jobs,
 onMessage,
 onDetails,
 showCreationDate = false,
 className = "",
 error,
 isLoading = false,
}: JobsListProps) => {
 if (!isLoading && !error && jobs.length === 0) {
  return (
   <NoDataCard
    title={NO_DATA_CONFIGS.ACTIVE_JOBS.title}
    description={NO_DATA_CONFIGS.ACTIVE_JOBS.description}
    icon={<Calendar className="w-12 h-12" />}
   />
  );
 }

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
