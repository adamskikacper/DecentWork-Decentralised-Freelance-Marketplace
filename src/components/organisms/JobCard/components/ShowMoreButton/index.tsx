import { ChevronDown, ChevronUp } from "lucide-react";

interface ShowMoreButtonProps {
 isExpanded: boolean;
 totalCount: number;
 visibleCount: number;
 onToggle: () => void;
}

export const ShowMoreButton = ({ 
 isExpanded, 
 totalCount, 
 visibleCount, 
 onToggle 
}: ShowMoreButtonProps) => {
 return (
  <button
   onClick={onToggle}
   className="flex items-center gap-1 text-label-sm text-muted-foreground hover:text-foreground transition-colors"
  >
   {isExpanded ? (
    <>
     Show less
     <ChevronUp className="h-4 w-4" />
    </>
   ) : (
    <>
     Show {totalCount - visibleCount} more
     <ChevronDown className="h-4 w-4" />
    </>
   )}
  </button>
 );
};
