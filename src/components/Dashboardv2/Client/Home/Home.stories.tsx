import type { Meta, StoryObj } from "@storybook/react";
import Home from "./index";
import { BrowserRouter } from "react-router-dom";

/**
 * Home is the client dashboard home component.
 * It displays an overview of the client's activity, jobs, and top freelancers.
 */
const meta = {
 title: "Dashboardv2/Client/Home",
 component: Home,
 parameters: {
  layout: "padded",
 },
 decorators: [
  (Story) => (
   <BrowserRouter>
    <div style={{ maxWidth: "1200px" }}>
     <Story />
    </div>
   </BrowserRouter>
  ),
 ],
 argTypes: {
  onMessage: { action: "message" },
  onJobDetails: { action: "jobDetails" },
  onFreelancerDetails: { action: "freelancerDetails" },
 },
 tags: ["autodocs"],
} satisfies Meta<typeof Home>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Default client dashboard home view
 */
export const Default: Story = {
 args: {
  user: {
   name: "John Doe",
   email: "john@example.com",
  },
  isLoading: false,
 },
};

/**
 * Loading state
 */
export const Loading: Story = {
 args: {
  user: {
   name: "John Doe",
   email: "john@example.com",
  },
  isLoading: true,
 },
};
