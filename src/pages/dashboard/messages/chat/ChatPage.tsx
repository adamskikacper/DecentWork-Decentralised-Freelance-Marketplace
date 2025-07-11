import React from "react";
import { useParams } from "react-router-dom";
import { DashboardPageLayout } from "@/components/templates";
import { ChatInterface } from "@/components/organisms/ChatInterface";

export const ChatPage: React.FC = () => {
 const { userId } = useParams<{ userId: string }>();

 if (!userId) {
  return (
   <DashboardPageLayout
    title="Chat"
    description="User not found"
    breadcrumbs={[
     { label: "Dashboard", href: "/dashboard" },
     { label: "Messages", href: "/dashboard/messages" },
     { label: "Chat" },
    ]}
    error="Invalid user ID"
   >
    <div />
   </DashboardPageLayout>
  );
 }

 return (
  <DashboardPageLayout
   title="Chat"
   description="Your conversation"
   breadcrumbs={[
    { label: "Dashboard", href: "/dashboard" },
    { label: "Messages", href: "/dashboard/messages" },
    { label: "Chat" },
   ]}
  >
   <ChatInterface userId={userId} />
  </DashboardPageLayout>
 );
};
