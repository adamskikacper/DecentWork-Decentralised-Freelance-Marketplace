import React, { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import { Navbar, Footer } from "@/shared/ui";
import { DashboardSidebar } from "../DashboardSidebar";
import { cn } from "@/shared/lib/utils";
import { useMobile } from "@/shared/hooks/ui/useMobile";

export interface DashboardLayoutProps
 extends React.HTMLAttributes<HTMLDivElement> {
 className?: string;
 showSidebar?: boolean;
}

export const DashboardLayout = ({
 showSidebar = true,
 className,
 ...props
}: DashboardLayoutProps) => {
 const isMobile = useMobile();

 const [, setSidebarCollapsed] = useState(isMobile);
 const [, setHasInitialized] = useState(false);

 useEffect(() => {
  if (isMobile) {
   setSidebarCollapsed(true);
  } else {
   setSidebarCollapsed(false);
  }
 }, [isMobile]);

 useEffect(() => {
  const timer = setTimeout(() => {
   setHasInitialized(true);
  }, 100);

  return () => clearTimeout(timer);
 }, []);

 useEffect(() => {
  const handleSidebarToggle = (event: CustomEvent) => {
   setSidebarCollapsed(event.detail.isCollapsed);
  };

  window.addEventListener(
   "sidebar-toggle",
   handleSidebarToggle as EventListener
  );
  return () => {
   window.removeEventListener(
    "sidebar-toggle",
    handleSidebarToggle as EventListener
   );
  };
 }, []);

 return (
  <div className={cn("min-h-screen flex flex-col", className)} {...props}>
   <Navbar />

   <div className="flex-grow pt-24 bg-background">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex min-h-[calc(100vh-6rem)]">
     {/* Sidebar */}
     {showSidebar && (
      <DashboardSidebar insideContainer={true} className="p-4" />
     )}

     {/* Main Content */}
     <main className={cn("min-w-0 flex flex-col flex-grow p-0 sm:p-3 lg:p-4")}>
      <div className="flex-grow overflow-auto p-2 sm:p-3 lg:p-4">
       <Outlet />
      </div>
     </main>
    </div>
   </div>
   <Footer />
  </div>
 );
};
