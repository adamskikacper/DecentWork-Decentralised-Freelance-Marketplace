import React from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from "recharts";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/shared/ui/Card";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/shared/ui/Chart";

const chartConfig = {
  views: {
    label: "Profile Views",
    color: "var(--accent)",
  },
  applications: {
    label: "Applications",
    color: "color-mix(in srgb, var(--accent) 60%, transparent)",
  },
} satisfies ChartConfig;

const chartData = [
  { month: "Jan", views: 186, applications: 12 },
  { month: "Feb", views: 305, applications: 18 },
  { month: "Mar", views: 237, applications: 15 },
  { month: "Apr", views: 373, applications: 24 },
  { month: "May", views: 209, applications: 16 },
  { month: "Jun", views: 440, applications: 28 },
];

export interface TrendsLineChartProps {
  className?: string;
}

export const TrendsLineChart = ({ className }: TrendsLineChartProps) => {
  return (
    <Card className={className}>
      <CardHeader>
        <CardTitle>Activity Trends</CardTitle>
        <CardDescription>Profile views vs applications</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <LineChart
            accessibilityLayer
            data={chartData}
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <YAxis hide />
            <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
            <Line
              dataKey="views"
              type="monotone"
              stroke="var(--color-views)"
              strokeWidth={2}
              dot={false}
            />
            <Line
              dataKey="applications"
              type="monotone"
              stroke="var(--color-applications)"
              strokeWidth={2}
              dot={false}
            />
          </LineChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
};