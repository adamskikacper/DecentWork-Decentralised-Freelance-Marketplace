import type { Meta, StoryObj } from "@storybook/react";
import DashboardHeader from "./index";
import { BrowserRouter } from "react-router-dom";

/**
 * DashboardHeader is the header component for the dashboard.
 * It provides navigation, notifications, and user menu functionality.
 */
const meta = {
 title: "Dashboardv2/Layout/DashboardHeader",
 component: DashboardHeader,
 parameters: {
  layout: "padded",
 },
 decorators: [
  (Story) => (
   <BrowserRouter>
    <Story />
   </BrowserRouter>
  ),
 ],
 argTypes: {
  onMobileMenuToggle: { action: "mobileMenuToggled" },
 },
 tags: ["autodocs"],
} satisfies Meta<typeof DashboardHeader>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Default DashboardHeader
 */
export const Default: Story = {
 args: {
  userName: "John Doe",
  userAvatar: "https://github.com/shadcn.png",
 },
};

/**
 * DashboardHeader with mobile menu open
 */
export const MobileMenuOpen: Story = {
 args: {
  userName: "John Doe",
  userAvatar: "https://github.com/shadcn.png",
  showMobileMenu: true,
  mobileMenuOpen: true,
 },
};

/**
 * DashboardHeader without mobile menu
 */
export const WithoutMobileMenu: Story = {
 args: {
  userName: "John Doe",
  userAvatar: "https://github.com/shadcn.png",
  showMobileMenu: false,
 },
};
