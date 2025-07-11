export type { FormFieldProps } from "./FormField";
export type { SearchInputProps } from "./SearchInput";
export type { SkillsManagerProps } from "./SkillsManager";
export type { FileDropzoneProps } from "./FileDropzone";
export type { FormSectionProps } from "./FormSection";

export type { UserCardProps } from "./UserCard";
export type { ActionButtonGroupProps, ActionItem } from "./ActionButtonGroup";
export type { MetricCardProps } from "./MetricCard";
export type { CategoryTagProps } from "./CategoryTag";

export type { PageHeaderProps, BreadcrumbItem } from "./PageHeader";
export type { ContentSectionProps } from "./ContentSection";

export type { EmptyStateProps } from "./EmptyState";
export type { ErrorStateProps } from "./ErrorState";
export type { LoadingStateProps } from "./LoadingState";

export interface BaseMoleculeProps {
 className?: string;
 children?: React.ReactNode;
}

export interface ClickableProps {
 onClick?: () => void;
 disabled?: boolean;
}

export interface DataStateProps {
 isLoading?: boolean;
 error?: string;
 isEmpty?: boolean;
}

export interface FormFieldState {
 value: any;
 error?: string;
 touched?: boolean;
 dirty?: boolean;
}

export interface ValidationRule {
 required?: boolean;
 minLength?: number;
 maxLength?: number;
 pattern?: RegExp;
 custom?: (value: any) => string | undefined;
}
