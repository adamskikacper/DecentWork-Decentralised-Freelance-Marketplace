import React, { useState } from "react";
import {
 ExperienceLevel,
 JobDuration,
 JobType,
} from "@/shared/models/blockchain";
import {
 FormField,
 FormSection,
 SkillsManager,
 FileDropzone,
} from "@/components/molecules";
import {
 Input,
 Textarea,
 Select,
 SelectContent,
 SelectItem,
 SelectTrigger,
 SelectValue,
 Button,
} from "@/shared/ui";
import { ActionButton } from "@/components/atoms";

export interface JobFormData {
 title: string;
 description: string;
 budget: string;
 deadline: string;
 requiredSkills: string[];
 experienceLevel: ExperienceLevel;
 jobDuration: JobDuration;
 jobType: JobType;
 files: File[];
}

export interface JobFormProps {
 initialData?: Partial<JobFormData>;
 onSubmit: (formData: JobFormData) => void;
 isLoading?: boolean;
 className?: string;
}

export const JobForm = ({
 initialData,
 onSubmit,
 isLoading = false,
 className = "",
}: JobFormProps) => {
 const [formData, setFormData] = useState<JobFormData>({
  title: initialData?.title || "",
  description: initialData?.description || "",
  budget: initialData?.budget || "",
  deadline: initialData?.deadline || "",
  requiredSkills: initialData?.requiredSkills || [],
  experienceLevel: initialData?.experienceLevel || ExperienceLevel.Intermediate,
  jobDuration: initialData?.jobDuration || JobDuration.OneToThreeMonths,
  jobType: initialData?.jobType || JobType.OneTime,
  files: initialData?.files || [],
 });

 const [errors, setErrors] = useState<
  Partial<Record<keyof JobFormData, string>>
 >({});

 const validateForm = (): boolean => {
  const newErrors: Partial<Record<keyof JobFormData, string>> = {};

  if (!formData.title.trim()) {
   newErrors.title = "Job title is required";
  }

  if (!formData.description.trim()) {
   newErrors.description = "Job description is required";
  }

  if (!formData.budget.trim()) {
   newErrors.budget = "Budget is required";
  }

  if (!formData.deadline) {
   newErrors.deadline = "Deadline is required";
  }

  if (formData.requiredSkills.length === 0) {
   newErrors.requiredSkills = "At least one skill is required";
  }

  setErrors(newErrors);
  return Object.keys(newErrors).length === 0;
 };

 const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault();
  if (validateForm()) {
   onSubmit(formData);
  }
 };

 const updateField = <K extends keyof JobFormData>(
  field: K,
  value: JobFormData[K]
 ) => {
  setFormData((prev) => ({ ...prev, [field]: value }));

  if (errors[field]) {
   setErrors((prev) => ({ ...prev, [field]: undefined }));
  }
 };

 const skillSuggestions = [
  "React",
  "TypeScript",
  "Node.js",
  "Python",
  "Solidity",
  "Web3",
  "UI/UX Design",
  "Figma",
  "Blockchain",
  "Smart Contracts",
 ];

 return (
  <form onSubmit={handleSubmit} className={`space-y-8 ${className}`}>
   {/* Basic Information Section */}
   <FormSection
    title="Basic Information"
    description="Provide the main details about your job posting"
    required
   >
    <FormField label="Job Title" id="title" required error={errors.title}>
     <Input
      id="title"
      placeholder="e.g. Web3 Dashboard UI Design"
      value={formData.title}
      onChange={(e) => updateField("title", e.target.value)}
     />
    </FormField>

    <FormField
     label="Job Description"
     id="description"
     required
     error={errors.description}
     description="Describe the job requirements and expectations in detail"
    >
     <Textarea
      id="description"
      placeholder="Describe the job requirements and expectations..."
      value={formData.description}
      onChange={(e) => updateField("description", e.target.value)}
      rows={6}
     />
    </FormField>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
     <FormField label="Budget (USD)" id="budget" required error={errors.budget}>
      <Input
       id="budget"
       type="number"
       placeholder="e.g. 5000"
       value={formData.budget}
       onChange={(e) => updateField("budget", e.target.value)}
      />
     </FormField>

     <FormField label="Deadline" id="deadline" required error={errors.deadline}>
      <Input
       id="deadline"
       type="date"
       value={formData.deadline}
       onChange={(e) => updateField("deadline", e.target.value)}
      />
     </FormField>
    </div>
   </FormSection>

   {/* Requirements Section */}
   <FormSection
    title="Job Requirements"
    description="Specify the skills and experience level needed"
    required
   >
    <FormField
     label="Required Skills"
     id="skills"
     required
     error={errors.requiredSkills}
     description="Add skills relevant to this job"
    >
     <SkillsManager
      skills={formData.requiredSkills}
      onSkillsChange={(skills) => updateField("requiredSkills", skills)}
      suggestions={skillSuggestions}
      maxSkills={10}
     />
    </FormField>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
     <FormField label="Experience Level" id="experienceLevel" required>
      <Select
       value={formData.experienceLevel.toString()}
       onValueChange={(value) =>
        updateField("experienceLevel", parseInt(value, 10) as ExperienceLevel)
       }
      >
       <SelectTrigger>
        <SelectValue placeholder="Select experience level" />
       </SelectTrigger>
       <SelectContent>
        <SelectItem value={ExperienceLevel.Beginner.toString()}>
         Beginner
        </SelectItem>
        <SelectItem value={ExperienceLevel.Intermediate.toString()}>
         Intermediate
        </SelectItem>
        <SelectItem value={ExperienceLevel.Expert.toString()}>
         Expert
        </SelectItem>
       </SelectContent>
      </Select>
     </FormField>

     <FormField label="Job Duration" id="jobDuration" required>
      <Select
       value={formData.jobDuration.toString()}
       onValueChange={(value) =>
        updateField("jobDuration", parseInt(value, 10) as JobDuration)
       }
      >
       <SelectTrigger>
        <SelectValue placeholder="Select job duration" />
       </SelectTrigger>
       <SelectContent>
        <SelectItem value={JobDuration.LessThanOneWeek.toString()}>
         Less than 1 week
        </SelectItem>
        <SelectItem value={JobDuration.OneToTwoWeeks.toString()}>
         1-2 weeks
        </SelectItem>
        <SelectItem value={JobDuration.TwoToFourWeeks.toString()}>
         2-4 weeks
        </SelectItem>
        <SelectItem value={JobDuration.OneToThreeMonths.toString()}>
         1-3 months
        </SelectItem>
        <SelectItem value={JobDuration.ThreeToSixMonths.toString()}>
         3-6 months
        </SelectItem>
        <SelectItem value={JobDuration.MoreThanSixMonths.toString()}>
         More than 6 months
        </SelectItem>
       </SelectContent>
      </Select>
     </FormField>

     <FormField label="Job Type" id="jobType" required>
      <Select
       value={formData.jobType.toString()}
       onValueChange={(value) =>
        updateField("jobType", parseInt(value, 10) as JobType)
       }
      >
       <SelectTrigger>
        <SelectValue placeholder="Select job type" />
       </SelectTrigger>
       <SelectContent>
        <SelectItem value={JobType.OneTime.toString()}>
         One-time project
        </SelectItem>
        <SelectItem value={JobType.Ongoing.toString()}>Ongoing work</SelectItem>
       </SelectContent>
      </Select>
     </FormField>
    </div>
   </FormSection>

   {/* Attachments Section */}
   <FormSection
    title="Attachments"
    description="Upload any relevant files (optional)"
   >
    <FormField
     label="Project Files"
     id="files"
     description="Upload project requirements, wireframes, or reference materials"
    >
     <FileDropzone
      onFilesSelect={(files) => updateField("files", files)}
      files={formData.files}
      acceptedTypes=".pdf,.doc,.docx,.jpg,.jpeg,.png,.zip"
      maxSize={10}
      maxFiles={5}
     />
    </FormField>
   </FormSection>

   {/* Submit Section */}
   <div className="flex justify-end space-x-4 pt-6 border-t border-gray-200">
    <ActionButton
     variant="outline"
     onClick={() => {
      setFormData({
       title: "",
       description: "",
       budget: "",
       deadline: "",
       requiredSkills: [],
       experienceLevel: ExperienceLevel.Intermediate,
       jobDuration: JobDuration.OneToThreeMonths,
       jobType: JobType.OneTime,
       files: [],
      });
     }}
    >
     Clear Form
    </ActionButton>

    <Button type="submit" disabled={isLoading}>
     {isLoading ? "Posting Job..." : "Post Job"}
    </Button>
   </div>
  </form>
 );
};
