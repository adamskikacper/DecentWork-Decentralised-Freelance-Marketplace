import { Routes, Route, Navigate } from "react-router-dom";
import {
  HomePage,
  FindWorkPage,
  JobDetailsPage,
  LoginPage,
  NotFoundPage,
  DashboardRoute,
} from "@/pages";
import { DashboardRoutes } from "./DashboardRoutes";
import { NAV_LINKS, APP_ROUTES } from "@/shared/constants";

export const AppRoutes = () => (
  <Routes>
    <Route path={APP_ROUTES.HOME} element={<HomePage />} />
    <Route path={APP_ROUTES.HOME_REDIRECT} element={<Navigate to={NAV_LINKS.HOME} replace />} />
    <Route path={APP_ROUTES.JOBS} element={<FindWorkPage />} />
    <Route path={APP_ROUTES.JOB_DETAILS} element={<JobDetailsPage />} />
    <Route path={APP_ROUTES.LOGIN} element={<LoginPage />} />
    <Route path={APP_ROUTES.DASHBOARD} element={<DashboardRoute />}>
      <Route path="*" element={<DashboardRoutes />} />
    </Route>
    <Route path={APP_ROUTES.NOT_FOUND} element={<NotFoundPage />} />
  </Routes>
);