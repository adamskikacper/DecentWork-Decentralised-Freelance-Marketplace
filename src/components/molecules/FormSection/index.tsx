import React from "react";

export interface FormSectionProps {
  title: string;
  description?: string;
  required?: boolean;
  className?: string;
  children: React.ReactNode;
}

export const FormSection: React.FC<FormSectionProps> = ({
  title,
  description,
  required = false,
  className = "",
  children,
}) => {
  return (
    <div className={`space-y-4 ${className}`}>
      <div className="border-b border-gray-200 pb-4">
        <h3 className="text-lg font-medium text-gray-900">
          {title}
          {required && <span className="text-red-500 ml-1">*</span>}
        </h3>
        {description && (
          <p className="mt-1 text-sm text-gray-600">{description}</p>
        )}
      </div>
      
      <div className="space-y-4">
        {children}
      </div>
    </div>
  );
};