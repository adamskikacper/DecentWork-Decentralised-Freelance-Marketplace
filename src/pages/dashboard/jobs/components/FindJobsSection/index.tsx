import { JobCard } from "@/components/organisms/JobCard";
import { useJobListings, useNavigation } from "@/shared/hooks";
import {
 Alert,
 AlertTitle,
 AlertDescription,
 Card,
 CardContent,
 CardTitle,
 CardDescription,
 Button,
 Skeleton,
} from "@/shared/ui";
import { AlertTriangle, RefreshCw } from "lucide-react";

export const FindJobsSection = () => {
 const { jobListings, isLoading, error } = useJobListings();
 const { goToJobDetails } = useNavigation();

 const handleDetails = (jobId: string | number) => {
  goToJobDetails(String(jobId));
 };

 return (
  <div className="space-y-6">
   {isLoading && (
    <div className="space-y-4">
     <Skeleton className="h-48" />
     <Skeleton className="h-48" />
     <Skeleton className="h-48" />
    </div>
   )}

   {error && (
    <Alert variant="destructive">
     <AlertTriangle className="h-4 w-4" />
     <AlertTitle>Something went wrong</AlertTitle>
     <AlertDescription>
      {error}
      <Button
       onClick={() => window.location.reload()}
       variant="outline"
       size="sm"
       className="mt-2"
      >
       <RefreshCw className="h-4 w-4 mr-2" />
       Try again
      </Button>
     </AlertDescription>
    </Alert>
   )}

   {!isLoading && !error && jobListings.length === 0 && (
    <Card className="text-center py-12">
     <CardContent>
      <CardTitle className="mb-2">No jobs found</CardTitle>
      <CardDescription>Check back later for new opportunities.</CardDescription>
     </CardContent>
    </Card>
   )}

   {!isLoading && !error && jobListings.length > 0 && (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 items-stretch">
     {jobListings.map((job) => (
      <JobCard
       key={job.id}
       id={job.id}
       title={job.title}
       description={job.description}
       postedDate={job.postedDate}
       tags={job.tags}
       budget={job.budget}
       onDetails={handleDetails}
      />
     ))}
    </div>
   )}
  </div>
 );
};
