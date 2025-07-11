import { useState, useMemo } from "react";

export interface UsePaginationOptions {
  initialPage?: number;
  pageSize?: number;
}

export interface UsePaginationResult<T> {
  currentPage: number;
  totalPages: number;
  pageSize: number;
  totalItems: number;
  currentItems: T[];
  goToPage: (page: number) => void;
  nextPage: () => void;
  previousPage: () => void;
  canGoNext: boolean;
  canGoPrevious: boolean;
  pageNumbers: number[];
}

export const usePagination = <T>(
  items: T[],
  options: UsePaginationOptions = {}
): UsePaginationResult<T> => {
  const { initialPage = 1, pageSize = 10 } = options;
  const [currentPage, setCurrentPage] = useState(initialPage);

  const totalItems = items.length;
  const totalPages = Math.ceil(totalItems / pageSize);

  const currentItems = useMemo(() => {
    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    return items.slice(startIndex, endIndex);
  }, [items, currentPage, pageSize]);

  const goToPage = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(prev => prev + 1);
    }
  };

  const previousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(prev => prev - 1);
    }
  };

  const canGoNext = currentPage < totalPages;
  const canGoPrevious = currentPage > 1;

  const pageNumbers = useMemo(() => {
    const delta = 2;
    const range = [];
    const rangeWithDots = [];

    for (
      let i = Math.max(2, currentPage - delta);
      i <= Math.min(totalPages - 1, currentPage + delta);
      i++
    ) {
      range.push(i);
    }

    if (currentPage - delta > 2) {
      rangeWithDots.push(1, '...' as any);
    } else {
      rangeWithDots.push(1);
    }

    rangeWithDots.push(...range);

    if (currentPage + delta < totalPages - 1) {
      rangeWithDots.push('...' as any, totalPages);
    } else if (totalPages > 1) {
      rangeWithDots.push(totalPages);
    }

    return rangeWithDots.filter((item, index, arr) => arr.indexOf(item) === index);
  }, [currentPage, totalPages]);

  return {
    currentPage,
    totalPages,
    pageSize,
    totalItems,
    currentItems,
    goToPage,
    nextPage,
    previousPage,
    canGoNext,
    canGoPrevious,
    pageNumbers: pageNumbers as number[]
  };
};