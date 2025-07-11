import React from "react";
import { LoadingState } from "../LoadingState";
import { ErrorState } from "../ErrorState";
import { EmptyState } from "../EmptyState";

export interface DataSectionProps {
 children: React.ReactNode;
 isLoading?: boolean;
 error?: string | null;
 isEmpty?: boolean;
 emptyTitle?: string;
 emptyMessage?: string;
 onRetry?: () => void;
 loadingMessage?: string;
 className?: string;
}

export const DataSection = ({
 children,
 isLoading = false,
 error = null,
 isEmpty = false,
 emptyTitle = "No items found",
 emptyMessage = "There are no items to display at the moment.",
 onRetry,
 loadingMessage = "Loading...",
 className = "",
}: DataSectionProps) => {
 if (isLoading) {
  return <LoadingState message={loadingMessage} className={className} />;
 }

 if (error) {
  return <ErrorState message={error} onRetry={onRetry} className={className} />;
 }

 if (isEmpty) {
  return (
   <EmptyState
    title={emptyTitle}
    description={emptyMessage}
    className={className}
   />
  );
 }

 return <div className={className}>{children}</div>;
};
