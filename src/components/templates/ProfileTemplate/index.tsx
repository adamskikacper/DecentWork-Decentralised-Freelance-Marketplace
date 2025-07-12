import React from "react";
import { PageHeader, UserCard } from "@/components/molecules";

export interface ProfileTemplateProps {
 title: string;
 description?: string;
 breadcrumbs?: Array<{ label: string; href?: string }>;
 actions?: React.ReactNode;
 userInfo?: {
  name: string;
  title?: string;
  avatar?: string;
  status?: string;
  rating?: number;
 };
 sidebar?: React.ReactNode;
 isLoading?: boolean;
 error?: string;
 className?: string;
 children: React.ReactNode;
}

export const ProfileTemplate = ({
 title,
 description,
 breadcrumbs,
 actions,
 userInfo,
 sidebar,
 isLoading = false,
 error,
 className = "",
 children,
}: ProfileTemplateProps) => {
 if (error) {
  return (
   <div className={`space-y-6 ${className}`}>
    <div className="text-center py-12">
     <div className="text-red-500 mb-4">⚠️</div>
     <h3 className="text-lg font-medium text-gray-900 mb-2">
      Something went wrong
     </h3>
     <p className="text-gray-600">{error}</p>
    </div>
   </div>
  );
 }

 if (isLoading) {
  return (
   <div className={`space-y-6 ${className}`}>
    <div className="animate-pulse">
     <div className="h-8 bg-gray-300 rounded w-1/4 mb-4"></div>
     <div className="h-4 bg-gray-300 rounded w-1/2 mb-8"></div>
     <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <div className="lg:col-span-2 space-y-6">
       <div className="h-64 bg-gray-300 rounded"></div>
      </div>
      <div className="space-y-6">
       <div className="h-48 bg-gray-300 rounded"></div>
      </div>
     </div>
    </div>
   </div>
  );
 }

 return (
  <div className={`space-y-6 ${className}`}>
   <PageHeader
    title={title}
    description={description}
    breadcrumbs={breadcrumbs}
    actions={actions}
   />

   {userInfo && (
    <div className="bg-white rounded-lg border border-gray-200 p-6">
     <UserCard
      name={userInfo.name}
      title={userInfo.title}
      avatar={userInfo.avatar}
      status={userInfo.status}
      rating={userInfo.rating}
      variant="detailed"
     />
    </div>
   )}

   <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
    <div className="lg:col-span-2">{children}</div>

    {sidebar && <div className="space-y-6">{sidebar}</div>}
   </div>
  </div>
 );
};
