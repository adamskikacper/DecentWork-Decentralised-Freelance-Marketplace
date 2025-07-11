import React from "react";

export interface BreadcrumbItem {
 label: string;
 href?: string;
}

export interface PageHeaderProps {
 title: string;
 description?: string;
 actions?: React.ReactNode;
 breadcrumbs?: BreadcrumbItem[];
 className?: string;
}

export const PageHeader = ({
 title,
 description,
 actions,
 breadcrumbs,
 className = "",
}: PageHeaderProps) => {
 return (
  <div className={`pb-6 border-b border-gray-200 ${className}`}>
   {breadcrumbs && breadcrumbs.length > 0 && (
    <nav className="mb-4">
     <ol className="flex items-center space-x-2 text-sm text-gray-500">
      {breadcrumbs.map((item, index) => (
       <li key={index} className="flex items-center">
        {index > 0 && <span className="mx-2">/</span>}
        {item.href ? (
         <a href={item.href} className="hover:text-gray-700">
          {item.label}
         </a>
        ) : (
         <span className="text-gray-900">{item.label}</span>
        )}
       </li>
      ))}
     </ol>
    </nav>
   )}

   <div className="flex items-start justify-between">
    <div>
     <h1 className="text-2xl font-bold text-gray-900">{title}</h1>
     {description && <p className="mt-2 text-gray-600">{description}</p>}
    </div>

    {actions && <div className="ml-4 flex-shrink-0">{actions}</div>}
   </div>
  </div>
 );
};
