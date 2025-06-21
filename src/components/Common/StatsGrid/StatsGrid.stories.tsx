import type { Meta, StoryObj } from "@storybook/react";
import { Activity, DollarSign, Users, Briefcase, Star } from "lucide-react";
import { StatsGrid } from "./index";

/**
 * StatsGrid is a component that displays a grid of statistics cards.
 * It's commonly used in dashboards to show key metrics.
 */
const meta = {
 title: "Common/StatsGrid",
 component: StatsGrid,
 parameters: {
  layout: "padded",
 },
 argTypes: {
  stats: {
   control: "object",
   description: "Array of stat items to display",
  },
  columns: {
   control: { type: "number", min: 1, max: 4 },
   description: "Number of columns in the grid on medium and larger screens",
  },
  className: {
   control: "text",
   description: "Additional CSS classes to apply",
  },
 },
 tags: ["autodocs"],
} satisfies Meta<typeof StatsGrid>;

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
  value: "7",
  icon: <Briefcase className="h-5 w-5 text-primary" />,
  change: {
   value: "2",
   isPositive: true,
   label: "from last month",
  },
 },
 {
  title: "Client Rating",
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
 * Default stats grid with 3 columns
 */
export const Default: Story = {
 args: {
  stats: defaultStats,
  columns: 3,
 },
};

/**
 * Stats grid with 2 columns
 */
export const TwoColumns: Story = {
 args: {
  stats: defaultStats,
  columns: 2,
 },
};

/**
 * Stats grid with 4 columns and more stats
 */
export const FourColumns: Story = {
 args: {
  stats: [
   ...defaultStats,
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
  ],
  columns: 4,
 },
};

/**
 * Stats grid with negative changes
 */
export const WithNegativeChanges: Story = {
 args: {
  stats: [
   {
    title: "Total Revenue",
    value: "$10,245",
    icon: <DollarSign className="h-5 w-5 text-primary" />,
    change: {
     value: "8%",
     isPositive: false,
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
    title: "Activity Rate",
    value: "67%",
    icon: <Activity className="h-5 w-5 text-primary" />,
    change: {
     value: "5%",
     isPositive: false,
     label: "from last month",
    },
   },
  ],
  columns: 3,
 },
};

/**
 * Stats grid with custom styling
 */
export const CustomStyling: Story = {
 args: {
  stats: defaultStats,
  columns: 3,
  className: "bg-secondary/10 p-6 rounded-xl",
 },
};
