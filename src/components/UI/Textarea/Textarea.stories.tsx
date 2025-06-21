import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { Textarea } from "./index";
import { Label } from "../Label";

/**
 * Textarea component provides multi-line text input with comprehensive styling and functionality.
 * Supports resizing, character limits, and various states for form interactions.
 */
const meta = {
 title: "UI/Textarea",
 component: Textarea,
 parameters: {
  layout: "centered",
 },
 argTypes: {
  placeholder: {
   control: "text",
   description: "Placeholder text",
  },
  disabled: {
   control: "boolean",
   description: "Whether the textarea is disabled",
  },
  rows: {
   control: { type: "number", min: 1, max: 20 },
   description: "Number of visible text lines",
  },
  value: {
   control: "text",
   description: "Textarea value",
  },
 },
 tags: ["autodocs"],
} satisfies Meta<typeof Textarea>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Default textarea
 */
export const Default: Story = {
 args: {
  placeholder: "Enter your message...",
 },
};

/**
 * Textarea with label
 */
export const WithLabel: Story = {
 render: () => (
  <div className="grid w-full gap-1.5">
   <Label htmlFor="message">Message</Label>
   <Textarea id="message" placeholder="Type your message here." />
  </div>
 ),
};

/**
 * Textarea with custom rows
 */
export const CustomRows: Story = {
 args: {
  rows: 8,
  placeholder: "This textarea has 8 rows...",
 },
};

/**
 * Disabled textarea
 */
export const Disabled: Story = {
 args: {
  disabled: true,
  placeholder: "Disabled textarea",
  value: "This content cannot be edited",
 },
};

/**
 * Textarea with character counter
 */
export const WithCharacterCounter: Story = {
 render: () => {
  const [value, setValue] = useState("");
  const maxLength = 280;

  return (
   <div className="grid w-full gap-1.5">
    <Label htmlFor="tweet">Tweet</Label>
    <Textarea
     id="tweet"
     value={value}
     onChange={(e) => setValue(e.target.value)}
     placeholder="What's happening?"
     maxLength={maxLength}
    />
    <div className="flex justify-between text-sm text-muted-foreground">
     <span>Character limit example</span>
     <span className={value.length > maxLength * 0.9 ? "text-destructive" : ""}>
      {value.length}/{maxLength}
     </span>
    </div>
   </div>
  );
 },
};

/**
 * Textarea with error state
 */
export const WithError: Story = {
 render: () => (
  <div className="grid w-full gap-1.5">
   <Label htmlFor="error-textarea">Feedback</Label>
   <Textarea
    id="error-textarea"
    placeholder="Please provide your feedback"
    className="border-destructive focus-visible:ring-destructive"
    defaultValue="This is too short"
   />
   <p className="text-sm text-destructive">
    Feedback must be at least 10 characters long.
   </p>
  </div>
 ),
};

/**
 * Textarea with success state
 */
export const WithSuccess: Story = {
 render: () => (
  <div className="grid w-full gap-1.5">
   <Label htmlFor="success-textarea">Review</Label>
   <Textarea
    id="success-textarea"
    placeholder="Write your review"
    className="border-green-500 focus-visible:ring-green-500"
    defaultValue="This product exceeded my expectations. The quality is outstanding and delivery was fast."
   />
   <p className="text-sm text-green-600">Thank you for your detailed review!</p>
  </div>
 ),
};

/**
 * Non-resizable textarea
 */
export const NonResizable: Story = {
 args: {
  className: "resize-none",
  placeholder: "This textarea cannot be resized",
  rows: 4,
 },
};

/**
 * Horizontally resizable only
 */
export const ResizeHorizontal: Story = {
 args: {
  className: "resize-x",
  placeholder: "This textarea can be resized horizontally only",
  rows: 4,
 },
};

/**
 * Vertically resizable only
 */
export const ResizeVertical: Story = {
 args: {
  className: "resize-y",
  placeholder: "This textarea can be resized vertically only",
  rows: 4,
 },
};

/**
 * Textarea with helper text
 */
export const WithHelperText: Story = {
 render: () => (
  <div className="grid w-full gap-1.5">
   <Label htmlFor="helper-textarea">Description</Label>
   <Textarea id="helper-textarea" placeholder="Describe your project..." />
   <p className="text-sm text-muted-foreground">
    Provide a detailed description to help others understand your project.
   </p>
  </div>
 ),
};

/**
 * Auto-expanding textarea simulation
 */
export const AutoExpanding: Story = {
 render: () => {
  const [value, setValue] = useState("");
  const minRows = 3;
  const maxRows = 10;

  // Calculate rows based on content
  const rows = Math.min(Math.max(minRows, value.split("\n").length), maxRows);

  return (
   <div className="grid w-full gap-1.5">
    <Label htmlFor="auto-textarea">Auto-expanding Textarea</Label>
    <Textarea
     id="auto-textarea"
     value={value}
     onChange={(e) => setValue(e.target.value)}
     placeholder="Type multiple lines to see auto-expansion..."
     rows={rows}
     className="resize-none"
    />
    <p className="text-sm text-muted-foreground">
     This textarea expands as you type (simulated with rows: {rows})
    </p>
   </div>
  );
 },
};

/**
 * Textarea size variations
 */
export const Sizes: Story = {
 render: () => (
  <div className="grid gap-4">
   <div>
    <Label>Small Textarea</Label>
    <Textarea className="text-sm" rows={2} placeholder="Small textarea" />
   </div>
   <div>
    <Label>Default Textarea</Label>
    <Textarea rows={3} placeholder="Default textarea" />
   </div>
   <div>
    <Label>Large Textarea</Label>
    <Textarea className="text-lg" rows={5} placeholder="Large textarea" />
   </div>
  </div>
 ),
};
