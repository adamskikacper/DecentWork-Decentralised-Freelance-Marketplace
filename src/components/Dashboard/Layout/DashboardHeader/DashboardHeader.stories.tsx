import type { Meta, StoryObj } from "@storybook/react";
import DashboardHeader from "./index";
import { BrowserRouter } from "react-router-dom";
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
export const Default: Story = {
 args: {
  userName: "John Doe",
  userAvatar: "https://ui-avatars.com/api/?name=John+Doe&background=random",
 },
};
export const MobileMenuOpen: Story = {
 args: {
  userName: "John Doe",
  userAvatar: "https://ui-avatars.com/api/?name=John+Doe&background=random",
  showMobileMenu: true,
  mobileMenuOpen: true,
 },
};
export const WithoutMobileMenu: Story = {
 args: {
  userName: "John Doe",
  userAvatar: "https://ui-avatars.com/api/?name=John+Doe&background=random",
  showMobileMenu: false,
 },
};
