import React, { useState } from "react";
import { NavigationSidebar } from "../../organisms/NavigationSidebar";
import { useMobile } from "@/shared/hooks";

export interface DashboardTemplateProps {
  children: React.ReactNode;
  showSidebar?: boolean;
  className?: string;
}

export const DashboardTemplate: React.FC<DashboardTemplateProps> = ({
  children,
  showSidebar = true,
  className = "",
}) => {
  const isMobile = useMobile();
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);

  const toggleMobileSidebar = () => {
    setMobileSidebarOpen(!mobileSidebarOpen);
  };

  if (!showSidebar) {
    return (
      <div className={`min-h-screen bg-gray-50 ${className}`}>
        <main className="p-6">
          {children}
        </main>
      </div>
    );
  }

  return (
    <div className={`min-h-screen bg-gray-50 ${className}`}>
      {/* Mobile Header */}
      {isMobile && (
        <header className="bg-white border-b border-gray-200 px-4 py-3 lg:hidden">
          <div className="flex items-center justify-between">
            <h1 className="text-lg font-semibold text-gray-900">DecentWork</h1>
            <button
              onClick={toggleMobileSidebar}
              className="p-2 rounded-md text-gray-600 hover:bg-gray-100"
              aria-label="Toggle menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </header>
      )}

      {/* Sidebar */}
      <NavigationSidebar
        variant={isMobile ? "mobile" : "desktop"}
        isOpen={isMobile ? mobileSidebarOpen : true}
        onToggle={isMobile ? toggleMobileSidebar : undefined}
      />

      {/* Main Content */}
      <main 
        className={`
          transition-all duration-300
          ${isMobile ? "ml-0" : "ml-16 lg:ml-64"}
          ${isMobile && mobileSidebarOpen ? "blur-sm" : ""}
        `}
      >
        <div className="p-6">
          {children}
        </div>
      </main>
    </div>
  );
};