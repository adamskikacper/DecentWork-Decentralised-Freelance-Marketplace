import React from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from "recharts";
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
  projects: {
    label: "Projects",
    color: "var(--accent)",
  },
} satisfies ChartConfig;

const chartData = [
  { skill: "React", projects: 45 },
  { skill: "Node.js", projects: 38 },
  { skill: "Python", projects: 32 },
  { skill: "Design", projects: 28 },
  { skill: "Mobile", projects: 24 },
];

export interface SkillsBarChartProps {
  className?: string;
}

export const SkillsBarChart = ({ className }: SkillsBarChartProps) => {
  return (
    <Card className={className}>
      <CardHeader>
        <CardTitle>Top Skills Demand</CardTitle>
        <CardDescription>Most requested skills this month</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart
            accessibilityLayer
            data={chartData}
            margin={{
              top: 20,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="skill"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 6)}
            />
            <YAxis hide />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Bar dataKey="projects" fill="var(--color-projects)" radius={8} />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
};