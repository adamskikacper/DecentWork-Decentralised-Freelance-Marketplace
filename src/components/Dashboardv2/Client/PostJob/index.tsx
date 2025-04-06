import React from "react";
import { useNavigate } from "react-router-dom";
import { DashboardSection } from "../../Common";
import { JobPostForm } from "@/components/Job";
import Breadcrumbs from "@/components/Layout/Breadcrumbs";
import { ExperienceLevel, JobDuration, JobType } from "@/types/blockchain";

export interface PostJobProps {
 /**
  * Whether the component is in a loading state
  * @default false
  */
 isLoading?: boolean;
 /**
  * Callback when the form is submitted
  */
 onSubmit?: (formData: {
  title: string;
  description: string;
  budget: string;
  deadline: string;
  requiredSkills: string[];
  experienceLevel: ExperienceLevel;
  jobDuration: JobDuration;
  jobType: JobType;
  files: File[];
 }) => void;
}

/**
 * PostJob - Client post job component
 * Allows clients to create new job listings
 */
const PostJob: React.FC<PostJobProps> = ({ isLoading = false, onSubmit }) => {
 const navigate = useNavigate();

 // Handler for form submission
 const handleSubmit = (formData: {
  title: string;
  description: string;
  budget: string;
  deadline: string;
  requiredSkills: string[];
  experienceLevel: ExperienceLevel;
  jobDuration: JobDuration;
  jobType: JobType;
  files: File[];
 }) => {
  console.log("Form submitted:", formData);

  // Call the onSubmit callback if provided
  if (onSubmit) {
   onSubmit(formData);
  }

  // In a real app, we would submit the data to an API
  // and then navigate to the jobs page
  setTimeout(() => {
   navigate("/dashboard/jobs");
  }, 1000);
 };

 return (
  <div className="space-y-8">
   <Breadcrumbs
    items={[{ label: "Dashboard", path: "/dashboard" }, { label: "Post Job" }]}
   />

   {/* Header */}
   <div>
    <h1 className="text-2xl font-bold tracking-tight">Post a New Job</h1>
    <p className="text-muted-foreground mt-1">
     Create a new job listing to find the perfect freelancer for your project.
    </p>
   </div>

   {/* Job Post Form Section */}
   <DashboardSection
    title="Job Details"
    description="Provide detailed information about your job"
    isLoading={isLoading}
   >
    <JobPostForm onSubmit={handleSubmit} />
   </DashboardSection>
  </div>
 );
};

export default PostJob;
