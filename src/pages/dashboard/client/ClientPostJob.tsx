import React, { useState, useRef, memo } from "react";
import * as Slider from "@radix-ui/react-slider";
import * as Popover from "@radix-ui/react-popover";
import { DayPicker } from "react-day-picker";
import { format } from "date-fns";
import SkillSelect from "../../../components/Profile/SkillsList/SkillSelect";
import SectionHeader from "../../../components/Layout/SectionHeader";
import FormSelect from "../../../components/Common/Form/FormSelect";
import AttachmentList from "../../../components/Job/AttachmentList";
import Breadcrumbs from "@/components/Layout/Breadcrumbs";
import {
 EXPERIENCE_LEVELS,
 JOB_DURATIONS,
 JOB_TYPES,
 DASHBOARD_LINKS,
} from "@/constants";

interface PostJobFormData {
 title: string;
 description: string;
 skills: string[];
 experienceLevel: string;
 budget: number;
 deadline: Date | null;
 jobDuration: string;
 jobType: string;
 attachments: File[];
}

const ClientPostJob = memo(() => {
 const [formData, setFormData] = useState<PostJobFormData>({
  title: "",
  description: "",
  skills: [],
  experienceLevel: "intermediate",
  budget: 5,
  deadline: null,
  jobDuration: "1-3_months",
  jobType: "full_time",
  attachments: [],
 });

 const fileInputRef = useRef<HTMLInputElement>(null);

 const handleSkillsChange = (skills: string[]) => {
  setFormData((prev) => ({ ...prev, skills }));
 };

 const handleDateSelect = (date: Date | undefined) => {
  setFormData((prev) => ({ ...prev, deadline: date || null }));
 };

 const handleBudgetChange = (value: number[]) => {
  setFormData((prev) => ({ ...prev, budget: value[0] }));
 };

 const handleInputChange = (
  e: React.ChangeEvent<
   HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
  >
 ) => {
  const { name, value } = e.target;
  setFormData((prev) => ({ ...prev, [name]: value }));
 };

 const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  if (e.target.files) {
   setFormData((prev) => ({
    ...prev,
    attachments: [...prev.attachments, ...Array.from(e.target.files!)],
   }));
  }
 };

 const removeAttachment = (index: number) => {
  setFormData((prev) => ({
   ...prev,
   attachments: prev.attachments.filter((_, i) => i !== index),
  }));
 };

 const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault();
  console.log("Form submitted:", formData);
  // Implementation would go here
 };

 return (
  <>
   <Breadcrumbs
    items={[
     { label: "Dashboard", path: DASHBOARD_LINKS.HOME },
     { label: "Post Job" },
    ]}
   />
   <SectionHeader
    title="Post a New Job"
    description="Create a new job listing for freelancers."
   />

   <div className="glass-card rounded-xl p-6">
    <form className="space-y-6" onSubmit={handleSubmit}>
     <div>
      <label htmlFor="title" className="block text-sm font-medium mb-2">
       Job Title
      </label>
      <input
       id="title"
       name="title"
       type="text"
       className="w-full px-4 py-2 rounded-md border border-border bg-background"
       placeholder="Enter job title"
       value={formData.title}
       onChange={handleInputChange}
       required
      />
     </div>

     <div>
      <label htmlFor="description" className="block text-sm font-medium mb-2">
       Job Description
      </label>
      <textarea
       id="description"
       name="description"
       className="w-full px-4 py-2 rounded-md border border-border bg-background min-h-[120px]"
       placeholder="Enter job description"
       value={formData.description}
       onChange={handleInputChange}
       required
      />
     </div>

     <div>
      <label className="block text-sm font-medium mb-2">Required Skills</label>
      <SkillSelect
       selectedSkills={formData.skills}
       onSkillsChange={handleSkillsChange}
      />
     </div>

     <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div>
       <label className="block text-sm font-medium mb-2">Job Deadline</label>
       <Popover.Root>
        <Popover.Trigger asChild>
         <button
          className={`w-full px-4 py-2 rounded-md border border-border bg-background text-left ${
           !formData.deadline ? "text-muted-foreground" : ""
          }`}
          type="button"
         >
          {formData.deadline
           ? format(formData.deadline, "PPP")
           : "Select a date"}
         </button>
        </Popover.Trigger>
        <Popover.Portal>
         <Popover.Content className="bg-background rounded-md shadow-lg p-2 border border-border">
          <DayPicker
           mode="single"
           selected={formData.deadline}
           onSelect={handleDateSelect}
           disabled={{ before: new Date() }}
          />
         </Popover.Content>
        </Popover.Portal>
       </Popover.Root>
      </div>

      <FormSelect
       label="Experience Level"
       name="experienceLevel"
       value={formData.experienceLevel}
       options={EXPERIENCE_LEVELS}
       onChange={handleInputChange}
      />
     </div>

     <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <FormSelect
       label="Job Duration"
       name="jobDuration"
       value={formData.jobDuration}
       options={JOB_DURATIONS}
       onChange={handleInputChange}
      />

      <FormSelect
       label="Job Type"
       name="jobType"
       value={formData.jobType}
       options={JOB_TYPES}
       onChange={handleInputChange}
      />
     </div>

     <div>
      <label className="block text-sm font-medium mb-2">Budget (ETH)</label>
      <div className="space-y-3">
       <Slider.Root
        className="relative flex items-center select-none touch-none w-full h-5"
        value={[formData.budget]}
        onValueChange={(value) => handleBudgetChange(value)}
        max={50}
        min={0.1}
        step={0.1}
       >
        <Slider.Track className="bg-secondary relative grow rounded-full h-[3px]">
         <Slider.Range className="absolute bg-primary rounded-full h-full" />
        </Slider.Track>
        <Slider.Thumb
         className="block w-5 h-5 bg-primary shadow-lg rounded-full hover:bg-primary/90 focus:outline-none focus:shadow-[0_0_0_2px] focus:shadow-primary"
         aria-label="Budget"
        />
       </Slider.Root>
       <div className="flex justify-between text-sm text-muted-foreground">
        <span>0.1 ETH</span>
        <span className="font-medium text-foreground">
         {formData.budget} ETH
        </span>
        <span>50 ETH</span>
       </div>
      </div>
     </div>

     <div>
      <label className="block text-sm font-medium mb-2">Attachments</label>
      <div className="space-y-3">
       <div className="flex items-center gap-3">
        <button
         type="button"
         onClick={() => fileInputRef.current?.click()}
         className="px-4 py-2 text-sm font-medium rounded-md bg-secondary text-foreground hover:bg-secondary/80 transition-colors"
        >
         Add Files
        </button>
        <input
         ref={fileInputRef}
         type="file"
         multiple
         className="hidden"
         onChange={handleFileChange}
        />
        <span className="text-sm text-muted-foreground">
         Upload job files, documentation, or examples
        </span>
       </div>

       <AttachmentList
        attachments={formData.attachments}
        onRemove={removeAttachment}
       />
      </div>
     </div>

     <button
      type="submit"
      className="w-full px-4 py-2 text-sm font-medium rounded-md bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
     >
      Post Job
     </button>
    </form>
   </div>
  </>
 );
});

ClientPostJob.displayName = "ClientPostJob";

export default ClientPostJob;
