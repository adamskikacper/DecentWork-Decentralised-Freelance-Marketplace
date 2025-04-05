import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import Dashboard from "./Dashboard";
import JobDetails from "./JobDetails";
import MessageThread from "./MessageThread";
import ProfileContent from "./ProfileContent";
import FreelancerDetails from "./FreelancerDetails";
import Messages from "./Messages";
import { useAuth } from "../../hooks/useAuth";
import { AuthGuard, ClientGuard, FreelancerGuard } from "@/components/auth";

// Client pages
import ClientMyFreelancers from "./client/ClientMyFreelancers";
import ClientPostJob from "./client/ClientPostJob";
import ClientMyJobs from "./client/ClientMyJobs";

// Freelancer pages
import FreelancerFindJobs from "./freelancer/FreelancerFindJobs";
import FreelancerMyContracts from "./freelancer/FreelancerMyContracts";
import FreelancerMyJobs from "./freelancer/FreelancerMyJobs";

/**
 * DashboardRoutes - Component that handles all dashboard-related routes
 * This allows for nested routing within the dashboard section of the app
 * Uses guard components for role-based access control
 */
const DashboardRoutes = () => {
 const navigate = useNavigate();
 const { user } = useAuth();

 // Navigation handlers
 const handleMessage = (userId: string) => {
  navigate(`/dashboard/messages/${userId}`);
 };

 const handleJobDetails = (jobId: string) => {
  navigate(`/dashboard/jobs/${jobId}`);
 };

 const handleFreelancerDetails = (freelancerId: string) => {
  navigate(`/dashboard/freelancers/${freelancerId}`);
 };

 const handleClientDetails = (clientId: string) => {
  navigate(`/clients/${clientId}`);
 };

 return (
  <Routes>
   <Route element={<AuthGuard />}>
    {/* Shared routes available to all authenticated users */}
    <Route index element={<Dashboard />} />
    <Route path="home" element={<Dashboard />} />
    <Route path="profile" element={<ProfileContent user={user} />} />
    <Route path="jobs/:jobId" element={<JobDetails />} />
    <Route path="messages" element={<Messages />} />
    <Route path="messages/:userId" element={<MessageThread />} />
    <Route path="freelancers/:freelancerId" element={<FreelancerDetails />} />

    {/* Client-specific routes */}
    <Route element={<ClientGuard />}>
     <Route path="post-job" element={<ClientPostJob />} />
     <Route
      path="jobs"
      element={
       <ClientMyJobs
        onJobDetails={handleJobDetails}
        onMessage={handleMessage}
       />
      }
     />
     <Route
      path="freelancers"
      element={
       <ClientMyFreelancers
        onFreelancerDetails={handleFreelancerDetails}
        onMessage={handleMessage}
       />
      }
     />
    </Route>

    {/* Freelancer-specific routes */}
    <Route element={<FreelancerGuard />}>
     <Route
      path="find-jobs"
      element={<FreelancerFindJobs onJobDetails={handleJobDetails} />}
     />
     <Route
      path="jobs"
      element={<FreelancerMyJobs onJobDetails={handleJobDetails} />}
     />
     <Route
      path="contracts"
      element={
       <FreelancerMyContracts
        onJobDetails={handleJobDetails}
        onMessage={handleMessage}
        onClientDetails={handleClientDetails}
       />
      }
     />
    </Route>

    {/* Catch-all route redirects to Dashboard page */}
    <Route path="*" element={<Navigate to="/dashboard" replace />} />
   </Route>
  </Routes>
 );
};

export default DashboardRoutes;
