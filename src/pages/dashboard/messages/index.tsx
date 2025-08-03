import React from "react";
import { PageLayout } from "@/components/templates";
import { DashboardSection } from "@/components";
import { NoDataCard } from "@/components/atoms";
import {
 Avatar,
 AvatarFallback,
 AvatarImage,
 Button,
 Card,
 Skeleton,
 Alert,
 AlertTitle,
 AlertDescription,
} from "@/shared/ui";
import { useConversations, useNavigation } from "@/shared/hooks";
import { NO_DATA_CONFIGS } from "@/shared/constants";
import { MessageSquare, AlertTriangle, RefreshCw } from "lucide-react";

export const MessagesPage = () => {
 const { conversations, isLoading, error } = useConversations();

 const { goToMessages } = useNavigation();

 const handleViewChat = (conversationId: string) => {
  goToMessages(conversationId);
 };

 return (
  <PageLayout
   breadcrumbs={[
    { label: "Dashboard", href: "/dashboard" },
    { label: "Messages" },
   ]}
  >
   <DashboardSection
    title="Messages"
    description="Your conversations"
    className="space-y-4"
   >
    <div className="space-y-4">
     {isLoading && (
      <div className="space-y-4">
       <Skeleton className="h-20" />
       <Skeleton className="h-20" />
       <Skeleton className="h-20" />
      </div>
     )}

     {error && (
      <Alert variant="destructive">
       <AlertTriangle className="h-4 w-4" />
       <AlertTitle>Something went wrong</AlertTitle>
       <AlertDescription>
        {error}
        <Button
         onClick={() => window.location.reload()}
         variant="outline"
         size="sm"
         className="mt-2"
        >
         <RefreshCw className="h-4 w-4 mr-2" />
         Try again
        </Button>
       </AlertDescription>
      </Alert>
     )}

     {!isLoading && !error && conversations.length === 0 && (
      <NoDataCard
       title={NO_DATA_CONFIGS.MESSAGES.title}
       description={NO_DATA_CONFIGS.MESSAGES.description}
       icon={<MessageSquare className="w-12 h-12" />}
      />
     )}

     {!isLoading && !error && conversations.length > 0 && (
      <>
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
      </>
     )}
    </div>
   </DashboardSection>
  </PageLayout>
 );
};
