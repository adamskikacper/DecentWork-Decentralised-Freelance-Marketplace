import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { Button } from "../Button";
import { Badge } from "../Badge";
import {
 Toast,
 ToastAction,
 ToastClose,
 ToastDescription,
 ToastProvider,
 ToastTitle,
 ToastViewport,
} from "./index";

const meta: Meta<typeof Toast> = {
 title: "UI/Toast",
 component: Toast,
 parameters: {
  layout: "centered",
  docs: {
   description: {
    component:
     "A toast component for displaying brief messages and notifications. Perfect for success messages, errors, and user feedback.",
   },
  },
 },
 tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Toast>;

/**
 * Basic toast notification
 */
export const Default: Story = {
 render: () => (
  <ToastProvider>
   <div className="space-y-4">
    <Toast>
     <div className="grid gap-1">
      <ToastTitle>Scheduled: Catch up</ToastTitle>
      <ToastDescription>Friday, February 10, 2023 at 5:57 PM</ToastDescription>
     </div>
     <ToastClose />
    </Toast>
   </div>
   <ToastViewport />
  </ToastProvider>
 ),
};

/**
 * Success toast notification
 */
export const Success: Story = {
 render: () => (
  <ToastProvider>
   <Toast>
    <div className="grid gap-1">
     <ToastTitle>Success!</ToastTitle>
     <ToastDescription>
      Your changes have been saved successfully.
     </ToastDescription>
    </div>
    <ToastClose />
   </Toast>
   <ToastViewport />
  </ToastProvider>
 ),
};

/**
 * Error toast notification
 */
export const Error: Story = {
 render: () => (
  <ToastProvider>
   <Toast variant="destructive">
    <div className="grid gap-1">
     <ToastTitle>Uh oh! Something went wrong.</ToastTitle>
     <ToastDescription>There was a problem with your request.</ToastDescription>
    </div>
    <ToastClose />
   </Toast>
   <ToastViewport />
  </ToastProvider>
 ),
};

/**
 * Toast with action button
 */
export const WithAction: Story = {
 render: () => (
  <ToastProvider>
   <Toast>
    <div className="grid gap-1">
     <ToastTitle>Email sent!</ToastTitle>
     <ToastDescription>
      Your message has been sent to the recipient.
     </ToastDescription>
    </div>
    <ToastAction altText="Undo">Undo</ToastAction>
    <ToastClose />
   </Toast>
   <ToastViewport />
  </ToastProvider>
 ),
};

/**
 * Different toast variants
 */
export const Variants: Story = {
 render: () => (
  <ToastProvider>
   <div className="space-y-4">
    <Toast>
     <div className="grid gap-1">
      <ToastTitle>Information</ToastTitle>
      <ToastDescription>This is an informational message.</ToastDescription>
     </div>
     <ToastClose />
    </Toast>

    <Toast variant="destructive">
     <div className="grid gap-1">
      <ToastTitle>Error</ToastTitle>
      <ToastDescription>
       Something went wrong. Please try again.
      </ToastDescription>
     </div>
     <ToastClose />
    </Toast>
   </div>
   <ToastViewport />
  </ToastProvider>
 ),
};

/**
 * Toast notifications for common scenarios
 */
export const CommonScenarios: Story = {
 render: () => (
  <ToastProvider>
   <div className="space-y-4">
    <Toast>
     <div className="grid gap-1">
      <ToastTitle>File uploaded successfully</ToastTitle>
      <ToastDescription>
       document.pdf has been uploaded to your drive.
      </ToastDescription>
     </div>
     <ToastAction altText="View file">View</ToastAction>
     <ToastClose />
    </Toast>

    <Toast>
     <div className="grid gap-1">
      <ToastTitle>Draft saved</ToastTitle>
      <ToastDescription>
       Your form has been automatically saved.
      </ToastDescription>
     </div>
     <ToastClose />
    </Toast>

    <Toast>
     <div className="grid gap-1">
      <ToastTitle>Invitation sent</ToastTitle>
      <ToastDescription>
       john.doe@example.com has been invited to join your team.
      </ToastDescription>
     </div>
     <ToastAction altText="Resend invitation">Resend</ToastAction>
     <ToastClose />
    </Toast>

    <Toast variant="destructive">
     <div className="grid gap-1">
      <ToastTitle>Payment failed</ToastTitle>
      <ToastDescription>
       Your payment could not be processed. Please try again.
      </ToastDescription>
     </div>
     <ToastAction altText="Retry payment">Retry</ToastAction>
     <ToastClose />
    </Toast>
   </div>
   <ToastViewport />
  </ToastProvider>
 ),
};

/**
 * Toast with rich content
 */
export const RichContent: Story = {
 render: () => (
  <ToastProvider>
   <Toast>
    <div className="grid gap-1">
     <ToastTitle className="flex items-center gap-2">
      <span>🎉</span>
      Welcome to our platform!
     </ToastTitle>
     <ToastDescription>
      You've successfully created your account. Start exploring our features.
     </ToastDescription>
    </div>
    <ToastAction altText="Get started">Get Started</ToastAction>
    <ToastClose />
   </Toast>
   <ToastViewport />
  </ToastProvider>
 ),
};

/**
 * Simple toast without description
 */
export const SimpleToast: Story = {
 render: () => (
  <ToastProvider>
   <Toast>
    <ToastTitle>Settings saved</ToastTitle>
    <ToastClose />
   </Toast>
   <ToastViewport />
  </ToastProvider>
 ),
};
