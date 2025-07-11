import React, { useState } from "react";
import { X, Plus } from "lucide-react";
import { Input } from "@/shared/ui";
import { Badge } from "@/shared/ui";
import { ActionButton } from "../../atoms/ActionButton";

export interface SkillsManagerProps {
 skills: string[];
 onSkillsChange: (skills: string[]) => void;
 suggestions?: string[];
 placeholder?: string;
 maxSkills?: number;
 className?: string;
}

export const SkillsManager = ({
 skills,
 onSkillsChange,
 suggestions = [],
 maxSkills = 10,
 placeholder = "Add a skill...",
 className = "",
}: SkillsManagerProps) => {
 const [inputValue, setInputValue] = useState("");
 const [showSuggestions, setShowSuggestions] = useState(false);

 const filteredSuggestions = suggestions.filter(
  (suggestion) =>
   suggestion.toLowerCase().includes(inputValue.toLowerCase()) &&
   !skills.includes(suggestion)
 );

 const handleAddSkill = (skill: string) => {
  const trimmedSkill = skill.trim();
  if (
   trimmedSkill &&
   !skills.includes(trimmedSkill) &&
   (!maxSkills || skills.length < maxSkills)
  ) {
   onSkillsChange([...skills, trimmedSkill]);
   setInputValue("");
   setShowSuggestions(false);
  }
 };

 const handleRemoveSkill = (skillToRemove: string) => {
  onSkillsChange(skills.filter((skill) => skill !== skillToRemove));
 };

 const handleKeyPress = (e: React.KeyboardEvent) => {
  if (e.key === "Enter") {
   e.preventDefault();
   handleAddSkill(inputValue);
  }
 };

 return (
  <div className={`space-y-3 ${className}`}>
   <div className="relative">
    <div className="flex gap-2">
     <Input
      type="text"
      placeholder={placeholder}
      value={inputValue}
      onChange={(e) => setInputValue(e.target.value)}
      onKeyPress={handleKeyPress}
      onFocus={() => setShowSuggestions(true)}
      onBlur={() => setTimeout(() => setShowSuggestions(false), 150)}
      disabled={maxSkills ? skills.length >= maxSkills : false}
     />
     <ActionButton
      onClick={() => handleAddSkill(inputValue)}
      disabled={
       !inputValue.trim() || (maxSkills ? skills.length >= maxSkills : false)
      }
      icon={Plus}
      size="sm"
     >
      Add
     </ActionButton>
    </div>

    {showSuggestions && filteredSuggestions.length > 0 && (
     <div className="absolute z-10 w-full mt-1 bg-white border border-gray-200 rounded-md shadow-lg max-h-40 overflow-y-auto">
      {filteredSuggestions.slice(0, 5).map((suggestion) => (
       <button
        key={suggestion}
        className="w-full px-3 py-2 text-left hover:bg-gray-50 focus:bg-gray-50 focus:outline-none"
        onMouseDown={() => handleAddSkill(suggestion)}
       >
        {suggestion}
       </button>
      ))}
     </div>
    )}
   </div>

   {skills.length > 0 && (
    <div className="flex flex-wrap gap-2">
     {skills.map((skill) => (
      <Badge
       key={skill}
       variant="secondary"
       className="flex items-center gap-1 pr-1"
      >
       {skill}
       <button
        onClick={() => handleRemoveSkill(skill)}
        className="ml-1 hover:bg-gray-200 rounded-full p-0.5"
       >
        <X className="w-3 h-3" />
       </button>
      </Badge>
     ))}
    </div>
   )}

   {maxSkills && (
    <p className="text-sm text-gray-500">
     {skills.length}/{maxSkills} skills added
    </p>
   )}
  </div>
 );
};
