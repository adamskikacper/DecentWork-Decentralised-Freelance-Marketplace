import type { Meta, StoryObj } from "@storybook/react";
import { BrowserRouter } from "react-router-dom";
import Header from "./index";
import { AuthProvider } from "@/hooks/useAuth";

/**
 * Header is the main navigation component for the application.
 * It includes the logo, navigation links, and user authentication controls.
 */
const meta = {
  title: "Layout/Header",
  component: Header,
  parameters: {
    layout: "fullscreen",
  },
  decorators: [
    (Story) => (
      <BrowserRouter>
        <AuthProvider>
          <Story />
        </AuthProvider>
      </BrowserRouter>
    ),
  ],
  tags: ["autodocs"],
} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Default header with transparent background (not scrolled)
 */
export const Default: Story = {
  args: {},
  parameters: {
    docs: {
      description: {
        story: "The default header with transparent background, as shown at the top of the page before scrolling.",
      },
    },
  },
};

/**
 * Header with scrolled state, showing a semi-transparent background
 */
export const Scrolled: Story = {
  args: {},
  parameters: {
    docs: {
      description: {
        story: "The header after scrolling down the page, with a semi-transparent background and subtle shadow.",
      },
    },
  },
  decorators: [
    (Story) => (
      <div className="pt-20">
        <div className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-lg shadow-sm">
          <Story />
        </div>
        <div className="p-6">
          <h2 className="text-2xl font-bold">Page Content</h2>
          <p className="mt-4">Scroll down to see the header with background.</p>
        </div>
      </div>
    ),
  ],
};

/**
 * Header with mobile menu open
 */
export const MobileMenuOpen: Story = {
  args: {},
  parameters: {
    viewport: {
      defaultViewport: "mobile1",
    },
    docs: {
      description: {
        story: "The header on mobile devices with the menu expanded.",
      },
    },
  },
  decorators: [
    (Story) => (
      <div className="pt-20">
        <div className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-lg shadow-sm">
          <Story />
        </div>
        <div className="opacity-100 translate-y-0 h-auto bg-white/95 backdrop-blur-lg shadow-md px-4 py-8 space-y-6">
          <div className="flex items-center gap-2 py-2 text-base font-medium">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3 9L12 2L21 9V20C21 20.5304 20.7893 21.0391 20.4142 21.4142C20.0391 21.7893 19.5304 22 19 22H5C4.46957 22 3.96086 21.7893 3.58579 21.4142C3.21071 21.0391 3 20.5304 3 20V9Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M9 22V12H15V22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span>Home</span>
          </div>
          <div className="py-2 text-base font-medium">Find Work</div>
          <div className="py-2 text-base font-medium">Dashboard</div>
          <div className="py-2 text-base font-medium">Sign Out</div>
        </div>
      </div>
    ),
  ],
};

/**
 * Header with authenticated user
 */
export const Authenticated: Story = {
  args: {},
  parameters: {
    docs: {
      description: {
        story: "The header when a user is logged in, showing user-specific navigation options.",
      },
    },
  },
};
