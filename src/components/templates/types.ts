export type { ErrorPageTemplateProps } from "./ErrorPageTemplate";

export interface BaseTemplateProps {
 children: React.ReactNode;
 className?: string;
}

export interface LayoutTemplateProps extends BaseTemplateProps {
 showHeader?: boolean;
 showFooter?: boolean;
 showSidebar?: boolean;
}

export interface PageTemplateProps extends BaseTemplateProps {
 title?: string;
 description?: string;
 breadcrumbs?: BreadcrumbItem[];
 actions?: React.ReactNode;
 isLoading?: boolean;
 error?: string;
}

export interface FormTemplateProps extends PageTemplateProps {
 formTitle?: string;
 formDescription?: string;
 onSubmit?: (data: any) => void;
 onCancel?: () => void;
}

export interface ContentTemplateProps extends PageTemplateProps {
 sidebar?: React.ReactNode;
 filters?: React.ReactNode;
 searchBar?: React.ReactNode;
 itemCount?: number;
 emptyMessage?: string;
}

export interface BreadcrumbItem {
 label: string;
 href?: string;
}
