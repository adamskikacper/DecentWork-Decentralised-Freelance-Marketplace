import type { Meta, StoryObj } from "@storybook/react";
import Freelancers from "./index";
import { BrowserRouter } from "react-router-dom";
const meta = {
 title: "Dashboardv2/Client/Freelancers",
 component: Freelancers,
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
  onFreelancerDetails: { action: "freelancerDetails" },
 },
 tags: ["autodocs"],
} satisfies Meta<typeof Freelancers>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {
 args: {
  isLoading: false,
 },
};
export const Loading: Story = {
 args: {
  isLoading: true,
 },
};
