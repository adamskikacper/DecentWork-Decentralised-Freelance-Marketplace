import { Route, Routes, Navigate } from "react-router-dom";
import { AuthGuard } from "@/components/Auth";
import { useAuth } from "@/hooks/useAuth";
import * as Client from "@/features/dashboard/client";
import * as Freelancer from "@/features/dashboard/freelancer";
import * as CommonPages from "@/features/dashboard/common/pages";
import { Dashboard } from "@/features/dashboard";

export const DashboardRoutes = () => {
 const { user, userType } = useAuth();
 return (
  <Routes>
   <Route index element={<Dashboard />} />
   <Route element={<AuthGuard />}>
    <Route
     path="profile"
     element={<CommonPages.ProfileContent user={user} />}
    />
    <Route path="jobs/:jobId" element={<CommonPages.JobDetails />} />
    <Route path="messages" element={<CommonPages.Messages />} />
    <Route path="messages/:userId" element={<CommonPages.MessageThread />} />
    <Route
     path="freelancers/:freelancerId"
     element={<CommonPages.FreelancerDetails />}
    />
    <Route path="home" element={<CommonPages.Home />} />
    <Route path="jobs" element={<Freelancer.MyJobs />} />
    {userType === "client" && (
     <>
      <Route path="freelancers" element={<Client.Freelancers />} />
      <Route path="post-job" element={<Client.PostJob />} />
     </>
    )}
    {userType === "freelancer" && (
     <>
      <Route path="find-jobs" element={<Freelancer.FindJobs />} />
      <Route path="my-jobs" element={<Freelancer.MyJobs />} />
     </>
    )}
    <Route path="*" element={<Navigate to="/dashboard" replace />} />
   </Route>
  </Routes>
 );
};
