import type { Meta, StoryObj } from "@storybook/react";
import { Home } from "./index";
import { BrowserRouter } from "react-router-dom";
const meta = {
 title: "Dashboardv2/Freelancer/Home",
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
  onClientDetails: { action: "clientDetails" },
 },
 tags: ["autodocs"],
} satisfies Meta<typeof Home>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {
 args: {
  user: {
   name: "John Freelancer",
   email: "john@example.com",
  },
  isLoading: false,
 },
};
export const Loading: Story = {
 args: {
  user: {
   name: "John Freelancer",
   email: "john@example.com",
  },
  isLoading: true,
 },
};
export const WithoutUserName: Story = {
 args: {
  user: {
   email: "anonymous@example.com",
  },
  isLoading: false,
 },
};
