import { Route, Routes, Navigate } from "react-router-dom";
import { useAuth } from "@/app/providers/AuthProvider";
import {
 DashboardHomePage,
 FreelancersPage,
 FindJobsPage,
 FindJobsJobDetailsPage,
 PostJobPage,
 MessagesPage,
 ChatPage,
 ProfilePage,
} from "@/pages/dashboard";
import {
 USER_TYPES,
 DASHBOARD_LINKS,
 DASHBOARD_ROUTES,
} from "@/shared/constants";

export const DashboardRoutes = () => {
 const { userType } = useAuth();

 return (
  <Routes>
   <Route index element={<DashboardHomePage />} />
   <Route path={DASHBOARD_ROUTES.HOME} element={<DashboardHomePage />} />
   {userType === USER_TYPES.CLIENT && (
    <>
     <Route path={DASHBOARD_ROUTES.FREELANCERS} element={<FreelancersPage />} />
     <Route path={DASHBOARD_ROUTES.POST_JOB} element={<PostJobPage />} />
    </>
   )}
   {userType === USER_TYPES.FREELANCER && (
    <>
     <Route path={DASHBOARD_ROUTES.FIND_JOBS} element={<FindJobsPage />} />
     <Route
      path={`${DASHBOARD_ROUTES.FIND_JOBS}/:jobId`}
      element={<FindJobsJobDetailsPage />}
     />
     <Route
      path={DASHBOARD_ROUTES.MY_JOBS}
      element={<div>My Jobs - Coming Soon</div>}
     />
    </>
   )}
   <Route path={DASHBOARD_ROUTES.MESSAGES} element={<MessagesPage />} />
   <Route path={DASHBOARD_ROUTES.CHAT} element={<ChatPage />} />
   <Route path={DASHBOARD_ROUTES.PROFILE} element={<ProfilePage />} />
   <Route path="*" element={<Navigate to={DASHBOARD_LINKS.HOME} replace />} />
  </Routes>
 );
};
