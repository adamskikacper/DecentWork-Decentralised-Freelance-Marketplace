import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { Input } from "./index";
import { Label } from "../Label";

/**
 * Input component provides text input functionality with comprehensive styling and state management.
 * Supports various input types and states for form interactions.
 */
const meta = {
 title: "UI/Input",
 component: Input,
 parameters: {
  layout: "centered",
 },
 argTypes: {
  type: {
   control: { type: "select" },
   options: ["text", "email", "password", "number", "search", "url", "tel"],
   description: "Input type attribute",
  },
  placeholder: {
   control: "text",
   description: "Placeholder text",
  },
  disabled: {
   control: "boolean",
   description: "Whether the input is disabled",
  },
  value: {
   control: "text",
   description: "Input value",
  },
 },
 tags: ["autodocs"],
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Default text input
 */
export const Default: Story = {
 args: {
  placeholder: "Enter text...",
 },
};

/**
 * Input with label
 */
export const WithLabel: Story = {
 render: () => (
  <div className="grid w-full max-w-sm items-center gap-1.5">
   <Label htmlFor="email">Email</Label>
   <Input type="email" id="email" placeholder="Enter your email" />
  </div>
 ),
};

/**
 * Email input type
 */
export const Email: Story = {
 args: {
  type: "email",
  placeholder: "example@domain.com",
 },
};

/**
 * Password input type
 */
export const Password: Story = {
 args: {
  type: "password",
  placeholder: "Enter password",
 },
};

/**
 * Number input type
 */
export const Number: Story = {
 args: {
  type: "number",
  placeholder: "Enter number",
  min: 0,
  max: 100,
 },
};

/**
 * Search input type
 */
export const Search: Story = {
 args: {
  type: "search",
  placeholder: "Search...",
 },
};

/**
 * Disabled input state
 */
export const Disabled: Story = {
 args: {
  disabled: true,
  placeholder: "Disabled input",
  value: "Cannot edit this",
 },
};

/**
 * Input with error styling
 */
export const WithError: Story = {
 render: () => (
  <div className="grid w-full max-w-sm items-center gap-1.5">
   <Label htmlFor="error-input">Email</Label>
   <Input
    type="email"
    id="error-input"
    placeholder="Enter your email"
    className="border-destructive focus-visible:ring-destructive"
    defaultValue="invalid-email"
   />
   <p className="text-sm text-destructive">
    Please enter a valid email address.
   </p>
  </div>
 ),
};

/**
 * Input with success styling
 */
export const WithSuccess: Story = {
 render: () => (
  <div className="grid w-full max-w-sm items-center gap-1.5">
   <Label htmlFor="success-input">Email</Label>
   <Input
    type="email"
    id="success-input"
    placeholder="Enter your email"
    className="border-green-500 focus-visible:ring-green-500"
    defaultValue="user@example.com"
   />
   <p className="text-sm text-green-600">Email address is valid.</p>
  </div>
 ),
};

/**
 * Input with helper text
 */
export const WithHelperText: Story = {
 render: () => (
  <div className="grid w-full max-w-sm items-center gap-1.5">
   <Label htmlFor="helper-input">Username</Label>
   <Input id="helper-input" placeholder="Choose a username" />
   <p className="text-sm text-muted-foreground">
    Username must be 3-20 characters long.
   </p>
  </div>
 ),
};

/**
 * Interactive controlled input
 */
export const Controlled: Story = {
 render: () => {
  const [value, setValue] = useState("");

  return (
   <div className="grid w-full max-w-sm items-center gap-1.5">
    <Label htmlFor="controlled-input">Controlled Input</Label>
    <Input
     id="controlled-input"
     value={value}
     onChange={(e) => setValue(e.target.value)}
     placeholder="Type something..."
    />
    <p className="text-sm text-muted-foreground">Value: {value || "Empty"}</p>
   </div>
  );
 },
};

/**
 * File input type
 */
export const File: Story = {
 args: {
  type: "file",
  accept: ".jpg,.jpeg,.png,.pdf",
 },
};

/**
 * Input size variations
 */
export const Sizes: Story = {
 render: () => (
  <div className="grid w-full max-w-sm items-center gap-4">
   <div>
    <Label>Small Input</Label>
    <Input className="h-8 text-sm" placeholder="Small input" />
   </div>
   <div>
    <Label>Default Input</Label>
    <Input placeholder="Default input" />
   </div>
   <div>
    <Label>Large Input</Label>
    <Input className="h-12 text-lg" placeholder="Large input" />
   </div>
  </div>
 ),
};
