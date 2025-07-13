import { useState, useEffect } from "react";
import {
  getConversations,
  type Conversation,
} from "@/shared/services/message.service";

export interface UseConversationsResult {
  conversations: Conversation[];
  isLoading: boolean;
  error: string | null;
  refreshConversations: () => Promise<void>;
}

export const useConversations = (): UseConversationsResult => {
  const [conversations, setConversations] = useState<Conversation[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchConversations = async () => {
    try {
      setError(null);
      setIsLoading(true);
      const data = await getConversations();
      setConversations(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to fetch conversations");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchConversations();
  }, []);

  const refreshConversations = async () => {
    await fetchConversations();
  };

  return {
    conversations,
    isLoading,
    error,
    refreshConversations
  };
};