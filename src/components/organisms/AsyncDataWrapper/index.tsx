import React from "react";
import { LoadingState } from "../../molecules/LoadingState";
import { ErrorState } from "../../molecules/ErrorState";
import { EmptyState } from "../../molecules/EmptyState";

export interface AsyncDataWrapperProps {
 isLoading: boolean;
 error?: string | null;
 isEmpty?: boolean;
 emptyMessage?: string;
 emptyIcon?: React.ComponentType<{ className?: string }>;
 loadingMessage?: string;
 onRetry?: () => void;
 retryLabel?: string;
 className?: string;
 children: React.ReactNode;
}

export const AsyncDataWrapper = ({
 isLoading,
 error,
 isEmpty = false,
 emptyMessage = "No data available",
 emptyIcon,
 loadingMessage = "Loading...",
 onRetry,
 retryLabel = "Try again",
 className = "",
 children,
}: AsyncDataWrapperProps) => {
 if (isLoading) {
  return (
   <div className={className}>
    <LoadingState message={loadingMessage} />
   </div>
  );
 }

 if (error) {
  return (
   <div className={className}>
    <ErrorState message={error} onRetry={onRetry} retryLabel={retryLabel} />
   </div>
  );
 }

 if (isEmpty) {
  return (
   <div className={className}>
    <EmptyState title="No data found" description={emptyMessage} />
   </div>
  );
 }

 return <div className={className}>{children}</div>;
};
