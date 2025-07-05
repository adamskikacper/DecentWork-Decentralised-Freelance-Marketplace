import React, { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import { Header as Navbar, Footer } from "@/components/Layout";
import { DashboardSidebar } from "@/components/Dashboard";
import { cn } from "@/lib/utils";
import { useIsMobile } from "@/hooks/useMobile";

export interface DashboardLayoutProps
 extends React.HTMLAttributes<HTMLDivElement> {
 showSidebar?: boolean;
}

export const DashboardLayout = ({
 showSidebar = true,
 className,
 ...props
}: DashboardLayoutProps) => {
 const isMobile = useIsMobile();
 const [sidebarCollapsed, setSidebarCollapsed] = useState(isMobile);
 const [hasInitialized, setHasInitialized] = useState(false);

 // Sync sidebar state
 useEffect(() => {
  if (isMobile) {
   setSidebarCollapsed(true);
  } else {
   setSidebarCollapsed(false);
  }
 }, [isMobile]);

 // Enable animations
 useEffect(() => {
  const timer = setTimeout(() => {
   setHasInitialized(true);
  }, 100);

  return () => clearTimeout(timer);
 }, []);

 // Listen for sidebar changes
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

   {/* Main Dashboard Container */}
   <div className="flex-grow pt-24 bg-background overflow-hidden relative">
    {/* Fixed Sidebar */}
    {showSidebar && <DashboardSidebar />}

    {/* Main Content */}
    <main
     className={cn(
      "min-w-0 overflow-hidden transition-all duration-300 ease-in-out flex flex-col",
      showSidebar && !isMobile
       ? "ml-[280px]" // Desktop: always show sidebar with full width
       : showSidebar && isMobile && !sidebarCollapsed
       ? "ml-[80px]" // Mobile: sidebar expanded (small width)
       : "ml-0" // Mobile: sidebar collapsed (hidden) or no sidebar
     )}
    >
     <div className="flex-grow px-4 sm:px-6 lg:px-8">
      <div className="min-h-[calc(100vh-12rem)] overflow-auto">
       <Outlet />
      </div>
     </div>
     
     {/* Footer positioned to respect sidebar */}
     <Footer />
    </main>
   </div>
  </div>
 );
};
