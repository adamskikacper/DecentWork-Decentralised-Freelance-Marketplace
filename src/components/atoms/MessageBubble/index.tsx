import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/shared/ui";
import { cn } from "@/shared/lib";

export interface MessageBubbleProps {
 content: string;
 timestamp: string;
 isOwn: boolean;
 senderName?: string;
 senderAvatar?: string;
 className?: string;
}

export const MessageBubble = ({
 content,
 timestamp,
 isOwn,
 senderName,
 senderAvatar,
 className = "",
}: MessageBubbleProps) => {
 const initials = senderName
  ? senderName
     .split(" ")
     .map((n) => n[0])
     .join("")
     .toUpperCase()
     .slice(0, 2)
  : isOwn
  ? "ME"
  : "??";

 return (
  <div
   className={cn(
    "flex items-start space-x-3",
    isOwn ? "justify-end" : "justify-start",
    className
   )}
  >
   {!isOwn && (
    <Avatar className="h-8 w-8">
     {senderAvatar && <AvatarImage src={senderAvatar} alt={senderName} />}
     <AvatarFallback>{initials}</AvatarFallback>
    </Avatar>
   )}

   <div
    className={cn(
     "max-w-xs lg:max-w-md px-4 py-2 rounded-lg",
     isOwn ? "bg-primary text-primary-foreground" : "bg-muted"
    )}
   >
    <p className="text-sm">{content}</p>
    <p className="text-xs opacity-70 mt-1">{timestamp}</p>
   </div>

   {isOwn && (
    <Avatar className="h-8 w-8">
     <AvatarFallback>ME</AvatarFallback>
    </Avatar>
   )}
  </div>
 );
};
