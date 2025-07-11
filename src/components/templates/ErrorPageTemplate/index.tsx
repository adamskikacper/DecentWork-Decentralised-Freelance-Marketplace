import React from "react";
import { AlertTriangle, Home, ArrowLeft } from "lucide-react";
import { ActionButton } from "../../atoms/ActionButton";

export interface ErrorPageTemplateProps {
  title?: string;
  message?: string;
  statusCode?: number;
  onGoHome?: () => void;
  onGoBack?: () => void;
  showActions?: boolean;
  className?: string;
}

export const ErrorPageTemplate: React.FC<ErrorPageTemplateProps> = ({
  title,
  message,
  statusCode,
  onGoHome,
  onGoBack,
  showActions = true,
  className = "",
}) => {
  const getDefaultTitle = () => {
    if (statusCode === 404) return "Page Not Found";
    if (statusCode === 403) return "Access Denied";
    if (statusCode === 500) return "Server Error";
    return title || "Something went wrong";
  };

  const getDefaultMessage = () => {
    if (statusCode === 404) {
      return "The page you're looking for doesn't exist or has been moved.";
    }
    if (statusCode === 403) {
      return "You don't have permission to access this resource.";
    }
    if (statusCode === 500) {
      return "We're experiencing some technical difficulties. Please try again later.";
    }
    return message || "An unexpected error occurred.";
  };

  return (
    <div className={`min-h-screen bg-gray-50 flex items-center justify-center px-4 ${className}`}>
      <div className="max-w-md w-full text-center">
        <div className="mb-8">
          <AlertTriangle className="w-16 h-16 text-red-500 mx-auto mb-4" />
          
          {statusCode && (
            <div className="text-6xl font-bold text-gray-300 mb-4">
              {statusCode}
            </div>
          )}
          
          <h1 className="text-2xl font-bold text-gray-900 mb-4">
            {getDefaultTitle()}
          </h1>
          
          <p className="text-gray-600 mb-8">
            {getDefaultMessage()}
          </p>
        </div>
        
        {showActions && (
          <div className="space-y-4">
            {onGoHome && (
              <ActionButton
                onClick={onGoHome}
                icon={Home}
                className="w-full"
              >
                Go to Home
              </ActionButton>
            )}
            
            {onGoBack && (
              <ActionButton
                onClick={onGoBack}
                icon={ArrowLeft}
                variant="outline"
                className="w-full"
              >
                Go Back
              </ActionButton>
            )}
            
            {!onGoHome && !onGoBack && (
              <ActionButton
                onClick={() => window.location.href = "/"}
                icon={Home}
                className="w-full"
              >
                Go to Home
              </ActionButton>
            )}
          </div>
        )}
      </div>
    </div>
  );
};