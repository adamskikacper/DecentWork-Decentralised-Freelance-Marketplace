import React from "react";
import { LoadingSpinner } from "@/components/atoms";

export interface ContentSectionProps {
 title?: string;
 description?: string;
 actions?: React.ReactNode;
 isLoading?: boolean;
 error?: string;
 emptyMessage?: string;
 className?: string;
 children: React.ReactNode;
}

export const ContentSection = ({
 title,
 description,
 children,
 actions,
 isLoading = false,
 error,
 emptyMessage,
 className = "",
}: ContentSectionProps) => {
 if (error) {
  return (
   <div
    className={`bg-white rounded-lg border border-gray-200 p-6 ${className}`}
   >
    <div className="text-center py-8">
     <div className="text-red-500 mb-2">⚠️</div>
     <p className="text-gray-600">{error}</p>
    </div>
   </div>
  );
 }

 return (
  <div className={`bg-white rounded-lg border border-gray-200 ${className}`}>
   {(title || description || actions) && (
    <div className="px-6 py-4 border-b border-gray-200">
     <div className="flex items-start justify-between">
      <div>
       {title && (
        <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
       )}
       {description && (
        <p className="mt-1 text-sm text-gray-600">{description}</p>
       )}
      </div>
      {actions && <div className="ml-4 flex-shrink-0">{actions}</div>}
     </div>
    </div>
   )}

   <div className="p-6">
    {isLoading ? (
     <div className="flex justify-center py-8">
      <LoadingSpinner size="lg" />
     </div>
    ) : (
     <>
      {React.Children.count(children) === 0 && emptyMessage ? (
       <div className="text-center py-8">
        <p className="text-gray-500">{emptyMessage}</p>
       </div>
      ) : (
       children
      )}
     </>
    )}
   </div>
  </div>
 );
};
