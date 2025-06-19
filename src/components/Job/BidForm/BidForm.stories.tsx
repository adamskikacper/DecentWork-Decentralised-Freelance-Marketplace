import type { Meta, StoryObj } from "@storybook/react";
import BidForm from "./index";

/**
 * BidForm is a component that allows freelancers to submit proposals for jobs.
 */
const meta = {
  title: "Job/BidForm",
  component: BidForm,
  parameters: {
    layout: "padded",
  },
  argTypes: {
    onSubmit: { action: "submitted" },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof BidForm>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Default BidForm component
 */
export const Default: Story = {
  args: {
    onSubmit: (data) => console.log("Form submitted:", data),
  },
};
