import type { Meta, StoryObj } from "@storybook/react";
import SimilarJobsSection from "./index";
import { BrowserRouter } from "react-router-dom";

/**
 * SimilarJobsSection is a component that displays a grid of similar job listings.
 */
const meta = {
  title: "Job/SimilarJobsSection",
  component: SimilarJobsSection,
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
  tags: ["autodocs"],
} satisfies Meta<typeof SimilarJobsSection>;

export default meta;
type Story = StoryObj<typeof meta>;

const mockSimilarJobs = [
  {
    id: 1,
    title: "DeFi Dashboard UI Design",
    description: "Looking for a skilled UI designer to create a modern and intuitive dashboard for our DeFi platform. The design should be clean, user-friendly, and align with our brand identity.",
    postedDate: "2 days ago",
    proposals: 8,
    budget: "1.5-2.0 ETH",
    tags: ["UI/UX", "Figma", "Dashboard"],
  },
  {
    id: 2,
    title: "NFT Marketplace Frontend Development",
    description: "We need a React developer to build the frontend for our NFT marketplace. The candidate should have experience with Web3 integration and responsive design.",
    postedDate: "1 week ago",
    proposals: 12,
    budget: "3.0-4.0 ETH",
    tags: ["React", "Web3", "Frontend"],
  },
  {
    id: 3,
    title: "Web3 Integration for E-commerce",
    description: "Integrate cryptocurrency payments and NFT authentication into our existing e-commerce platform. The solution should be scalable, secure, and user-friendly.",
    postedDate: "1 week ago",
    proposals: 15,
    budget: "5.0-8.0 ETH",
    tags: ["Web3.js", "E-commerce", "Payments"],
  },
];

/**
 * Default SimilarJobsSection with three similar jobs
 */
export const Default: Story = {
  args: {
    jobs: mockSimilarJobs,
  },
};

/**
 * SimilarJobsSection with a single job
 */
export const SingleJob: Story = {
  args: {
    jobs: [mockSimilarJobs[0]],
  },
};

/**
 * SimilarJobsSection with many jobs
 */
export const ManyJobs: Story = {
  args: {
    jobs: [
      ...mockSimilarJobs,
      {
        id: 4,
        title: "Smart Contract Audit",
        description: "We need an experienced Solidity developer to audit our smart contracts for security vulnerabilities and optimization opportunities.",
        postedDate: "3 days ago",
        proposals: 5,
        budget: "2.0-3.0 ETH",
        tags: ["Solidity", "Security", "Audit"],
      },
      {
        id: 5,
        title: "Blockchain Analytics Dashboard",
        description: "Create a dashboard to visualize blockchain data and transactions for our DeFi platform.",
        postedDate: "5 days ago",
        proposals: 7,
        budget: "2.5-3.5 ETH",
        tags: ["Analytics", "Dashboard", "Data Visualization"],
      },
    ],
  },
};
