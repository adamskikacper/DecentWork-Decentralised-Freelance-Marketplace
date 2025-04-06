import type { Meta, StoryObj } from "@storybook/react";
import DashboardSidebar from "./index";
import { BrowserRouter } from "react-router-dom";

/**
 * DashboardSidebar is the sidebar component for the dashboard.
 * It displays navigation links and user information.
 */
const meta = {
 title: "Dashboardv2/Layout/DashboardSidebar",
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

/**
 * Default DashboardSidebar for client users
 */
export const ClientSidebar: Story = {
 args: {
  userEmail: "client@example.com",
  userType: "client",
  activeSection: "dashboard",
 },
};

/**
 * DashboardSidebar for freelancer users
 */
export const FreelancerSidebar: Story = {
 args: {
  userEmail: "freelancer@example.com",
  userType: "freelancer",
  activeSection: "dashboard",
 },
};

/**
 * DashboardSidebar with active section
 */
export const WithActiveSection: Story = {
 args: {
  userEmail: "user@example.com",
  userType: "client",
  activeSection: "jobs",
 },
};
