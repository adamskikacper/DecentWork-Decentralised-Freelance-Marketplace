import type { Meta, StoryObj } from "@storybook/react";
import { Check, Clock, AlertTriangle, Info as InfoIcon, X } from "lucide-react";
import StatusBadge from "./index";
import { STATUS_BADGE_VARIANTS } from "@/shared/constants";

/**
 * StatusBadge is a component used to display status information with different visual styles.
 * It supports various predefined variants like success, warning, danger, etc.
 */
const meta = {
  title: "Common/StatusBadge",
  component: StatusBadge,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    status: { 
      control: "text", 
      description: "The status text to display" 
    },
    variant: { 
      control: { type: "select" }, 
      options: Object.values(STATUS_BADGE_VARIANTS),
      description: "The visual style variant of the badge" 
    },
    icon: { 
      control: { type: "boolean" },
      description: "Whether to show an icon (for story controls only)" 
    },
    className: { 
      control: "text", 
      description: "Additional CSS classes to apply" 
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof StatusBadge>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Default status badge
 */
export const Default: Story = {
  args: {
    status: "Active",
    variant: STATUS_BADGE_VARIANTS.DEFAULT,
  },
};

/**
 * Success status badge
 */
export const Success: Story = {
  args: {
    status: "Completed",
    variant: STATUS_BADGE_VARIANTS.SUCCESS,
    icon: <Check className="h-3 w-3" />,
  },
};

/**
 * Warning status badge
 */
export const Warning: Story = {
  args: {
    status: "Pending Review",
    variant: STATUS_BADGE_VARIANTS.WARNING,
    icon: <AlertTriangle className="h-3 w-3" />,
  },
};

/**
 * Danger status badge
 */
export const Danger: Story = {
  args: {
    status: "Rejected",
    variant: STATUS_BADGE_VARIANTS.DANGER,
    icon: <X className="h-3 w-3" />,
  },
};

/**
 * Info status badge
 */
export const InfoStatus: Story = {
  args: {
    status: "In Progress",
    variant: STATUS_BADGE_VARIANTS.INFO,
    icon: <InfoIcon className="h-3 w-3" />,
  },
};

/**
 * Pending status badge
 */
export const Pending: Story = {
  args: {
    status: "Awaiting Payment",
    variant: STATUS_BADGE_VARIANTS.PENDING,
    icon: <Clock className="h-3 w-3" />,
  },
};

/**
 * Status badge with underscored text that gets formatted
 */
export const FormattedText: Story = {
  args: {
    status: "in_review",
    variant: STATUS_BADGE_VARIANTS.INFO,
  },
};

/**
 * Multiple status badges displayed together
 */
export const StatusBadgeGroup: Story = {
  render: () => (
    <div className="flex flex-wrap gap-2">
      <StatusBadge 
        status="Active" 
        variant={STATUS_BADGE_VARIANTS.DEFAULT} 
      />
      <StatusBadge 
        status="Completed" 
        variant={STATUS_BADGE_VARIANTS.SUCCESS} 
        icon={<Check className="h-3 w-3" />} 
      />
      <StatusBadge 
        status="Pending" 
        variant={STATUS_BADGE_VARIANTS.WARNING} 
        icon={<AlertTriangle className="h-3 w-3" />} 
      />
      <StatusBadge 
        status="Rejected" 
        variant={STATUS_BADGE_VARIANTS.DANGER} 
        icon={<X className="h-3 w-3" />} 
      />
    </div>
  ),
};
