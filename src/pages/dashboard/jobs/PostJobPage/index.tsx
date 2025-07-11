import React from "react";
import { useNavigate } from "react-router-dom";
import { DashboardSection, JobPostForm } from "@/components";
import { ExperienceLevel, JobDuration, JobType } from "@/shared/models/blockchain";

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
      {/* Job Post Form Section */}
      <DashboardSection
        title="Post a New Job"
        description="Provide detailed information about your job posting"
        isLoading={isLoading}
      >
        <JobPostForm onSubmit={handleSubmit} />
      </DashboardSection>
    </div>
  );
};