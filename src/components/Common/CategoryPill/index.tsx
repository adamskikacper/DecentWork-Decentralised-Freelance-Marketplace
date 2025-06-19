import React from "react";

export interface CategoryPillProps {
 category: string;
 isSelected: boolean;
 onClick: () => void;
}

export const CategoryPill: React.FC<CategoryPillProps> = ({
 category,
 isSelected,
 onClick,
}) => {
 return (
  <button
   onClick={onClick}
   className={`px-3 py-1 text-sm rounded-full transition-colors ${
    isSelected
     ? "bg-primary text-primary-foreground"
     : "bg-secondary/50 text-foreground hover:bg-secondary"
   }`}
  >
   {category}
  </button>
 );
};
