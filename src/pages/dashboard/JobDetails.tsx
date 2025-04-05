import { useParams } from "react-router-dom";
import JobDetailsComponent from "../../components/job/JobDetails";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import { DASHBOARD_LINKS } from "@/constants";

/**
 * JobDetails - The job details page in the dashboard
 */
const JobDetails = () => {
 const { jobId } = useParams<{ jobId: string }>();

 return (
  <div className="space-y-6">
   <Breadcrumbs
    items={[
     { label: "Dashboard", path: DASHBOARD_LINKS.HOME },
     { label: "Jobs", path: DASHBOARD_LINKS.JOBS },
     { label: "Job Details" },
    ]}
   />
   <JobDetailsComponent />
  </div>
 );
};

export default JobDetails;
