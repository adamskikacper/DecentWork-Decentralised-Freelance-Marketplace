import { useState } from "react";
import { Badge } from "@/shared/ui";
import { ShowMoreButton } from "../ShowMoreButton";

interface SkillsListProps {
 skills?: string[];
 maxVisible?: number;
}

export const SkillsList = ({ skills, maxVisible = 3 }: SkillsListProps) => {
 const [showAllSkills, setShowAllSkills] = useState(false);

 if (!skills || skills.length === 0) return null;

 const visibleSkills = showAllSkills ? skills : skills.slice(0, maxVisible);
 const hasMoreSkills = skills.length > maxVisible;

 return (
  <div className="space-y-3">
   <div className="flex flex-wrap gap-2">
    {visibleSkills.map((skill, index) => (
     <Badge
      key={index}
      variant="secondary"
      className="bg-gray-200 text-gray-800 border-gray-200 text-body-xs dark:bg-gray-700 dark:text-gray-200 dark:border-gray-600"
     >
      {skill}
     </Badge>
    ))}
   </div>
   {hasMoreSkills && (
    <ShowMoreButton
     isExpanded={showAllSkills}
     totalCount={skills.length}
     visibleCount={maxVisible}
     onToggle={() => setShowAllSkills(!showAllSkills)}
    />
   )}
  </div>
 );
};
