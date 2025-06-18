import React from "react";
import { useNavigate } from "react-router-dom";
import { DashboardSection } from "../../Common";
import { JobPostForm } from "@/components/Job";
import { Breadcrumbs } from "@/components/Layout";
import { ExperienceLevel, JobDuration, JobType } from "@/types/blockchain";
export interface PostJobProps {
 isLoading?: boolean;
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
const PostJob: React.FC<PostJobProps> = ({ isLoading = false, onSubmit }) => {
 const navigate = useNavigate();
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
  if (onSubmit) {
   onSubmit(formData);
  }
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
