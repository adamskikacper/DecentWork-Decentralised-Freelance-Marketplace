import React from "react";
import { SearchInput } from "../SearchInput";
import { FilterSelect } from "../../atoms/FilterSelect";

export interface SearchFilterBarProps {
  searchValue: string;
  onSearchChange: (value: string) => void;
  filterValue: string;
  onFilterChange: (value: string) => void;
  filterOptions: Array<{ value: string; label: string; count?: number }>;
  searchPlaceholder?: string;
  filterPlaceholder?: string;
  className?: string;
  disabled?: boolean;
}

export const SearchFilterBar: React.FC<SearchFilterBarProps> = ({
  searchValue,
  onSearchChange,
  filterValue,
  onFilterChange,
  filterOptions,
  searchPlaceholder = "Search...",
  filterPlaceholder = "All Categories",
  className = "",
  disabled = false,
}) => {
  return (
    <div className={`flex flex-col sm:flex-row gap-4 ${className}`}>
      <div className="flex-1">
        <SearchInput
          placeholder={searchPlaceholder}
          value={searchValue}
          onChange={onSearchChange}
          disabled={disabled}
        />
      </div>
      <div className="w-full sm:w-48">
        <FilterSelect
          value={filterValue}
          onValueChange={onFilterChange}
          options={filterOptions}
          placeholder={filterPlaceholder}
          disabled={disabled}
        />
      </div>
    </div>
  );
};