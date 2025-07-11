import React from "react";
import { AlertTriangle, RefreshCw } from "lucide-react";
import { ActionButton } from "../../atoms/ActionButton";

export interface ErrorStateProps {
  title?: string;
  message: string;
  onRetry?: () => void;
  retryLabel?: string;
  className?: string;
}

export const ErrorState: React.FC<ErrorStateProps> = ({
  title = "Something went wrong",
  message,
  onRetry,
  retryLabel = "Try again",
  className = "",
}) => {
  return (
    <div className={`text-center py-12 ${className}`}>
      <AlertTriangle className="w-12 h-12 mx-auto text-red-500 mb-4" />
      
      <h3 className="text-lg font-medium text-gray-900 mb-2">{title}</h3>
      
      <p className="text-gray-600 mb-6 max-w-md mx-auto">{message}</p>
      
      {onRetry && (
        <ActionButton 
          onClick={onRetry}
          icon={RefreshCw}
          variant="outline"
        >
          {retryLabel}
        </ActionButton>
      )}
    </div>
  );
};