import type { Meta, StoryObj } from "@storybook/react";
import { User } from "lucide-react";
import { Avatar, AvatarImage, AvatarFallback } from "./index";

/**
 * Avatar component displays profile pictures with fallback support.
 * Built on Radix UI Avatar primitive with comprehensive size and state options.
 */
const meta = {
 title: "UI/Avatar",
 component: Avatar,
 parameters: {
  layout: "centered",
 },
 tags: ["autodocs"],
} satisfies Meta<typeof Avatar>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Default avatar with image
 */
export const Default: Story = {
 render: () => (
  <Avatar>
   <AvatarImage
    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=face"
    alt="User"
   />
   <AvatarFallback>JD</AvatarFallback>
  </Avatar>
 ),
};

/**
 * Avatar with fallback (no image)
 */
export const Fallback: Story = {
 render: () => (
  <Avatar>
   <AvatarFallback>AB</AvatarFallback>
  </Avatar>
 ),
};

/**
 * Avatar with fallback icon
 */
export const FallbackIcon: Story = {
 render: () => (
  <Avatar>
   <AvatarFallback>
    <User className="h-4 w-4" />
   </AvatarFallback>
  </Avatar>
 ),
};

/**
 * Avatar sizes
 */
export const Sizes = {
 render: () => (
  <div className="flex items-center gap-4">
   <Avatar className="h-6 w-6">
    <AvatarImage src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=24&h=24&fit=crop&crop=face" />
    <AvatarFallback className="text-xs">XS</AvatarFallback>
   </Avatar>

   <Avatar className="h-8 w-8">
    <AvatarImage src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=face" />
    <AvatarFallback className="text-xs">SM</AvatarFallback>
   </Avatar>

   <Avatar>
    <AvatarImage src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face" />
    <AvatarFallback>MD</AvatarFallback>
   </Avatar>

   <Avatar className="h-12 w-12">
    <AvatarImage src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=48&h=48&fit=crop&crop=face" />
    <AvatarFallback>LG</AvatarFallback>
   </Avatar>

   <Avatar className="h-16 w-16">
    <AvatarImage src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=64&h=64&fit=crop&crop=face" />
    <AvatarFallback className="text-lg">XL</AvatarFallback>
   </Avatar>
  </div>
 ),
};

/**
 * Avatar group
 */
export const Group = {
 render: () => (
  <div className="flex -space-x-2">
   <Avatar className="border-2 border-white">
    <AvatarImage src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face" />
    <AvatarFallback>JD</AvatarFallback>
   </Avatar>
   <Avatar className="border-2 border-white">
    <AvatarImage src="https://images.unsplash.com/photo-1494790108755-2616b332c3f2?w=40&h=40&fit=crop&crop=face" />
    <AvatarFallback>AB</AvatarFallback>
   </Avatar>
   <Avatar className="border-2 border-white">
    <AvatarImage src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face" />
    <AvatarFallback>CD</AvatarFallback>
   </Avatar>
   <Avatar className="border-2 border-white">
    <AvatarFallback>+3</AvatarFallback>
   </Avatar>
  </div>
 ),
};

/**
 * Avatar with status indicator
 */
export const WithStatus = {
 render: () => (
  <div className="flex gap-6">
   <div className="relative">
    <Avatar>
     <AvatarImage src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face" />
     <AvatarFallback>JD</AvatarFallback>
    </Avatar>
    <div className="absolute bottom-0 right-0 h-3 w-3 bg-green-500 border-2 border-white rounded-full"></div>
   </div>

   <div className="relative">
    <Avatar>
     <AvatarImage src="https://images.unsplash.com/photo-1494790108755-2616b332c3f2?w=40&h=40&fit=crop&crop=face" />
     <AvatarFallback>SM</AvatarFallback>
    </Avatar>
    <div className="absolute bottom-0 right-0 h-3 w-3 bg-yellow-500 border-2 border-white rounded-full"></div>
   </div>

   <div className="relative">
    <Avatar>
     <AvatarImage src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face" />
     <AvatarFallback>MJ</AvatarFallback>
    </Avatar>
    <div className="absolute bottom-0 right-0 h-3 w-3 bg-gray-400 border-2 border-white rounded-full"></div>
   </div>
  </div>
 ),
};

/**
 * Colored fallback avatars
 */
export const ColoredFallbacks = {
 render: () => (
  <div className="flex gap-4">
   <Avatar>
    <AvatarFallback className="bg-red-500 text-white">AB</AvatarFallback>
   </Avatar>
   <Avatar>
    <AvatarFallback className="bg-blue-500 text-white">CD</AvatarFallback>
   </Avatar>
   <Avatar>
    <AvatarFallback className="bg-green-500 text-white">EF</AvatarFallback>
   </Avatar>
   <Avatar>
    <AvatarFallback className="bg-purple-500 text-white">GH</AvatarFallback>
   </Avatar>
   <Avatar>
    <AvatarFallback className="bg-orange-500 text-white">IJ</AvatarFallback>
   </Avatar>
  </div>
 ),
};

/**
 * Avatar in user profile context
 */
export const InContext = {
 render: () => (
  <div className="flex items-center gap-4">
   <Avatar className="h-12 w-12">
    <AvatarImage src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=48&h=48&fit=crop&crop=face" />
    <AvatarFallback>JD</AvatarFallback>
   </Avatar>
   <div>
    <p className="font-medium">John Doe</p>
    <p className="text-sm text-muted-foreground">john.doe@example.com</p>
   </div>
  </div>
 ),
};

/**
 * Loading state simulation
 */
export const Loading = {
 render: () => (
  <Avatar>
   <AvatarFallback className="animate-pulse bg-muted">
    <User className="h-4 w-4" />
   </AvatarFallback>
  </Avatar>
 ),
};

/**
 * Different fallback strategies
 */
export const FallbackStrategies = {
 render: () => (
  <div className="grid grid-cols-2 gap-4">
   <div className="space-y-2">
    <p className="text-sm font-medium">Initials</p>
    <div className="flex gap-2">
     <Avatar>
      <AvatarFallback>JD</AvatarFallback>
     </Avatar>
     <Avatar>
      <AvatarFallback>SM</AvatarFallback>
     </Avatar>
     <Avatar>
      <AvatarFallback>AB</AvatarFallback>
     </Avatar>
    </div>
   </div>

   <div className="space-y-2">
    <p className="text-sm font-medium">Icons</p>
    <div className="flex gap-2">
     <Avatar>
      <AvatarFallback>
       <User className="h-4 w-4" />
      </AvatarFallback>
     </Avatar>
     <Avatar>
      <AvatarFallback>
       <User className="h-4 w-4" />
      </AvatarFallback>
     </Avatar>
     <Avatar>
      <AvatarFallback>
       <User className="h-4 w-4" />
      </AvatarFallback>
     </Avatar>
    </div>
   </div>
  </div>
 ),
};
