import React from "react";
import { Search } from "lucide-react";
import { Input } from "@/shared/ui";

export interface SearchInputProps {
 placeholder?: string;
 value: string;
 onChange: (value: string) => void;
 onSearch?: () => void;
 disabled?: boolean;
 className?: string;
}

export const SearchInput = ({
 value,
 onChange,
 placeholder = "Search...",
 onSearch,
 disabled = false,
 className = "",
}: SearchInputProps) => {
 const handleKeyPress = (e: React.KeyboardEvent) => {
  if (e.key === "Enter" && onSearch) {
   onSearch();
  }
 };

 return (
  <div className={`relative ${className}`}>
   <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
    <Search className="h-4 w-4 text-muted-foreground" />
   </div>
   <Input
    type="text"
    placeholder={placeholder}
    value={value}
    onChange={(e) => onChange(e.target.value)}
    onKeyPress={handleKeyPress}
    disabled={disabled}
    className="pl-10"
   />
  </div>
 );
};
