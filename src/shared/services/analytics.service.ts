import { EarningsData } from "@/components/organisms/EarningsAreaChart";
import { WeeklyActivityData } from "@/components/organisms/WeeklyActivityChart";
import { ProjectStatusData } from "@/components/organisms/ProjectStatusChart";

export const getEarningsData = async (userType: "client" | "freelancer"): Promise<EarningsData[]> => {
  if (userType === "client") {
    return [
      { month: "Jan", eth: 2.1, usd: 6300 },
      { month: "Feb", eth: 1.8, usd: 5400 },
      { month: "Mar", eth: 4.5, usd: 13500 },
      { month: "Apr", eth: 3.2, usd: 9600 },
      { month: "May", eth: 2.8, usd: 8400 },
      { month: "Jun", eth: 3.6, usd: 10800 },
    ];
  }
  
  return [
    { month: "Jan", eth: 0.8, usd: 2400 },
    { month: "Feb", eth: 0.5, usd: 1500 },
    { month: "Mar", eth: 3.2, usd: 9600 },
    { month: "Apr", eth: 1.3, usd: 3900 },
    { month: "May", eth: 1.6, usd: 4800 },
    { month: "Jun", eth: 1.3, usd: 3900 },
  ];
};

export const getWeeklyActivityData = async (userType: "client" | "freelancer"): Promise<{
  data: WeeklyActivityData[];
  peakDay: string;
  totalActivity: number;
}> => {
  if (userType === "client") {
    const data = [
      { day: "Mon", activity: 3 },
      { day: "Tue", activity: 5 },
      { day: "Wed", activity: 7 },
      { day: "Thu", activity: 4 },
      { day: "Fri", activity: 6 },
      { day: "Sat", activity: 2 },
      { day: "Sun", activity: 1 },
    ];
    
    return {
      data,
      peakDay: "Wednesday",
      totalActivity: data.reduce((sum, d) => sum + d.activity, 0),
    };
  }
  
  const data = [
    { day: "Mon", activity: 4 },
    { day: "Tue", activity: 6 },
    { day: "Wed", activity: 3 },
    { day: "Thu", activity: 8 },
    { day: "Fri", activity: 5 },
    { day: "Sat", activity: 2 },
    { day: "Sun", activity: 1 },
  ];
  
  return {
    data,
    peakDay: "Thursday",
    totalActivity: data.reduce((sum, d) => sum + d.activity, 0),
  };
};

export const getProjectStatusData = async (userType: "client" | "freelancer"): Promise<ProjectStatusData[]> => {
  if (userType === "client") {
    return [
      { name: "Active Jobs", value: 25, fill: "var(--accent)" },
      { name: "Completed Jobs", value: 65, fill: "color-mix(in srgb, var(--accent) 70%, transparent)" },
      { name: "Draft Jobs", value: 10, fill: "color-mix(in srgb, var(--accent) 40%, transparent)" },
    ];
  }
  
  return [
    { name: "Active Projects", value: 35, fill: "var(--accent)" },
    { name: "Completed Projects", value: 55, fill: "color-mix(in srgb, var(--accent) 70%, transparent)" },
    { name: "Pending Proposals", value: 10, fill: "color-mix(in srgb, var(--accent) 40%, transparent)" },
  ];
};