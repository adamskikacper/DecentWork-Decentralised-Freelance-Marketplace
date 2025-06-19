import type { Meta, StoryObj } from "@storybook/react";
import ClientInfo from "./index";

/**
 * ClientInfo displays information about a client including location, hiring rate, jobs posted, and rating.
 */
const meta = {
  title: "Profile/ClientInfo",
  component: ClientInfo,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    clientLocation: { 
      control: "text", 
      description: "Client's location" 
    },
    clientHiringRate: { 
      control: "text", 
      description: "Client's hiring rate" 
    },
    clientJobs: { 
      control: "text", 
      description: "Number of jobs posted by the client" 
    },
    clientRating: { 
      control: "text", 
      description: "Client's rating" 
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof ClientInfo>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Default example of the ClientInfo component
 */
export const Default: Story = {
  args: {
    clientLocation: "United States",
    clientHiringRate: "85%",
    clientJobs: "24",
    clientRating: "4.8",
  },
};

/**
 * Example with international location
 */
export const International: Story = {
  args: {
    clientLocation: "Germany",
    clientHiringRate: "92%",
    clientJobs: "37",
    clientRating: "4.9",
  },
};

/**
 * Example with low hiring rate and rating
 */
export const LowMetrics: Story = {
  args: {
    clientLocation: "Remote",
    clientHiringRate: "45%",
    clientJobs: "3",
    clientRating: "3.2",
  },
};
