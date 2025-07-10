import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { DashboardSection } from "@/features/dashboard";
import {
 Breadcrumbs,
 LoadingScreen,
 Button,
 Input,
 Avatar,
 AvatarFallback,
} from "@/shared/ui";
import {
 getMessageThread,
 sendMessage,
 type Message,
} from "@/features/dashboard/api/message.service";

export const Chat: React.FC = () => {
 const { userId } = useParams<{ userId: string }>();
 const [messages, setMessages] = useState<Message[]>([]);
 const [loading, setLoading] = useState(true);
 const [newMessage, setNewMessage] = useState("");
 const [sending, setSending] = useState(false);

 useEffect(() => {
  const fetchMessages = async () => {
   if (!userId) return;

   try {
    const data = await getMessageThread(userId);
    setMessages(data);
   } catch (error) {
    console.error("Failed to fetch messages:", error);
   } finally {
    setLoading(false);
   }
  };

  fetchMessages();
 }, [userId]);

 const handleSendMessage = async () => {
  if (!newMessage.trim() || !userId || sending) return;

  setSending(true);
  try {
   const sentMessage = await sendMessage(userId, newMessage);
   setMessages((prev) => [...prev, sentMessage]);
   setNewMessage("");
  } catch (error) {
   console.error("Failed to send message:", error);
  } finally {
   setSending(false);
  }
 };

 if (loading) {
  return <LoadingScreen />;
 }

 return (
  <div className="space-y-8">
   <Breadcrumbs
    items={[
     { label: "Dashboard", path: "/dashboard" },
     { label: "Messages", path: "/dashboard/messages" },
     { label: `Chat` },
    ]}
   />

   <DashboardSection title="Chat" description="Your conversation">
    <div className="space-y-4">
     <div className="max-h-96 overflow-y-auto space-y-4 p-4 border rounded-lg">
      {messages.map((message) => (
       <div
        key={message.id}
        className={`flex items-start space-x-3 ${
         message.senderId === "current-user" ? "justify-end" : "justify-start"
        }`}
       >
        {message.senderId !== "current-user" && (
         <Avatar className="h-8 w-8">
          <AvatarFallback>{userId?.slice(0, 2).toUpperCase()}</AvatarFallback>
         </Avatar>
        )}
        <div
         className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
          message.senderId === "current-user"
           ? "bg-primary text-primary-foreground"
           : "bg-muted"
         }`}
        >
         <p className="text-sm">{message.content}</p>
         <p className="text-xs opacity-70 mt-1">{message.timestamp}</p>
        </div>
        {message.senderId === "current-user" && (
         <Avatar className="h-8 w-8">
          <AvatarFallback>ME</AvatarFallback>
         </Avatar>
        )}
       </div>
      ))}
      {messages.length === 0 && (
       <div className="text-center text-muted-foreground py-8">
        <p>No messages yet. Start the conversation!</p>
       </div>
      )}
     </div>

     <div className="flex space-x-2">
      <Input
       placeholder="Type a message..."
       value={newMessage}
       onChange={(e) => setNewMessage(e.target.value)}
       onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
       disabled={sending}
      />
      <Button
       onClick={handleSendMessage}
       disabled={sending || !newMessage.trim()}
      >
       {sending ? "Sending..." : "Send"}
      </Button>
     </div>
    </div>
   </DashboardSection>
  </div>
 );
};
