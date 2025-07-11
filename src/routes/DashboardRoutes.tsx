import { Route, Routes, Navigate } from "react-router-dom";
import { useAuth } from "@/app/providers/AuthProvider";
import {
 DashboardHomePage,
 Freelancers,
 PostJob,
 Messages,
 ProfileContent,
 JobList,
} from "@/pages";
import { USER_TYPES } from "@/shared/constants";

export const DashboardRoutes = () => {
 const { userType } = useAuth();

 return (
  <Routes>
   <Route index element={<DashboardHomePage />} />
   <Route path="home" element={<DashboardHomePage />} />
   {userType === USER_TYPES.CLIENT && (
    <>
     <Route path="freelancers" element={<Freelancers />} />
     <Route path="post-job" element={<PostJob />} />
    </>
   )}
   {userType === USER_TYPES.FREELANCER && (
    <>
     <Route path="find-jobs" element={<JobList />} />
     <Route path="my-jobs" element={<div>My Jobs - Coming Soon</div>} />
    </>
   )}
   <Route path="messages" element={<Messages />} />
   <Route path="profile" element={<ProfileContent />} />
   <Route path="*" element={<Navigate to="/dashboard" replace />} />
  </Routes>
 );
};
