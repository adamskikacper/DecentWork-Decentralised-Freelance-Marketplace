import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import {
  Home,
  JobList,
  JobDetails,
  Login,
  NotFound,
  DashboardRoute,
} from "@/pages";
import { DashboardRoutes } from "@/routes";

export const AppRouter = () => (
  <BrowserRouter>
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
  </BrowserRouter>
);