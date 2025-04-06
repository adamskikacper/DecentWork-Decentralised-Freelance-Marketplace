import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Breadcrumbs from "@/components/Layout/Breadcrumbs";
import { DASHBOARD_LINKS, NAV_LINKS } from "@/constants";
import MessageList, { Conversation } from "@/components/Contract/MessageList";
import { Input } from "@/components/UI/input";
import { Search, MessageCircle } from "lucide-react";

const Messages = () => {
 const navigate = useNavigate();
 const [searchQuery, setSearchQuery] = useState("");

 // Mock data for conversations - in a real app, fetch this from backend
 const [conversations] = useState<Conversation[]>([
  {
   id: "1",
   user: {
    id: "101",
    name: "Alex Korenberg",
    title: "Frontend Developer",
   },
   lastMessage: {
    content:
     "I've completed the initial setup and currently working on the wallet integration.",
    timestamp: "10:32 AM",
    isRead: false,
   },
  },
  {
   id: "2",
   user: {
    id: "102",
    name: "Sarah Wilson",
    title: "UX Designer",
   },
   lastMessage: {
    content: "The wireframes are ready for review. Let me know your thoughts.",
    timestamp: "Yesterday",
    isRead: true,
   },
  },
  {
   id: "3",
   user: {
    id: "103",
    name: "Michael Brown",
    title: "Blockchain Developer",
   },
   lastMessage: {
    content: "I'll send you the smart contract code by tomorrow morning.",
    timestamp: "Feb 12",
    isRead: true,
   },
  },
 ]);

 const filteredConversations = conversations.filter(
  (conversation) =>
   conversation.user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
   conversation.lastMessage.content
    .toLowerCase()
    .includes(searchQuery.toLowerCase())
 );

 const handleSelectConversation = (userId: string) => {
  navigate(`/dashboard/messages/${userId}`);
 };

 return (
  <div>
   <Breadcrumbs
    items={[
     { label: "Dashboard", path: DASHBOARD_LINKS.HOME },
     { label: "Messages" },
    ]}
   />

   <div className="flex items-center mb-8 slide-in">
    <div>
     <h1 className="text-2xl font-bold mb-2">Messages</h1>
     <p className="text-muted-foreground">
      View your conversations with freelancers
     </p>
    </div>
   </div>

   <div className="glass-card rounded-xl overflow-hidden">
    <div className="border-b border-border">
     <div className="p-4">
      <div className="relative">
       <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
       <Input
        placeholder="Search messages..."
        className="pl-9"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
       />
      </div>
     </div>
    </div>
    <div className="max-h-[calc(100vh-20rem)] overflow-y-auto">
     <MessageList
      conversations={filteredConversations}
      onSelectConversation={handleSelectConversation}
     />
    </div>
   </div>
  </div>
 );
};

export default Messages;
