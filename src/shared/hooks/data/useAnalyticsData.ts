import { useState, useEffect } from "react";
import { 
  getEarningsData, 
  getWeeklyActivityData, 
  getProjectStatusData 
} from "@/shared/services";
import { EarningsData } from "@/components/organisms/EarningsAreaChart";
import { WeeklyActivityData } from "@/components/organisms/WeeklyActivityChart";
import { ProjectStatusData } from "@/components/organisms/ProjectStatusChart";

export const useEarningsData = (userType: "client" | "freelancer") => {
  const [data, setData] = useState<EarningsData[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        setError(null);
        const earningsData = await getEarningsData(userType);
        setData(earningsData);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Failed to fetch earnings data");
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [userType]);

  const title = userType === "client" ? "Spending" : "Earnings";
  const description = userType === "client" 
    ? "ETH spent vs USD equivalent"
    : "ETH earned vs USD equivalent";
  const trendText = userType === "client" 
    ? "Up 12.1% this month" 
    : "Up 8.2% this month";

  return {
    data,
    isLoading,
    error,
    title,
    description,
    trendText,
  };
};

export const useWeeklyActivityData = (userType: "client" | "freelancer") => {
  const [data, setData] = useState<WeeklyActivityData[]>([]);
  const [peakDay, setPeakDay] = useState<string>("");
  const [totalActivity, setTotalActivity] = useState<number>(0);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        setError(null);
        const activityData = await getWeeklyActivityData(userType);
        setData(activityData.data);
        setPeakDay(activityData.peakDay);
        setTotalActivity(activityData.totalActivity);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Failed to fetch activity data");
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [userType]);

  const title = "Login Activity";
  const description = "Weekly login frequency";

  return {
    data,
    peakDay,
    totalActivity,
    isLoading,
    error,
    title,
    description,
  };
};

export const useProjectStatusDataAnalytics = (userType: "client" | "freelancer") => {
  const [data, setData] = useState<ProjectStatusData[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        setError(null);
        const statusData = await getProjectStatusData(userType);
        setData(statusData);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Failed to fetch project status data");
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [userType]);

  const title = userType === "client" ? "Jobs" : "Projects";
  const description = userType === "client" 
    ? "Current job breakdown"
    : "Current project breakdown";

  return {
    data,
    isLoading,
    error,
    title,
    description,
  };
};