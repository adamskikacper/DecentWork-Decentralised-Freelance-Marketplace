import type { Meta, StoryObj } from "@storybook/react";
import { JobsList } from "./index";

/**
 * JobsList is a component that displays a list of jobs using JobCard components.
 */
const meta = {
 title: "Dashboard/JobsList",
 component: JobsList,
 parameters: {
  layout: "padded",
 },
 argTypes: {
  onMessage: { action: "message" },
  onDetails: { action: "details" },
  onViewAll: { action: "viewAll" },
 },
 tags: ["autodocs"],
} satisfies Meta<typeof JobsList>;

export default meta;

type Story = StoryObj<typeof meta>;

const mockJobs = [
 {
  id: "1",
  title: "Web3 Dashboard UI Design",
  description:
   "Design a modern and user-friendly dashboard for our Web3 application.",
  status: "In Progress",
  cost: "2.5 ETH",
  dueDate: "Apr 15, 2023",
  progress: 65,
  freelancer: {
   id: "f1",
   name: "Alex Johnson",
  },
 },
 {
  id: "2",
  title: "Smart Contract Development",
  description: "Develop a smart contract for our NFT marketplace.",
  status: "Just Started",
  cost: "3.5 ETH",
  dueDate: "May 20, 2023",
  progress: 15,
  freelancer: {
   id: "f2",
   name: "Sarah Smith",
  },
 },
 {
  id: "3",
  title: "Blockchain Integration",
  description: "Integrate our platform with the Polygon blockchain.",
  status: "Completed",
  cost: "4.0 ETH",
  dueDate: "Mar 10, 2023",
  progress: 100,
  freelancer: {
   id: "f3",
   name: "Michael Brown",
  },
 },
];

/**
 * Basic JobsList with jobs
 */
export const Default: Story = {
 args: {
  jobs: mockJobs,
  onMessage: (userId) => console.log("Message user:", userId),
  onDetails: (jobId) => console.log("View details for job:", jobId),
 },
};

/**
 * JobsList with title and view all button
 */
export const WithTitleAndViewAll: Story = {
 args: {
  jobs: mockJobs,
  title: "Active Jobs",
  showViewAll: true,
  onViewAll: () => console.log("View all jobs clicked"),
  onMessage: (userId) => console.log("Message user:", userId),
  onDetails: (jobId) => console.log("View details for job:", jobId),
 },
};

/**
 * JobsList showing creation dates
 */
export const WithCreationDates: Story = {
 args: {
  jobs: mockJobs,
  showCreationDate: true,
  onMessage: (userId) => console.log("Message user:", userId),
  onDetails: (jobId) => console.log("View details for job:", jobId),
 },
};
