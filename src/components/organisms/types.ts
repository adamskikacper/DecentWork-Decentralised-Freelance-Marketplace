export type { JobFormProps, JobFormData } from "./JobForm";
export type { FreelancerGridProps } from "./FreelancerGrid";
export type { DashboardStatsSectionProps } from "./DashboardStatsSection";
export type {
 NavigationSidebarProps,
 NavigationItem,
} from "./NavigationSidebar";
export type { AsyncDataWrapperProps } from "./AsyncDataWrapper";

export interface BaseOrganismProps {
 className?: string;
 isLoading?: boolean;
 error?: string | null;
}

export interface DataOrganismProps extends BaseOrganismProps {
 onRefresh?: () => void;
 refreshing?: boolean;
}

export interface FormOrganismProps extends BaseOrganismProps {
 onSubmit: (data: any) => void;
 onCancel?: () => void;
 initialData?: any;
 validation?: Record<string, any>;
}

export interface LayoutOrganismProps extends BaseOrganismProps {
 header?: React.ReactNode;
 sidebar?: React.ReactNode;
 footer?: React.ReactNode;
 children: React.ReactNode;
}
