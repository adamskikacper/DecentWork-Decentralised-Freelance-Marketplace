import { useState, useEffect, useMemo } from "react";

export interface UseSearchOptions<T> {
  initialQuery?: string;
  searchFields?: (keyof T)[];
  debounceMs?: number;
}

export interface UseSearchResult<T> {
  query: string;
  setQuery: (query: string) => void;
  filteredItems: T[];
  isSearching: boolean;
}

export const useSearch = <T extends Record<string, any>>(
  items: T[],
  options: UseSearchOptions<T> = {}
): UseSearchResult<T> => {
  const {
    initialQuery = "",
    searchFields = [],
    debounceMs = 300
  } = options;

  const [query, setQuery] = useState(initialQuery);
  const [debouncedQuery, setDebouncedQuery] = useState(initialQuery);
  const [isSearching, setIsSearching] = useState(false);

  useEffect(() => {
    setIsSearching(true);
    const timer = setTimeout(() => {
      setDebouncedQuery(query);
      setIsSearching(false);
    }, debounceMs);

    return () => clearTimeout(timer);
  }, [query, debounceMs]);

  const filteredItems = useMemo(() => {
    if (!debouncedQuery.trim()) {
      return items;
    }

    const searchTerm = debouncedQuery.toLowerCase();
    
    return items.filter(item => {
      if (searchFields.length === 0) {
        return Object.values(item).some(value => 
          value?.toString().toLowerCase().includes(searchTerm)
        );
      }

      return searchFields.some(field => {
        const value = item[field];
        return value?.toString().toLowerCase().includes(searchTerm);
      });
    });
  }, [items, debouncedQuery, searchFields]);

  return {
    query,
    setQuery,
    filteredItems,
    isSearching
  };
};