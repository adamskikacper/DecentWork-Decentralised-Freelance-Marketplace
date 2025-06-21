import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import {
 Pagination,
 PaginationContent,
 PaginationEllipsis,
 PaginationItem,
 PaginationLink,
 PaginationNext,
 PaginationPrevious,
} from "./index";
import { Button } from "../Button";
import {
 Select,
 SelectContent,
 SelectItem,
 SelectTrigger,
 SelectValue,
} from "../Select";
import {
 ChevronLeft,
 ChevronRight,
 ChevronsLeft,
 ChevronsRight,
} from "lucide-react";

/**
 * Pagination component provides navigation between pages of content.
 * Built with accessibility in mind and keyboard navigation support.
 */
const meta = {
 title: "UI/Pagination",
 component: Pagination,
 parameters: {
  layout: "centered",
 },
 tags: ["autodocs"],
} satisfies Meta<typeof Pagination>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Basic pagination
 */
export const Basic: Story = {
 render: () => (
  <Pagination>
   <PaginationContent>
    <PaginationItem>
     <PaginationPrevious href="#" />
    </PaginationItem>
    <PaginationItem>
     <PaginationLink href="#">1</PaginationLink>
    </PaginationItem>
    <PaginationItem>
     <PaginationLink href="#" isActive>
      2
     </PaginationLink>
    </PaginationItem>
    <PaginationItem>
     <PaginationLink href="#">3</PaginationLink>
    </PaginationItem>
    <PaginationItem>
     <PaginationEllipsis />
    </PaginationItem>
    <PaginationItem>
     <PaginationNext href="#" />
    </PaginationItem>
   </PaginationContent>
  </Pagination>
 ),
};

/**
 * Pagination with custom icons
 */
export const CustomIcons = {
 render: () => (
  <Pagination>
   <PaginationContent>
    <PaginationItem>
     <PaginationPrevious href="#">
      <ChevronLeft className="h-4 w-4" />
      Previous
     </PaginationPrevious>
    </PaginationItem>
    <PaginationItem>
     <PaginationLink href="#">1</PaginationLink>
    </PaginationItem>
    <PaginationItem>
     <PaginationLink href="#" isActive>
      2
     </PaginationLink>
    </PaginationItem>
    <PaginationItem>
     <PaginationLink href="#">3</PaginationLink>
    </PaginationItem>
    <PaginationItem>
     <PaginationLink href="#">4</PaginationLink>
    </PaginationItem>
    <PaginationItem>
     <PaginationLink href="#">5</PaginationLink>
    </PaginationItem>
    <PaginationItem>
     <PaginationNext href="#">
      Next
      <ChevronRight className="h-4 w-4" />
     </PaginationNext>
    </PaginationItem>
   </PaginationContent>
  </Pagination>
 ),
};

/**
 * Compact pagination
 */
export const Compact = {
 render: () => (
  <Pagination>
   <PaginationContent>
    <PaginationItem>
     <PaginationPrevious href="#" size="sm" />
    </PaginationItem>
    <PaginationItem>
     <PaginationLink href="#" size="sm">
      1
     </PaginationLink>
    </PaginationItem>
    <PaginationItem>
     <PaginationLink href="#" size="sm" isActive>
      2
     </PaginationLink>
    </PaginationItem>
    <PaginationItem>
     <PaginationLink href="#" size="sm">
      3
     </PaginationLink>
    </PaginationItem>
    <PaginationItem>
     <PaginationNext href="#" size="sm" />
    </PaginationItem>
   </PaginationContent>
  </Pagination>
 ),
};

/**
 * Interactive pagination with state
 */
export const Interactive = {
 render: () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 10;

  const handlePageChange = (page: number) => {
   setCurrentPage(page);
  };

  const renderPageNumbers = () => {
   const pages = [];
   const showEllipsis = totalPages > 7;

   if (!showEllipsis) {
    // Show all pages if 7 or fewer
    for (let i = 1; i <= totalPages; i++) {
     pages.push(
      <PaginationItem key={i}>
       <PaginationLink
        href="#"
        isActive={currentPage === i}
        onClick={(e) => {
         e.preventDefault();
         handlePageChange(i);
        }}
       >
        {i}
       </PaginationLink>
      </PaginationItem>
     );
    }
   } else {
    // Show truncated pagination
    pages.push(
     <PaginationItem key={1}>
      <PaginationLink
       href="#"
       isActive={currentPage === 1}
       onClick={(e) => {
        e.preventDefault();
        handlePageChange(1);
       }}
      >
       1
      </PaginationLink>
     </PaginationItem>
    );

    if (currentPage > 3) {
     pages.push(
      <PaginationItem key="ellipsis1">
       <PaginationEllipsis />
      </PaginationItem>
     );
    }

    const start = Math.max(2, currentPage - 1);
    const end = Math.min(totalPages - 1, currentPage + 1);

    for (let i = start; i <= end; i++) {
     pages.push(
      <PaginationItem key={i}>
       <PaginationLink
        href="#"
        isActive={currentPage === i}
        onClick={(e) => {
         e.preventDefault();
         handlePageChange(i);
        }}
       >
        {i}
       </PaginationLink>
      </PaginationItem>
     );
    }

    if (currentPage < totalPages - 2) {
     pages.push(
      <PaginationItem key="ellipsis2">
       <PaginationEllipsis />
      </PaginationItem>
     );
    }

    pages.push(
     <PaginationItem key={totalPages}>
      <PaginationLink
       href="#"
       isActive={currentPage === totalPages}
       onClick={(e) => {
        e.preventDefault();
        handlePageChange(totalPages);
       }}
      >
       {totalPages}
      </PaginationLink>
     </PaginationItem>
    );
   }

   return pages;
  };

  return (
   <div className="space-y-4">
    <Pagination>
     <PaginationContent>
      <PaginationItem>
       <PaginationPrevious
        href="#"
        onClick={(e) => {
         e.preventDefault();
         if (currentPage > 1) handlePageChange(currentPage - 1);
        }}
        className={currentPage === 1 ? "pointer-events-none opacity-50" : ""}
       />
      </PaginationItem>

      {renderPageNumbers()}

      <PaginationItem>
       <PaginationNext
        href="#"
        onClick={(e) => {
         e.preventDefault();
         if (currentPage < totalPages) handlePageChange(currentPage + 1);
        }}
        className={
         currentPage === totalPages ? "pointer-events-none opacity-50" : ""
        }
       />
      </PaginationItem>
     </PaginationContent>
    </Pagination>

    <div className="text-center text-sm text-muted-foreground">
     Page {currentPage} of {totalPages}
    </div>
   </div>
  );
 },
};

/**
 * Pagination with first/last buttons
 */
export const WithFirstLast = {
 render: () => {
  const [currentPage, setCurrentPage] = useState(5);
  const totalPages = 20;

  return (
   <div className="space-y-4">
    <Pagination>
     <PaginationContent>
      <PaginationItem>
       <Button
        variant="outline"
        size="sm"
        onClick={() => setCurrentPage(1)}
        disabled={currentPage === 1}
       >
        <ChevronsLeft className="h-4 w-4" />
        First
       </Button>
      </PaginationItem>

      <PaginationItem>
       <PaginationPrevious
        href="#"
        onClick={(e) => {
         e.preventDefault();
         if (currentPage > 1) setCurrentPage(currentPage - 1);
        }}
        className={currentPage === 1 ? "pointer-events-none opacity-50" : ""}
       />
      </PaginationItem>

      <PaginationItem>
       <PaginationLink href="#" isActive>
        {currentPage}
       </PaginationLink>
      </PaginationItem>

      <PaginationItem>
       <PaginationNext
        href="#"
        onClick={(e) => {
         e.preventDefault();
         if (currentPage < totalPages) setCurrentPage(currentPage + 1);
        }}
        className={
         currentPage === totalPages ? "pointer-events-none opacity-50" : ""
        }
       />
      </PaginationItem>

      <PaginationItem>
       <Button
        variant="outline"
        size="sm"
        onClick={() => setCurrentPage(totalPages)}
        disabled={currentPage === totalPages}
       >
        Last
        <ChevronsRight className="h-4 w-4" />
       </Button>
      </PaginationItem>
     </PaginationContent>
    </Pagination>

    <div className="text-center text-sm text-muted-foreground">
     Page {currentPage} of {totalPages}
    </div>
   </div>
  );
 },
};

/**
 * Pagination with page size selector
 */
export const WithPageSize = {
 render: () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const totalItems = 247;
  const totalPages = Math.ceil(totalItems / pageSize);

  const startItem = (currentPage - 1) * pageSize + 1;
  const endItem = Math.min(currentPage * pageSize, totalItems);

  return (
   <div className="space-y-4">
    <div className="flex items-center justify-between">
     <div className="flex items-center space-x-2">
      <span className="text-sm">Show</span>
      <Select
       value={pageSize.toString()}
       onValueChange={(value) => {
        setPageSize(Number(value));
        setCurrentPage(1);
       }}
      >
       <SelectTrigger className="w-20">
        <SelectValue />
       </SelectTrigger>
       <SelectContent>
        <SelectItem value="5">5</SelectItem>
        <SelectItem value="10">10</SelectItem>
        <SelectItem value="20">20</SelectItem>
        <SelectItem value="50">50</SelectItem>
       </SelectContent>
      </Select>
      <span className="text-sm">entries</span>
     </div>

     <div className="text-sm text-muted-foreground">
      Showing {startItem} to {endItem} of {totalItems} entries
     </div>
    </div>

    <Pagination>
     <PaginationContent>
      <PaginationItem>
       <PaginationPrevious
        href="#"
        onClick={(e) => {
         e.preventDefault();
         if (currentPage > 1) setCurrentPage(currentPage - 1);
        }}
        className={currentPage === 1 ? "pointer-events-none opacity-50" : ""}
       />
      </PaginationItem>

      {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
       const page = i + 1;
       return (
        <PaginationItem key={page}>
         <PaginationLink
          href="#"
          isActive={currentPage === page}
          onClick={(e) => {
           e.preventDefault();
           setCurrentPage(page);
          }}
         >
          {page}
         </PaginationLink>
        </PaginationItem>
       );
      })}

      {totalPages > 5 && (
       <PaginationItem>
        <PaginationEllipsis />
       </PaginationItem>
      )}

      <PaginationItem>
       <PaginationNext
        href="#"
        onClick={(e) => {
         e.preventDefault();
         if (currentPage < totalPages) setCurrentPage(currentPage + 1);
        }}
        className={
         currentPage === totalPages ? "pointer-events-none opacity-50" : ""
        }
       />
      </PaginationItem>
     </PaginationContent>
    </Pagination>
   </div>
  );
 },
};

/**
 * Simple pagination (just prev/next)
 */
export const Simple = {
 render: () => {
  const [currentPage, setCurrentPage] = useState(3);
  const totalPages = 10;

  return (
   <div className="space-y-4">
    <Pagination>
     <PaginationContent>
      <PaginationItem>
       <PaginationPrevious
        href="#"
        onClick={(e) => {
         e.preventDefault();
         if (currentPage > 1) setCurrentPage(currentPage - 1);
        }}
        className={currentPage === 1 ? "pointer-events-none opacity-50" : ""}
       />
      </PaginationItem>

      <PaginationItem>
       <span className="px-4 py-2 text-sm">
        Page {currentPage} of {totalPages}
       </span>
      </PaginationItem>

      <PaginationItem>
       <PaginationNext
        href="#"
        onClick={(e) => {
         e.preventDefault();
         if (currentPage < totalPages) setCurrentPage(currentPage + 1);
        }}
        className={
         currentPage === totalPages ? "pointer-events-none opacity-50" : ""
        }
       />
      </PaginationItem>
     </PaginationContent>
    </Pagination>
   </div>
  );
 },
};
