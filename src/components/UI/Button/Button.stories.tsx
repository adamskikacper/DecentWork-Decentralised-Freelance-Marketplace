import type { Meta, StoryObj } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { Download, Mail, Loader2, ChevronRight } from "lucide-react";
import { Button } from "./index";

/**
 * Button component provides clickable actions with multiple variants, sizes, and states.
 * Built on top of Radix UI primitives with comprehensive styling options.
 */
const meta = {
 title: "UI/Button",
 component: Button,
 parameters: {
  layout: "centered",
 },
 argTypes: {
  variant: {
   control: { type: "select" },
   options: ["default", "destructive", "outline", "secondary", "ghost", "link"],
   description: "Visual style variant of the button",
  },
  size: {
   control: { type: "select" },
   options: ["default", "sm", "lg", "icon"],
   description: "Size of the button",
  },
  asChild: {
   control: "boolean",
   description: "Render as child component",
  },
  disabled: {
   control: "boolean",
   description: "Whether the button is disabled",
  },
 },
 tags: ["autodocs"],
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Default primary button
 */
export const Default: Story = {
 args: {
  children: "Button",
  onClick: action("button-click"),
 },
};

/**
 * Destructive variant for dangerous actions
 */
export const Destructive: Story = {
 args: {
  variant: "destructive",
  children: "Delete",
  onClick: action("delete-click"),
 },
};

/**
 * Outline variant with border styling
 */
export const Outline: Story = {
 args: {
  variant: "outline",
  children: "Outline",
  onClick: action("outline-click"),
 },
};

/**
 * Secondary variant with muted styling
 */
export const Secondary: Story = {
 args: {
  variant: "secondary",
  children: "Secondary",
  onClick: action("secondary-click"),
 },
};

/**
 * Ghost variant with minimal styling
 */
export const Ghost: Story = {
 args: {
  variant: "ghost",
  children: "Ghost",
  onClick: action("ghost-click"),
 },
};

/**
 * Link variant styled as text link
 */
export const Link: Story = {
 args: {
  variant: "link",
  children: "Link",
  onClick: action("link-click"),
 },
};

/**
 * Small size button
 */
export const Small: Story = {
 args: {
  size: "sm",
  children: "Small",
  onClick: action("small-click"),
 },
};

/**
 * Large size button
 */
export const Large: Story = {
 args: {
  size: "lg",
  children: "Large Button",
  onClick: action("large-click"),
 },
};

/**
 * Icon-only button
 */
export const Icon: Story = {
 args: {
  size: "icon",
  children: <ChevronRight className="h-4 w-4" />,
  onClick: action("icon-click"),
 },
};

/**
 * Button with leading icon
 */
export const WithIcon: Story = {
 args: {
  children: (
   <>
    <Mail className="mr-2 h-4 w-4" />
    Send Email
   </>
  ),
  onClick: action("with-icon-click"),
 },
};

/**
 * Disabled button state
 */
export const Disabled: Story = {
 args: {
  disabled: true,
  children: "Disabled",
 },
};

/**
 * Loading button with spinner
 */
export const Loading: Story = {
 args: {
  disabled: true,
  children: (
   <>
    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
    Loading...
   </>
  ),
 },
};

/**
 * Button as download link
 */
export const AsLink: Story = {
 args: {
  asChild: true,
  children: (
   <a href="/download" download>
    <Download className="mr-2 h-4 w-4" />
    Download File
   </a>
  ),
 },
};

/**
 * All button variants displayed together
 */
export const AllVariants = {
 render: () => (
  <div className="flex flex-wrap gap-4">
   <Button>Default</Button>
   <Button variant="destructive">Destructive</Button>
   <Button variant="outline">Outline</Button>
   <Button variant="secondary">Secondary</Button>
   <Button variant="ghost">Ghost</Button>
   <Button variant="link">Link</Button>
  </div>
 ),
};

/**
 * All button sizes displayed together
 */
export const AllSizes = {
 render: () => (
  <div className="flex items-center gap-4">
   <Button size="sm">Small</Button>
   <Button size="default">Default</Button>
   <Button size="lg">Large</Button>
   <Button size="icon">
    <ChevronRight className="h-4 w-4" />
   </Button>
  </div>
 ),
};
