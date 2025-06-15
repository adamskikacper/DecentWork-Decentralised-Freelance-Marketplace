import { Toaster, Sonner, TooltipProvider } from "./components/UI";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider } from "./hooks/useAuth";
import {
 Home,
 JobList,
 JobDetails,
 Login,
 NotFound,
 DashboardLayout,
} from "./pages";
import { DashboardRoutes } from "./components/Dashboard";

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
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Navigate to="/" replace />} />
      <Route path="/jobs" element={<JobList />} />
      <Route path="/jobs/:jobId" element={<JobDetails />} />
      <Route path="/login" element={<Login />} />

      {/* Dashboard routes - using the new dashboard implementation */}
      <Route path="/dashboard/*" element={<DashboardLayout />}>
       <Route path="*" element={<DashboardRoutes />} />
      </Route>

      {/* Redirect dashboardv2 paths to standard dashboard paths */}
      <Route
       path="/dashboardv2/*"
       element={<Navigate to="/dashboard" replace />}
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
