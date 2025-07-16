import React, { useState } from "react";
import {
 ExperienceLevel,
 JobDuration,
 JobType,
} from "@/shared/models/blockchain";
import {
 AttachmentsSection,
 JobAttributesSection,
 JobDetailsSection,
 JobRequirementsSection,
 SkillsSection,
} from "./components";
import { Button } from "@/shared/ui";

interface JobPostFormProps {
 onSubmit: (formData: {
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

export const JobPostForm = ({ onSubmit }: JobPostFormProps) => {
 const [title, setTitle] = useState("");
 const [description, setDescription] = useState("");
 const [budget, setBudget] = useState("");
 const [deadline, setDeadline] = useState("");
 const [skillInput, setSkillInput] = useState("");
 const [requiredSkills, setRequiredSkills] = useState<string[]>([]);
 const [experienceLevel, setExperienceLevel] = useState<ExperienceLevel>(
  ExperienceLevel.Intermediate
 );
 const [jobDuration, setJobDuration] = useState<JobDuration>(
  JobDuration.OneToThreeMonths
 );
 const [jobType, setJobType] = useState<JobType>(JobType.OneTime);
 const [files, setFiles] = useState<File[]>([]);

 const handleAddSkill = () => {
  if (skillInput.trim() && !requiredSkills.includes(skillInput.trim())) {
   setRequiredSkills([...requiredSkills, skillInput.trim()]);
   setSkillInput("");
  }
 };

 const handleRemoveSkill = (skill: string) => {
  setRequiredSkills(requiredSkills.filter((s) => s !== skill));
 };

 const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault();
  onSubmit({
   title,
   description,
   budget,
   deadline,
   requiredSkills,
   experienceLevel,
   jobDuration,
   jobType,
   files,
  });
 };

 const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  if (e.target.files) {
   const fileList = Array.from(e.target.files);
   setFiles([...files, ...fileList]);
  }
 };

 const handleRemoveFile = (index: number) => {
  setFiles(files.filter((_, i) => i !== index));
 };

 return (
  <form onSubmit={handleSubmit} className="space-y-6">
   <JobDetailsSection
    title={title}
    setTitle={setTitle}
    description={description}
    setDescription={setDescription}
   />
   <JobAttributesSection
    budget={budget}
    setBudget={setBudget}
    deadline={deadline}
    setDeadline={setDeadline}
   />
   <SkillsSection
    skillInput={skillInput}
    setSkillInput={setSkillInput}
    requiredSkills={requiredSkills}
    handleAddSkill={handleAddSkill}
    handleRemoveSkill={handleRemoveSkill}
   />
   <JobRequirementsSection
    experienceLevel={experienceLevel}
    setExperienceLevel={setExperienceLevel}
    jobDuration={jobDuration}
    setJobDuration={setJobDuration}
    jobType={jobType}
    setJobType={setJobType}
   />
   <AttachmentsSection
    files={files}
    handleFileChange={handleFileChange}
    handleRemoveFile={handleRemoveFile}
   />
   <div className="flex justify-end">
    <Button
     variant="default"
     size="lg"
     className="px-4 py-2 rounded-md bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
    >
     Post Job
    </Button>
   </div>
  </form>
 );
};
