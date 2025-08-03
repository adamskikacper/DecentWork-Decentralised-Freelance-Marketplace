import React from "react";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
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
  ChartLegend,
  ChartLegendContent,
  type ChartConfig,
} from "@/shared/ui/Chart";
import { useProjectStatusData } from "@/shared/hooks/data";

const chartConfig = {
  active: {
    label: "Active Projects",
    color: "var(--accent)",
  },
  completed: {
    label: "Completed Projects",
    color: "color-mix(in srgb, var(--accent) 70%, transparent)",
  },
  pending: {
    label: "Pending Proposals",
    color: "color-mix(in srgb, var(--accent) 40%, transparent)",
  },
} satisfies ChartConfig;

export interface ProjectStatusChartProps {
  className?: string;
}

export const ProjectStatusChart = ({ className }: ProjectStatusChartProps) => {
  const { data, isLoading, error } = useProjectStatusData();

  if (error) {
    return (
      <Card className={className}>
        <CardHeader>
          <CardTitle>Project Status</CardTitle>
          <CardDescription>Unable to load project data</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-center h-[300px] text-muted-foreground">
            {error}
          </div>
        </CardContent>
      </Card>
    );
  }

  if (isLoading || !data) {
    return (
      <Card className={className}>
        <CardHeader>
          <CardTitle>Project Status</CardTitle>
          <CardDescription>Your current project breakdown</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-center h-[300px]">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className={className}>
      <CardHeader>
        <CardTitle>Project Status</CardTitle>
        <CardDescription>Your current project breakdown</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[300px]"
        >
          <PieChart>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Pie
              data={data}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              outerRadius={80}
              innerRadius={40}
              strokeWidth={5}
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.fill} />
              ))}
            </Pie>
            <ChartLegend
              content={<ChartLegendContent nameKey="name" />}
              className="-translate-y-2 flex-wrap gap-2 [&>*]:basis-1/4 [&>*]:justify-center"
            />
          </PieChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
};