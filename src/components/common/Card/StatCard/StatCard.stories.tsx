import type { Meta, StoryObj } from "@storybook/react";
import { DollarSign, Users, Briefcase, Clock, Star } from "lucide-react";
import StatCard from "./index";

/**
 * StatCard is a component used to display statistics with an icon and optional change indicator.
 * It's commonly used in dashboards to show key metrics.
 */
const meta = {
  title: "Common/Card/StatCard",
  component: StatCard,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    title: { 
      control: "text", 
      description: "Title of the statistic" 
    },
    value: { 
      control: "text", 
      description: "Value of the statistic" 
    },
    icon: { 
      control: { disable: true },
      description: "Icon element to display" 
    },
    change: { 
      control: "object", 
      description: "Change data with value, direction, and label" 
    },
    delay: { 
      control: "text", 
      description: "Animation delay (CSS time value)" 
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof StatCard>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Default stat card with positive change
 */
export const Default: Story = {
  args: {
    title: "Total Revenue",
    value: "$12,345",
    icon: <DollarSign className="h-5 w-5 text-primary" />,
    change: {
      value: "12%",
      isPositive: true,
      label: "from last month",
    },
    delay: "0s",
  },
};

/**
 * Stat card with negative change
 */
export const NegativeChange: Story = {
  args: {
    title: "Active Projects",
    value: "5",
    icon: <Briefcase className="h-5 w-5 text-primary" />,
    change: {
      value: "2",
      isPositive: false,
      label: "from last month",
    },
    delay: "0s",
  },
};

/**
 * Stat card without change indicator
 */
export const NoChange: Story = {
  args: {
    title: "Total Users",
    value: "1,234",
    icon: <Users className="h-5 w-5 text-primary" />,
    delay: "0s",
  },
};

/**
 * Stat card with different icon and animation delay
 */
export const WithDelay: Story = {
  args: {
    title: "Average Rating",
    value: "4.8/5",
    icon: <Star className="h-5 w-5 text-primary" />,
    change: {
      value: "0.3",
      isPositive: true,
      label: "from last month",
    },
    delay: "0.5s",
  },
};

/**
 * Stat card with time-based metric
 */
export const TimeMetric: Story = {
  args: {
    title: "Avg. Response Time",
    value: "2.5 hours",
    icon: <Clock className="h-5 w-5 text-primary" />,
    change: {
      value: "30min",
      isPositive: true,
      label: "faster than before",
    },
    delay: "0s",
  },
};

/**
 * Multiple stat cards with sequential animation delays
 */
export const StatCardSequence: Story = {
  render: () => (
    <div className="flex flex-col space-y-4 w-[350px]">
      <StatCard
        title="Total Revenue"
        value="$12,345"
        icon={<DollarSign className="h-5 w-5 text-primary" />}
        change={{
          value: "12%",
          isPositive: true,
          label: "from last month",
        }}
        delay="0s"
      />
      <StatCard
        title="Active Projects"
        value="7"
        icon={<Briefcase className="h-5 w-5 text-primary" />}
        change={{
          value: "2",
          isPositive: true,
          label: "from last month",
        }}
        delay="0.2s"
      />
      <StatCard
        title="Total Users"
        value="1,234"
        icon={<Users className="h-5 w-5 text-primary" />}
        change={{
          value: "5%",
          isPositive: true,
          label: "from last month",
        }}
        delay="0.4s"
      />
    </div>
  ),
};
