import React from "react";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from "recharts";
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
import { useEthPriceData } from "@/shared/hooks/data";

const chartConfig = {
  price: {
    label: "ETH Price",
    color: "var(--accent)",
  },
} satisfies ChartConfig;

export interface EthPriceAreaChartProps {
  className?: string;
}

const formatTime = (timestamp: number) => {
  return new Date(timestamp).toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
  });
};

const formatPrice = (price: number) => {
  return `$${price.toLocaleString('en-US', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })}`;
};

export const EthPriceAreaChart = ({ className }: EthPriceAreaChartProps) => {
  const { data, isLoading, error } = useEthPriceData();

  if (error) {
    return (
      <Card className={className}>
        <CardHeader>
          <CardTitle>ETH Price</CardTitle>
          <CardDescription>Unable to load price data</CardDescription>
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
          <CardTitle>ETH Price</CardTitle>
          <CardDescription>Loading price data...</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-center h-[300px]">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
          </div>
        </CardContent>
      </Card>
    );
  }

  const chartData = data.priceHistory.map(point => ({
    time: formatTime(point.timestamp),
    price: point.price,
    timestamp: point.timestamp,
  }));

  const isPositive = data.priceChangePercentage24h >= 0;

  return (
    <Card className={className}>
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <span>ETH Price</span>
          <div className="text-right">
            <div className="text-2xl font-bold">
              {formatPrice(data.currentPrice)}
            </div>
            <div className={`text-sm font-medium ${
              isPositive ? 'text-green-600' : 'text-red-600'
            }`}>
              {isPositive ? '+' : ''}{formatPrice(data.priceChange24h)} ({data.priceChangePercentage24h.toFixed(2)}%)
            </div>
          </div>
        </CardTitle>
        <CardDescription>Last 24 hours</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <AreaChart
            accessibilityLayer
            data={chartData}
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="time"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              interval="preserveStartEnd"
              tick={{ fontSize: 10 }}
            />
            <YAxis 
              hide
              domain={['dataMin - 20', 'dataMax + 20']}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent 
                indicator="line"
                labelFormatter={(value, payload) => {
                  if (payload && payload[0]) {
                    const timestamp = payload[0].payload?.timestamp;
                    if (timestamp) {
                      return new Date(timestamp).toLocaleString();
                    }
                  }
                  return value;
                }}
                formatter={(value) => [formatPrice(Number(value)), "ETH Price"]}
              />}
            />
            <Area
              dataKey="price"
              type="monotone"
              fill={`color-mix(in srgb, var(--accent) 20%, transparent)`}
              fillOpacity={0.6}
              stroke="var(--accent)"
              strokeWidth={2}
            />
          </AreaChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
};