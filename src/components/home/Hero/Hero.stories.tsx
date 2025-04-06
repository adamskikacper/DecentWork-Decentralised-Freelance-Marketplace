import type { Meta, StoryObj } from "@storybook/react";
import { BrowserRouter } from "react-router-dom";
import Hero from "./index";

/**
 * Hero is the main banner component displayed at the top of the landing page.
 * It includes a headline, description, call-to-action buttons, and statistics.
 */
const meta = {
  title: "Home/Hero",
  component: Hero,
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
} satisfies Meta<typeof Hero>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Default hero section with all elements
 */
export const Default: Story = {
  args: {},
};

/**
 * Hero section with dark background
 */
export const DarkBackground: Story = {
  args: {},
  parameters: {
    backgrounds: { default: "dark" },
  },
  decorators: [
    (Story) => (
      <div className="dark">
        <Story />
      </div>
    ),
  ],
};

/**
 * Hero section on mobile devices
 */
export const Mobile: Story = {
  args: {},
  parameters: {
    viewport: {
      defaultViewport: "mobile1",
    },
  },
};

/**
 * Hero section with custom animation delays
 */
export const CustomAnimations: Story = {
  args: {},
  decorators: [
    (Story) => (
      <div className="custom-animations">
        <style>
          {`
            .custom-animations .slide-in {
              animation-delay: 0.5s !important;
            }
            .custom-animations .slide-up {
              animation-delay: 0.8s !important;
            }
          `}
        </style>
        <Story />
      </div>
    ),
  ],
};

/**
 * Hero section with page context
 */
export const WithPageContext: Story = {
  args: {},
  decorators: [
    (Story) => (
      <div>
        <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-lg shadow-sm">
          <div className="container mx-auto px-4 py-4 flex items-center justify-between">
            <div className="font-bold text-xl">DecentWork</div>
            <nav className="hidden md:flex items-center gap-6">
              <a href="#" className="text-sm font-medium">Home</a>
              <a href="#" className="text-sm font-medium">Jobs</a>
              <a href="#" className="text-sm font-medium">About</a>
              <a href="#" className="text-sm font-medium">Contact</a>
            </nav>
            <div className="flex items-center gap-4">
              <button className="px-4 py-2 text-sm font-medium rounded-md bg-primary/10 text-primary">Login</button>
              <button className="px-4 py-2 text-sm font-medium rounded-md bg-primary text-white">Sign Up</button>
            </div>
          </div>
        </header>
        <Story />
        <div className="py-16 bg-secondary/10">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">Featured Section</h2>
            <p className="text-center text-muted-foreground max-w-2xl mx-auto">
              This demonstrates how the Hero component looks in the context of a full page with other sections below it.
            </p>
          </div>
        </div>
      </div>
    ),
  ],
};
