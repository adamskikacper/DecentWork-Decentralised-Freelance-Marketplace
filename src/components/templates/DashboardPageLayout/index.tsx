import React from "react";
import { DashboardTemplate } from "../DashboardTemplate";
import { PageLayout } from "../PageLayout";
import type { PageTemplateProps } from "../types";

export interface DashboardPageLayoutProps extends PageTemplateProps {
  showSidebar?: boolean;
}

export const DashboardPageLayout: React.FC<DashboardPageLayoutProps> = ({
  children,
  showSidebar = true,
  ...pageProps
}) => {
  return (
    <DashboardTemplate showSidebar={showSidebar}>
      <PageLayout {...pageProps}>
        {children}
      </PageLayout>
    </DashboardTemplate>
  );
};