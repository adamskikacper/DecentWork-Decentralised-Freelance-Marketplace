import React from "react";
import { Link } from "react-router-dom";

interface BreadcrumbItem {
 label: string;
 path?: string;
}

interface BreadcrumbsProps {
 items: BreadcrumbItem[];
}

const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ items }) => {
 return (
  <div className="mb-6 flex items-center text-sm">
   {items.map((item, index) => (
    <React.Fragment key={index}>
     {index > 0 && (
      <svg
       width="16"
       height="16"
       viewBox="0 0 24 24"
       fill="none"
       xmlns="http://www.w3.org/2000/svg"
       className="mx-2"
      >
       <path
        d="M9 18L15 12L9 6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
       />
      </svg>
     )}

     {item.path && index !== items.length - 1 ? (
      <Link
       to={item.path}
       className="text-muted-foreground hover:text-foreground transition-colors"
      >
       {item.label}
      </Link>
     ) : (
      <span className="text-foreground">{item.label}</span>
     )}
    </React.Fragment>
   ))}
  </div>
 );
};

export default Breadcrumbs;
