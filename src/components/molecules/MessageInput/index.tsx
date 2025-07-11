import React, { useState } from "react";
import { Button, Input } from "@/shared/ui";
import { Send } from "lucide-react";

export interface MessageInputProps {
 onSendMessage: (message: string) => void;
 placeholder?: string;
 disabled?: boolean;
 isSending?: boolean;
 className?: string;
}

export const MessageInput = ({
 onSendMessage,
 placeholder = "Type a message...",
 disabled = false,
 isSending = false,
 className = "",
}: MessageInputProps) => {
 const [message, setMessage] = useState("");

 const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault();
  if (!message.trim() || disabled || isSending) return;

  onSendMessage(message.trim());
  setMessage("");
 };

 const handleKeyPress = (e: React.KeyboardEvent) => {
  if (e.key === "Enter" && !e.shiftKey) {
   e.preventDefault();
   handleSubmit(e);
  }
 };

 return (
  <form onSubmit={handleSubmit} className={`flex gap-2 ${className}`}>
   <Input
    placeholder={placeholder}
    value={message}
    onChange={(e) => setMessage(e.target.value)}
    onKeyPress={handleKeyPress}
    disabled={disabled || isSending}
    className="flex-1"
   />
   <Button
    type="submit"
    disabled={disabled || isSending || !message.trim()}
    size="sm"
   >
    {isSending ? (
     "Sending..."
    ) : (
     <>
      <Send className="h-4 w-4" />
      Send
     </>
    )}
   </Button>
  </form>
 );
};
