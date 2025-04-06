import type { Meta, StoryObj } from "@storybook/react";
import SectionHeader from "./index";

/**
 * SectionHeader is a component used to display a title and optional description for a section of content.
 * It's commonly used at the top of pages or content sections.
 */
const meta = {
  title: "Layout/SectionHeader",
  component: SectionHeader,
  parameters: {
    layout: "padded",
  },
  argTypes: {
    title: {
      control: "text",
      description: "The title text for the section",
    },
    description: {
      control: "text",
      description: "Optional description text for the section",
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof SectionHeader>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Default section header with title and description
 */
export const Default: Story = {
  args: {
    title: "Dashboard Overview",
    description: "View your account statistics and recent activity.",
  },
};

/**
 * Section header with title only (no description)
 */
export const TitleOnly: Story = {
  args: {
    title: "Recent Projects",
  },
};

/**
 * Section header with a long title and description
 */
export const LongContent: Story = {
  args: {
    title: "Comprehensive Analytics and Performance Metrics Dashboard",
    description:
      "This dashboard provides detailed insights into your account performance, user engagement metrics, conversion rates, and other key performance indicators to help you make data-driven decisions for your business growth and optimization strategies.",
  },
};

/**
 * Section header in a page context
 */
export const InPageContext: Story = {
  args: {
    title: "Account Settings",
    description: "Manage your profile, preferences, and security settings.",
  },
  decorators: [
    (Story) => (
      <div className="p-6 border rounded-lg bg-card">
        <Story />
        <div className="mt-8 grid gap-6">
          <div className="p-4 border rounded-md">
            <h3 className="text-lg font-medium mb-2">Personal Information</h3>
            <p className="text-sm text-muted-foreground">
              Update your name, email, and profile details.
            </p>
          </div>
          <div className="p-4 border rounded-md">
            <h3 className="text-lg font-medium mb-2">Security</h3>
            <p className="text-sm text-muted-foreground">
              Manage your password and two-factor authentication.
            </p>
          </div>
          <div className="p-4 border rounded-md">
            <h3 className="text-lg font-medium mb-2">Notifications</h3>
            <p className="text-sm text-muted-foreground">
              Configure your notification preferences.
            </p>
          </div>
        </div>
      </div>
    ),
  ],
};

/**
 * Section header with custom styling
 */
export const CustomStyling: Story = {
  args: {
    title: "Featured Projects",
    description: "Explore our most popular and successful projects.",
  },
  decorators: [
    (Story) => (
      <div className="bg-primary/5 p-6 rounded-lg">
        <div className="border-l-4 border-primary pl-4">
          <Story />
        </div>
      </div>
    ),
  ],
};
