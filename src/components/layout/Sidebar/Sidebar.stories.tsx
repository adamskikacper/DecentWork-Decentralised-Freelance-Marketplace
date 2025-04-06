import type { Meta, StoryObj } from "@storybook/react";
import { Home, User, Settings, Mail, FileText, Users, DollarSign } from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarProvider,
  SidebarTrigger,
} from "./index";

/**
 * Sidebar is a navigation component that provides access to different sections of the application.
 * It can be expanded, collapsed, or displayed as a mobile drawer.
 */
const meta = {
  title: "Layout/Sidebar",
  component: Sidebar,
  parameters: {
    layout: "fullscreen",
  },
  decorators: [
    (Story) => (
      <div className="h-[600px] flex">
        <SidebarProvider>
          <Story />
        </SidebarProvider>
      </div>
    ),
  ],
  tags: ["autodocs"],
} satisfies Meta<typeof Sidebar>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Default sidebar in expanded state
 */
export const Default: Story = {
  args: {
    side: "left",
    variant: "sidebar",
    collapsible: "offcanvas",
  },
  render: (args) => (
    <>
      <Sidebar {...args}>
        <SidebarHeader>
          <div className="flex items-center gap-2 px-4 py-3">
            <div className="h-8 w-8 rounded-full bg-primary/20 flex items-center justify-center text-primary">
              D
            </div>
            <div className="font-semibold">DecentWork</div>
          </div>
        </SidebarHeader>
        <SidebarContent>
          <SidebarMenu>
            <SidebarMenuItem icon={<Home size={18} />} href="#">
              Dashboard
            </SidebarMenuItem>
            <SidebarMenuItem icon={<FileText size={18} />} href="#">
              Jobs
            </SidebarMenuItem>
            <SidebarMenuItem icon={<Users size={18} />} href="#">
              Freelancers
            </SidebarMenuItem>
            <SidebarMenuItem icon={<Mail size={18} />} href="#">
              Messages
            </SidebarMenuItem>
            <SidebarMenuItem icon={<DollarSign size={18} />} href="#">
              Payments
            </SidebarMenuItem>
            <SidebarMenuItem icon={<User size={18} />} href="#">
              Profile
            </SidebarMenuItem>
            <SidebarMenuItem icon={<Settings size={18} />} href="#">
              Settings
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarContent>
        <SidebarFooter>
          <div className="p-4 text-xs text-muted-foreground">
            © 2023 DecentWork
          </div>
        </SidebarFooter>
      </Sidebar>
      <div className="flex-1 p-6 bg-background">
        <h2 className="text-2xl font-bold mb-4">Main Content</h2>
        <p>This is the main content area that appears next to the sidebar.</p>
      </div>
    </>
  ),
};

/**
 * Sidebar in collapsed state (icon only)
 */
export const Collapsed: Story = {
  args: {
    side: "left",
    variant: "sidebar",
    collapsible: "icon",
  },
  render: (args) => (
    <>
      <Sidebar {...args}>
        <SidebarHeader>
          <div className="flex items-center justify-center px-4 py-3">
            <div className="h-8 w-8 rounded-full bg-primary/20 flex items-center justify-center text-primary">
              D
            </div>
          </div>
        </SidebarHeader>
        <SidebarContent>
          <SidebarMenu>
            <SidebarMenuItem icon={<Home size={18} />} href="#">
              Dashboard
            </SidebarMenuItem>
            <SidebarMenuItem icon={<FileText size={18} />} href="#">
              Jobs
            </SidebarMenuItem>
            <SidebarMenuItem icon={<Users size={18} />} href="#">
              Freelancers
            </SidebarMenuItem>
            <SidebarMenuItem icon={<Mail size={18} />} href="#">
              Messages
            </SidebarMenuItem>
            <SidebarMenuItem icon={<DollarSign size={18} />} href="#">
              Payments
            </SidebarMenuItem>
            <SidebarMenuItem icon={<User size={18} />} href="#">
              Profile
            </SidebarMenuItem>
            <SidebarMenuItem icon={<Settings size={18} />} href="#">
              Settings
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarContent>
      </Sidebar>
      <div className="flex-1 p-6 bg-background">
        <h2 className="text-2xl font-bold mb-4">Main Content</h2>
        <p>This is the main content area that appears next to the sidebar.</p>
      </div>
    </>
  ),
};

/**
 * Sidebar with floating variant
 */
export const Floating: Story = {
  args: {
    side: "left",
    variant: "floating",
    collapsible: "offcanvas",
  },
  render: (args) => (
    <>
      <Sidebar {...args}>
        <SidebarHeader>
          <div className="flex items-center gap-2 px-4 py-3">
            <div className="h-8 w-8 rounded-full bg-primary/20 flex items-center justify-center text-primary">
              D
            </div>
            <div className="font-semibold">DecentWork</div>
          </div>
        </SidebarHeader>
        <SidebarContent>
          <SidebarMenu>
            <SidebarMenuItem icon={<Home size={18} />} href="#">
              Dashboard
            </SidebarMenuItem>
            <SidebarMenuItem icon={<FileText size={18} />} href="#">
              Jobs
            </SidebarMenuItem>
            <SidebarMenuItem icon={<Users size={18} />} href="#">
              Freelancers
            </SidebarMenuItem>
            <SidebarMenuItem icon={<Mail size={18} />} href="#">
              Messages
            </SidebarMenuItem>
            <SidebarMenuItem icon={<DollarSign size={18} />} href="#">
              Payments
            </SidebarMenuItem>
            <SidebarMenuItem icon={<User size={18} />} href="#">
              Profile
            </SidebarMenuItem>
            <SidebarMenuItem icon={<Settings size={18} />} href="#">
              Settings
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarContent>
      </Sidebar>
      <div className="flex-1 p-6 bg-background">
        <div className="mb-4 flex items-center">
          <SidebarTrigger />
          <h2 className="text-2xl font-bold ml-2">Main Content</h2>
        </div>
        <p>This is the main content area that appears next to the sidebar.</p>
      </div>
    </>
  ),
};

/**
 * Sidebar with right side placement
 */
export const RightSide: Story = {
  args: {
    side: "right",
    variant: "sidebar",
    collapsible: "offcanvas",
  },
  render: (args) => (
    <>
      <div className="flex-1 p-6 bg-background">
        <h2 className="text-2xl font-bold mb-4">Main Content</h2>
        <p>This is the main content area that appears next to the sidebar.</p>
      </div>
      <Sidebar {...args}>
        <SidebarHeader>
          <div className="flex items-center gap-2 px-4 py-3">
            <div className="h-8 w-8 rounded-full bg-primary/20 flex items-center justify-center text-primary">
              D
            </div>
            <div className="font-semibold">DecentWork</div>
          </div>
        </SidebarHeader>
        <SidebarContent>
          <SidebarMenu>
            <SidebarMenuItem icon={<Home size={18} />} href="#">
              Dashboard
            </SidebarMenuItem>
            <SidebarMenuItem icon={<FileText size={18} />} href="#">
              Jobs
            </SidebarMenuItem>
            <SidebarMenuItem icon={<Settings size={18} />} href="#">
              Settings
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarContent>
      </Sidebar>
    </>
  ),
};
