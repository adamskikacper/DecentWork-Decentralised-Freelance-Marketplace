import type { Meta, StoryObj } from "@storybook/react";
import { BrowserRouter } from "react-router-dom";
import FeaturedJobsSection from "./index";

/**
 * FeaturedJobsSection is a component that displays a grid of featured job listings.
 * It includes a title, subtitle, and a collection of job cards.
 */
const meta = {
  title: "Home/FeaturedJobsSection",
  component: FeaturedJobsSection,
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
    jobs: {
      control: "object",
      description: "Array of job objects to display",
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof FeaturedJobsSection>;

export default meta;
type Story = StoryObj<typeof meta>;

const sampleJobs = [
  {
    id: "job1",
    title: "Smart Contract Developer for DeFi Project",
    description: "Looking for an experienced Solidity developer to create a set of smart contracts for our DeFi platform. The contracts should include staking, yield farming, and liquidity provision functionality.",
    postedDate: "Posted 2 days ago",
    proposals: 12,
    tags: ["Solidity", "DeFi", "Smart Contracts", "Ethereum"],
    budget: "5-7 ETH",
  },
  {
    id: "job2",
    title: "Web3 Frontend Developer",
    description: "We need a frontend developer with experience in React and Web3 integration to build the user interface for our NFT marketplace. The ideal candidate should be familiar with wallet connections, transaction signing, and displaying blockchain data.",
    postedDate: "Posted 3 days ago",
    proposals: 8,
    tags: ["React", "Web3.js", "TypeScript", "NFT"],
    budget: "3-5 ETH",
  },
  {
    id: "job3",
    title: "Blockchain Security Auditor",
    description: "Seeking a security expert to audit our smart contracts before mainnet deployment. The project includes a token contract, staking mechanism, and governance functionality.",
    postedDate: "Posted 1 day ago",
    proposals: 5,
    tags: ["Security", "Audit", "Solidity", "Smart Contracts"],
    budget: "8-10 ETH",
  },
];

/**
 * Default featured jobs section with sample jobs
 */
export const Default: Story = {
  args: {
    title: "Featured Jobs",
    subtitle: "Find exciting opportunities and collaborate with clients from around the world.",
    jobs: sampleJobs,
  },
};

/**
 * Featured jobs section with custom title and subtitle
 */
export const CustomHeadings: Story = {
  args: {
    title: "Top Blockchain Opportunities",
    subtitle: "Discover high-paying Web3 jobs from leading projects in the space.",
    jobs: sampleJobs,
  },
};

/**
 * Featured jobs section with fewer jobs
 */
export const FewerJobs: Story = {
  args: {
    title: "Featured Jobs",
    subtitle: "Find exciting opportunities and collaborate with clients from around the world.",
    jobs: sampleJobs.slice(0, 2),
  },
};

/**
 * Featured jobs section with many jobs
 */
export const ManyJobs: Story = {
  args: {
    title: "Featured Jobs",
    subtitle: "Find exciting opportunities and collaborate with clients from around the world.",
    jobs: [
      ...sampleJobs,
      {
        id: "job4",
        title: "NFT Artist for Collection Launch",
        description: "Looking for a talented digital artist to create a collection of 10,000 unique NFTs for our upcoming launch. Experience with generative art and layering is required.",
        postedDate: "Posted 4 days ago",
        proposals: 20,
        tags: ["NFT", "Digital Art", "Generative", "Creative"],
        budget: "10-15 ETH",
      },
      {
        id: "job5",
        title: "Blockchain Technical Writer",
        description: "We need a technical writer to create documentation for our blockchain protocol. The ideal candidate should have experience explaining complex technical concepts in a clear and concise manner.",
        postedDate: "Posted 2 days ago",
        proposals: 7,
        tags: ["Technical Writing", "Documentation", "Blockchain"],
        budget: "2-3 ETH",
      },
      {
        id: "job6",
        title: "Smart Contract Testing Specialist",
        description: "Seeking a developer with experience in testing smart contracts using frameworks like Hardhat and Foundry. The role involves writing comprehensive test suites for our DeFi protocol.",
        postedDate: "Posted 1 day ago",
        proposals: 4,
        tags: ["Testing", "Hardhat", "Foundry", "Solidity"],
        budget: "4-6 ETH",
      },
    ],
  },
};

/**
 * Featured jobs section on mobile devices
 */
export const Mobile: Story = {
  args: {
    title: "Featured Jobs",
    subtitle: "Find exciting opportunities and collaborate with clients from around the world.",
    jobs: sampleJobs,
  },
  parameters: {
    viewport: {
      defaultViewport: "mobile1",
    },
  },
};

/**
 * Featured jobs section with dark theme
 */
export const DarkTheme: Story = {
  args: {
    title: "Featured Jobs",
    subtitle: "Find exciting opportunities and collaborate with clients from around the world.",
    jobs: sampleJobs,
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
