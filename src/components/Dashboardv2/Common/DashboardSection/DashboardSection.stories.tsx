import type { Meta, StoryObj } from "@storybook/react";
import DashboardSection from "./index";
import { Button } from "@/components/UI/button";
import { PlusCircle } from "lucide-react";

/**
 * DashboardSection is a component that displays a section with title and content on the dashboard.
 * It provides a consistent way to organize dashboard content into logical sections.
 */
const meta = {
 title: "Dashboardv2/Common/DashboardSection",
 component: DashboardSection,
 parameters: {
  layout: "padded",
 },
 tags: ["autodocs"],
} satisfies Meta<typeof DashboardSection>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Default DashboardSection with title and content
 */
export const Default: Story = {
 args: {
  title: "Recent Activity",
  children: (
   <div className="space-y-4">
    <p>This is the content of the dashboard section.</p>
    <p>It can contain any React components or HTML elements.</p>
   </div>
  ),
 },
};

/**
 * DashboardSection with description
 */
export const WithDescription: Story = {
 args: {
  title: "Team Members",
  description: "View and manage your team members",
  children: (
   <div className="space-y-4">
    <p>Team member list would go here.</p>
   </div>
  ),
 },
};

/**
 * DashboardSection with action button
 */
export const WithAction: Story = {
 args: {
  title: "Projects",
  description: "View and manage your projects",
  action: (
   <Button size="sm">
    <PlusCircle className="mr-2 h-4 w-4" />
    Add Project
   </Button>
  ),
  children: (
   <div className="space-y-4">
    <p>Project list would go here.</p>
   </div>
  ),
 },
};

/**
 * DashboardSection in loading state
 */
export const Loading: Story = {
 args: {
  title: "Loading Section",
  description: "This section is in a loading state",
  isLoading: true,
  children: (
   <div className="space-y-4">
    <div className="h-8 bg-secondary/20 rounded-md w-3/4"></div>
    <div className="h-8 bg-secondary/20 rounded-md w-1/2"></div>
    <div className="h-8 bg-secondary/20 rounded-md w-2/3"></div>
   </div>
  ),
 },
};

/**
 * DashboardSection without glass effect
 */
export const WithoutGlassEffect: Story = {
 args: {
  title: "Regular Section",
  description: "This section doesn't use the glass effect styling",
  glassEffect: false,
  children: (
   <div className="space-y-4">
    <p>This section uses regular background styling.</p>
   </div>
  ),
 },
};

/**
 * DashboardSection without content padding
 */
export const WithoutContentPadding: Story = {
 args: {
  title: "No Padding Section",
  description: "This section has no padding in the content area",
  contentPadding: false,
  children: (
   <div className="p-6 bg-secondary/20">
    <p>This content has its own padding.</p>
   </div>
  ),
 },
};
