import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import JobCard from "./index";
import { JobSummary } from "@/types";

/**
 * JobCard is a component used to display job information in a card format.
 * It can display either a full JobSummary object or individual job properties.
 */
const meta = {
 title: "Job/JobCard",
 component: JobCard,
 parameters: {
  layout: "centered",
 },
 argTypes: {
  job: {
   control: "object",
   description: "JobSummary object containing all job details",
  },
  id: {
   control: "text",
   description: "Job ID (used when job object is not provided)",
  },
  title: {
   control: "text",
   description: "Job title (used when job object is not provided)",
  },
  description: {
   control: "text",
   description: "Job description (used when job object is not provided)",
  },
  postedDate: {
   control: "text",
   description:
    "Date when the job was posted (used when job object is not provided)",
  },
  proposals: {
   control: "number",
   description:
    "Number of proposals received (used when job object is not provided)",
  },
  tags: {
   control: "object",
   description: "Array of skill tags (used when job object is not provided)",
  },
  budget: {
   control: "text",
   description: "Job budget (used when job object is not provided)",
  },
  onMessage: {
   action: "message clicked",
   description: "Function called when message button is clicked",
  },
  onDetails: {
   action: "details clicked",
   description: "Function called when details button is clicked",
  },
  showCreationDate: {
   control: "boolean",
   description: "Whether to show the job creation date",
  },
 },
 tags: ["autodocs"],
} satisfies Meta<typeof JobCard>;

export default meta;
type Story = StoryObj<typeof meta>;

// Sample JobSummary object
const sampleJob: JobSummary = {
 id: "job1",
 title: "Wallet Integration for NFT Marketplace",
 freelancer: {
  id: "alex123",
  name: "Alex K.",
 },
 dueDate: "Due in 8 days",
 status: "In Progress",
 cost: "3.5 ETH",
 progress: 60,
};

/**
 * JobCard with full JobSummary object
 */
export const WithJobObject: Story = {
 args: {
  job: sampleJob,
  onMessage: fn(),
  onDetails: fn(),
 },
};

/**
 * JobCard with individual props (no JobSummary object)
 */
export const WithIndividualProps: Story = {
 args: {
  id: "job2",
  title: "Smart Contract Development for DeFi Platform",
  description:
   "Looking for an experienced Solidity developer to create a set of smart contracts for our DeFi platform. The contracts should include staking, yield farming, and liquidity provision functionality.",
  postedDate: "Posted 3 days ago",
  proposals: 12,
  tags: ["Solidity", "DeFi", "Smart Contracts", "Ethereum"],
  budget: "5-7 ETH",
  onMessage: fn(),
  onDetails: fn(),
 },
};

/**
 * JobCard with completed status
 */
export const CompletedJob: Story = {
 args: {
  job: {
   ...sampleJob,
   status: "Completed",
   progress: 100,
   dueDate: "Completed on April 15, 2023",
  },
  onMessage: fn(),
  onDetails: fn(),
 },
};

/**
 * JobCard with just started status
 */
export const JustStartedJob: Story = {
 args: {
  job: {
   ...sampleJob,
   status: "Just Started",
   progress: 15,
   dueDate: "Due in 30 days",
  },
  onMessage: fn(),
  onDetails: fn(),
 },
};

/**
 * JobCard with long description that gets truncated
 */
export const LongDescription: Story = {
 args: {
  id: "job3",
  title: "Blockchain Developer for Cross-Chain Bridge",
  description:
   "We are looking for a blockchain developer with experience in cross-chain technologies to help us build a bridge between Ethereum and Polygon. The ideal candidate should have experience with both EVM chains and understand the security implications of cross-chain bridges. The project will involve implementing a secure token transfer mechanism, handling deposits and withdrawals, and ensuring proper validation of cross-chain messages. This is a complex project that will require deep knowledge of blockchain architecture and security best practices.",
  postedDate: "Posted 1 day ago",
  proposals: 5,
  tags: ["Blockchain", "Ethereum", "Polygon", "Cross-chain"],
  budget: "10-15 ETH",
  onMessage: fn(),
  onDetails: fn(),
 },
};

/**
 * Multiple JobCards displayed in a list
 */
export const JobCardList: Story = {
 args: {
  job: sampleJob,
  onMessage: fn(),
  onDetails: fn(),
 },
 parameters: {
  layout: "padded",
 },
 render: () => (
  <div className="space-y-4 w-full max-w-2xl">
   <JobCard
    job={{
     id: "job1",
     title: "Wallet Integration for NFT Marketplace",
     freelancer: {
      id: "alex123",
      name: "Alex K.",
     },
     dueDate: "Due in 8 days",
     status: "In Progress",
     cost: "3.5 ETH",
     progress: 60,
    }}
    onMessage={() => console.log("Message clicked")}
    onDetails={() => console.log("Details clicked")}
   />
   <JobCard
    job={{
     id: "job2",
     title: "Smart Contract for Token Vesting",
     freelancer: {
      id: "maria123",
      name: "Maria S.",
     },
     dueDate: "Due in 15 days",
     status: "Just Started",
     cost: "5.0 ETH",
     progress: 15,
    }}
    onMessage={() => console.log("Message clicked")}
    onDetails={() => console.log("Details clicked")}
   />
   <JobCard
    job={{
     id: "job3",
     title: "DeFi Interface Redesign",
     freelancer: {
      id: "david123",
      name: "David C.",
     },
     dueDate: "Completed on April 2, 2023",
     status: "Completed",
     cost: "4.0 ETH",
     progress: 100,
    }}
    onMessage={() => console.log("Message clicked")}
    onDetails={() => console.log("Details clicked")}
   />
  </div>
 ),
};
