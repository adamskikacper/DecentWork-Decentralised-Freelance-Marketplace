import type { Meta, StoryObj } from "@storybook/react";
import { BrowserRouter } from "react-router-dom";
import { Shield, Zap, Clock, Globe } from "lucide-react";
import { AuthProvider } from "@/hooks/useAuth";

// Import all home page components
import Header from "@/components/layout/Header";
import Hero from "@/components/home/Hero";
import HowItWorks from "@/components/home/HowItWorks";
import FeaturesSection from "@/components/home/FeaturesSection";
import FeaturedJobsSection from "@/components/home/FeaturedJobsSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import Footer from "@/components/layout/Footer";

// Sample data
const features = [
  {
    icon: <Shield className="h-6 w-6 text-primary" />,
    title: "Secure Payments",
    description: "All transactions are secured with smart contracts and blockchain technology.",
  },
  {
    icon: <Zap className="h-6 w-6 text-primary" />,
    title: "No Hidden Fees",
    description: "All fees are transparent and lower than traditional platforms.",
  },
  {
    icon: <Clock className="h-6 w-6 text-primary" />,
    title: "Instant Payments",
    description: "Get paid instantly upon work approval, no waiting periods or delays.",
  },
  {
    icon: <Globe className="h-6 w-6 text-primary" />,
    title: "Global Reach",
    description: "Connect with clients and freelancers from around the world.",
  },
];

const sampleJobs = [
  {
    id: "job1",
    title: "Smart Contract Developer for DeFi Project",
    description: "Looking for an experienced Solidity developer to create a set of smart contracts for our DeFi platform.",
    postedDate: "Posted 2 days ago",
    proposals: 12,
    tags: ["Solidity", "DeFi", "Smart Contracts"],
    budget: "5-7 ETH",
  },
  {
    id: "job2",
    title: "Web3 Frontend Developer",
    description: "We need a frontend developer with experience in React and Web3 integration to build the user interface for our NFT marketplace.",
    postedDate: "Posted 3 days ago",
    proposals: 8,
    tags: ["React", "Web3.js", "TypeScript"],
    budget: "3-5 ETH",
  },
  {
    id: "job3",
    title: "Blockchain Security Auditor",
    description: "Seeking a security expert to audit our smart contracts before mainnet deployment.",
    postedDate: "Posted 1 day ago",
    proposals: 5,
    tags: ["Security", "Audit", "Solidity"],
    budget: "8-10 ETH",
  },
];

const stats = [
  { value: "5,000+", label: "Freelancers", delay: "0s" },
  { value: "1,200+", label: "Clients", delay: "0.1s" },
  { value: "10,000+", label: "Jobs", delay: "0.2s" },
  { value: "$15M+", label: "Paid to Freelancers", delay: "0.3s" },
];

const testimonials = [
  {
    rating: 5.0,
    text: "DecentWork transformed how I hire blockchain developers. The smart contract escrow system gives me peace of mind for every job.",
    authorInitial: "J",
    authorName: "James Chen",
    authorRole: "DeFi Project Founder",
  },
  {
    rating: 5.0,
    text: "As a freelance smart contract developer, getting paid has never been easier. Instant payments directly to my wallet make this platform stand out.",
    authorInitial: "A",
    authorName: "Aisha Johnson",
    authorRole: "Solidity Developer",
  },
  {
    rating: 4.9,
    text: "The transparency and security of DecentWork has helped me build a thriving freelance business in Web3 design. Highly recommended!",
    authorInitial: "M",
    authorName: "Miguel Santos",
    authorRole: "UI/UX Designer",
  },
  {
    rating: 4.8,
    text: "Found amazing blockchain talent for our startup within days. The quality of professionals on this platform is unmatched in the Web3 space.",
    authorInitial: "S",
    authorName: "Sarah Kim",
    authorRole: "Crypto Startup CEO",
  },
];

/**
 * HomePage is a composition of all the home page components.
 * It demonstrates how all the components work together to create the complete landing page.
 */
const HomePage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Hero />
        <HowItWorks />
        <FeaturesSection features={features} />
        <FeaturedJobsSection jobs={sampleJobs} />
        <TestimonialsSection stats={stats} testimonials={testimonials} />
      </main>
      <Footer />
    </div>
  );
};

const meta = {
  title: "Pages/HomePage",
  component: HomePage,
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
} satisfies Meta<typeof HomePage>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Complete home page with all sections
 */
export const Default: Story = {};

/**
 * Home page with dark theme
 */
export const DarkTheme: Story = {
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
 * Home page on mobile devices
 */
export const Mobile: Story = {
  parameters: {
    viewport: {
      defaultViewport: "mobile1",
    },
  },
};
