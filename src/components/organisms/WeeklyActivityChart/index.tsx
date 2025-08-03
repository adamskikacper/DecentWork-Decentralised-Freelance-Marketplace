import React from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid } from "recharts";
import {
 Card,
 CardHeader,
 CardTitle,
 CardDescription,
 CardContent,
} from "@/shared/ui/Card";
import { Loader } from "@/shared/ui";
import {
 ChartContainer,
 ChartTooltip,
 ChartTooltipContent,
 type ChartConfig,
} from "@/shared/ui/Chart";

const chartConfig = {
 activity: {
  label: "Login Count",
  color: "var(--accent)",
 },
} satisfies ChartConfig;

export interface WeeklyActivityData {
 day: string;
 activity: number;
}

export interface WeeklyActivityChartProps {
 className?: string;
 title: string;
 description: string;
 data: WeeklyActivityData[];
 peakDay: string;
 totalActivity: number;
 isLoading?: boolean;
 error?: string;
}

export const WeeklyActivityChart = ({
 className,
 title,
 description,
 data,
 peakDay,
 totalActivity,
 isLoading,
 error,
}: WeeklyActivityChartProps) => {
 if (error) {
  return (
   <Card className={className}>
    <CardHeader>
     <CardTitle className="text-heading-3 md:text-heading-4">{title}</CardTitle>
     <CardDescription>Unable to load activity data</CardDescription>
    </CardHeader>
    <CardContent>
     <div className="flex items-center justify-center h-[300px] text-muted-foreground">
      {error}
     </div>
    </CardContent>
   </Card>
  );
 }

 if (isLoading || !data?.length) {
  return (
   <Card className={className}>
    <CardHeader>
     <CardTitle className="text-heading-3 md:text-heading-4">{title}</CardTitle>
     <CardDescription>{description}</CardDescription>
    </CardHeader>
    <CardContent>
     <div className="flex items-center justify-center h-[300px]">
      <Loader />
     </div>
    </CardContent>
   </Card>
  );
 }

 return (
  <Card className={className}>
   <CardHeader>
    <CardTitle className="text-heading-3 md:text-heading-4">{title}</CardTitle>
    <CardDescription>{description}</CardDescription>
   </CardHeader>
   <CardContent>
    <ChartContainer config={chartConfig}>
     <BarChart
      accessibilityLayer
      data={data}
      margin={{
       left: 12,
       right: 12,
      }}
     >
      <CartesianGrid vertical={false} />
      <XAxis dataKey="day" tickLine={false} axisLine={false} tickMargin={8} />
      <YAxis hide />
      <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
      <Bar
       dataKey="activity"
       fill="var(--color-activity)"
       radius={[4, 4, 0, 0]}
      />
     </BarChart>
    </ChartContainer>
    <div className="flex items-center justify-center mt-4">
     <div className="text-center">
      <div className="text-sm text-muted-foreground">Peak on {peakDay}</div>
      <div className="text-xs text-muted-foreground">
       {totalActivity} logins total
      </div>
     </div>
    </div>
   </CardContent>
  </Card>
 );
};
