import type { Meta, StoryObj } from "@storybook/react";
import { DollarSign, Users, Briefcase, Clock, Star } from "lucide-react";
import StatsCard from "./index";

/**
 * StatsCard is a component used to display statistics with an icon and optional change indicator.
 * Similar to StatCard but with additional customization options.
 */
const meta = {
  title: "Common/Card/StatsCard",
  component: StatsCard,
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
      description: "Change data with value and direction" 
    },
    subtext: { 
      control: "text", 
      description: "Additional text to display below the value" 
    },
    className: { 
      control: "text", 
      description: "Additional CSS classes to apply" 
    },
    style: { 
      control: "object", 
      description: "Inline styles to apply to the component" 
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof StatsCard>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Default stats card with positive change
 */
export const Default: Story = {
  args: {
    title: "Total Revenue",
    value: "$12,345",
    icon: <DollarSign className="h-5 w-5 text-primary" />,
    change: {
      value: 12,
      isPositive: true,
    },
    subtext: "from last month",
  },
};

/**
 * Stats card with negative change
 */
export const NegativeChange: Story = {
  args: {
    title: "Active Projects",
    value: "5",
    icon: <Briefcase className="h-5 w-5 text-primary" />,
    change: {
      value: 2,
      isPositive: false,
    },
    subtext: "from last month",
  },
};

/**
 * Stats card with only subtext (no change indicator)
 */
export const SubtextOnly: Story = {
  args: {
    title: "Total Users",
    value: "1,234",
    icon: <Users className="h-5 w-5 text-primary" />,
    subtext: "registered users",
  },
};

/**
 * Stats card without icon
 */
export const NoIcon: Story = {
  args: {
    title: "Average Rating",
    value: "4.8/5",
    change: {
      value: 0.3,
      isPositive: true,
    },
    subtext: "from 245 reviews",
  },
};

/**
 * Stats card with custom styling
 */
export const CustomStyling: Story = {
  args: {
    title: "Response Time",
    value: "2.5 hours",
    icon: <Clock className="h-5 w-5 text-primary" />,
    change: {
      value: 30,
      isPositive: true,
    },
    subtext: "faster than average",
    className: "bg-primary/10 border border-primary/20",
  },
};

/**
 * Multiple stats cards with different styles
 */
export const StatsCardGroup: Story = {
  render: () => (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl">
      <StatsCard
        title="Total Revenue"
        value="$12,345"
        icon={<DollarSign className="h-5 w-5 text-primary" />}
        change={{
          value: 12,
          isPositive: true,
        }}
        subtext="from last month"
      />
      <StatsCard
        title="Active Projects"
        value="7"
        icon={<Briefcase className="h-5 w-5 text-primary" />}
        change={{
          value: 2,
          isPositive: true,
        }}
        subtext="from last month"
        className="bg-secondary/20"
      />
      <StatsCard
        title="Client Rating"
        value="4.8/5"
        icon={<Star className="h-5 w-5 text-primary" />}
        change={{
          value: 0.3,
          isPositive: true,
        }}
        subtext="from last month"
        className="bg-primary/10"
      />
      <StatsCard
        title="Total Users"
        value="1,234"
        icon={<Users className="h-5 w-5 text-primary" />}
        subtext="registered users"
        className="bg-secondary/10"
      />
    </div>
  ),
};
