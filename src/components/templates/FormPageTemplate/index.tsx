import React from "react";
import { PageHeader, ContentSection } from "@/components/molecules";

export interface FormPageTemplateProps {
 title: string;
 description?: string;
 breadcrumbs?: Array<{ label: string; href?: string }>;
 actions?: React.ReactNode;
 formTitle?: string;
 formDescription?: string;
 isLoading?: boolean;
 error?: string;
 className?: string;
 children: React.ReactNode;
}

export const FormPageTemplate = ({
 title,
 description,
 breadcrumbs,
 actions,
 formTitle,
 formDescription,
 isLoading = false,
 error,
 className = "",
 children,
}: FormPageTemplateProps) => {
 return (
  <div className={`space-y-6 ${className}`}>
   <PageHeader
    title={title}
    description={description}
    breadcrumbs={breadcrumbs}
    actions={actions}
   />

   <div className="max-w-4xl mx-auto">
    <ContentSection
     title={formTitle}
     description={formDescription}
     isLoading={isLoading}
     error={error}
    >
     {children}
    </ContentSection>
   </div>
  </div>
 );
};
