import type { Meta, StoryObj } from "@storybook/react";
import { BrowserRouter } from "react-router-dom";
import HowItWorks from "./index";
import { HOW_IT_WORKS_DEFAULTS } from "@/constants";

/**
 * HowItWorks is a component that displays a step-by-step guide to using the platform.
 * It includes a title, subtitle, and a series of numbered steps with descriptions and links.
 */
const meta = {
  title: "Home/HowItWorks",
  component: HowItWorks,
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
  argTypes: {
    title: {
      control: "text",
      description: "Section title",
    },
    subtitle: {
      control: "text",
      description: "Section subtitle",
    },
    steps: {
      control: "object",
      description: "Array of step objects with number, title, description, and link",
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof HowItWorks>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Default how it works section with standard content
 */
export const Default: Story = {
  args: {
    title: HOW_IT_WORKS_DEFAULTS.TITLE,
    subtitle: HOW_IT_WORKS_DEFAULTS.SUBTITLE,
    steps: HOW_IT_WORKS_DEFAULTS.STEPS,
  },
};

/**
 * How it works section with custom title and subtitle
 */
export const CustomHeadings: Story = {
  args: {
    title: "Getting Started is Easy",
    subtitle: "Follow these simple steps to begin your journey with our decentralized freelance platform.",
    steps: HOW_IT_WORKS_DEFAULTS.STEPS,
  },
};

/**
 * How it works section with custom steps
 */
export const CustomSteps: Story = {
  args: {
    title: HOW_IT_WORKS_DEFAULTS.TITLE,
    subtitle: HOW_IT_WORKS_DEFAULTS.SUBTITLE,
    steps: [
      {
        number: 1,
        title: "Create Your Profile",
        description: "Sign up and create a detailed profile showcasing your skills and experience.",
        link: {
          text: "Sign Up Now →",
          url: "/signup",
        },
      },
      {
        number: 2,
        title: "Browse Opportunities",
        description: "Explore available jobs or post your own project requirements.",
        link: {
          text: "View Jobs →",
          url: "/jobs",
        },
      },
      {
        number: 3,
        title: "Connect & Collaborate",
        description: "Communicate directly with clients or freelancers to discuss project details.",
        link: {
          text: "Learn More →",
          url: "#",
        },
      },
      {
        number: 4,
        title: "Get Paid Securely",
        description: "Receive payments directly to your wallet through our secure smart contracts.",
        link: {
          text: "Payment Info →",
          url: "#",
        },
      },
    ],
  },
};

/**
 * How it works section with more steps
 */
export const MoreSteps: Story = {
  args: {
    title: "Complete Platform Guide",
    subtitle: "A comprehensive walkthrough of our platform's features and workflow.",
    steps: [
      ...HOW_IT_WORKS_DEFAULTS.STEPS,
      {
        number: 4,
        title: "Leave Feedback",
        description: "After job completion, both parties can leave feedback to build reputation.",
        link: {
          text: "Rating System →",
          url: "#",
        },
      },
      {
        number: 5,
        title: "Build Your Reputation",
        description: "Grow your on-chain reputation to attract more clients or find better freelancers.",
        link: {
          text: "Reputation System →",
          url: "#",
        },
      },
    ],
  },
  decorators: [
    (Story) => (
      <div>
        <Story />
        <style>
          {`
            @media (min-width: 768px) {
              .md\\:grid-cols-3 {
                grid-template-columns: repeat(3, minmax(0, 1fr));
              }
            }
          `}
        </style>
      </div>
    ),
  ],
};

/**
 * How it works section on mobile devices
 */
export const Mobile: Story = {
  args: {
    title: HOW_IT_WORKS_DEFAULTS.TITLE,
    subtitle: HOW_IT_WORKS_DEFAULTS.SUBTITLE,
    steps: HOW_IT_WORKS_DEFAULTS.STEPS,
  },
  parameters: {
    viewport: {
      defaultViewport: "mobile1",
    },
  },
};

/**
 * How it works section with dark theme
 */
export const DarkTheme: Story = {
  args: {
    title: HOW_IT_WORKS_DEFAULTS.TITLE,
    subtitle: HOW_IT_WORKS_DEFAULTS.SUBTITLE,
    steps: HOW_IT_WORKS_DEFAULTS.STEPS,
  },
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
