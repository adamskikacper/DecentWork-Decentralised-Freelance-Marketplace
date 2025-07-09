import type { Meta, StoryObj } from "@storybook/react";
import { BidForm } from "./index";

const meta = {
 title: "Dashboard/Freelancer/BidForm",
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

export const Default: Story = {
 args: {
  onSubmit: (data) => console.log("Form submitted:", data),
 },
};
