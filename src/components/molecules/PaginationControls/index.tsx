import React from "react";
import { Button } from "@/shared/ui";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/shared/lib";

export interface PaginationControlsProps {
 currentPage: number;
 totalPages: number;
 onPageChange: (page: number) => void;
 canGoPrevious: boolean;
 canGoNext: boolean;
 pageNumbers: number[];
 className?: string;
}

export const PaginationControls = ({
 currentPage,
 totalPages,
 onPageChange,
 canGoPrevious,
 canGoNext,
 pageNumbers,
 className = "",
}: PaginationControlsProps) => {
 if (totalPages <= 1) return null;

 return (
  <nav
   className={cn("flex justify-center items-center gap-1", className)}
   aria-label="Pagination"
  >
   <Button
    variant="outline"
    size="sm"
    onClick={() => onPageChange(currentPage - 1)}
    disabled={!canGoPrevious}
    className="mr-2"
   >
    <ChevronLeft className="h-4 w-4" />
    Previous
   </Button>

   <div className="flex gap-1">
    {pageNumbers.map((page, index) => (
     <React.Fragment key={index}>
      {page === "..." ? (
       <span className="px-3 py-2 text-sm text-muted-foreground">...</span>
      ) : (
       <Button
        variant={currentPage === page ? "default" : "outline"}
        size="sm"
        onClick={() => onPageChange(page as number)}
        className="min-w-[2.5rem]"
       >
        {page}
       </Button>
      )}
     </React.Fragment>
    ))}
   </div>

   <Button
    variant="outline"
    size="sm"
    onClick={() => onPageChange(currentPage + 1)}
    disabled={!canGoNext}
    className="ml-2"
   >
    Next
    <ChevronRight className="h-4 w-4" />
   </Button>
  </nav>
 );
};
