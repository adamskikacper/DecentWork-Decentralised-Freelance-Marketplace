import React from "react";
import { Navbar, Footer } from "@/shared/ui";
import { PageLayout } from "../PageLayout";
import type { PageTemplateProps } from "../types";

export interface PublicPageLayoutProps extends PageTemplateProps {
  showHeader?: boolean;
  showFooter?: boolean;
}

export const PublicPageLayout: React.FC<PublicPageLayoutProps> = ({
  children,
  showHeader = true,
  showFooter = true,
  ...pageProps
}) => {
  return (
    <div className="min-h-screen flex flex-col">
      {showHeader && <Navbar />}
      <main className={`flex-grow ${showHeader ? 'pt-24' : ''} pb-12 bg-background`}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <PageLayout {...pageProps}>
            {children}
          </PageLayout>
        </div>
      </main>
      {showFooter && <Footer />}
    </div>
  );
};