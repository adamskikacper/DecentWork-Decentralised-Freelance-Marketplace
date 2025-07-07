import { Route, Routes, Navigate } from "react-router-dom";
import { AuthGuard } from "@/components/Auth";
import { useAuth } from "@/hooks/useAuth";
import * as Client from "@/features/dashboard/client";
import * as Freelancer from "@/features/dashboard/freelancer";
import * as Views from "@/features/dashboard/common/pages";
import { Dashboard } from "@/features/dashboard";

const RoleAwareHome = () => {
 const { userType } = useAuth();
 return userType === "client" ? <Client.Home /> : <Freelancer.Home />;
};

const RoleAwareJobs = () => {
 const { userType } = useAuth();
 return userType === "client" ? <Client.Jobs /> : <Freelancer.Jobs />;
};

export const DashboardRoutes = () => {
 const { user, userType } = useAuth();
 return (
  <Routes>
   <Route index element={<Dashboard />} />
   <Route element={<AuthGuard />}>
    <Route path="profile" element={<Views.ProfileContent user={user} />} />
    <Route path="jobs/:jobId" element={<Views.JobDetails />} />
    <Route path="messages" element={<Views.Messages />} />
    <Route path="messages/:userId" element={<Views.MessageThread />} />
    <Route
     path="freelancers/:freelancerId"
     element={<Views.FreelancerDetails />}
    />
    <Route path="home" element={<RoleAwareHome />} />
    <Route path="jobs" element={<RoleAwareJobs />} />
    {userType === "client" && (
     <>
      <Route path="freelancers" element={<Client.Freelancers />} />
      <Route path="post-job" element={<Client.PostJob />} />
     </>
    )}
    {userType === "freelancer" && (
     <>
      <Route path="find-jobs" element={<Freelancer.FindJobs />} />
      <Route path="contracts" element={<Freelancer.Contracts />} />
     </>
    )}
    <Route path="*" element={<Navigate to="/dashboard" replace />} />
   </Route>
  </Routes>
 );
};
