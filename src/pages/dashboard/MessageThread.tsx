import React from "react";
import MessageThreadComponent from "../../components/contract/MessageThread";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import { DASHBOARD_LINKS } from "@/constants";
import { useParams } from "react-router-dom";

const MessageThread = () => {
 const { userId } = useParams<{ userId: string }>();

 return (
  <>
   <Breadcrumbs
    items={[
     { label: "Dashboard", path: DASHBOARD_LINKS.HOME },
     { label: "Messages", path: "/dashboard/messages" },
     { label: "Conversation" },
    ]}
   />
   <MessageThreadComponent />
  </>
 );
};

export default MessageThread;
