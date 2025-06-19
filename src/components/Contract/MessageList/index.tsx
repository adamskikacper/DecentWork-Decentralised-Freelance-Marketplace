import React from "react";
import { User } from "lucide-react";
import { Badge } from "@/components/UI";
import { cn } from "@/lib/utils";

export interface Conversation {
 id: string;
 user: {
  id: string;
  name: string;
  title: string;
 };
 lastMessage: {
  content: string;
  timestamp: string;
  isRead: boolean;
 };
}

interface MessageListProps {
 conversations: Conversation[];
 onSelectConversation: (userId: string) => void;
 selectedId?: string;
}

const MessageList: React.FC<MessageListProps> = ({
 conversations,
 onSelectConversation,
 selectedId,
}) => {
 return (
  <div className="divide-y divide-border">
   {conversations.length === 0 ? (
    <div className="py-8 text-center">
     <p className="text-muted-foreground">No conversations yet</p>
    </div>
   ) : (
    conversations.map((conversation) => (
     <div
      key={conversation.id}
      className={cn(
       "flex p-4 gap-3 cursor-pointer hover:bg-secondary/50 transition-colors",
       selectedId === conversation.user.id && "bg-secondary"
      )}
      onClick={() => onSelectConversation(conversation.user.id)}
     >
      <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center flex-shrink-0">
       <User className="h-5 w-5" />
      </div>
      <div className="flex-1 min-w-0">
       <div className="flex justify-between items-center mb-1">
        <h3 className="font-medium truncate">{conversation.user.name}</h3>
        <span className="text-xs text-muted-foreground">
         {conversation.lastMessage.timestamp}
        </span>
       </div>
       <div className="flex justify-between items-center">
        <p className="text-sm text-muted-foreground truncate">
         {conversation.lastMessage.content}
        </p>
        {!conversation.lastMessage.isRead && (
         <Badge variant="default" className="ml-2 bg-primary">
          New
         </Badge>
        )}
       </div>
       <p className="text-xs text-muted-foreground mt-1">
        {conversation.user.title}
       </p>
      </div>
     </div>
    ))
   )}
  </div>
 );
};

export default MessageList;
