import type { Meta, StoryObj } from "@storybook/react";
import { Toaster } from "./index";
import { Button } from "../Button";

// Mock toast function for demonstration
const toast = {
 success: (message: string) => console.log("Success toast:", message),
 error: (message: string) => console.log("Error toast:", message),
 warning: (message: string) => console.log("Warning toast:", message),
 info: (message: string) => console.log("Info toast:", message),
 loading: (message: string) => console.log("Loading toast:", message),
 promise: (promise: Promise<any>, options: any) =>
  console.log("Promise toast:", options),
 custom: (jsx: any) => console.log("Custom toast:", jsx),
 dismiss: (id?: string) => console.log("Dismiss toast:", id),
};

const meta: Meta<typeof Toaster> = {
 title: "UI/Sonner",
 component: Toaster,
 parameters: {
  layout: "centered",
  docs: {
   description: {
    component:
     "Sonner is a toast notification library component. This component provides the toast container and configuration. Use the toast functions to trigger notifications.",
   },
  },
 },
 tags: ["autodocs"],
 argTypes: {
  position: {
   control: "select",
   options: [
    "top-left",
    "top-center",
    "top-right",
    "bottom-left",
    "bottom-center",
    "bottom-right",
   ],
  },
  theme: {
   control: "select",
   options: ["light", "dark", "system"],
  },
  richColors: {
   control: "boolean",
  },
  expand: {
   control: "boolean",
  },
  visibleToasts: {
   control: "number",
  },
 },
};

export default meta;
type Story = StoryObj<typeof Toaster>;

/**
 * Basic toaster setup
 */
export const Default: Story = {
 args: {},
 render: (args) => (
  <div className="space-y-4">
   <Toaster {...args} />
   <div className="text-center space-y-2">
    <p className="text-sm text-gray-600">
     The Toaster component should be placed once in your app root.
    </p>
    <p className="text-sm text-gray-600">
     In a real app, you would use toast functions to trigger notifications.
    </p>
   </div>
  </div>
 ),
};

/**
 * Different positions
 */
export const Positions: Story = {
 render: () => (
  <div className="space-y-4 w-96">
   <h3 className="text-lg font-semibold text-center">Toast Positions</h3>
   <div className="grid grid-cols-3 gap-2 text-sm">
    <div className="p-3 border rounded text-center">
     <div className="font-medium">top-left</div>
     <div className="text-gray-600">↖️</div>
    </div>
    <div className="p-3 border rounded text-center">
     <div className="font-medium">top-center</div>
     <div className="text-gray-600">⬆️</div>
    </div>
    <div className="p-3 border rounded text-center">
     <div className="font-medium">top-right</div>
     <div className="text-gray-600">↗️</div>
    </div>
    <div className="p-3 border rounded text-center">
     <div className="font-medium">bottom-left</div>
     <div className="text-gray-600">↙️</div>
    </div>
    <div className="p-3 border rounded text-center">
     <div className="font-medium">bottom-center</div>
     <div className="text-gray-600">⬇️</div>
    </div>
    <div className="p-3 border rounded text-center">
     <div className="font-medium">bottom-right</div>
     <div className="text-gray-600">↘️</div>
    </div>
   </div>
   <Toaster position="top-right" />
  </div>
 ),
};

/**
 * Toast types demonstration
 */
export const ToastTypes: Story = {
 render: () => (
  <div className="space-y-4">
   <Toaster />
   <div className="space-y-3">
    <h3 className="text-lg font-semibold">Toast Types</h3>
    <div className="grid grid-cols-2 gap-3">
     <Button
      variant="default"
      onClick={() => toast.success("Operation completed successfully!")}
     >
      Success Toast
     </Button>
     <Button
      variant="destructive"
      onClick={() => toast.error("Something went wrong!")}
     >
      Error Toast
     </Button>
     <Button
      variant="outline"
      onClick={() => toast.warning("Please check your input")}
     >
      Warning Toast
     </Button>
     <Button
      variant="secondary"
      onClick={() => toast.info("Here is some information")}
     >
      Info Toast
     </Button>
     <Button variant="outline" onClick={() => toast.loading("Loading...")}>
      Loading Toast
     </Button>
     <Button variant="outline" onClick={() => toast.dismiss()}>
      Dismiss All
     </Button>
    </div>
    <p className="text-sm text-gray-600">
     Note: In Storybook, these buttons log to console. In a real app, they would
     show toast notifications.
    </p>
   </div>
  </div>
 ),
};

/**
 * Promise toasts
 */
export const PromiseToasts: Story = {
 render: () => (
  <div className="space-y-4">
   <Toaster />
   <div className="space-y-3">
    <h3 className="text-lg font-semibold">Promise Toasts</h3>
    <div className="space-y-2">
     <Button
      onClick={() => {
       const promise = new Promise((resolve) => setTimeout(resolve, 2000));
       toast.promise(promise, {
        loading: "Saving data...",
        success: "Data saved successfully!",
        error: "Failed to save data",
       });
      }}
     >
      Save Data (Success)
     </Button>
     <Button
      variant="outline"
      onClick={() => {
       const promise = new Promise((_, reject) => setTimeout(reject, 2000));
       toast.promise(promise, {
        loading: "Uploading file...",
        success: "File uploaded!",
        error: "Upload failed",
       });
      }}
     >
      Upload File (Error)
     </Button>
    </div>
    <p className="text-sm text-gray-600">
     Promise toasts automatically update from loading to success/error states.
    </p>
   </div>
  </div>
 ),
};

/**
 * Custom toasts
 */
export const CustomToasts: Story = {
 render: () => (
  <div className="space-y-4">
   <Toaster />
   <div className="space-y-3">
    <h3 className="text-lg font-semibold">Custom Toasts</h3>
    <div className="space-y-2">
     <Button
      onClick={() =>
       toast.custom(
        <div className="flex items-center space-x-3 p-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg">
         <span className="text-2xl">🎉</span>
         <div>
          <div className="font-semibold">Congratulations!</div>
          <div className="text-sm opacity-90">
           You've unlocked a new achievement
          </div>
         </div>
        </div>
       )
      }
     >
      Achievement Toast
     </Button>
     <Button
      variant="outline"
      onClick={() =>
       toast.custom(
        <div className="flex items-center justify-between p-4 bg-blue-50 border border-blue-200 rounded-lg">
         <div className="flex items-center space-x-3">
          <span className="text-2xl">📧</span>
          <div>
           <div className="font-semibold text-blue-900">New Message</div>
           <div className="text-sm text-blue-700">From: john@example.com</div>
          </div>
         </div>
         <Button size="sm">View</Button>
        </div>
       )
      }
     >
      Message Toast
     </Button>
    </div>
    <p className="text-sm text-gray-600">
     Custom toasts allow you to render any JSX content.
    </p>
   </div>
  </div>
 ),
};

/**
 * Themed toaster
 */
export const Themes: Story = {
 render: () => (
  <div className="space-y-4">
   <div className="grid grid-cols-3 gap-4">
    <div className="space-y-2">
     <h4 className="font-semibold">Light Theme</h4>
     <div className="p-4 bg-white border rounded-lg">
      <Toaster theme="light" richColors />
      <Button size="sm" onClick={() => toast.success("Light theme toast")}>
       Show Toast
      </Button>
     </div>
    </div>

    <div className="space-y-2">
     <h4 className="font-semibold">Dark Theme</h4>
     <div className="p-4 bg-gray-900 border rounded-lg">
      <Toaster theme="dark" richColors />
      <Button
       size="sm"
       variant="outline"
       onClick={() => toast.success("Dark theme toast")}
      >
       Show Toast
      </Button>
     </div>
    </div>

    <div className="space-y-2">
     <h4 className="font-semibold">System Theme</h4>
     <div className="p-4 bg-gray-100 border rounded-lg">
      <Toaster theme="system" richColors />
      <Button
       size="sm"
       variant="secondary"
       onClick={() => toast.success("System theme toast")}
      >
       Show Toast
      </Button>
     </div>
    </div>
   </div>
  </div>
 ),
};

/**
 * Rich colors
 */
export const RichColors: Story = {
 render: () => (
  <div className="space-y-4">
   <Toaster richColors />
   <div className="space-y-3">
    <h3 className="text-lg font-semibold">Rich Colors</h3>
    <div className="flex space-x-2">
     <Button
      className="bg-green-600 hover:bg-green-700"
      onClick={() => toast.success("Rich success color")}
     >
      Success
     </Button>
     <Button
      className="bg-red-600 hover:bg-red-700"
      onClick={() => toast.error("Rich error color")}
     >
      Error
     </Button>
     <Button
      className="bg-yellow-600 hover:bg-yellow-700"
      onClick={() => toast.warning("Rich warning color")}
     >
      Warning
     </Button>
     <Button
      className="bg-blue-600 hover:bg-blue-700"
      onClick={() => toast.info("Rich info color")}
     >
      Info
     </Button>
    </div>
    <p className="text-sm text-gray-600">
     Rich colors provide more vibrant and distinct toast appearances.
    </p>
   </div>
  </div>
 ),
};

/**
 * Configuration options
 */
export const Configuration: Story = {
 render: () => (
  <div className="space-y-4">
   <Toaster position="top-center" expand={true} visibleToasts={5} richColors />
   <div className="space-y-3">
    <h3 className="text-lg font-semibold">Configuration</h3>
    <div className="space-y-2 text-sm">
     <div>
      <strong>Position:</strong> top-center
     </div>
     <div>
      <strong>Expand:</strong> true (toasts expand on hover)
     </div>
     <div>
      <strong>Visible Toasts:</strong> 5 (max toasts shown)
     </div>
     <div>
      <strong>Rich Colors:</strong> true
     </div>
    </div>
    <Button
     onClick={() => {
      for (let i = 1; i <= 7; i++) {
       setTimeout(() => {
        toast.info(`Toast ${i} - Testing visible limit`);
       }, i * 200);
      }
     }}
    >
     Show Multiple Toasts
    </Button>
    <p className="text-sm text-gray-600">
     Only 5 toasts will be visible at once with this configuration.
    </p>
   </div>
  </div>
 ),
};
