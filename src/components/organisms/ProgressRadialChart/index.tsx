import React from "react";
import { RadialBarChart, RadialBar, ResponsiveContainer } from "recharts";
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
  progress: {
    label: "Progress",
  },
  profile: {
    label: "Profile Completion",
    color: "var(--accent)",
  },
  goals: {
    label: "Monthly Goals",
    color: "color-mix(in srgb, var(--accent) 70%, transparent)",
  },
  skills: {
    label: "Skills Updated",
    color: "color-mix(in srgb, var(--accent) 40%, transparent)",
  },
} satisfies ChartConfig;

const chartData = [
  { category: "profile", progress: 85, fill: "var(--accent)" },
  { category: "goals", progress: 72, fill: "color-mix(in srgb, var(--accent) 70%, transparent)" },
  { category: "skills", progress: 95, fill: "color-mix(in srgb, var(--accent) 40%, transparent)" },
];

export interface ProgressRadialChartProps {
  className?: string;
}

export const ProgressRadialChart = ({ className }: ProgressRadialChartProps) => {
  return (
    <Card className={className}>
      <CardHeader>
        <CardTitle>Progress Overview</CardTitle>
        <CardDescription>Your completion rates</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[250px]"
        >
          <RadialBarChart
            data={chartData}
            startAngle={0}
            endAngle={250}
            innerRadius={30}
            outerRadius={110}
          >
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel nameKey="category" />}
            />
            <RadialBar dataKey="progress" cornerRadius={10} fill="var(--color-profile)" />
          </RadialBarChart>
        </ChartContainer>
        <div className="grid grid-cols-3 gap-2 mt-4">
          <div className="text-center">
            <div className="text-2xl font-bold text-chart-1">85%</div>
            <div className="text-xs text-muted-foreground">Profile</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-chart-2">72%</div>
            <div className="text-xs text-muted-foreground">Goals</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-chart-3">95%</div>
            <div className="text-xs text-muted-foreground">Skills</div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};