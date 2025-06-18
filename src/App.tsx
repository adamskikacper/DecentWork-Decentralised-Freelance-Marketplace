import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider } from "./hooks/useAuth";
import Home from "@/pages/Home/index";
import Login from "@/pages/Login/index";
import NotFound from "@/pages/NotFound/index";
import DashboardLayout from "@/pages/DashboardLayout/index";
import JobList from "@/pages/Jobs/JobList/index";
import JobDetails from "@/pages/Jobs/JobDetails/index";
import { DashboardRoutes } from "@/components/Dashboard";
import { TooltipProvider } from "@radix-ui/react-tooltip";
import { Toaster } from "sonner";

const queryClient = new QueryClient();

const App = () => (
 <QueryClientProvider client={queryClient}>
  <BrowserRouter>
   <AuthProvider>
    <TooltipProvider>
     <Toaster />
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
