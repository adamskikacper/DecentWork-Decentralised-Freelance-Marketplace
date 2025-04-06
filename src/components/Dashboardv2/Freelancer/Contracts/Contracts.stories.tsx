import type { Meta, StoryObj } from "@storybook/react";
import Contracts from "./index";
import { BrowserRouter } from "react-router-dom";

/**
 * Contracts is a component that displays a list of contracts for freelancer users.
 * It shows both active and completed contracts with detailed information.
 */
const meta = {
 title: "Dashboardv2/Freelancer/Contracts",
 component: Contracts,
 parameters: {
  layout: "padded",
 },
 decorators: [
  (Story) => (
   <BrowserRouter>
    <div style={{ maxWidth: "1200px" }}>
     <Story />
    </div>
   </BrowserRouter>
  ),
 ],
 argTypes: {
  onMessage: { action: "message" },
  onJobDetails: { action: "jobDetails" },
  onClientDetails: { action: "clientDetails" },
 },
 tags: ["autodocs"],
} satisfies Meta<typeof Contracts>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Default Contracts view with active and completed contracts
 */
export const Default: Story = {
 args: {
  isLoading: false,
 },
};

/**
 * Loading state
 */
export const Loading: Story = {
 args: {
  isLoading: true,
 },
};
