import React from "react";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid } from "recharts";
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
 ChartLegend,
 ChartLegendContent,
 type ChartConfig,
} from "@/shared/ui/Chart";

const chartConfig = {
 eth: {
  label: "ETH",
  color: "var(--accent)",
 },
 usd: {
  label: "USD",
  color: "color-mix(in srgb, var(--accent) 60%, transparent)",
 },
} satisfies ChartConfig;

export interface EarningsData {
 month: string;
 eth: number;
 usd: number;
}

export interface EarningsAreaChartProps {
 className?: string;
 title: string;
 description: string;
 trendText: string;
 data: EarningsData[];
 isLoading?: boolean;
 error?: string;
}

export const EarningsAreaChart = ({ 
 className, 
 title, 
 description, 
 trendText, 
 data,
 isLoading,
 error 
}: EarningsAreaChartProps) => {
 if (error) {
  return (
   <Card className={className}>
    <CardHeader>
     <CardTitle className="text-heading-3 md:text-heading-4">{title}</CardTitle>
     <CardDescription>Unable to load earnings data</CardDescription>
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
     <AreaChart
      accessibilityLayer
      data={data}
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
      <ChartTooltip
       cursor={false}
       content={<ChartTooltipContent indicator="line" />}
      />
      <Area
       dataKey="usd"
       type="natural"
       fill="var(--color-usd)"
       fillOpacity={0.4}
       stroke="var(--color-usd)"
       stackId="a"
      />
      <Area
       dataKey="eth"
       type="natural"
       fill="var(--color-eth)"
       fillOpacity={0.6}
       stroke="var(--color-eth)"
       stackId="a"
      />
      <ChartLegend content={<ChartLegendContent />} />
     </AreaChart>
    </ChartContainer>
    <div className="flex items-center justify-center mt-4">
     <div className="text-center">
      <div className="text-sm font-medium text-muted-foreground">
       {trendText}
      </div>
     </div>
    </div>
   </CardContent>
  </Card>
 );
};
