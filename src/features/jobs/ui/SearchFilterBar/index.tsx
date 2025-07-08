import React from "react";
import { CategoryPill } from "@/shared/ui";

interface SearchFilterBarProps {
 searchQuery: string;
 setSearchQuery: (query: string) => void;
 categoryFilter: string;
 setCategoryFilter: (category: string) => void;
 categories: string[];
}

export const SearchFilterBar: React.FC<SearchFilterBarProps> = ({
 searchQuery,
 setSearchQuery,
 categoryFilter,
 setCategoryFilter,
 categories,
}) => {
 return (
  <div className="glass-card rounded-xl p-6 mb-8 fade-in">
   <div className="flex flex-col md:flex-row gap-4">
    {/* Search */}
    <div className="flex-1">
     <div className="relative">
      <input
       type="text"
       placeholder="Search for jobs..."
       value={searchQuery}
       onChange={(e) => setSearchQuery(e.target.value)}
       className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:outline-none focus:ring-2 focus:ring-primary/20 pl-10"
      />
      <div className="absolute left-3 top-3 text-muted-foreground">
       <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
       >
        <path
         d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z"
         stroke="currentColor"
         strokeWidth="2"
         strokeLinecap="round"
         strokeLinejoin="round"
        />
        <path
         d="M21 21L16.65 16.65"
         stroke="currentColor"
         strokeWidth="2"
         strokeLinecap="round"
         strokeLinejoin="round"
        />
       </svg>
      </div>
     </div>
    </div>

    {/* Category Filter */}
    <div className="w-full md:w-64">
     <select
      value={categoryFilter}
      onChange={(e) => setCategoryFilter(e.target.value)}
      className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:outline-none focus:ring-2 focus:ring-primary/20 appearance-none"
     >
      {categories.map((category) => (
       <option key={category} value={category}>
        {category}
       </option>
      ))}
     </select>
    </div>

    {/* Advanced Filters Button */}
    <div>
     <button className="w-full md:w-auto px-4 py-3 rounded-lg flex items-center justify-center gap-2 bg-secondary text-foreground hover:bg-secondary/80 transition-colors">
      <svg
       width="20"
       height="20"
       viewBox="0 0 24 24"
       fill="none"
       xmlns="http://www.w3.org/2000/svg"
      >
       <path
        d="M22 3H2L10 12.46V19L14 21V12.46L22 3Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
       />
      </svg>
      <span>Filters</span>
     </button>
    </div>
   </div>

   {/* Category Pills */}
   <div className="flex flex-wrap gap-2 mt-4">
    {categories.map((category) => (
     <CategoryPill
      key={category}
      category={category}
      isSelected={categoryFilter === category}
      onClick={() => setCategoryFilter(category)}
     />
    ))}
   </div>
  </div>
 );
};

export default SearchFilterBar;
