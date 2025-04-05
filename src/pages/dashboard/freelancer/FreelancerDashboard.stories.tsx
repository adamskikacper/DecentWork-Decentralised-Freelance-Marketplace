import type { Meta, StoryObj } from "@storybook/react";
import { BrowserRouter } from "react-router-dom";
import FreelancerDashboard from "./FreelancerDashboard";

const meta = {
 title: "Dashboard/Freelancer/FreelancerDashboard",
 component: FreelancerDashboard,
 parameters: {
  layout: "fullscreen",
 },
 decorators: [
  (Story) => (
   <BrowserRouter>
    <div className="min-h-screen bg-background">
     <Story />
    </div>
   </BrowserRouter>
  ),
 ],
 tags: ["autodocs"],
} satisfies Meta<typeof FreelancerDashboard>;

export default meta;
type Story = StoryObj<typeof meta>;

// Mock user data
const mockUser = {
 id: "freelancer-123",
 name: "Jane Smith",
 email: "jane.smith@example.com",
 profileImage: "https://randomuser.me/api/portraits/women/4.jpg",
 skills: ["React", "TypeScript", "UI/UX", "Node.js"],
 bio: "Experienced frontend developer with 5+ years of experience",
 hourlyRate: 45,
 rating: 4.8,
 jobsCompleted: 32,
};

// Mock handlers
const mockHandlers = {
 onMessage: (userId: string) => console.log("Message user:", userId),
 onProjectDetails: (projectId: string) =>
  console.log("View project:", projectId),
 onClientDetails: (clientId: string) => console.log("View client:", clientId),
};

export const Dashboard: Story = {
 args: {
  activeSection: "dashboard",
  user: mockUser,
  ...mockHandlers,
 },
};

export const FindJobs: Story = {
 args: {
  activeSection: "findJobs",
  user: mockUser,
  ...mockHandlers,
 },
};

export const MyProjects: Story = {
 args: {
  activeSection: "myProjects",
  user: mockUser,
  ...mockHandlers,
 },
};
