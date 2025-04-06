import type { Meta, StoryObj } from "@storybook/react";
import DashboardStats from "./index";
import { Briefcase, DollarSign, Star, Users } from "lucide-react";

/**
 * DashboardStats is a component that displays a grid of statistics on the dashboard.
 * Each stat can include a title, value, icon, and change indicator.
 */
const meta = {
 title: "Dashboardv2/Common/DashboardStats",
 component: DashboardStats,
 parameters: {
  layout: "padded",
 },
 tags: ["autodocs"],
} satisfies Meta<typeof DashboardStats>;

export default meta;
type Story = StoryObj<typeof meta>;

const defaultStats = [
 {
  title: "Total Revenue",
  value: "$12,345",
  icon: <DollarSign className="h-5 w-5 text-primary" />,
  change: {
   value: "12%",
   isPositive: true,
   label: "from last month",
  },
 },
 {
  title: "Active Projects",
  value: "5",
  icon: <Briefcase className="h-5 w-5 text-primary" />,
  change: {
   value: "2",
   isPositive: false,
   label: "from last month",
  },
 },
 {
  title: "Total Users",
  value: "1,234",
  icon: <Users className="h-5 w-5 text-primary" />,
  change: {
   value: "5%",
   isPositive: true,
   label: "from last month",
  },
 },
 {
  title: "Average Rating",
  value: "4.8/5",
  icon: <Star className="h-5 w-5 text-primary" />,
  change: {
   value: "0.3",
   isPositive: true,
   label: "from last month",
  },
 },
];

/**
 * Default DashboardStats with 4 columns
 */
export const Default: Story = {
 args: {
  stats: defaultStats,
  columns: 4,
 },
};

/**
 * DashboardStats with 2 columns
 */
export const TwoColumns: Story = {
 args: {
  stats: defaultStats,
  columns: 2,
 },
};

/**
 * DashboardStats with 3 columns
 */
export const ThreeColumns: Story = {
 args: {
  stats: [
   ...defaultStats,
   {
    title: "Completed Jobs",
    value: "42",
    icon: <Briefcase className="h-5 w-5 text-primary" />,
    change: {
     value: "8",
     isPositive: true,
     label: "from last month",
    },
   },
   {
    title: "Conversion Rate",
    value: "3.2%",
    icon: <DollarSign className="h-5 w-5 text-primary" />,
    change: {
     value: "0.5%",
     isPositive: true,
     label: "from last month",
    },
   },
  ],
  columns: 3,
 },
};

/**
 * DashboardStats in loading state
 */
export const Loading: Story = {
 args: {
  stats: defaultStats,
  isLoading: true,
 },
};

/**
 * DashboardStats with single column
 */
export const SingleColumn: Story = {
 args: {
  stats: defaultStats.slice(0, 2),
  columns: 1,
 },
};
