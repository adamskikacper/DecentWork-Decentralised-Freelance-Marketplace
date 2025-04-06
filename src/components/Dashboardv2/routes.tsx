import { Route, Routes, Navigate } from "react-router-dom";
import { AuthGuard, ClientGuard, FreelancerGuard } from "@/components/Auth";
import { useAuth } from "@/hooks/useAuth";

// Layout components
import { DashboardLayout } from "./Layout";

// Import client and freelancer components
import { Client, Freelancer } from "./index";

// Shared components (to be implemented)
import ProfileContent from "@/pages/Dashboard/ProfileContent";
import JobDetails from "@/pages/Dashboard/JobDetails";
import MessageThread from "@/pages/Dashboard/MessageThread";
import Messages from "@/pages/Dashboard/Messages";
import FreelancerDetails from "@/pages/Dashboard/FreelancerDetails";

/**
 * DashboardRoutes - Component that handles all dashboard-related routes
 * This allows for nested routing within the dashboard section of the app
 * Uses guard components for role-based access control
 */
const DashboardRoutes = () => {
  const { user } = useAuth();
  
  return (
    <Routes>
      <Route element={<DashboardLayout />}>
        <Route element={<AuthGuard />}>
          {/* Shared routes available to all authenticated users */}
          <Route path="profile" element={<ProfileContent user={user} />} />
          <Route path="jobs/:jobId" element={<JobDetails />} />
          <Route path="messages" element={<Messages />} />
          <Route path="messages/:userId" element={<MessageThread />} />
          <Route path="freelancers/:freelancerId" element={<FreelancerDetails />} />

          {/* Client-specific routes */}
          <Route element={<ClientGuard />}>
            <Route index element={<Client.Home />} />
            <Route path="home" element={<Client.Home />} />
            <Route path="jobs" element={<Client.Jobs />} />
            <Route path="freelancers" element={<Client.Freelancers />} />
            <Route path="post-job" element={<Client.PostJob />} />
          </Route>

          {/* Freelancer-specific routes */}
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
      </Route>
    </Routes>
  );
};

export default DashboardRoutes;
