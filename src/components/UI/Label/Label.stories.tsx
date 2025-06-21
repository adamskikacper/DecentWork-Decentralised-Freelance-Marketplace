import type { Meta, StoryObj } from "@storybook/react";
import { Label } from "./index";
import { Input } from "../Input";
import { Checkbox } from "../Checkbox";
import { RadioGroup, RadioGroupItem } from "../RadioGroup";

/**
 * Label component provides accessible labels for form controls.
 * Built on Radix UI Label primitive with proper form association.
 */
const meta = {
 title: "UI/Label",
 component: Label,
 parameters: {
  layout: "centered",
 },
 argTypes: {
  htmlFor: {
   control: "text",
   description: "Associates label with form control by ID",
  },
  children: {
   control: "text",
   description: "Label text content",
  },
 },
 tags: ["autodocs"],
} satisfies Meta<typeof Label>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Basic label
 */
export const Default: Story = {
 args: {
  children: "Label",
 },
};

/**
 * Label associated with input
 */
export const WithInput: Story = {
 render: () => (
  <div className="grid w-full max-w-sm items-center gap-1.5">
   <Label htmlFor="name">Name</Label>
   <Input type="text" id="name" placeholder="Enter your name" />
  </div>
 ),
};

/**
 * Label with required indicator
 */
export const Required: Story = {
 render: () => (
  <div className="grid w-full max-w-sm items-center gap-1.5">
   <Label htmlFor="email-required">
    Email <span className="text-destructive">*</span>
   </Label>
   <Input type="email" id="email-required" placeholder="Enter your email" />
  </div>
 ),
};

/**
 * Label with checkbox
 */
export const WithCheckbox: Story = {
 render: () => (
  <div className="flex items-center space-x-2">
   <Checkbox id="terms" />
   <Label
    htmlFor="terms"
    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
   >
    Accept terms and conditions
   </Label>
  </div>
 ),
};

/**
 * Label with radio group
 */
export const WithRadioGroup: Story = {
 render: () => (
  <div className="grid gap-3">
   <Label className="text-base font-medium">Notification Method</Label>
   <RadioGroup defaultValue="email" className="grid gap-2">
    <div className="flex items-center space-x-2">
     <RadioGroupItem value="email" id="r1" />
     <Label htmlFor="r1" className="text-sm">
      Email
     </Label>
    </div>
    <div className="flex items-center space-x-2">
     <RadioGroupItem value="sms" id="r2" />
     <Label htmlFor="r2" className="text-sm">
      SMS
     </Label>
    </div>
    <div className="flex items-center space-x-2">
     <RadioGroupItem value="push" id="r3" />
     <Label htmlFor="r3" className="text-sm">
      Push Notification
     </Label>
    </div>
   </RadioGroup>
  </div>
 ),
};

/**
 * Disabled label
 */
export const Disabled: Story = {
 render: () => (
  <div className="grid w-full max-w-sm items-center gap-1.5">
   <Label htmlFor="disabled-input" className="opacity-50">
    Disabled Field
   </Label>
   <Input type="text" id="disabled-input" placeholder="Cannot edit" disabled />
  </div>
 ),
};

/**
 * Label with error state
 */
export const WithError: Story = {
 render: () => (
  <div className="grid w-full max-w-sm items-center gap-1.5">
   <Label htmlFor="error-input" className="text-destructive">
    Password
   </Label>
   <Input
    type="password"
    id="error-input"
    className="border-destructive focus-visible:ring-destructive"
    placeholder="Enter password"
   />
   <p className="text-sm text-destructive">Password is required</p>
  </div>
 ),
};

/**
 * Label with description
 */
export const WithDescription: Story = {
 render: () => (
  <div className="grid w-full max-w-sm items-center gap-1.5">
   <Label htmlFor="username">Username</Label>
   <Input type="text" id="username" placeholder="johndoe" />
   <p className="text-sm text-muted-foreground">
    Your username will be visible to other users.
   </p>
  </div>
 ),
};

/**
 * Label size variations
 */
export const Sizes: Story = {
 render: () => (
  <div className="grid gap-4">
   <div>
    <Label className="text-xs">Small Label</Label>
    <Input placeholder="Small input" className="mt-1 h-8" />
   </div>
   <div>
    <Label className="text-sm">Default Label</Label>
    <Input placeholder="Default input" className="mt-1" />
   </div>
   <div>
    <Label className="text-base">Large Label</Label>
    <Input placeholder="Large input" className="mt-1 h-12" />
   </div>
  </div>
 ),
};

/**
 * Label positioning variations
 */
export const Positioning: Story = {
 render: () => (
  <div className="grid gap-6">
   {/* Top aligned (default) */}
   <div className="grid gap-1.5">
    <Label htmlFor="top">Top Aligned Label</Label>
    <Input id="top" placeholder="Label above input" />
   </div>

   {/* Side aligned */}
   <div className="grid grid-cols-3 gap-4 items-center">
    <Label htmlFor="side">Side Label:</Label>
    <Input id="side" placeholder="Label beside input" className="col-span-2" />
   </div>

   {/* Inline with checkbox */}
   <div className="flex items-center gap-2">
    <Checkbox id="inline" />
    <Label htmlFor="inline">Inline checkbox label</Label>
   </div>
  </div>
 ),
};
