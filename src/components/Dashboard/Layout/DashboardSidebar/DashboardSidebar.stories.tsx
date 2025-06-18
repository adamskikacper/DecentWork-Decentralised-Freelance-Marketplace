import type { Meta, StoryObj } from "@storybook/react";
import { DashboardSidebar } from "./index";
import { BrowserRouter } from "react-router-dom";
const meta = {
 title: "Dashboard/Layout/DashboardSidebar",
 component: DashboardSidebar,
 parameters: {
  layout: "padded",
 },
 decorators: [
  (Story) => (
   <BrowserRouter>
    <div style={{ maxWidth: "300px" }}>
     <Story />
    </div>
   </BrowserRouter>
  ),
 ],
 tags: ["autodocs"],
} satisfies Meta<typeof DashboardSidebar>;
export default meta;
type Story = StoryObj<typeof meta>;
export const ClientSidebar: Story = {
 args: {
  userEmail: "client@example.com",
  userType: "client",
 },
};
export const FreelancerSidebar: Story = {
 args: {
  userEmail: "freelancer@example.com",
  userType: "freelancer",
 },
};
export const WithCustomEmail: Story = {
 args: {
  userEmail: "custom@example.com",
  userType: "client",
 },
};
