import { Route, Routes, Navigate } from "react-router-dom";
import { AuthGuard, ClientGuard, FreelancerGuard } from "@/components/Auth";
import { useAuth } from "@/hooks/useAuth";
import { Client, Freelancer, Views, Dashboard } from "@/features/dashboard";
export const DashboardRoutes = () => {
 const { user } = useAuth();
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
    <Route element={<ClientGuard />}>
     <Route index element={<Client.Home />} />
     <Route path="home" element={<Client.Home />} />
     <Route path="jobs" element={<Client.Jobs />} />
     <Route path="freelancers" element={<Client.Freelancers />} />
     <Route path="post-job" element={<Client.PostJob />} />
    </Route>
    <Route element={<FreelancerGuard />}>
     <Route path="freelancer" element={<Freelancer.Home />} />
     <Route path="freelancer/home" element={<Freelancer.Home />} />
     <Route path="freelancer/jobs" element={<Freelancer.Jobs />} />
     <Route path="freelancer/find-jobs" element={<Freelancer.FindJobs />} />
     <Route path="freelancer/contracts" element={<Freelancer.Contracts />} />
    </Route>
    <Route path="*" element={<Navigate to="/dashboard" replace />} />
   </Route>
  </Routes>
 );
};
