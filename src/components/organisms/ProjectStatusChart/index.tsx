import React from "react";
import { PieChart, Pie, Cell } from "recharts";
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

export interface ProjectStatusData {
  name: string;
  value: number;
  fill: string;
}

export interface ProjectStatusChartProps {
  className?: string;
  title?: string;
  description?: string;
  data: ProjectStatusData[];
  isLoading?: boolean;
  error?: string;
}

export const ProjectStatusChart = ({ 
  className, 
  title = "Project Status",
  description = "Your current project breakdown",
  data,
  isLoading,
  error 
}: ProjectStatusChartProps) => {

  if (error) {
    return (
      <Card className={className}>
        <CardHeader>
          <CardTitle className="text-heading-3 md:text-heading-4">{title}</CardTitle>
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
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[250px]"
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
          </PieChart>
        </ChartContainer>
        
        <div className="grid grid-cols-3 gap-2 mt-4">
          {data.map((item, index) => {
            const total = data.reduce((sum, d) => sum + d.value, 0);
            const percentage = Math.round((item.value / total) * 100);
            
            return (
              <div key={index} className="text-center">
                <div className="flex items-center justify-center mb-1">
                  <div 
                    className="w-3 h-3 rounded-full mr-2" 
                    style={{ backgroundColor: item.fill }}
                  />
                  <span className="text-xs font-medium">{percentage}%</span>
                </div>
                <div className="text-xs text-muted-foreground">
                  {item.name}
                </div>
              </div>
            );
          })}
        </div>
        
        <div className="flex items-center justify-center mt-4">
          <div className="text-center">
            <div className="text-sm font-medium text-muted-foreground">
              {(() => {
                const completedItem = data.find(item => 
                  item.name.toLowerCase().includes('completed')
                );
                const completedPercentage = completedItem ? 
                  Math.round((completedItem.value / data.reduce((sum, d) => sum + d.value, 0)) * 100) : 0;
                return `${completedPercentage}% completed`;
              })()}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};