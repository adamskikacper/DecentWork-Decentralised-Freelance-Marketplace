import React from "react";
import {
 Select,
 SelectContent,
 SelectItem,
 SelectTrigger,
 SelectValue,
} from "@/shared/ui";

export interface FilterSelectProps {
 value: string;
 onValueChange: (value: string) => void;
 options: Array<{ value: string; label: string; count?: number }>;
 placeholder?: string;
 disabled?: boolean;
 className?: string;
}

export const FilterSelect = ({
 options,
 value,
 onValueChange,
 placeholder = "Select option",
 disabled = false,
 className = "",
}: FilterSelectProps) => {
 return (
  <Select value={value} onValueChange={onValueChange} disabled={disabled}>
   <SelectTrigger className={className}>
    <SelectValue placeholder={placeholder} />
   </SelectTrigger>
   <SelectContent>
    {options.map((option, index) => (
     <SelectItem key={`${option.value}-${index}`} value={option.value}>
      <div className="flex items-center justify-between w-full">
       <span>{option.label}</span>
       {option.count !== undefined && (
        <span className="text-muted-foreground text-sm ml-2">
         ({option.count})
        </span>
       )}
      </div>
     </SelectItem>
    ))}
   </SelectContent>
  </Select>
 );
};
