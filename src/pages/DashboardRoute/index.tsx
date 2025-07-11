import React from "react";
import { Outlet } from "react-router-dom";
import { DashboardLayout } from "@/components";

export const DashboardRoute: React.FC = () => {
  return (
    <DashboardLayout>
      <Outlet />
    </DashboardLayout>
  );
};