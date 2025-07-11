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

export interface FormFieldState {
 value: string;
 error?: string;
 touched: boolean;
}

export interface FormState {
 [key: string]: FormFieldState;
}

export interface DisclosureState {
 isOpen: boolean;
 onOpen: () => void;
 onClose: () => void;
 onToggle: () => void;
}

export interface SearchState {
 query: string;
 results: any[];
 isLoading: boolean;
 error?: string;
}

export interface FilterState {
 filters: Record<string, any>;
 activeFilters: string[];
 clearFilters: () => void;
 setFilter: (key: string, value: any) => void;
 removeFilter: (key: string) => void;
}

export interface SortState {
 sortBy: string;
 sortOrder: "asc" | "desc";
 setSortBy: (field: string) => void;
 toggleSortOrder: () => void;
}
