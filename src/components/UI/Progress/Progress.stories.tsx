import type { Meta, StoryObj } from "@storybook/react";
import { useState, useEffect } from "react";
import { Progress } from "./index";

/**
 * Progress component displays completion progress with customizable styling.
 * Built on Radix UI Progress primitive with value and color options.
 */
const meta = {
 title: "UI/Progress",
 component: Progress,
 parameters: {
  layout: "centered",
 },
 argTypes: {
  value: {
   control: { type: "range", min: 0, max: 100, step: 1 },
   description: "Progress value (0-100)",
  },
  max: {
   control: { type: "number", min: 1, max: 1000 },
   description: "Maximum value",
  },
 },
 tags: ["autodocs"],
} satisfies Meta<typeof Progress>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Default progress bar
 */
export const Default: Story = {
 args: {
  value: 50,
 },
};

/**
 * Different progress values
 */
export const Values = {
 render: () => (
  <div className="space-y-4 w-full max-w-md">
   <div className="space-y-2">
    <p className="text-sm font-medium">Empty (0%)</p>
    <Progress value={0} />
   </div>
   <div className="space-y-2">
    <p className="text-sm font-medium">Quarter (25%)</p>
    <Progress value={25} />
   </div>
   <div className="space-y-2">
    <p className="text-sm font-medium">Half (50%)</p>
    <Progress value={50} />
   </div>
   <div className="space-y-2">
    <p className="text-sm font-medium">Three Quarters (75%)</p>
    <Progress value={75} />
   </div>
   <div className="space-y-2">
    <p className="text-sm font-medium">Complete (100%)</p>
    <Progress value={100} />
   </div>
  </div>
 ),
};

/**
 * Different sizes
 */
export const Sizes = {
 render: () => (
  <div className="space-y-4 w-full max-w-md">
   <div className="space-y-2">
    <p className="text-sm font-medium">Small</p>
    <Progress value={60} className="h-1" />
   </div>
   <div className="space-y-2">
    <p className="text-sm font-medium">Default</p>
    <Progress value={60} />
   </div>
   <div className="space-y-2">
    <p className="text-sm font-medium">Large</p>
    <Progress value={60} className="h-3" />
   </div>
  </div>
 ),
};

/**
 * Colored progress bars
 */
export const Colors = {
 render: () => (
  <div className="space-y-4 w-full max-w-md">
   <div className="space-y-2">
    <p className="text-sm font-medium">Default</p>
    <Progress value={70} />
   </div>
   <div className="space-y-2">
    <p className="text-sm font-medium">Success</p>
    <Progress value={85} className="[&>div]:bg-green-500" />
   </div>
   <div className="space-y-2">
    <p className="text-sm font-medium">Warning</p>
    <Progress value={45} className="[&>div]:bg-yellow-500" />
   </div>
   <div className="space-y-2">
    <p className="text-sm font-medium">Danger</p>
    <Progress value={25} className="[&>div]:bg-red-500" />
   </div>
  </div>
 ),
};

/**
 * Animated progress
 */
export const Animated: Story = {
 render: () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
   const timer = setTimeout(() => {
    if (progress < 100) {
     setProgress(progress + 1);
    }
   }, 50);
   return () => clearTimeout(timer);
  }, [progress]);

  return (
   <div className="space-y-2 w-full max-w-md">
    <div className="flex justify-between">
     <p className="text-sm font-medium">Uploading...</p>
     <p className="text-sm text-muted-foreground">{progress}%</p>
    </div>
    <Progress value={progress} />
   </div>
  );
 },
};

/**
 * Indeterminate progress (loading)
 */
export const Indeterminate = {
 render: () => (
  <div className="space-y-2 w-full max-w-md">
   <p className="text-sm font-medium">Loading...</p>
   <div className="w-full bg-secondary rounded-full h-2 overflow-hidden">
    <div className="h-full bg-primary rounded-full animate-pulse bg-gradient-to-r from-transparent via-primary to-transparent bg-[length:200%_100%] animate-[shimmer_2s_infinite]" />
   </div>
  </div>
 ),
};

/**
 * Progress with label
 */
export const WithLabel = {
 render: () => (
  <div className="space-y-4 w-full max-w-md">
   <div className="space-y-2">
    <div className="flex justify-between">
     <p className="text-sm font-medium">Download Progress</p>
     <p className="text-sm text-muted-foreground">32/100 MB</p>
    </div>
    <Progress value={32} />
   </div>

   <div className="space-y-2">
    <div className="flex justify-between">
     <p className="text-sm font-medium">Installation</p>
     <p className="text-sm text-muted-foreground">8/12 steps</p>
    </div>
    <Progress value={67} />
   </div>

   <div className="space-y-2">
    <div className="flex justify-between">
     <p className="text-sm font-medium">Sync Status</p>
     <p className="text-sm text-muted-foreground">95%</p>
    </div>
    <Progress value={95} className="[&>div]:bg-green-500" />
   </div>
  </div>
 ),
};

/**
 * File upload progress
 */
export const FileUpload = {
 render: () => (
  <div className="space-y-4 w-full max-w-md">
   <div className="space-y-2">
    <div className="flex items-center justify-between">
     <div className="flex items-center gap-2">
      <div className="w-8 h-8 bg-blue-100 rounded-md flex items-center justify-center">
       <span className="text-xs font-mono">PDF</span>
      </div>
      <span className="text-sm font-medium">document.pdf</span>
     </div>
     <span className="text-xs text-muted-foreground">2.4 MB</span>
    </div>
    <Progress value={78} />
    <p className="text-xs text-muted-foreground">78% complete</p>
   </div>

   <div className="space-y-2">
    <div className="flex items-center justify-between">
     <div className="flex items-center gap-2">
      <div className="w-8 h-8 bg-green-100 rounded-md flex items-center justify-center">
       <span className="text-xs font-mono">IMG</span>
      </div>
      <span className="text-sm font-medium">photo.jpg</span>
     </div>
     <span className="text-xs text-muted-foreground">1.8 MB</span>
    </div>
    <Progress value={100} className="[&>div]:bg-green-500" />
    <p className="text-xs text-green-600">Upload complete</p>
   </div>
  </div>
 ),
};

/**
 * Step progress
 */
export const Steps = {
 render: () => (
  <div className="space-y-6 w-full max-w-md">
   <div className="flex justify-between text-sm">
    <span className="font-medium">Step 2 of 4</span>
    <span className="text-muted-foreground">50% complete</span>
   </div>
   <Progress value={50} />

   <div className="flex justify-between">
    <div className="flex flex-col items-center gap-1">
     <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-medium">
      ✓
     </div>
     <span className="text-xs">Setup</span>
    </div>
    <div className="flex flex-col items-center gap-1">
     <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-medium">
      2
     </div>
     <span className="text-xs">Config</span>
    </div>
    <div className="flex flex-col items-center gap-1">
     <div className="w-8 h-8 bg-muted text-muted-foreground rounded-full flex items-center justify-center text-sm font-medium">
      3
     </div>
     <span className="text-xs">Review</span>
    </div>
    <div className="flex flex-col items-center gap-1">
     <div className="w-8 h-8 bg-muted text-muted-foreground rounded-full flex items-center justify-center text-sm font-medium">
      4
     </div>
     <span className="text-xs">Done</span>
    </div>
   </div>
  </div>
 ),
};
