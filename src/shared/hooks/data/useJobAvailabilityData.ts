import { useState, useEffect } from "react";
import { getClientSatisfactionStats } from "@/shared/services/jobs.service";

export interface ClientSatisfactionData {
  satisfactionPercentage: number;
  averageRating: number;
  totalReviews: number;
  monthlyChange: number;
  recentFeedback: string;
}

export const useClientSatisfactionData = () => {
  const [data, setData] = useState<ClientSatisfactionData | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        setError(null);
        const statsData = await getClientSatisfactionStats();
        setData(statsData);
      } catch (err) {
        setError(
          err instanceof Error ? err.message : "Failed to load client satisfaction data"
        );
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return {
    data,
    isLoading,
    error,
  };
};