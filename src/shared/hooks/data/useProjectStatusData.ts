import { useState, useEffect } from "react";

export interface ProjectStatusData {
  name: string;
  value: number;
  fill: string;
}

const mockProjectStatusData: ProjectStatusData[] = [
  { name: "Active Projects", value: 35, fill: "var(--accent)" },
  { name: "Completed Projects", value: 55, fill: "color-mix(in srgb, var(--accent) 70%, transparent)" },
  { name: "Pending Proposals", value: 10, fill: "color-mix(in srgb, var(--accent) 40%, transparent)" },
];

export const useProjectStatusData = () => {
  const [data, setData] = useState<ProjectStatusData[] | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        setError(null);
        
        await new Promise(resolve => setTimeout(resolve, 500));
        
        setData(mockProjectStatusData);
      } catch (err) {
        setError("Failed to load project status data");
        console.error("Error fetching project status data:", err);
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