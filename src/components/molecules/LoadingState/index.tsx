import React from "react";
import { LoadingSpinner } from "../../atoms/LoadingSpinner";

export interface LoadingStateProps {
  message?: string;
  size?: "sm" | "md" | "lg";
  className?: string;
}

export const LoadingState: React.FC<LoadingStateProps> = ({
  message = "Loading...",
  size = "md",
  className = "",
}) => {
  return (
    <div className={`flex flex-col items-center justify-center py-12 ${className}`}>
      <LoadingSpinner size={size} />
      <p className="mt-4 text-gray-600">{message}</p>
    </div>
  );
};