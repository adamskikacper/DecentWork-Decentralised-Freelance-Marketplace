import React from "react";
import { Outlet } from "react-router-dom";
import { Header as Navbar, Footer } from "@/components/Layout";
import { DashboardSidebar } from "@/components/Dashboard";
import { cn } from "@/lib/utils";
export interface DashboardLayoutProps
 extends React.HTMLAttributes<HTMLDivElement> {
 showSidebar?: boolean;
}
export const DashboardLayout = ({
 showSidebar = true,
 className,
 ...props
}: DashboardLayoutProps) => {
 return (
  <div className={cn("min-h-screen flex flex-col", className)} {...props}>
   <Navbar />
   <main className="flex-grow pt-24 pb-12 bg-background">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
     <div className="flex flex-col lg:flex-row gap-8">
      {/* Sidebar - conditionally rendered */}
      {showSidebar && <DashboardSidebar />}
      {/* Main Content - changes based on route */}
      <div className="flex-1">
       <Outlet />
      </div>
     </div>
    </div>
   </main>
   <Footer />
  </div>
 );
};
