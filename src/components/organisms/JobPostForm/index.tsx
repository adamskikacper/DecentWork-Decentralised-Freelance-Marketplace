import React, { useState } from "react";
import { ExperienceLevel, JobDuration, JobType } from "@/shared/models/blockchain";

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

export const JobPostForm: React.FC<JobPostFormProps> = ({ onSubmit }) => {
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
   <div>
    <label className="block text-sm font-medium mb-2" htmlFor="title">
     Job Title
    </label>
    <input
     id="title"
     type="text"
     className="w-full px-3 py-2 rounded-md border border-border bg-background"
     placeholder="e.g. Web3 Dashboard UI Design"
     value={title}
     onChange={(e) => setTitle(e.target.value)}
     required
    />
   </div>

   <div>
    <label className="block text-sm font-medium mb-2" htmlFor="description">
     Job Description
    </label>
    <textarea
     id="description"
     className="w-full px-3 py-2 rounded-md border border-border bg-background min-h-32"
     placeholder="Describe the job requirements and expectations..."
     value={description}
     onChange={(e) => setDescription(e.target.value)}
     rows={6}
     required
    ></textarea>
   </div>

   <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
    <div>
     <label className="block text-sm font-medium mb-2" htmlFor="budget">
      Budget (ETH)
     </label>
     <input
      id="budget"
      type="text"
      className="w-full px-3 py-2 rounded-md border border-border bg-background"
      placeholder="e.g. 2.5"
      value={budget}
      onChange={(e) => setBudget(e.target.value)}
      required
     />
    </div>
    <div>
     <label className="block text-sm font-medium mb-2" htmlFor="deadline">
      Deadline
     </label>
     <input
      id="deadline"
      type="date"
      className="w-full px-3 py-2 rounded-md border border-border bg-background"
      value={deadline}
      onChange={(e) => setDeadline(e.target.value)}
      required
     />
    </div>
   </div>

   <div>
    <label className="block text-sm font-medium mb-2">Required Skills</label>
    <div className="flex gap-2 mb-2">
     <input
      type="text"
      className="flex-1 px-3 py-2 rounded-md border border-border bg-background"
      placeholder="e.g. Solidity"
      value={skillInput}
      onChange={(e) => setSkillInput(e.target.value)}
     />
     <button
      type="button"
      className="px-4 py-2 rounded-md bg-secondary text-foreground hover:bg-secondary/80 transition-colors"
      onClick={handleAddSkill}
     >
      Add
     </button>
    </div>
    {requiredSkills.length > 0 && (
     <div className="flex flex-wrap gap-2 mt-2">
      {requiredSkills.map((skill) => (
       <span
        key={skill}
        className="px-2 py-1 text-xs rounded-full bg-primary/10 text-primary flex items-center gap-1"
       >
        {skill}
        <button
         type="button"
         className="text-primary hover:text-primary/80"
         onClick={() => handleRemoveSkill(skill)}
        >
         ×
        </button>
       </span>
      ))}
     </div>
    )}
   </div>

   <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
    <div>
     <label
      className="block text-sm font-medium mb-2"
      htmlFor="experienceLevel"
     >
      Experience Level
     </label>
     <select
      id="experienceLevel"
      className="w-full px-3 py-2 rounded-md border border-border bg-background"
      value={experienceLevel}
      onChange={(e) =>
       setExperienceLevel(Number(e.target.value) as ExperienceLevel)
      }
      required
     >
      <option value={ExperienceLevel.Beginner}>Beginner</option>
      <option value={ExperienceLevel.Intermediate}>Intermediate</option>
      <option value={ExperienceLevel.Expert}>Expert</option>
     </select>
    </div>
    <div>
     <label className="block text-sm font-medium mb-2" htmlFor="jobDuration">
      Job Duration
     </label>
     <select
      id="jobDuration"
      className="w-full px-3 py-2 rounded-md border border-border bg-background"
      value={jobDuration}
      onChange={(e) => setJobDuration(Number(e.target.value) as JobDuration)}
      required
     >
      <option value={JobDuration.LessThanOneWeek}>Less than 1 week</option>
      <option value={JobDuration.OneToTwoWeeks}>1-2 weeks</option>
      <option value={JobDuration.TwoToFourWeeks}>2-4 weeks</option>
      <option value={JobDuration.OneToThreeMonths}>1-3 months</option>
      <option value={JobDuration.ThreeToSixMonths}>3-6 months</option>
      <option value={JobDuration.MoreThanSixMonths}>More than 6 months</option>
     </select>
    </div>
    <div>
     <label className="block text-sm font-medium mb-2" htmlFor="jobType">
      Job Type
     </label>
     <select
      id="jobType"
      className="w-full px-3 py-2 rounded-md border border-border bg-background"
      value={jobType}
      onChange={(e) => setJobType(Number(e.target.value) as JobType)}
      required
     >
      <option value={JobType.OneTime}>One-time job</option>
      <option value={JobType.Ongoing}>Ongoing work</option>
     </select>
    </div>
   </div>

   <div>
    <label className="block text-sm font-medium mb-2">Attachments</label>
    <div className="border border-dashed border-border p-4 rounded-md bg-background/50">
     <input
      type="file"
      multiple
      onChange={handleFileChange}
      className="hidden"
      id="file-upload"
     />
     <label
      htmlFor="file-upload"
      className="flex flex-col items-center justify-center cursor-pointer"
     >
      <span className="text-primary">Upload files</span>
      <span className="text-xs text-muted-foreground mt-1">
       Click to browse (PDF, DOCX, images)
      </span>
     </label>
    </div>
    {files.length > 0 && (
     <div className="mt-4 space-y-2">
      {files.map((file, index) => (
       <div
        key={index}
        className="flex items-center justify-between px-3 py-2 rounded-md bg-secondary/30"
       >
        <div className="flex items-center gap-2">
         <span className="text-sm">{file.name}</span>
         <span className="text-xs text-muted-foreground">
          ({(file.size / 1024).toFixed(1)} KB)
         </span>
        </div>
        <button
         type="button"
         onClick={() => handleRemoveFile(index)}
         className="text-muted-foreground hover:text-foreground"
        >
         ×
        </button>
       </div>
      ))}
     </div>
    )}
   </div>

   <div className="flex justify-end">
    <button
     type="submit"
     className="px-4 py-2 rounded-md bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
    >
     Post Job
    </button>
   </div>
  </form>
 );
};
