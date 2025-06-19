import type { Meta, StoryObj } from "@storybook/react";
import JobDescription from "./index";

/**
 * JobDescription is a component that displays detailed information about a job,
 * including the description, required skills, and attachments.
 */
const meta = {
  title: "Job/JobDescription",
  component: JobDescription,
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof JobDescription>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Default JobDescription with all sections
 */
export const Default: Story = {
  args: {
    description: "Design a modern and user-friendly dashboard for our Web3 application. The design should include wallet connection, transaction history, and asset management interfaces. We need a clean, intuitive design that makes complex blockchain data easy to understand.\n\nThe ideal candidate will have experience with Web3 UI/UX design and a strong portfolio of dashboard interfaces. Familiarity with blockchain concepts is essential.",
    skills: ["UI/UX Design", "Figma", "Web3", "Dashboard Design", "Wireframing"],
    attachments: [
      { name: "project_brief.pdf", size: "1.2 MB" },
      { name: "design_inspiration.zip", size: "3.5 MB" },
      { name: "brand_guidelines.pdf", size: "2.8 MB" }
    ]
  },
};

/**
 * JobDescription without attachments
 */
export const NoAttachments: Story = {
  args: {
    description: "Develop a smart contract for our NFT marketplace. The contract should handle minting, buying, selling, and royalty distribution for digital collectibles.",
    skills: ["Solidity", "Smart Contracts", "NFT", "ERC-721", "Ethereum"],
    attachments: []
  },
};
