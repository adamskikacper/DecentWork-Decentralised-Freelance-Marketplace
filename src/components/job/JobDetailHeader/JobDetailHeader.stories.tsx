import type { Meta, StoryObj } from "@storybook/react";
import JobDetailHeader from "./index";

/**
 * JobDetailHeader is a component that displays the header section of a job details page,
 * including the job title, metadata, tags, and client information.
 */
const meta = {
  title: "Job/JobDetailHeader",
  component: JobDetailHeader,
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof JobDetailHeader>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Default JobDetailHeader with all information
 */
export const Default: Story = {
  args: {
    id: 1,
    title: "Web3 Dashboard UI Design",
    postedDate: "2 days ago",
    proposals: 8,
    duration: "10-15 days",
    budget: "1.5-2.0 ETH",
    tags: ["UI/UX", "Figma", "Dashboard", "Web3"],
    client: "FinDEX",
    clientRating: "4.9",
    clientLocation: "United States",
  },
};
