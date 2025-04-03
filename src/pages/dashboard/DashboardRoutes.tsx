import { Navigate, Route, Routes } from "react-router-dom";
import Dashboard from "./Dashboard";
import ProjectDetails from "./ProjectDetails";
import MessageThread from "./MessageThread";
import ProfileContent from "./ProfileContent";
import { useAuth } from "../../hooks/useAuth";
import LoadingScreen from "@/components/common/LoadingScreen";
import NotFound from "../404/NotFound";
import ClientMyFreelancers from "./client/ClientMyFreelancers";
import ClientPostJob from "./client/ClientPostJob";
import ClientMyProjects from "./client/ClientMyProjects";
import FreelancerFindJobs from "./freelancer/FreelancerFindJobs";
import FreelancerMyContracts from "./freelancer/FreelancerMyContracts";
import FreelancerDetails from "./FreelancerDetails";
import Messages from "./Messages";
import { useNavigate } from "react-router-dom";

/**
 * DashboardRoutes - Component that handles all dashboard-related routes
 * This allows for nested routing within the dashboard section of the app
 */
const DashboardRoutes = () => {
 const { user, loading } = useAuth();
 const navigate = useNavigate();

 // Show loading screen while authentication state is being determined
 if (loading) {
  return <LoadingScreen />;
 }

 // Redirect unauthenticated users to login
 if (!user) {
  return <Navigate to="/login" replace />;
 }

 // Navigation handlers
 const handleMessage = (userId: string) => {
  navigate(`/dashboard/messages/${userId}`);
 };

 const handleProjectDetails = (projectId: string) => {
  navigate(`/dashboard/projects/${projectId}`);
 };

 const handleFreelancerDetails = (freelancerId: string) => {
  navigate(`/dashboard/freelancers/${freelancerId}`);
 };

 const handleClientDetails = (clientId: string) => {
  navigate(`/clients/${clientId}`);
 };

 return (
  <Routes>
   {/* Dashboard home page */}
   <Route index element={<Dashboard />} />

   {/* Dashboard Profile */}
   <Route path="profile" element={<ProfileContent user={user} />} />

   {/* Project details */}
   <Route path="projects/:projectId" element={<ProjectDetails />} />

   {/* Messages */}
   <Route path="messages" element={<Messages />} />
   <Route path="messages/:userId" element={<MessageThread />} />

   {/* Freelancer details */}
   <Route path="freelancers/:freelancerId" element={<FreelancerDetails />} />

   {/* Client-specific routes */}
   <Route
    path="freelancers"
    element={
     <ClientMyFreelancers
      onMessage={handleMessage}
      onFreelancerDetails={handleFreelancerDetails}
     />
    }
   />
   <Route path="post-job" element={<ClientPostJob />} />
   <Route
    path="projects"
    element={
     <ClientMyProjects
      onMessage={handleMessage}
      onProjectDetails={handleProjectDetails}
     />
    }
   />

   {/* Freelancer-specific routes */}
   <Route path="find-jobs" element={<FreelancerFindJobs />} />
   <Route
    path="contracts"
    element={
     <FreelancerMyContracts
      onMessage={handleMessage}
      onProjectDetails={handleProjectDetails}
      onClientDetails={handleClientDetails}
     />
    }
   />

   {/* Catch-all route redirects to Dashboard page */}
   <Route path="*" element={<NotFound />} />
  </Routes>
 );
};

export default DashboardRoutes;
