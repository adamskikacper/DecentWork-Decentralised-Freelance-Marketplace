import { AppProviders, AuthProvider } from "./providers";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import {
 Home,
 JobList,
 Login,
 NotFound,
 DashboardRoute,
 JobDetailsPage,
} from "@/pages";
import { DashboardRoutes } from "@/routes";

const App = () => {
 return (
  <AppProviders>
   <BrowserRouter>
    <AuthProvider>
     <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Navigate to="/" replace />} />
      <Route path="/jobs" element={<JobList />} />
      <Route path="/jobs/:jobId" element={<JobDetailsPage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/dashboard/*" element={<DashboardRoute />}>
       <Route path="*" element={<DashboardRoutes />} />
      </Route>
      <Route path="*" element={<NotFound />} />
     </Routes>
    </AuthProvider>
   </BrowserRouter>
  </AppProviders>
 );
};

export default App;
