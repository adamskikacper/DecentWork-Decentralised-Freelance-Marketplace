import React from "react";
import { Breadcrumbs } from "@/shared/ui";
import { LoadingScreen } from "@/shared/ui";
import type { PageTemplateProps } from "../types";

export const PageLayout = ({
 children,
 breadcrumbs = [],
 actions,
 isLoading = false,
 error,
 className = "",
}: PageTemplateProps) => {
 if (isLoading) {
  return <LoadingScreen />;
 }

 if (error) {
  return (
   <div className="space-y-8">
    {breadcrumbs.length > 0 && (
     <Breadcrumbs
      items={breadcrumbs.map((item) => ({
       label: item.label,
       path: item.href,
      }))}
     />
    )}
    <div className="flex items-center justify-center min-h-[400px]">
     <div className="text-center">
      <h2 className="text-xl font-semibold text-destructive mb-2">
       Error Loading Page
      </h2>
      <p className="text-muted-foreground">{error}</p>
     </div>
    </div>
   </div>
  );
 }

 return (
  <div className={`space-y-8 ${className}`}>
   {breadcrumbs.length > 0 && (
    <Breadcrumbs
     items={breadcrumbs.map((item) => ({
      label: item.label,
      path: item.href,
     }))}
    />
   )}

   {actions && (
    <div className="flex justify-end">
     <div>{actions}</div>
    </div>
   )}

   <div>{children}</div>
  </div>
 );
};
