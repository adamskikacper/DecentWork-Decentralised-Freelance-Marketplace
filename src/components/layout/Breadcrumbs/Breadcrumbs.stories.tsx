import type { Meta, StoryObj } from "@storybook/react";
import { BrowserRouter } from "react-router-dom";
import Breadcrumbs from "./index";

/**
 * Breadcrumbs is a navigation component that helps users understand their current location
 * within the application's hierarchy and navigate to parent pages.
 */
const meta = {
  title: "Layout/Breadcrumbs",
  component: Breadcrumbs,
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
    items: {
      control: "object",
      description: "Array of breadcrumb items with label and optional path",
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Breadcrumbs>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Default breadcrumbs with two levels
 */
export const Default: Story = {
  args: {
    items: [
      { label: "Home", path: "/" },
      { label: "Dashboard" },
    ],
  },
};

/**
 * Breadcrumbs with multiple levels
 */
export const MultiLevel: Story = {
  args: {
    items: [
      { label: "Home", path: "/" },
      { label: "Dashboard", path: "/dashboard" },
      { label: "Projects", path: "/dashboard/projects" },
      { label: "Project Details" },
    ],
  },
};

/**
 * Breadcrumbs with single item (current page only)
 */
export const SingleItem: Story = {
  args: {
    items: [{ label: "Dashboard" }],
  },
};

/**
 * Breadcrumbs with long labels
 */
export const LongLabels: Story = {
  args: {
    items: [
      { label: "Home", path: "/" },
      { label: "User Account Management", path: "/account" },
      { label: "Security and Privacy Settings", path: "/account/security" },
      { label: "Two-Factor Authentication Configuration" },
    ],
  },
};

/**
 * Breadcrumbs in a page context
 */
export const InPageContext: Story = {
  args: {
    items: [
      { label: "Dashboard", path: "/dashboard" },
      { label: "Projects", path: "/dashboard/projects" },
      { label: "Project Details" },
    ],
  },
  decorators: [
    (Story) => (
      <div className="p-6 border rounded-lg bg-card">
        <Story />
        <div className="mt-6">
          <h1 className="text-2xl font-bold mb-4">Project Details</h1>
          <p className="text-muted-foreground">
            View and manage your project details and settings.
          </p>
        </div>
      </div>
    ),
  ],
};
