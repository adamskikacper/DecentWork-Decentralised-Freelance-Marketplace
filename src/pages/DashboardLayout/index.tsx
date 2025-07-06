import { Outlet, Navigate } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";
import { DashboardLayout as LayoutComponent } from "@/features/dashboard";
import { LoadingScreen } from "@/components/Common";

/**
 * DashboardLayout - Layout wrapper for all dashboard pages
 * This component wraps the Dashboard layout component and handles authentication
 */
const DashboardLayout = () => {
 const { user, loading } = useAuth();

 // Show loading screen while authentication state is being determined
 if (loading) {
  return <LoadingScreen />;
 }

 // Redirect unauthenticated users to login
 if (!user) {
  return <Navigate to="/login" replace />;
 }

 return (
  <LayoutComponent>
   <Outlet />
  </LayoutComponent>
 );
};

export default DashboardLayout;
