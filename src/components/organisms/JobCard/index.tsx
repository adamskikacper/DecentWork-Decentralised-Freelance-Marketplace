import { JobSummary } from "@/shared/models/dashboard";
import { Card, CardContent } from "@/shared/ui";
import {
 JobHeader,
 JobContent,
 SkillsList,
 JobMeta,
 ProgressSection,
 JobActions,
} from "./components";

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

 return (
  <Card className="flex flex-col h-full min-h-[300px]">
   <CardContent className="p-6 flex flex-col h-full">
    <div className="space-y-4">
     {job ? (
      <>
       <JobHeader job={job} showFreelancerInfo={true} />
       <ProgressSection progress={job.progress} />
      </>
     ) : (
      <>
       <JobHeader title={title} />
       <JobContent description={description} />
       <SkillsList skills={tags} />
      </>
     )}
    </div>

    <div className="mt-auto space-y-0 pt-4">
     {!job && (
      <JobMeta postedDate={postedDate} budget={budget} proposals={proposals} />
     )}
     <JobActions
      job={job}
      jobId={jobId}
      showCreationDate={showCreationDate}
      onMessage={onMessage}
      onDetails={onDetails}
     />
    </div>
   </CardContent>
  </Card>
 );
};
