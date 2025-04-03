import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider } from "./hooks/useAuth";
import Index from "./pages/home/Index";
import JobList from "./pages/jobs/JobList";
import JobDetails from "./pages/jobs/JobDetails";
import Login from "./pages/login/Login";
import NotFound from "./pages/404/NotFound";
import DashboardLayout from "./pages/dashboard/DashboardLayout";
import DashboardRoutes from "./pages/dashboard/DashboardRoutes";

const queryClient = new QueryClient();

const App = () => (
 <QueryClientProvider client={queryClient}>
  <BrowserRouter>
   <AuthProvider>
    <TooltipProvider>
     <Toaster />
     <Sonner />
     <Routes>
      {/* Public routes */}
      <Route path="/" element={<Index />} />
      <Route path="/home" element={<Navigate to="/" replace />} />
      <Route path="/jobs" element={<JobList />} />
      <Route path="/jobs/:id" element={<JobDetails />} />
      <Route path="/login" element={<Login />} />

      {/* Dashboard routes - nested under the DashboardLayout */}
      <Route path="/dashboard/*" element={<DashboardLayout />}>
       <Route path="*" element={<DashboardRoutes />} />
      </Route>

      {/* Redirect old routes to new dashboard structure */}
      <Route
       path="/projects/:projectId"
       element={<Navigate to="/dashboard/projects/:projectId" replace />}
      />
      <Route
       path="/messages/:userId"
       element={<Navigate to="/dashboard/messages/:userId" replace />}
      />
      <Route
       path="/freelancers/:freelancerId"
       element={<Navigate to="/dashboard/freelancers/:freelancerId" replace />}
      />

      {/* Catch-all route */}
      <Route path="*" element={<NotFound />} />
     </Routes>
    </TooltipProvider>
   </AuthProvider>
  </BrowserRouter>
 </QueryClientProvider>
);

export default App;
