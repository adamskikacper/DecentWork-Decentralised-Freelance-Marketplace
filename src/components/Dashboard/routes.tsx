import { Route, Routes, Navigate } from "react-router-dom";
import { AuthGuard, ClientGuard, FreelancerGuard } from "@/components/Auth";
import { useAuth } from "@/hooks/useAuth";
import { Client, Freelancer, Shared } from "./index";
import Dashboard from "./Dashboard";
const DashboardRoutes = () => {
 const { user } = useAuth();
 return (
  <Routes>
   <Route index element={<Dashboard />} />
   <Route element={<AuthGuard />}>
    {/* Shared routes available to all authenticated users */}
    <Route path="profile" element={<Shared.ProfileContent user={user} />} />
    <Route path="jobs/:jobId" element={<Shared.JobDetails />} />
    <Route path="messages" element={<Shared.Messages />} />
    <Route path="messages/:userId" element={<Shared.MessageThread />} />
    <Route
     path="freelancers/:freelancerId"
     element={<Shared.FreelancerDetails />}
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
    {/* Fallback route */}
    <Route path="*" element={<Navigate to="/dashboard" replace />} />
   </Route>
  </Routes>
 );
};
export default DashboardRoutes;
