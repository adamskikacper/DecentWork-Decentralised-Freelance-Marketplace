import type { Meta, StoryObj } from "@storybook/react";
import JobDetails from "./index";
import { BrowserRouter } from "react-router-dom";

/**
 * JobDetails is a component that displays detailed information about a job,
 * including its status, milestones, and related information.
 */
const meta = {
  title: "Job/JobDetails",
  component: JobDetails,
  parameters: {
    layout: "padded",
  },
  decorators: [
    (Story) => (
      <BrowserRouter>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <Story />
        </div>
      </BrowserRouter>
    ),
  ],
  argTypes: {
    onClose: { action: "closed" },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof JobDetails>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Default JobDetails component
 */
export const Default: Story = {
  args: {
    onClose: () => console.log("Close button clicked"),
  },
};
