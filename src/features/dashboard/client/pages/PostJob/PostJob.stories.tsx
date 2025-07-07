import type { Meta, StoryObj } from "@storybook/react";
import { PostJob } from "./index";
import { BrowserRouter } from "react-router-dom";
const meta = {
 title: "Dashboardv2/Client/PostJob",
 component: PostJob,
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
  onSubmit: { action: "formSubmitted" },
 },
 tags: ["autodocs"],
} satisfies Meta<typeof PostJob>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {
 args: {
  isLoading: false,
 },
};
export const Loading: Story = {
 args: {
  isLoading: true,
 },
};
