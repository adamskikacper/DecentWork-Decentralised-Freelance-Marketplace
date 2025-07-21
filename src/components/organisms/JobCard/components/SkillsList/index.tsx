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
      variant="outline"
      className="bg-gray-100 text-gray-700 border-gray-200"
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
