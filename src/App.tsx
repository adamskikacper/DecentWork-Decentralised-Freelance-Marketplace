import { Toaster } from "@/components/UI/Toaster";
import { Toaster as Sonner } from "@/components/UI/Sonner";
import { TooltipProvider } from "@/components/UI/Tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider } from "./hooks/useAuth";
import {
 Home,
 JobList,
 JobDetails,
 Login,
 NotFound,
 DashboardRoute,
} from "./pages";
import { DashboardRoutes } from "@/features/dashboard";

const queryClient = new QueryClient();

const App = () => (
 <QueryClientProvider client={queryClient}>
  <BrowserRouter>
   <AuthProvider>
    <TooltipProvider>
     <Toaster />
     <Sonner />
     <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Navigate to="/" replace />} />
      <Route path="/jobs" element={<JobList />} />
      <Route path="/jobs/:jobId" element={<JobDetails />} />
      <Route path="/login" element={<Login />} />
      <Route path="/dashboard/*" element={<DashboardRoute />}>
       <Route path="*" element={<DashboardRoutes />} />
      </Route>
      <Route path="*" element={<NotFound />} />
     </Routes>
    </TooltipProvider>
   </AuthProvider>
  </BrowserRouter>
 </QueryClientProvider>
);

export default App;
