import React from "react";

export interface SkillTagProps {
 skill: string;
 size?: "sm" | "md" | "lg";
 className?: string;
 onClick?: () => void;
}

export const SkillTag = ({ skill, size = "md", className = "", onClick }) => {
 const sizeClass = {
  sm: "px-2 py-0.5 text-xs",
  md: "px-3 py-1 text-sm",
  lg: "px-4 py-1.5 text-sm",
 };

 return (
  <span
   onClick={onClick}
   className={`${
    sizeClass[size]
   } bg-secondary rounded-full font-medium inline-block ${
    onClick ? "cursor-pointer hover:bg-secondary/80" : ""
   } ${className}`}
  >
   {skill}
  </span>
 );
};
