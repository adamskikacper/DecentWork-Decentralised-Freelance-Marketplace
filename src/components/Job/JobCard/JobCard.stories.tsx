import type { Meta, StoryObj } from "@storybook/react";
import JobCard from "./index";

/**
 * JobCard is a component that displays job information in a card format.
 * It can display either a simplified view with individual props or a detailed view with a job object.
 */
const meta = {
  title: "Job/JobCard",
  component: JobCard,
  parameters: {
    layout: "padded",
  },
  argTypes: {
    onMessage: { action: "message" },
    onDetails: { action: "details" },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof JobCard>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Simple job card with individual props
 */
export const Simple: Story = {
  args: {
    id: 1,
    title: "Web3 Dashboard UI Design",
    description: "Design a modern and user-friendly dashboard for our Web3 application. The design should include wallet connection, transaction history, and asset management interfaces.",
    postedDate: "2 days ago",
    proposals: 8,
    tags: ["UI/UX", "Figma", "Dashboard"],
    budget: "1.5-2.0 ETH",
    onDetails: (jobId) => console.log("View details for job:", jobId),
  },
};

/**
 * Detailed job card with job object
 */
export const Detailed: Story = {
  args: {
    job: {
      id: "2",
      title: "Smart Contract Development",
      description: "Develop a smart contract for our NFT marketplace",
      status: "In Progress",
      cost: "3.5 ETH",
      dueDate: "May 15, 2023",
      progress: 65,
      freelancer: {
        id: "user123",
        name: "John Developer",
      },
    },
    onMessage: (userId) => console.log("Message user:", userId),
    onDetails: (jobId) => console.log("View details for job:", jobId),
    showCreationDate: true,
  },
};
