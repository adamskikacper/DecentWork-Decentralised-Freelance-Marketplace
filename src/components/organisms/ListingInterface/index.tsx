import React from "react";
import { SearchFilterBar } from "../../molecules/SearchFilterBar";
import { PaginationControls } from "../../molecules/PaginationControls";
import { DataSection } from "../../molecules/DataSection";
import { useSearch, useFilters, usePagination } from "@/shared/hooks";

export interface ListingInterfaceProps<T> {
  items: T[];
  categories: Array<{ value: string; label: string }>;
  renderItem: (item: T) => React.ReactNode;
  searchFields?: (keyof T)[];
  filterFn?: (item: T, activeFilters: Record<string, string>) => boolean;
  searchPlaceholder?: string;
  emptyTitle?: string;
  emptyMessage?: string;
  pageSize?: number;
  isLoading?: boolean;
  error?: string | null;
  onRetry?: () => void;
  className?: string;
}

export const ListingInterface = <T extends Record<string, any>>({
  items,
  categories,
  renderItem,
  searchFields = [],
  filterFn,
  searchPlaceholder = "Search...",
  emptyTitle = "No items found",
  emptyMessage = "No items match your search criteria.",
  pageSize = 10,
  isLoading = false,
  error = null,
  onRetry,
  className = "",
}: ListingInterfaceProps<T>) => {
  const {
    query,
    setQuery,
    filteredItems: searchedItems,
  } = useSearch(items, { searchFields });

  const {
    activeFilters,
    setFilter,
    filteredItems: filteredItems,
    availableCategories
  } = useFilters(searchedItems, { categories, filterFn });

  const {
    currentItems,
    currentPage,
    totalPages,
    goToPage,
    canGoNext,
    canGoPrevious,
    pageNumbers,
  } = usePagination(filteredItems, { pageSize });

  const categoryFilter = activeFilters.category || "All";

  return (
    <div className={`space-y-6 ${className}`}>
      <SearchFilterBar
        searchValue={query}
        onSearchChange={setQuery}
        filterValue={categoryFilter}
        onFilterChange={(value) => setFilter("category", value)}
        filterOptions={availableCategories}
        searchPlaceholder={searchPlaceholder}
        disabled={isLoading}
      />

      <DataSection
        isLoading={isLoading}
        error={error}
        isEmpty={filteredItems.length === 0}
        emptyTitle={emptyTitle}
        emptyMessage={emptyMessage}
        onRetry={onRetry}
      >
        <div className="space-y-4">
          {currentItems.map((item, index) => (
            <div key={item.id || index}>
              {renderItem(item)}
            </div>
          ))}
        </div>
      </DataSection>

      {!isLoading && !error && filteredItems.length > pageSize && (
        <PaginationControls
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={goToPage}
          canGoPrevious={canGoPrevious}
          canGoNext={canGoNext}
          pageNumbers={pageNumbers}
        />
      )}
    </div>
  );
};