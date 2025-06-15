import { Navigate } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";

const Dashboard = () => {
 const { userType } = useAuth();

 if (userType === "client") {
  return <Navigate to="/dashboard/home" replace />;
 } else if (userType === "freelancer") {
  return <Navigate to="/dashboard/freelancer" replace />;
 } else {
  return <Navigate to="/dashboard/profile" replace />;
 }
};
export default Dashboard;
