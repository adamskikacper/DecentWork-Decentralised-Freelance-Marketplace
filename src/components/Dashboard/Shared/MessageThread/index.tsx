import React from "react";
import { useParams } from "react-router-dom";
import { DashboardSection } from "../../Common";
import { Breadcrumbs } from "@/components/Layout";
const MessageThread: React.FC = () => {
 const { userId } = useParams<{ userId: string }>();
 return (
  <div className="space-y-8">
   <Breadcrumbs
    items={[
     { label: "Dashboard", path: "/dashboard" },
     { label: "Messages", path: "/dashboard/messages" },
     { label: `Conversation ${userId}` },
    ]}
   />
   <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
    <div>
     <h1 className="text-2xl font-bold tracking-tight">Conversation</h1>
     <p className="text-muted-foreground mt-1">With user {userId}</p>
    </div>
   </div>
   <DashboardSection title="Messages" description="Your conversation history">
    <div className="p-6 text-center text-muted-foreground">
     <p>Message thread functionality will be implemented in a future update.</p>
    </div>
   </DashboardSection>
  </div>
 );
};
export default MessageThread;
