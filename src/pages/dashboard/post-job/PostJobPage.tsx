import React from "react";
import { DashboardPageLayout } from "@/components/templates";
import { JobPostForm } from "@/components";
import { useNavigation } from "@/shared/hooks";
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
 const { navigateTo } = useNavigation();
 
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
  if (onSubmit) {
   onSubmit(formData);
  } else {
   console.log("Form submitted:", formData);
   setTimeout(() => {
    navigateTo("/dashboard/jobs");
   }, 1000);
  }
 };

 return (
  <DashboardPageLayout
   title="Post a Job"
   description="Provide detailed information about your job posting"
   breadcrumbs={[
    { label: "Dashboard", href: "/dashboard" },
    { label: "Post Job" },
   ]}
   isLoading={isLoading}
  >
   <JobPostForm onSubmit={handleSubmit} />
  </DashboardPageLayout>
 );
};
