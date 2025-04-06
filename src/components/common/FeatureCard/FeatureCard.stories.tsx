import type { Meta, StoryObj } from "@storybook/react";
import { Shield, Zap, Globe, Code, Lock, Wallet } from "lucide-react";
import FeatureCard from "./index";

/**
 * FeatureCard is a component used to display features or benefits with an icon, title, and description.
 * It's commonly used in marketing sections or feature lists.
 */
const meta = {
  title: "Common/FeatureCard",
  component: FeatureCard,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    icon: { 
      control: { disable: true },
      description: "Icon element to display" 
    },
    title: { 
      control: "text", 
      description: "Title of the feature" 
    },
    description: { 
      control: "text", 
      description: "Description of the feature" 
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof FeatureCard>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Default feature card with icon, title, and description
 */
export const Default: Story = {
  args: {
    icon: <Shield className="h-6 w-6 text-primary" />,
    title: "Secure Payments",
    description: "All transactions are secured with smart contracts and blockchain technology.",
  },
};

/**
 * Feature card with a different icon and content
 */
export const Performance: Story = {
  args: {
    icon: <Zap className="h-6 w-6 text-primary" />,
    title: "Fast Performance",
    description: "Optimized for speed with instant payments and quick job matching.",
  },
};

/**
 * Feature card with global reach theme
 */
export const GlobalReach: Story = {
  args: {
    icon: <Globe className="h-6 w-6 text-primary" />,
    title: "Global Reach",
    description: "Connect with clients and freelancers from around the world.",
  },
};

/**
 * Multiple feature cards displayed in a grid
 */
export const FeatureGrid: Story = {
  render: () => (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl">
      <FeatureCard
        icon={<Shield className="h-6 w-6 text-primary" />}
        title="Secure Payments"
        description="All transactions are secured with smart contracts and blockchain technology."
      />
      <FeatureCard
        icon={<Zap className="h-6 w-6 text-primary" />}
        title="Fast Performance"
        description="Optimized for speed with instant payments and quick job matching."
      />
      <FeatureCard
        icon={<Code className="h-6 w-6 text-primary" />}
        title="Smart Contracts"
        description="Automated escrow and payment release based on predefined conditions."
      />
      <FeatureCard
        icon={<Lock className="h-6 w-6 text-primary" />}
        title="Privacy Control"
        description="You control what information is shared with clients and freelancers."
      />
    </div>
  ),
};

/**
 * Feature card with a long description
 */
export const LongDescription: Story = {
  args: {
    icon: <Wallet className="h-6 w-6 text-primary" />,
    title: "Crypto Payments",
    description: "Accept payments in various cryptocurrencies including ETH, MATIC, and stablecoins. Our platform automatically converts to your preferred currency if needed.",
  },
};
