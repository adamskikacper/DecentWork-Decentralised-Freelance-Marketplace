import React from "react";
import { DashboardPageLayout } from "@/components/templates";
import { ConversationList } from "@/components/organisms/ConversationList";

export const MessagesPage: React.FC = () => {
 return (
  <DashboardPageLayout
   title="Messages"
   description="Your conversations"
   breadcrumbs={[
    { label: "Dashboard", href: "/dashboard" },
    { label: "Messages" },
   ]}
  >
   <ConversationList />
  </DashboardPageLayout>
 );
};
