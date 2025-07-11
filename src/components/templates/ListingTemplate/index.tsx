import React from "react";
import { PageHeader } from "../../molecules/PageHeader";
import { ContentSection } from "../../molecules/ContentSection";

export interface ListingTemplateProps {
  title: string;
  description?: string;
  breadcrumbs?: Array<{ label: string; href?: string }>;
  actions?: React.ReactNode;
  filters?: React.ReactNode;
  searchBar?: React.ReactNode;
  isLoading?: boolean;
  error?: string;
  emptyMessage?: string;
  itemCount?: number;
  className?: string;
  children: React.ReactNode;
}

export const ListingTemplate: React.FC<ListingTemplateProps> = ({
  title,
  description,
  breadcrumbs,
  actions,
  filters,
  searchBar,
  isLoading = false,
  error,
  emptyMessage,
  itemCount,
  className = "",
  children,
}) => {
  const getDescription = () => {
    if (description) return description;
    if (itemCount !== undefined) {
      return `${itemCount} ${itemCount === 1 ? 'item' : 'items'} found`;
    }
    return undefined;
  };

  return (
    <div className={`space-y-6 ${className}`}>
      <PageHeader
        title={title}
        description={getDescription()}
        breadcrumbs={breadcrumbs}
        actions={actions}
      />
      
      {(searchBar || filters) && (
        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <div className="space-y-4">
            {searchBar}
            {filters}
          </div>
        </div>
      )}
      
      <ContentSection
        isLoading={isLoading}
        error={error}
        emptyMessage={emptyMessage}
      >
        {children}
      </ContentSection>
    </div>
  );
};