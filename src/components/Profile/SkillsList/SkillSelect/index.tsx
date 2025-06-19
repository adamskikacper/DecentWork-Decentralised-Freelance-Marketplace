import React, { useState, useRef, useEffect } from "react";
import { Skill } from "@/types";
import { DEFAULT_SKILLS } from "@/constants";

interface SkillSelectProps {
 selectedSkills: string[];
 onSkillsChange: (skills: string[]) => void;
 availableSkills?: Skill[];
}

export const SkillSelect = ({
 selectedSkills,
 onSkillsChange,
 availableSkills = DEFAULT_SKILLS,
}: SkillSelectProps) => {
 const [searchTerm, setSearchTerm] = useState("");
 const [isOpen, setIsOpen] = useState(false);
 const dropdownRef = useRef<HTMLDivElement>(null);

 // Close dropdown when clicking outside
 useEffect(() => {
  const handleClickOutside = (event: MouseEvent) => {
   if (
    dropdownRef.current &&
    !dropdownRef.current.contains(event.target as Node)
   ) {
    setIsOpen(false);
   }
  };

  document.addEventListener("mousedown", handleClickOutside);
  return () => document.removeEventListener("mousedown", handleClickOutside);
 }, []);

 const filteredSkills = availableSkills.filter((skill) =>
  skill.label.toLowerCase().includes(searchTerm.toLowerCase())
 );

 const toggleSkill = (skillValue: string) => {
  const newSelectedSkills = selectedSkills.includes(skillValue)
   ? selectedSkills.filter((s) => s !== skillValue)
   : [...selectedSkills, skillValue];
  onSkillsChange(newSelectedSkills);
 };

 return (
  <div className="relative" ref={dropdownRef}>
   <div
    className="w-full px-4 py-2 rounded-md border border-border bg-background flex items-center gap-2 flex-wrap cursor-pointer"
    onClick={() => setIsOpen(!isOpen)}
   >
    {selectedSkills.length > 0 ? (
     selectedSkills.map((skill) => (
      <span
       key={skill}
       className="px-2 py-1 text-xs rounded-full bg-primary/10 text-primary flex items-center gap-1"
      >
       {availableSkills.find((s) => s.value === skill)?.label}
       <button
        onClick={(e) => {
         e.stopPropagation();
         toggleSkill(skill);
        }}
        className="hover:text-primary/80"
       >
        ×
       </button>
      </span>
     ))
    ) : (
     <span className="text-muted-foreground">Select skills...</span>
    )}
   </div>

   {isOpen && (
    <div className="absolute z-10 w-full mt-1 rounded-md border border-border bg-background shadow-lg">
     <div className="p-2">
      <input
       type="text"
       className="w-full px-3 py-1.5 text-sm rounded-md border border-border bg-background"
       placeholder="Search skills..."
       value={searchTerm}
       onChange={(e) => setSearchTerm(e.target.value)}
       onClick={(e) => e.stopPropagation()}
      />
     </div>
     <div className="max-h-48 overflow-y-auto">
      {filteredSkills.map((skill) => (
       <button
        key={skill.value}
        className={`w-full px-4 py-2 text-left hover:bg-secondary/50 ${
         selectedSkills.includes(skill.value) ? "bg-primary/10" : ""
        }`}
        onClick={(e) => {
         e.stopPropagation();
         toggleSkill(skill.value);
        }}
       >
        {skill.label}
       </button>
      ))}
     </div>
    </div>
   )}
  </div>
 );
};
