import type { Meta, StoryObj } from "@storybook/react";
import LoadingScreen from "./index";

/**
 * LoadingScreen is a full-screen loading indicator component.
 * It displays a spinner and a loading message, typically used during page transitions
 * or while waiting for data to load.
 */
const meta = {
 title: "Common/LoadingScreen",
 component: LoadingScreen,
 parameters: {
  layout: "fullscreen",
 },
 tags: ["autodocs"],
} satisfies Meta<typeof LoadingScreen>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Default loading screen with spinner and message
 */
export const Default: Story = {};

/**
 * Loading screen in a container with fixed height
 * This demonstrates how the component looks in a constrained space
 */
export const InContainer: Story = {
 decorators: [
  (Story) => (
   <div className="h-[400px] border border-border rounded-lg overflow-hidden">
    <Story />
   </div>
  ),
 ],
};

/**
 * Loading screen with dark background
 * This demonstrates how the component looks against a dark background
 */
export const DarkBackground: Story = {
 decorators: [
  (Story) => (
   <div className="bg-slate-900 text-white">
    <Story />
   </div>
  ),
 ],
};
