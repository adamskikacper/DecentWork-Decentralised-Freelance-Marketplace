import React, { useState, useCallback } from "react";
import { Outlet, useNavigate, useLocation } from "react-router-dom";
import Navbar from "../../components/Layout/Header";
import Footer from "../../components/Layout/Footer";
import { useAuth } from "../../hooks/useAuth";
import { Navigate } from "react-router-dom";
import LoadingScreen from "@/components/Common/LoadingScreen";
import DashboardSidebar from "./DashboardSidebar";

/**
 * DashboardLayout - Layout wrapper for all dashboard pages
 * Provides consistent UI elements (navbar, footer, sidebar) and handles authentication
 */
const DashboardLayout = () => {
 const { user, userType, loading } = useAuth();
 const navigate = useNavigate();
 const location = useLocation();

 // Derive active section from current path
 const path = location.pathname.split("/").filter(Boolean);
 const currentSection = path.length > 1 ? path[1] : "dashboard";

 // State for active section (to highlight in sidebar)
 const [activeSection, setActiveSection] = useState(currentSection);

 // Set active section when location changes
 React.useEffect(() => {
  const section = path.length > 1 ? path[1] : "dashboard";
  setActiveSection(section);
 }, [location, path]);

 // Handle section change in sidebar
 const handleSectionChange = useCallback((section: string) => {
  setActiveSection(section);
 }, []);

 // Show loading screen while authentication state is being determined
 if (loading) {
  return <LoadingScreen />;
 }

 // Redirect unauthenticated users to login
 if (!user) {
  return <Navigate to="/login" replace />;
 }

 return (
  <div className="min-h-screen flex flex-col">
   <Navbar />
   <main className="flex-grow pt-24 pb-12 bg-background">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
     <div className="flex flex-col lg:flex-row gap-8">
      {/* Sidebar - always present */}
      <DashboardSidebar
       activeSection={activeSection}
       onSectionChange={handleSectionChange}
       userEmail={user.email}
       userType={userType as "client" | "freelancer"}
      />

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

export default DashboardLayout;
