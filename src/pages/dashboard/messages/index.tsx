import React from "react";
import { PageLayout } from "@/components/templates";
import { DashboardSection } from "@/components";
import { Avatar, AvatarFallback, AvatarImage, Button, Card } from "@/shared/ui";
import { useConversations, useNavigation } from "@/shared/hooks";

export const MessagesPage = () => {
 const { conversations, isLoading, error } = useConversations();

 const { goToMessages } = useNavigation();

 const handleViewChat = (conversationId: string) => {
  goToMessages(conversationId);
 };

 return (
  <PageLayout
   title="Messages"
   description="Your conversations"
   breadcrumbs={[
    { label: "Dashboard", href: "/dashboard" },
    { label: "Messages" },
   ]}
   isLoading={isLoading}
   error={error}
  >
   <DashboardSection>
    <div className="space-y-4">
     {conversations.map((conversation) => (
      <Card
       key={conversation.id}
       className="flex items-center justify-between p-4 border rounded-lg hover:bg-accent/50 transition-colors"
      >
       <div className="flex items-center space-x-4 flex-1">
        <Avatar className="h-10 w-10">
         {conversation.avatar && (
          <AvatarImage src={conversation.avatar} alt={conversation.name} />
         )}
         <AvatarFallback>
          {conversation.name
           .split(" ")
           .map((n) => n[0])
           .join("")
           .toUpperCase()
           .slice(0, 2)}
         </AvatarFallback>
        </Avatar>

        <div className="flex-1 min-w-0">
         <div className="flex items-center space-x-2">
          <h3 className="font-semibold truncate">{conversation.name}</h3>
          {conversation.unread && (
           <span className="h-2 w-2 bg-primary rounded-full flex-shrink-0"></span>
          )}
         </div>
         <p className="text-sm text-muted-foreground truncate">
          {conversation.lastMessage}
         </p>
         <p className="text-xs text-muted-foreground mt-1">
          {conversation.timestamp}
         </p>
        </div>
       </div>

       <Button
        variant="outline"
        size="sm"
        onClick={() => handleViewChat(conversation.id)}
        className="flex-shrink-0 ml-4"
       >
        View Chat
       </Button>
      </Card>
     ))}
     {conversations.length === 0 && (
      <div className="p-6 text-center text-muted-foreground">
       <p>No conversations yet. Start by messaging a freelancer!</p>
      </div>
     )}
    </div>
   </DashboardSection>
  </PageLayout>
 );
};
