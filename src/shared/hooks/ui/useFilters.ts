import { useState, useMemo } from "react";

export interface FilterOption {
  value: string;
  label: string;
  count?: number;
}

export interface UseFiltersOptions<T> {
  categories?: FilterOption[];
  filterFn?: (item: T, activeFilters: Record<string, string>) => boolean;
}

export interface UseFiltersResult<T> {
  activeFilters: Record<string, string>;
  setFilter: (key: string, value: string) => void;
  clearFilter: (key: string) => void;
  clearAllFilters: () => void;
  filteredItems: T[];
  availableCategories: FilterOption[];
}

export const useFilters = <T extends Record<string, any>>(
  items: T[],
  options: UseFiltersOptions<T> = {}
): UseFiltersResult<T> => {
  const { categories = [], filterFn } = options;
  const [activeFilters, setActiveFilters] = useState<Record<string, string>>({});

  const setFilter = (key: string, value: string) => {
    setActiveFilters(prev => ({
      ...prev,
      [key]: value
    }));
  };

  const clearFilter = (key: string) => {
    setActiveFilters(prev => {
      const newFilters = { ...prev };
      delete newFilters[key];
      return newFilters;
    });
  };

  const clearAllFilters = () => {
    setActiveFilters({});
  };

  const filteredItems = useMemo(() => {
    if (Object.keys(activeFilters).length === 0) {
      return items;
    }

    return items.filter(item => {
      if (filterFn) {
        return filterFn(item, activeFilters);
      }

      return Object.entries(activeFilters).every(([key, value]) => {
        if (value === "All" || !value) return true;
        return item[key] === value;
      });
    });
  }, [items, activeFilters, filterFn]);

  const availableCategories = useMemo(() => {
    const categoriesWithCounts = categories.map(category => {
      const count = items.filter(item => 
        Object.entries(activeFilters).every(([key, value]) => {
          if (key === 'category') return true;
          if (value === "All" || !value) return true;
          return item[key] === value;
        }) && (category.value === "All" || item.category === category.value)
      ).length;

      return {
        ...category,
        count
      };
    });

    return categoriesWithCounts;
  }, [categories, items, activeFilters]);

  return {
    activeFilters,
    setFilter,
    clearFilter,
    clearAllFilters,
    filteredItems,
    availableCategories
  };
};