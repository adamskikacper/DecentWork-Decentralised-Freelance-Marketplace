import React from "react";
import { useParams } from "react-router-dom";
import { PageLayout } from "@/components/templates";
import { DashboardSection } from "@/components";
import { MessageBubble } from "@/components/atoms/MessageBubble";
import { MessageInput } from "@/components/molecules/MessageInput";
import { useMessageThread } from "@/shared/hooks";

export const ChatPage = () => {
 const { userId } = useParams<{ userId: string }>();

 const { messages, isLoading, error, sendMessage, isSending } =
  useMessageThread(userId);

 const handleSendMessage = async (content: string) => {
  try {
   await sendMessage(content);
  } catch (err) {
   console.error("Failed to send message:", err);
  }
 };

 if (!userId) {
  return (
   <PageLayout
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
   </PageLayout>
  );
 }

 return (
  <PageLayout
   title="Chat"
   description="Your conversation"
   breadcrumbs={[
    { label: "Dashboard", href: "/dashboard" },
    { label: "Messages", href: "/dashboard/messages" },
    { label: "Chat" },
   ]}
   isLoading={isLoading}
   error={error}
  >
   <DashboardSection>
    <div className="space-y-4">
     <div className="max-h-96 overflow-y-auto space-y-4 p-4 border rounded-lg bg-background">
      {messages.map((message) => (
       <MessageBubble
        key={message.id}
        content={message.content}
        timestamp={message.timestamp}
        isOwn={message.senderId === "current-user"}
        senderName={message.senderId}
        senderAvatar=""
       />
      ))}
      {messages.length === 0 && (
       <div className="text-center text-muted-foreground py-8">
        <p>No messages yet. Start the conversation!</p>
       </div>
      )}
     </div>

     <MessageInput
      onSendMessage={handleSendMessage}
      disabled={!!error}
      isSending={isSending}
      placeholder="Type your message..."
     />
    </div>
   </DashboardSection>
  </PageLayout>
 );
};
