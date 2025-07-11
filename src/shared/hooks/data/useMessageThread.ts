import { useState, useEffect } from "react";
import {
  getMessageThread,
  sendMessage,
  type Message,
} from "@/shared/services/message.service";

export interface UseMessageThreadResult {
  messages: Message[];
  isLoading: boolean;
  error: string | null;
  sendMessage: (content: string) => Promise<void>;
  isSending: boolean;
}

export const useMessageThread = (userId?: string): UseMessageThreadResult => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isSending, setIsSending] = useState(false);

  useEffect(() => {
    const fetchMessages = async () => {
      if (!userId) {
        setIsLoading(false);
        return;
      }

      try {
        setError(null);
        const data = await getMessageThread(userId);
        setMessages(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Failed to fetch messages");
      } finally {
        setIsLoading(false);
      }
    };

    fetchMessages();
  }, [userId]);

  const handleSendMessage = async (content: string) => {
    if (!userId || !content.trim() || isSending) return;

    setIsSending(true);
    try {
      const sentMessage = await sendMessage(userId, content);
      setMessages((prev) => [...prev, sentMessage]);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to send message");
      throw err;
    } finally {
      setIsSending(false);
    }
  };

  return {
    messages,
    isLoading,
    error,
    sendMessage: handleSendMessage,
    isSending
  };
};