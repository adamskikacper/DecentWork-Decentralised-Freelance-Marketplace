import type { Meta, StoryObj } from "@storybook/react";
import { Check, X, AlertTriangle, Star, Award, Shield } from "lucide-react";
import { Badge } from "./index";

/**
 * Badge component displays small status indicators, labels, and notifications.
 * Built with multiple variants and customizable styling options.
 */
const meta = {
 title: "UI/Badge",
 component: Badge,
 parameters: {
  layout: "centered",
 },
 argTypes: {
  variant: {
   control: { type: "select" },
   options: ["default", "secondary", "destructive", "outline"],
   description: "Visual style variant of the badge",
  },
  children: {
   control: "text",
   description: "Badge content",
  },
 },
 tags: ["autodocs"],
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Default badge
 */
export const Default: Story = {
 args: {
  children: "Badge",
 },
};

/**
 * Secondary variant with muted styling
 */
export const Secondary: Story = {
 args: {
  variant: "secondary",
  children: "Secondary",
 },
};

/**
 * Destructive variant for warnings/errors
 */
export const Destructive: Story = {
 args: {
  variant: "destructive",
  children: "Error",
 },
};

/**
 * Outline variant with border styling
 */
export const Outline: Story = {
 args: {
  variant: "outline",
  children: "Outline",
 },
};

/**
 * Badge with icon
 */
export const WithIcon: Story = {
 args: {
  children: (
   <>
    <Check className="w-3 h-3 mr-1" />
    Verified
   </>
  ),
 },
};

/**
 * Status badges with icons
 */
export const StatusBadges = {
 render: () => (
  <div className="flex flex-wrap gap-2">
   <Badge variant="default">
    <Check className="w-3 h-3 mr-1" />
    Active
   </Badge>
   <Badge variant="secondary">
    <AlertTriangle className="w-3 h-3 mr-1" />
    Pending
   </Badge>
   <Badge variant="destructive">
    <X className="w-3 h-3 mr-1" />
    Inactive
   </Badge>
   <Badge variant="outline">
    <Star className="w-3 h-3 mr-1" />
    Featured
   </Badge>
  </div>
 ),
};

/**
 * Notification badges
 */
export const Notifications = {
 render: () => (
  <div className="flex flex-wrap gap-2">
   <Badge>New</Badge>
   <Badge variant="destructive">99+</Badge>
   <Badge variant="secondary">3</Badge>
   <Badge variant="outline">12</Badge>
  </div>
 ),
};

/**
 * Badge sizes (custom styling)
 */
export const Sizes = {
 render: () => (
  <div className="flex items-center gap-4">
   <Badge className="text-xs px-1.5 py-0.5">Small</Badge>
   <Badge>Default</Badge>
   <Badge className="text-sm px-3 py-1">Large</Badge>
  </div>
 ),
};

/**
 * Category badges
 */
export const Categories = {
 render: () => (
  <div className="flex flex-wrap gap-2">
   <Badge>Technology</Badge>
   <Badge variant="secondary">Design</Badge>
   <Badge variant="outline">Business</Badge>
   <Badge>Marketing</Badge>
   <Badge variant="secondary">Development</Badge>
  </div>
 ),
};

/**
 * Achievement badges
 */
export const Achievements = {
 render: () => (
  <div className="flex flex-wrap gap-2">
   <Badge className="bg-yellow-500 hover:bg-yellow-600">
    <Award className="w-3 h-3 mr-1" />
    Gold Member
   </Badge>
   <Badge className="bg-gray-400 hover:bg-gray-500">
    <Shield className="w-3 h-3 mr-1" />
    Premium
   </Badge>
   <Badge className="bg-blue-500 hover:bg-blue-600">
    <Star className="w-3 h-3 mr-1" />
    Pro User
   </Badge>
  </div>
 ),
};

/**
 * All badge variants
 */
export const AllVariants = {
 render: () => (
  <div className="flex flex-wrap gap-2">
   <Badge>Default</Badge>
   <Badge variant="secondary">Secondary</Badge>
   <Badge variant="destructive">Destructive</Badge>
   <Badge variant="outline">Outline</Badge>
  </div>
 ),
};

/**
 * Interactive badges in context
 */
export const InContext = {
 render: () => (
  <div className="space-y-4">
   <div className="flex items-center gap-2">
    <span>User Status:</span>
    <Badge variant="outline">
     <Check className="w-3 h-3 mr-1" />
     Online
    </Badge>
   </div>

   <div className="flex items-center gap-2">
    <span>Subscription:</span>
    <Badge className="bg-gradient-to-r from-purple-500 to-pink-500">
     Premium
    </Badge>
   </div>

   <div className="flex items-center gap-2">
    <span>Notifications:</span>
    <Badge variant="destructive">5</Badge>
   </div>

   <div className="flex items-center gap-2">
    <span>Tags:</span>
    <Badge variant="secondary">React</Badge>
    <Badge variant="secondary">TypeScript</Badge>
    <Badge variant="secondary">UI/UX</Badge>
   </div>
  </div>
 ),
};
