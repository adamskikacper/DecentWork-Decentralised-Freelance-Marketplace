import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./button";
import { LucideHeart, LucideArrowRight } from "lucide-react";

/**
 * Button stories showcasing different variants, sizes, and states
 */
const meta = {
 title: "UI/Button",
 component: Button,
 parameters: {
  layout: "centered",
 },
 tags: ["autodocs"],
 argTypes: {
  variant: {
   control: { type: "select" },
   options: ["default", "destructive", "outline", "secondary", "ghost", "link"],
   description: "The visual style variant of the button",
  },
  size: {
   control: { type: "select" },
   options: ["default", "sm", "lg", "icon"],
   description: "The size of the button",
  },
  disabled: {
   control: "boolean",
   description: "Whether the button is disabled",
  },
  className: {
   control: "text",
   description: "Additional CSS classes to apply to the button",
  },
  asChild: {
   control: "boolean",
   description: "Whether to render the button as a child element",
  },
 },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Default button with standard styling
 */
export const Default: Story = {
 args: {
  children: "Default Button",
  variant: "default",
  size: "default",
 },
};

/**
 * Destructive button for actions like delete or remove
 */
export const Destructive: Story = {
 args: {
  children: "Destructive Button",
  variant: "destructive",
 },
};

/**
 * Outline button with a border and transparent background
 */
export const Outline: Story = {
 args: {
  children: "Outline Button",
  variant: "outline",
 },
};

/**
 * Secondary button with less emphasis than the primary
 */
export const Secondary: Story = {
 args: {
  children: "Secondary Button",
  variant: "secondary",
 },
};

/**
 * Ghost button that only shows on hover
 */
export const Ghost: Story = {
 args: {
  children: "Ghost Button",
  variant: "ghost",
 },
};

/**
 * Link button that appears like a hyperlink
 */
export const Link: Story = {
 args: {
  children: "Link Button",
  variant: "link",
 },
};

/**
 * Button with an icon before the text
 */
export const WithIcon: Story = {
 args: {
  children: (
   <>
    <LucideHeart className="mr-2 h-4 w-4" />
    Like
   </>
  ),
  variant: "default",
 },
};

/**
 * Button with an icon after the text
 */
export const IconRight: Story = {
 args: {
  children: (
   <>
    Next
    <LucideArrowRight className="ml-2 h-4 w-4" />
   </>
  ),
  variant: "default",
 },
};

/**
 * Button with only an icon and no text
 */
export const IconOnly: Story = {
 args: {
  children: <LucideHeart className="h-4 w-4" />,
  variant: "default",
  size: "icon",
  "aria-label": "Like",
 },
};

/**
 * Button in a disabled state
 */
export const Disabled: Story = {
 args: {
  children: "Disabled Button",
  disabled: true,
 },
};

/**
 * Button in a loading state
 */
export const Loading: Story = {
 args: {
  children: "Loading...",
  disabled: true,
 },
};

/**
 * Small-sized button
 */
export const Small: Story = {
 args: {
  children: "Small Button",
  size: "sm",
 },
};

/**
 * Large-sized button
 */
export const Large: Story = {
 args: {
  children: "Large Button",
  size: "lg",
 },
};
