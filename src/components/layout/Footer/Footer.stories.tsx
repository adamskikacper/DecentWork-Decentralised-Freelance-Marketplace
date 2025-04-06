import type { Meta, StoryObj } from "@storybook/react";
import { BrowserRouter } from "react-router-dom";
import Footer from "./index";

/**
 * Footer is the main footer component for the application.
 * It includes the logo, navigation links, and copyright information.
 */
const meta = {
  title: "Layout/Footer",
  component: Footer,
  parameters: {
    layout: "fullscreen",
  },
  decorators: [
    (Story) => (
      <BrowserRouter>
        <Story />
      </BrowserRouter>
    ),
  ],
  tags: ["autodocs"],
} satisfies Meta<typeof Footer>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Default footer with all sections
 */
export const Default: Story = {
  args: {},
  parameters: {
    docs: {
      description: {
        story: "The default footer with all sections, including brand information, platform links, resource links, and legal links.",
      },
    },
  },
};

/**
 * Footer with content above
 */
export const WithContentAbove: Story = {
  args: {},
  parameters: {
    docs: {
      description: {
        story: "The footer as it appears at the bottom of a page with content above it.",
      },
    },
  },
  decorators: [
    (Story) => (
      <div className="min-h-screen flex flex-col">
        <div className="flex-grow p-6 bg-background">
          <h2 className="text-2xl font-bold mb-4">Page Content</h2>
          <p className="mb-4">
            This is an example of page content that appears above the footer.
            The footer should always be positioned at the bottom of the page.
          </p>
          <div className="h-64 bg-secondary/10 rounded-lg flex items-center justify-center">
            Content Area
          </div>
        </div>
        <Story />
      </div>
    ),
  ],
};

/**
 * Footer on mobile devices
 */
export const Mobile: Story = {
  args: {},
  parameters: {
    viewport: {
      defaultViewport: "mobile1",
    },
    docs: {
      description: {
        story: "The footer as it appears on mobile devices, with a stacked layout.",
      },
    },
  },
};

/**
 * Footer with dark theme
 */
export const DarkTheme: Story = {
  args: {},
  parameters: {
    backgrounds: { default: "dark" },
    docs: {
      description: {
        story: "The footer with a dark theme applied.",
      },
    },
  },
  decorators: [
    (Story) => (
      <div className="dark">
        <Story />
      </div>
    ),
  ],
};
