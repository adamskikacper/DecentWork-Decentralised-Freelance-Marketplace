import type { Meta, StoryObj } from "@storybook/react";
import { BrowserRouter } from "react-router-dom";
import { Shield, Zap, Globe, Lock } from "lucide-react";
import FeaturesSection from "./index";
import { FEATURES_SECTION_DEFAULTS } from "@/constants";

/**
 * FeaturesSection is a component that displays a list of features with icons and descriptions.
 * It includes a title, subtitle, feature cards, and an optional demo image.
 */
const meta = {
  title: "Home/FeaturesSection",
  component: FeaturesSection,
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
    features: {
      control: "object",
      description: "Array of feature objects with icon, title, and description",
    },
    demoImageContent: {
      control: { disable: true },
      description: "Custom content for the demo image area",
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof FeaturesSection>;

export default meta;
type Story = StoryObj<typeof meta>;

const defaultFeatures = [
  {
    icon: <Shield className="h-6 w-6 text-primary" />,
    title: "Secure Payments",
    description: "All transactions are secured with smart contracts and blockchain technology.",
  },
  {
    icon: <Zap className="h-6 w-6 text-primary" />,
    title: "Fast Performance",
    description: "Optimized for speed with instant payments and quick job matching.",
  },
  {
    icon: <Globe className="h-6 w-6 text-primary" />,
    title: "Global Reach",
    description: "Connect with clients and freelancers from around the world.",
  },
  {
    icon: <Lock className="h-6 w-6 text-primary" />,
    title: "Privacy Control",
    description: "You control what information is shared with clients and freelancers.",
  },
];

/**
 * Default features section with standard content
 */
export const Default: Story = {
  args: {
    title: FEATURES_SECTION_DEFAULTS.TITLE,
    subtitle: FEATURES_SECTION_DEFAULTS.SUBTITLE,
    features: defaultFeatures,
  },
};

/**
 * Features section with custom title and subtitle
 */
export const CustomHeadings: Story = {
  args: {
    title: "Why Our Platform Stands Out",
    subtitle: "Key Benefits",
    features: defaultFeatures,
  },
};

/**
 * Features section with fewer features
 */
export const FewerFeatures: Story = {
  args: {
    title: FEATURES_SECTION_DEFAULTS.TITLE,
    subtitle: FEATURES_SECTION_DEFAULTS.SUBTITLE,
    features: defaultFeatures.slice(0, 2),
  },
};

/**
 * Features section with custom demo image content
 */
export const CustomDemoContent: Story = {
  args: {
    title: FEATURES_SECTION_DEFAULTS.TITLE,
    subtitle: FEATURES_SECTION_DEFAULTS.SUBTITLE,
    features: defaultFeatures,
    demoImageContent: (
      <div className="w-full h-full flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M10 8L16 12L10 16V8Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <h3 className="text-xl font-bold mb-2">Interactive Demo</h3>
          <p className="text-sm text-muted-foreground">
            Watch our platform in action with this interactive demonstration.
          </p>
          <button className="mt-4 px-4 py-2 bg-primary text-white rounded-md text-sm font-medium">
            Play Demo
          </button>
        </div>
      </div>
    ),
  },
};

/**
 * Features section on mobile devices
 */
export const Mobile: Story = {
  args: {
    title: FEATURES_SECTION_DEFAULTS.TITLE,
    subtitle: FEATURES_SECTION_DEFAULTS.SUBTITLE,
    features: defaultFeatures,
  },
  parameters: {
    viewport: {
      defaultViewport: "mobile1",
    },
  },
};

/**
 * Features section with dark theme
 */
export const DarkTheme: Story = {
  args: {
    title: FEATURES_SECTION_DEFAULTS.TITLE,
    subtitle: FEATURES_SECTION_DEFAULTS.SUBTITLE,
    features: defaultFeatures,
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
