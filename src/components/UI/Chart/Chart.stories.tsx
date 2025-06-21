import type { Meta, StoryObj } from "@storybook/react";
import {
 ChartContainer,
 ChartTooltip,
 ChartTooltipContent,
 ChartLegend,
 ChartLegendContent,
} from "./index";
import {
 BarChart,
 Bar,
 LineChart,
 Line,
 AreaChart,
 Area,
 PieChart,
 Pie,
 Cell,
 XAxis,
 YAxis,
 CartesianGrid,
 ResponsiveContainer,
} from "recharts";

const meta: Meta<typeof ChartContainer> = {
 title: "UI/Chart",
 component: ChartContainer,
 parameters: {
  layout: "centered",
  docs: {
   description: {
    component:
     "A chart component built on top of Recharts for displaying data visualizations. Supports various chart types including bar, line, area, and pie charts.",
   },
  },
 },
 tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof ChartContainer>;

// Sample data for charts
const salesData = [
 { month: "Jan", sales: 4000, revenue: 2400, profit: 1600 },
 { month: "Feb", sales: 3000, revenue: 1398, profit: 1602 },
 { month: "Mar", sales: 2000, revenue: 9800, profit: 1200 },
 { month: "Apr", sales: 2780, revenue: 3908, profit: 1872 },
 { month: "May", sales: 1890, revenue: 4800, profit: 2910 },
 { month: "Jun", sales: 2390, revenue: 3800, profit: 1410 },
];

const trafficData = [
 { name: "Desktop", value: 400, color: "#8884d8" },
 { name: "Mobile", value: 300, color: "#82ca9d" },
 { name: "Tablet", value: 200, color: "#ffc658" },
 { name: "Other", value: 100, color: "#ff7300" },
];

const performanceData = [
 { time: "00:00", cpu: 20, memory: 45, disk: 30 },
 { time: "04:00", cpu: 35, memory: 52, disk: 28 },
 { time: "08:00", cpu: 65, memory: 78, disk: 45 },
 { time: "12:00", cpu: 80, memory: 85, disk: 65 },
 { time: "16:00", cpu: 75, memory: 82, disk: 58 },
 { time: "20:00", cpu: 45, memory: 65, disk: 42 },
];

const chartConfig = {
 sales: {
  label: "Sales",
  color: "#2563eb",
 },
 revenue: {
  label: "Revenue",
  color: "#60a5fa",
 },
 profit: {
  label: "Profit",
  color: "#34d399",
 },
 cpu: {
  label: "CPU",
  color: "#ef4444",
 },
 memory: {
  label: "Memory",
  color: "#f59e0b",
 },
 disk: {
  label: "Disk",
  color: "#8b5cf6",
 },
};

/**
 * Basic bar chart
 */
export const BasicBarChart: Story = {
 render: () => (
  <ChartContainer config={chartConfig} className="h-80 w-96">
   <BarChart data={salesData}>
    <CartesianGrid strokeDasharray="3 3" />
    <XAxis dataKey="month" />
    <YAxis />
    <ChartTooltip content={<ChartTooltipContent />} />
    <ChartLegend content={<ChartLegendContent />} />
    <Bar dataKey="sales" fill="var(--color-sales)" />
    <Bar dataKey="revenue" fill="var(--color-revenue)" />
   </BarChart>
  </ChartContainer>
 ),
};

/**
 * Line chart for trends
 */
export const TrendLineChart: Story = {
 render: () => (
  <ChartContainer config={chartConfig} className="h-80 w-96">
   <LineChart data={salesData}>
    <CartesianGrid strokeDasharray="3 3" />
    <XAxis dataKey="month" />
    <YAxis />
    <ChartTooltip content={<ChartTooltipContent />} />
    <ChartLegend content={<ChartLegendContent />} />
    <Line
     type="monotone"
     dataKey="sales"
     stroke="var(--color-sales)"
     strokeWidth={2}
     dot={{ fill: "var(--color-sales)" }}
    />
    <Line
     type="monotone"
     dataKey="revenue"
     stroke="var(--color-revenue)"
     strokeWidth={2}
     dot={{ fill: "var(--color-revenue)" }}
    />
   </LineChart>
  </ChartContainer>
 ),
};

/**
 * Area chart for filled trends
 */
export const FilledAreaChart: Story = {
 render: () => (
  <ChartContainer config={chartConfig} className="h-80 w-96">
   <AreaChart data={salesData}>
    <CartesianGrid strokeDasharray="3 3" />
    <XAxis dataKey="month" />
    <YAxis />
    <ChartTooltip content={<ChartTooltipContent />} />
    <ChartLegend content={<ChartLegendContent />} />
    <Area
     type="monotone"
     dataKey="sales"
     stackId="1"
     stroke="var(--color-sales)"
     fill="var(--color-sales)"
     fillOpacity={0.6}
    />
    <Area
     type="monotone"
     dataKey="revenue"
     stackId="1"
     stroke="var(--color-revenue)"
     fill="var(--color-revenue)"
     fillOpacity={0.6}
    />
   </AreaChart>
  </ChartContainer>
 ),
};

/**
 * Pie chart for proportions
 */
export const ProportionPieChart: Story = {
 render: () => (
  <ChartContainer config={chartConfig} className="h-80 w-96">
   <PieChart>
    <Pie
     data={trafficData}
     cx="50%"
     cy="50%"
     labelLine={false}
     label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
     outerRadius={80}
     fill="#8884d8"
     dataKey="value"
    >
     {trafficData.map((entry, index) => (
      <Cell key={`cell-${index}`} fill={entry.color} />
     ))}
    </Pie>
    <ChartTooltip content={<ChartTooltipContent />} />
    <ChartLegend content={<ChartLegendContent />} />
   </PieChart>
  </ChartContainer>
 ),
};

/**
 * Multi-line performance chart
 */
export const PerformanceChart: Story = {
 render: () => (
  <div className="space-y-4">
   <div>
    <h3 className="text-lg font-semibold">System Performance</h3>
    <p className="text-sm text-gray-600">
     CPU, Memory, and Disk usage over time
    </p>
   </div>
   <ChartContainer config={chartConfig} className="h-80 w-full max-w-2xl">
    <LineChart data={performanceData}>
     <CartesianGrid strokeDasharray="3 3" />
     <XAxis dataKey="time" />
     <YAxis domain={[0, 100]} />
     <ChartTooltip
      content={<ChartTooltipContent />}
      labelFormatter={(value) => `Time: ${value}`}
     />
     <ChartLegend content={<ChartLegendContent />} />
     <Line
      type="monotone"
      dataKey="cpu"
      stroke="var(--color-cpu)"
      strokeWidth={2}
      dot={{ fill: "var(--color-cpu)" }}
     />
     <Line
      type="monotone"
      dataKey="memory"
      stroke="var(--color-memory)"
      strokeWidth={2}
      dot={{ fill: "var(--color-memory)" }}
     />
     <Line
      type="monotone"
      dataKey="disk"
      stroke="var(--color-disk)"
      strokeWidth={2}
      dot={{ fill: "var(--color-disk)" }}
     />
    </LineChart>
   </ChartContainer>
  </div>
 ),
};

/**
 * Stacked bar chart
 */
export const StackedBarChart: Story = {
 render: () => (
  <div className="space-y-4">
   <div>
    <h3 className="text-lg font-semibold">Monthly Revenue Breakdown</h3>
    <p className="text-sm text-gray-600">Sales, revenue, and profit by month</p>
   </div>
   <ChartContainer config={chartConfig} className="h-80 w-full max-w-2xl">
    <BarChart data={salesData}>
     <CartesianGrid strokeDasharray="3 3" />
     <XAxis dataKey="month" />
     <YAxis />
     <ChartTooltip content={<ChartTooltipContent />} />
     <ChartLegend content={<ChartLegendContent />} />
     <Bar dataKey="sales" stackId="a" fill="var(--color-sales)" />
     <Bar dataKey="revenue" stackId="a" fill="var(--color-revenue)" />
     <Bar dataKey="profit" stackId="a" fill="var(--color-profit)" />
    </BarChart>
   </ChartContainer>
  </div>
 ),
};

/**
 * Dashboard-style multiple charts
 */
export const Dashboard: Story = {
 render: () => (
  <div className="space-y-6 w-full max-w-4xl">
   <div>
    <h2 className="text-xl font-bold">Analytics Dashboard</h2>
    <p className="text-gray-600">
     Overview of key metrics and performance indicators
    </p>
   </div>

   <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
    {/* Revenue Trend */}
    <div className="border rounded-lg p-4">
     <h3 className="text-lg font-semibold mb-4">Revenue Trend</h3>
     <ChartContainer config={chartConfig} className="h-64">
      <LineChart data={salesData}>
       <CartesianGrid strokeDasharray="3 3" />
       <XAxis dataKey="month" />
       <YAxis />
       <ChartTooltip content={<ChartTooltipContent />} />
       <Line
        type="monotone"
        dataKey="revenue"
        stroke="var(--color-revenue)"
        strokeWidth={3}
        dot={{ fill: "var(--color-revenue)", strokeWidth: 2, r: 4 }}
       />
      </LineChart>
     </ChartContainer>
    </div>

    {/* Traffic Sources */}
    <div className="border rounded-lg p-4">
     <h3 className="text-lg font-semibold mb-4">Traffic Sources</h3>
     <ChartContainer config={chartConfig} className="h-64">
      <PieChart>
       <Pie
        data={trafficData}
        cx="50%"
        cy="50%"
        innerRadius={40}
        outerRadius={80}
        paddingAngle={5}
        dataKey="value"
       >
        {trafficData.map((entry, index) => (
         <Cell key={`cell-${index}`} fill={entry.color} />
        ))}
       </Pie>
       <ChartTooltip content={<ChartTooltipContent />} />
      </PieChart>
     </ChartContainer>
    </div>

    {/* Monthly Comparison */}
    <div className="border rounded-lg p-4 md:col-span-2">
     <h3 className="text-lg font-semibold mb-4">Monthly Comparison</h3>
     <ChartContainer config={chartConfig} className="h-64">
      <BarChart data={salesData}>
       <CartesianGrid strokeDasharray="3 3" />
       <XAxis dataKey="month" />
       <YAxis />
       <ChartTooltip content={<ChartTooltipContent />} />
       <ChartLegend content={<ChartLegendContent />} />
       <Bar dataKey="sales" fill="var(--color-sales)" radius={[4, 4, 0, 0]} />
       <Bar dataKey="profit" fill="var(--color-profit)" radius={[4, 4, 0, 0]} />
      </BarChart>
     </ChartContainer>
    </div>
   </div>
  </div>
 ),
};

/**
 * Responsive chart
 */
export const ResponsiveChart: Story = {
 render: () => (
  <div className="space-y-4">
   <div>
    <h3 className="text-lg font-semibold">Responsive Chart</h3>
    <p className="text-sm text-gray-600">
     This chart adapts to different screen sizes
    </p>
   </div>
   <ChartContainer config={chartConfig} className="h-80 w-full">
    <ResponsiveContainer width="100%" height="100%">
     <AreaChart data={salesData}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="month" />
      <YAxis />
      <ChartTooltip content={<ChartTooltipContent />} />
      <ChartLegend content={<ChartLegendContent />} />
      <Area
       type="monotone"
       dataKey="sales"
       stroke="var(--color-sales)"
       fill="var(--color-sales)"
       fillOpacity={0.3}
      />
      <Area
       type="monotone"
       dataKey="revenue"
       stroke="var(--color-revenue)"
       fill="var(--color-revenue)"
       fillOpacity={0.3}
      />
     </AreaChart>
    </ResponsiveContainer>
   </ChartContainer>
  </div>
 ),
};

/**
 * Simple chart without legends
 */
export const SimpleChart: Story = {
 render: () => (
  <ChartContainer config={chartConfig} className="h-64 w-80">
   <BarChart data={salesData}>
    <XAxis dataKey="month" />
    <YAxis />
    <ChartTooltip content={<ChartTooltipContent />} />
    <Bar dataKey="sales" fill="var(--color-sales)" radius={[4, 4, 0, 0]} />
   </BarChart>
  </ChartContainer>
 ),
};
