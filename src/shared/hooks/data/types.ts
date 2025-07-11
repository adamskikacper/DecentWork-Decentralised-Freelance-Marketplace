// Data Hooks Types

export interface AsyncDataResult<T> {
  data: T | null;
  isLoading: boolean;
  error: string | null;
  refetch: () => void;
}

export interface AsyncListResult<T> extends AsyncDataResult<T[]> {
  isEmpty: boolean;
  total?: number;
}

export interface PaginatedResult<T> extends AsyncListResult<T> {
  page: number;
  limit: number;
  totalPages: number;
  hasNextPage: boolean;
  hasPreviousPage: boolean;
}

// Dashboard specific types
export interface DashboardStats {
  totalJobs: number;
  activeJobs: number;
  completedJobs: number;
  totalEarnings: number;
  totalFreelancers?: number;
  pendingProposals?: number;
}

export interface UseDashboardStatsReturn extends AsyncDataResult<DashboardStats> {}

// Freelancer specific types
export interface UseFreelancersOptions {
  searchQuery?: string;
  skills?: string[];
  status?: string;
  experienceLevel?: string;
  page?: number;
  limit?: number;
}

export interface UseFreelancersReturn {
  freelancers: any[];
  filteredFreelancers: any[];
  isLoading: boolean;
  error: string | null;
  refetch: () => void;
  total?: number;
}

// Job specific types
export interface UseJobsOptions {
  searchQuery?: string;
  category?: string;
  status?: string;
  clientId?: string;
  freelancerId?: string;
  page?: number;
  limit?: number;
}

export interface UseJobsReturn extends AsyncListResult<any> {
  filteredJobs: any[];
}