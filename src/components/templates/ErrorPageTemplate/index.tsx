import React from "react";
import { AlertTriangle, Home } from "lucide-react";
import { ActionButton } from "@/components/atoms";

export interface ErrorPageTemplateProps {
 title?: string;
 message?: string;
 statusCode?: number;
 onGoHome?: () => void;
 showActions?: boolean;
 className?: string;
}

export const ErrorPageTemplate = ({
 title,
 message,
 statusCode,
 onGoHome,
 showActions = true,
 className = "",
}: ErrorPageTemplateProps) => {
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
  <div
   className={`min-h-screen bg-gray-50 flex items-center justify-center px-4 ${className}`}
  >
   <div className="max-w-md w-full text-center">
    <div className="mb-8">
     <AlertTriangle className="w-16 h-16 text-red-500 mx-auto mb-4" />

     {statusCode && (
      <div className="text-display-lg text-gray-300 mb-4">{statusCode}</div>
     )}

     <h1 className="text-heading-2 text-gray-900 mb-4">
      {getDefaultTitle()}
     </h1>

     <p className="text-body-md text-gray-600 mb-8">{getDefaultMessage()}</p>
    </div>

    {showActions && (
     <div className="flex justify-center">
      {onGoHome ? (
       <ActionButton onClick={onGoHome} icon={Home}>
        Go to Home
       </ActionButton>
      ) : (
       <ActionButton onClick={() => (window.location.href = "/")} icon={Home}>
        Go to Home
       </ActionButton>
      )}
     </div>
    )}
   </div>
  </div>
 );
};
