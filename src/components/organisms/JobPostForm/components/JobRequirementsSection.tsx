import {
 ExperienceLevel,
 JobDuration,
 JobType,
} from "@/shared/models/blockchain";
import { FormSelect } from "@/shared/ui";

interface JobRequirementsSectionProps {
 experienceLevel: ExperienceLevel;
 setExperienceLevel: (value: ExperienceLevel) => void;
 jobDuration: JobDuration;
 setJobDuration: (value: JobDuration) => void;
 jobType: JobType;
 setJobType: (value: JobType) => void;
}

export const JobRequirementsSection = ({
 experienceLevel,
 setExperienceLevel,
 jobDuration,
 setJobDuration,
 jobType,
 setJobType,
}: JobRequirementsSectionProps) => {
 return (
  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
   <FormSelect
    label="Experience Level"
    name="experienceLevel"
    value={String(experienceLevel)}
    onChange={(e) =>
     setExperienceLevel(Number(e.target.value) as ExperienceLevel)
    }
    options={[
     {
      value: String(ExperienceLevel.Beginner),
      label: "Beginner",
     },
     {
      value: String(ExperienceLevel.Intermediate),
      label: "Intermediate",
     },
     {
      value: String(ExperienceLevel.Expert),
      label: "Expert",
     },
    ]}
   />

   <FormSelect
    label="Job Duration"
    name="jobDuration"
    value={String(jobDuration)}
    onChange={(e) => setJobDuration(Number(e.target.value) as JobDuration)}
    options={[
     {
      value: String(JobDuration.LessThanOneWeek),
      label: "Less than 1 week",
     },
     {
      value: String(JobDuration.OneToTwoWeeks),
      label: "1-2 weeks",
     },
     {
      value: String(JobDuration.TwoToFourWeeks),
      label: "2-4 weeks",
     },
     {
      value: String(JobDuration.OneToThreeMonths),
      label: "1-3 months",
     },
     {
      value: String(JobDuration.ThreeToSixMonths),
      label: "3-6 months",
     },
     {
      value: String(JobDuration.MoreThanSixMonths),
      label: "More than 6 months",
     },
    ]}
   />

   <FormSelect
    label="Job Type"
    name="jobType"
    value={String(jobType)}
    onChange={(e) => setJobType(Number(e.target.value) as JobType)}
    options={[
     { value: String(JobType.OneTime), label: "One-time job" },
     { value: String(JobType.Ongoing), label: "Ongoing work" },
    ]}
   />
  </div>
 );
};
