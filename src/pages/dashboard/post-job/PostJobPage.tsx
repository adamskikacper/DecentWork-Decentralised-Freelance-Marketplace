import React from "react";
import { useNavigate } from "react-router-dom";
import { DashboardSection, JobPostForm } from "@/components";
import { Breadcrumbs } from "@/shared/ui";
import {
 ExperienceLevel,
 JobDuration,
 JobType,
} from "@/shared/models/blockchain";
export interface PostJobPageProps {
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
export const PostJobPage: React.FC<PostJobPageProps> = ({
 isLoading = false,
 onSubmit,
}) => {
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
