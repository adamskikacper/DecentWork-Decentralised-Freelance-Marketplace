import { Outlet, Navigate } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";
import { DashboardLayout as LayoutComponent } from "@/features/dashboard";
import { LoadingScreen } from "@/components/Common";

const DashboardRoute = () => {
 const { user, loading } = useAuth();

 if (loading) {
  return <LoadingScreen />;
 }

 if (!user) {
  return <Navigate to="/login" replace />;
 }

 return (
  <LayoutComponent>
   <Outlet />
  </LayoutComponent>
 );
};

export default DashboardRoute;
