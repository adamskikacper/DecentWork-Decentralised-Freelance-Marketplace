// UI Hooks Types

// Toast Types
export interface Toast {
  id: string;
  title: string;
  description?: string;
  variant?: "default" | "success" | "warning" | "destructive";
  duration?: number;
}

export interface ToastState {
  toasts: Toast[];
}

// Form Types
export interface FormFieldState {
  value: string;
  error?: string;
  touched: boolean;
}

export interface FormState {
  [key: string]: FormFieldState;
}

// Disclosure Types
export interface DisclosureState {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
  onToggle: () => void;
}

// Search Types
export interface SearchState {
  query: string;
  results: any[];
  isLoading: boolean;
  error?: string;
}

// Filter Types
export interface FilterState {
  filters: Record<string, any>;
  activeFilters: string[];
  clearFilters: () => void;
  setFilter: (key: string, value: any) => void;
  removeFilter: (key: string) => void;
}

// Sort Types
export interface SortState {
  sortBy: string;
  sortOrder: "asc" | "desc";
  setSortBy: (field: string) => void;
  toggleSortOrder: () => void;
}