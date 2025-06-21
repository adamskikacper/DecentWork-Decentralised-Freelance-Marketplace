import type { Meta, StoryObj } from "@storybook/react";
import {
 AlertTriangle,
 CheckCircle,
 Info,
 XCircle,
 Terminal,
} from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "./index";

/**
 * Alert component displays important messages with contextual styling.
 * Built with semantic HTML and comprehensive variant options.
 */
const meta = {
 title: "UI/Alert",
 component: Alert,
 parameters: {
  layout: "centered",
 },
 argTypes: {
  variant: {
   control: { type: "select" },
   options: ["default", "destructive"],
   description: "Visual style variant of the alert",
  },
 },
 tags: ["autodocs"],
} satisfies Meta<typeof Alert>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Default alert
 */
export const Default: Story = {
 render: () => (
  <Alert className="max-w-md">
   <Info className="h-4 w-4" />
   <AlertTitle>Information</AlertTitle>
   <AlertDescription>
    This is a default alert with some important information.
   </AlertDescription>
  </Alert>
 ),
};

/**
 * Destructive alert for errors
 */
export const Destructive: Story = {
 render: () => (
  <Alert variant="destructive" className="max-w-md">
   <XCircle className="h-4 w-4" />
   <AlertTitle>Error</AlertTitle>
   <AlertDescription>
    Something went wrong. Please try again or contact support.
   </AlertDescription>
  </Alert>
 ),
};

/**
 * Success alert (custom styling)
 */
export const Success = {
 render: () => (
  <Alert className="max-w-md border-green-200 bg-green-50 text-green-900">
   <CheckCircle className="h-4 w-4 text-green-600" />
   <AlertTitle className="text-green-800">Success</AlertTitle>
   <AlertDescription className="text-green-700">
    Your action was completed successfully.
   </AlertDescription>
  </Alert>
 ),
};

/**
 * Warning alert (custom styling)
 */
export const Warning = {
 render: () => (
  <Alert className="max-w-md border-yellow-200 bg-yellow-50 text-yellow-900">
   <AlertTriangle className="h-4 w-4 text-yellow-600" />
   <AlertTitle className="text-yellow-800">Warning</AlertTitle>
   <AlertDescription className="text-yellow-700">
    This action cannot be undone. Please proceed with caution.
   </AlertDescription>
  </Alert>
 ),
};

/**
 * Alert without title
 */
export const WithoutTitle = {
 render: () => (
  <Alert className="max-w-md">
   <Info className="h-4 w-4" />
   <AlertDescription>
    This alert contains only a description without a title.
   </AlertDescription>
  </Alert>
 ),
};

/**
 * Alert without icon
 */
export const WithoutIcon = {
 render: () => (
  <Alert className="max-w-md">
   <AlertTitle>No Icon Alert</AlertTitle>
   <AlertDescription>
    This alert doesn't have an icon, just text content.
   </AlertDescription>
  </Alert>
 ),
};

/**
 * All alert variants
 */
export const AllVariants = {
 render: () => (
  <div className="space-y-4 max-w-md">
   <Alert>
    <Info className="h-4 w-4" />
    <AlertTitle>Info</AlertTitle>
    <AlertDescription>Default alert variant.</AlertDescription>
   </Alert>

   <Alert variant="destructive">
    <XCircle className="h-4 w-4" />
    <AlertTitle>Error</AlertTitle>
    <AlertDescription>Destructive alert variant.</AlertDescription>
   </Alert>

   <Alert className="border-green-200 bg-green-50 text-green-900">
    <CheckCircle className="h-4 w-4 text-green-600" />
    <AlertTitle className="text-green-800">Success</AlertTitle>
    <AlertDescription className="text-green-700">
     Custom success styling.
    </AlertDescription>
   </Alert>

   <Alert className="border-yellow-200 bg-yellow-50 text-yellow-900">
    <AlertTriangle className="h-4 w-4 text-yellow-600" />
    <AlertTitle className="text-yellow-800">Warning</AlertTitle>
    <AlertDescription className="text-yellow-700">
     Custom warning styling.
    </AlertDescription>
   </Alert>
  </div>
 ),
};

/**
 * Alert with action button
 */
export const WithAction = {
 render: () => (
  <Alert className="max-w-md">
   <AlertTriangle className="h-4 w-4" />
   <AlertTitle>Update Available</AlertTitle>
   <AlertDescription className="mb-3">
    A new version of the application is available. Would you like to update now?
   </AlertDescription>
   <div className="flex gap-2">
    <button className="bg-primary text-primary-foreground px-3 py-1 rounded text-sm hover:bg-primary/90">
     Update Now
    </button>
    <button className="border border-input px-3 py-1 rounded text-sm hover:bg-accent">
     Later
    </button>
   </div>
  </Alert>
 ),
};

/**
 * System alerts
 */
export const SystemAlerts = {
 render: () => (
  <div className="space-y-4 max-w-md">
   <Alert>
    <Terminal className="h-4 w-4" />
    <AlertTitle>System Status</AlertTitle>
    <AlertDescription>All systems are operational.</AlertDescription>
   </Alert>

   <Alert className="border-yellow-200 bg-yellow-50 text-yellow-900">
    <AlertTriangle className="h-4 w-4 text-yellow-600" />
    <AlertTitle className="text-yellow-800">Maintenance</AlertTitle>
    <AlertDescription className="text-yellow-700">
     Scheduled maintenance in 30 minutes.
    </AlertDescription>
   </Alert>

   <Alert variant="destructive">
    <XCircle className="h-4 w-4" />
    <AlertTitle>Service Outage</AlertTitle>
    <AlertDescription>
     Some services are currently unavailable.
    </AlertDescription>
   </Alert>
  </div>
 ),
};

/**
 * Notification-style alerts
 */
export const Notifications = {
 render: () => (
  <div className="space-y-4 max-w-md">
   <Alert className="border-blue-200 bg-blue-50 text-blue-900">
    <Info className="h-4 w-4 text-blue-600" />
    <AlertTitle className="text-blue-800">New Feature</AlertTitle>
    <AlertDescription className="text-blue-700">
     Check out our new dashboard analytics feature!
    </AlertDescription>
   </Alert>

   <Alert className="border-green-200 bg-green-50 text-green-900">
    <CheckCircle className="h-4 w-4 text-green-600" />
    <AlertTitle className="text-green-800">Welcome</AlertTitle>
    <AlertDescription className="text-green-700">
     Your account has been successfully created.
    </AlertDescription>
   </Alert>
  </div>
 ),
};

/**
 * Compact alerts
 */
export const Compact = {
 render: () => (
  <div className="space-y-2 max-w-md">
   <Alert className="p-3">
    <Info className="h-3 w-3" />
    <AlertDescription className="text-sm ml-2">
     Compact info alert
    </AlertDescription>
   </Alert>

   <Alert variant="destructive" className="p-3">
    <XCircle className="h-3 w-3" />
    <AlertDescription className="text-sm ml-2">
     Compact error alert
    </AlertDescription>
   </Alert>
  </div>
 ),
};
