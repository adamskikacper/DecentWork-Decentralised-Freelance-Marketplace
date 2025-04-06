import { Toaster } from "@/components/UI/toaster";
import { Toaster as Sonner } from "@/components/UI/sonner";
import { TooltipProvider } from "@/components/UI/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider } from "./hooks/useAuth";
import Home from "./pages/Home/Index";
import JobList from "./pages/Jobs/JobList";
import JobDetails from "./pages/Jobs/JobDetails";
import Login from "./pages/Login/Login";
import NotFound from "./pages/NotFound/NotFound";
import DashboardLayout from "./pages/Dashboard/DashboardLayout";
import DashboardRoutes from "./pages/Dashboard/DashboardRoutes";

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

      {/* Dashboard routes - nested under the DashboardLayout */}
      <Route path="/dashboard/*" element={<DashboardLayout />}>
       <Route path="*" element={<DashboardRoutes />} />
      </Route>

      {/* Catch-all route */}
      <Route path="*" element={<NotFound />} />
     </Routes>
    </TooltipProvider>
   </AuthProvider>
  </BrowserRouter>
 </QueryClientProvider>
);

export default App;
