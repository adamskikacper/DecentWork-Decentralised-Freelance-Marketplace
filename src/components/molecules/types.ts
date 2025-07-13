export type { SearchInputProps } from "./SearchInput";
export type { UserCardProps } from "./UserCard";
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
