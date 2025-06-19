import type { Meta, StoryObj } from "@storybook/react";
import JobPostForm from "./index";

/**
 * JobPostForm is a component that allows clients to create new job listings.
 */
const meta = {
  title: "Job/JobPostForm",
  component: JobPostForm,
  parameters: {
    layout: "padded",
  },
  argTypes: {
    onSubmit: { action: "submitted" },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof JobPostForm>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Default JobPostForm component
 */
export const Default: Story = {
  args: {
    onSubmit: (data) => console.log("Form submitted:", data),
  },
};
