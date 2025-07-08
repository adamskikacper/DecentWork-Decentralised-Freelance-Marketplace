import { Navigate } from "react-router-dom";
import { useAuth } from "@/app/providers/AuthProvider";

export const Dashboard = () => {
 const { userType } = useAuth();

 if (userType === "client" || userType === "freelancer") {
  return <Navigate to="/dashboard/home" replace />;
 } else {
  return <Navigate to="/dashboard/profile" replace />;
 }
};
