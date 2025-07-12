import { MessageBubble } from "@/components/atoms";
import { MessageInput, DataSection } from "@/components/molecules";
import { ScrollArea } from "@/shared/ui";
import { useMessageThread } from "@/shared/hooks";

export interface ChatInterfaceProps {
 userId: string;
 currentUserId?: string;
 className?: string;
}

export const ChatInterface = ({
 userId,
 currentUserId = "current-user",
 className = "",
}: ChatInterfaceProps) => {
 const { messages, isLoading, error, sendMessage, isSending } =
  useMessageThread(userId);

 const handleSendMessage = async (content: string) => {
  try {
   await sendMessage(content);
  } catch (err) {
   console.error("Failed to send message:", err);
  }
 };

 return (
  <div className={`flex flex-col h-[600px] ${className}`}>
   <div className="flex-1 min-h-0">
    <DataSection
     isLoading={isLoading}
     error={error}
     isEmpty={messages.length === 0}
     emptyTitle="No messages yet"
     emptyMessage="Start the conversation by sending a message!"
     className="h-full"
    >
     <ScrollArea className="h-full p-4 border rounded-lg">
      <div className="space-y-4">
       {messages.map((message) => (
        <MessageBubble
         key={message.id}
         content={message.content}
         timestamp={message.timestamp}
         isOwn={message.senderId === currentUserId}
        />
       ))}
      </div>
     </ScrollArea>
    </DataSection>
   </div>

   <div className="pt-4">
    <MessageInput
     onSendMessage={handleSendMessage}
     disabled={!!error}
     isSending={isSending}
     placeholder="Type your message..."
    />
   </div>
  </div>
 );
};
