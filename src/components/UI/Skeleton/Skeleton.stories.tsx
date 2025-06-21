import type { Meta, StoryObj } from "@storybook/react";
import { Skeleton } from "./index";

/**
 * Skeleton component provides loading placeholders with animated effects.
 * Used to indicate content is loading while maintaining layout structure.
 */
const meta = {
 title: "UI/Skeleton",
 component: Skeleton,
 parameters: {
  layout: "centered",
 },
 tags: ["autodocs"],
} satisfies Meta<typeof Skeleton>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Default rectangular skeleton
 */
export const Default: Story = {
 render: () => <Skeleton className="h-4 w-[250px]" />,
};

/**
 * Circle skeleton for avatars
 */
export const Circle: Story = {
 render: () => <Skeleton className="h-12 w-12 rounded-full" />,
};

/**
 * Card skeleton layout
 */
export const Card = {
 render: () => (
  <div className="flex items-center space-x-4">
   <Skeleton className="h-12 w-12 rounded-full" />
   <div className="space-y-2">
    <Skeleton className="h-4 w-[250px]" />
    <Skeleton className="h-4 w-[200px]" />
   </div>
  </div>
 ),
};

/**
 * Text skeleton lines
 */
export const TextLines = {
 render: () => (
  <div className="space-y-2">
   <Skeleton className="h-4 w-full" />
   <Skeleton className="h-4 w-full" />
   <Skeleton className="h-4 w-3/4" />
   <Skeleton className="h-4 w-1/2" />
  </div>
 ),
};

/**
 * Button skeleton
 */
export const Button = {
 render: () => <Skeleton className="h-10 w-[100px] rounded-md" />,
};

/**
 * Input skeleton
 */
export const Input = {
 render: () => <Skeleton className="h-10 w-full rounded-md" />,
};

/**
 * Different sizes
 */
export const Sizes = {
 render: () => (
  <div className="space-y-4">
   <div className="space-y-2">
    <p className="text-sm font-medium">Small</p>
    <Skeleton className="h-2 w-[200px]" />
   </div>
   <div className="space-y-2">
    <p className="text-sm font-medium">Medium</p>
    <Skeleton className="h-4 w-[250px]" />
   </div>
   <div className="space-y-2">
    <p className="text-sm font-medium">Large</p>
    <Skeleton className="h-6 w-[300px]" />
   </div>
  </div>
 ),
};

/**
 * Article skeleton layout
 */
export const Article = {
 render: () => (
  <div className="space-y-4 w-full max-w-md">
   <Skeleton className="h-6 w-3/4" />
   <div className="space-y-2">
    <Skeleton className="h-4 w-full" />
    <Skeleton className="h-4 w-full" />
    <Skeleton className="h-4 w-2/3" />
   </div>
   <Skeleton className="h-32 w-full rounded-md" />
   <div className="space-y-2">
    <Skeleton className="h-4 w-full" />
    <Skeleton className="h-4 w-5/6" />
   </div>
  </div>
 ),
};

/**
 * List skeleton
 */
export const List = {
 render: () => (
  <div className="space-y-3">
   {Array.from({ length: 5 }).map((_, i) => (
    <div key={i} className="flex items-center space-x-4">
     <Skeleton className="h-8 w-8 rounded-full" />
     <div className="space-y-2 flex-1">
      <Skeleton className="h-3 w-full" />
      <Skeleton className="h-3 w-2/3" />
     </div>
    </div>
   ))}
  </div>
 ),
};

/**
 * Table skeleton
 */
export const Table = {
 render: () => (
  <div className="space-y-3">
   <div className="grid grid-cols-4 gap-4">
    <Skeleton className="h-6 w-full" />
    <Skeleton className="h-6 w-full" />
    <Skeleton className="h-6 w-full" />
    <Skeleton className="h-6 w-full" />
   </div>
   {Array.from({ length: 4 }).map((_, i) => (
    <div key={i} className="grid grid-cols-4 gap-4">
     <Skeleton className="h-4 w-full" />
     <Skeleton className="h-4 w-full" />
     <Skeleton className="h-4 w-full" />
     <Skeleton className="h-4 w-full" />
    </div>
   ))}
  </div>
 ),
};

/**
 * Dashboard skeleton
 */
export const Dashboard = {
 render: () => (
  <div className="space-y-6 w-full max-w-4xl">
   <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
    <div className="space-y-2">
     <Skeleton className="h-20 w-full rounded-lg" />
    </div>
    <div className="space-y-2">
     <Skeleton className="h-20 w-full rounded-lg" />
    </div>
    <div className="space-y-2">
     <Skeleton className="h-20 w-full rounded-lg" />
    </div>
   </div>
   <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
    <div className="space-y-4">
     <Skeleton className="h-6 w-1/3" />
     <Skeleton className="h-40 w-full rounded-lg" />
    </div>
    <div className="space-y-4">
     <Skeleton className="h-6 w-1/3" />
     <div className="space-y-3">
      {Array.from({ length: 4 }).map((_, i) => (
       <div key={i} className="flex items-center space-x-3">
        <Skeleton className="h-6 w-6 rounded-full" />
        <Skeleton className="h-4 flex-1" />
       </div>
      ))}
     </div>
    </div>
   </div>
  </div>
 ),
};

/**
 * Form skeleton
 */
export const Form = {
 render: () => (
  <div className="space-y-4 w-full max-w-sm">
   <div className="space-y-2">
    <Skeleton className="h-4 w-1/4" />
    <Skeleton className="h-10 w-full rounded-md" />
   </div>
   <div className="space-y-2">
    <Skeleton className="h-4 w-1/3" />
    <Skeleton className="h-10 w-full rounded-md" />
   </div>
   <div className="space-y-2">
    <Skeleton className="h-4 w-1/5" />
    <Skeleton className="h-20 w-full rounded-md" />
   </div>
   <Skeleton className="h-10 w-full rounded-md" />
  </div>
 ),
};
