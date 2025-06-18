import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Button, Input } from "@/components/UI";
import { User, Send } from "lucide-react";

interface Message {
 id: string;
 content: string;
 sender: string;
 timestamp: string;
 isCurrentUser: boolean;
}

interface UserDetails {
 id: string;
 name: string;
 title: string;
}

const MessageThread = () => {
 const { userId } = useParams();
 const [newMessage, setNewMessage] = useState("");
 const [userDetails, setUserDetails] = useState<UserDetails | null>(null);

 // In a real app, you would fetch these from your backend
 const [messages] = useState<Message[]>([
  {
   id: "1",
   content: "Hi, I'd like to discuss the job progress.",
   sender: "You",
   timestamp: "10:30 AM",
   isCurrentUser: true,
  },
  {
   id: "2",
   content:
    "Sure! I've completed the initial setup and currently working on the wallet integration.",
   sender: "Alex K.",
   timestamp: "10:32 AM",
   isCurrentUser: false,
  },
  {
   id: "3",
   content: "Great! When do you think you'll have the first demo ready?",
   sender: "You",
   timestamp: "10:33 AM",
   isCurrentUser: true,
  },
 ]);

 // Mock user data lookup based on userId - in a real app, fetch this from backend
 useEffect(() => {
  // Simulate API call to fetch user details
  const fetchUserDetails = () => {
   const mockUsers = {
    "101": { id: "101", name: "Alex Korenberg", title: "Frontend Developer" },
    "102": { id: "102", name: "Sarah Wilson", title: "UX Designer" },
    "103": { id: "103", name: "Michael Brown", title: "Blockchain Developer" },
   };

   // Get user details or fallback to default
   const details =
    userId && mockUsers[userId as keyof typeof mockUsers]
     ? mockUsers[userId as keyof typeof mockUsers]
     : { id: "101", name: "Alex Korenberg", title: "Frontend Developer" };

   setUserDetails(details);
  };

  fetchUserDetails();
 }, [userId]);

 const handleSendMessage = (e: React.FormEvent) => {
  e.preventDefault();
  if (!newMessage.trim()) return;

  // In a real app, you would send this to your backend
  console.log("Sending message:", newMessage);
  setNewMessage("");
 };

 if (!userDetails) {
  return (
   <div className="glass-card rounded-xl p-6 h-[calc(100vh-12rem)] flex items-center justify-center">
    Loading conversation...
   </div>
  );
 }

 return (
  <div className="glass-card rounded-xl p-6 h-[calc(100vh-12rem)]">
   <div className="flex flex-col h-full">
    {/* Header */}
    <div className="flex items-center gap-3 pb-4 border-b border-border">
     <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center">
      <User className="h-5 w-5" />
     </div>
     <div>
      <h2 className="font-semibold">{userDetails.name}</h2>
      <p className="text-sm text-muted-foreground">{userDetails.title}</p>
     </div>
    </div>

    {/* Messages */}
    <div className="flex-1 overflow-y-auto py-4 space-y-4">
     {messages.map((message) => (
      <div
       key={message.id}
       className={`flex ${
        message.isCurrentUser ? "justify-end" : "justify-start"
       }`}
      >
       <div
        className={`max-w-[70%] ${
         message.isCurrentUser
          ? "bg-primary text-primary-foreground"
          : "bg-secondary"
        } rounded-lg px-4 py-2`}
       >
        <div className="flex items-center gap-2 mb-1">
         <span className="font-medium text-sm">{message.sender}</span>
         <span className="text-xs opacity-70">{message.timestamp}</span>
        </div>
        <p className="text-sm">{message.content}</p>
       </div>
      </div>
     ))}
    </div>

    {/* Message Input */}
    <form onSubmit={handleSendMessage} className="pt-4 border-t border-border">
     <div className="flex gap-2">
      <Input
       type="text"
       placeholder="Type your message..."
       value={newMessage}
       onChange={(e) => setNewMessage(e.target.value)}
       className="flex-1"
      />
      <Button type="submit" size="icon">
       <Send className="h-4 w-4" />
      </Button>
     </div>
    </form>
   </div>
  </div>
 );
};

export default MessageThread;
