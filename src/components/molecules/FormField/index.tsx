import React from "react";
import { Label } from "@/shared/ui";

export interface FormFieldProps {
 label: string;
 id: string;
 required?: boolean;
 error?: string;
 description?: string;
 className?: string;
 children: React.ReactNode;
}

export const FormField = ({
 label,
 id,
 required = false,
 error,
 description,
 className = "",
 children,
}: FormFieldProps) => {
 return (
  <div className={`space-y-2 ${className}`}>
   <Label htmlFor={id}>
    {label}
    {required && <span className="text-red-500 ml-1">*</span>}
   </Label>
   {description && <p className="text-sm text-gray-600">{description}</p>}
   {children}
   {error && <p className="text-sm text-red-500">{error}</p>}
  </div>
 );
};
