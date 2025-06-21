import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { Button } from "../Button";
import { Input } from "../Input";
import { Label } from "../Label";
import {
 AlertDialog,
 AlertDialogAction,
 AlertDialogCancel,
 AlertDialogContent,
 AlertDialogDescription,
 AlertDialogFooter,
 AlertDialogHeader,
 AlertDialogTitle,
 AlertDialogTrigger,
} from "./index";

const meta: Meta<typeof AlertDialog> = {
 title: "UI/AlertDialog",
 component: AlertDialog,
 parameters: {
  layout: "centered",
  docs: {
   description: {
    component:
     "A modal dialog that interrupts the user with important content and expects a response. Perfect for confirmations and critical actions.",
   },
  },
 },
 tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof AlertDialog>;

/**
 * Basic confirmation dialog
 */
export const Default: Story = {
 render: () => (
  <AlertDialog>
   <AlertDialogTrigger asChild>
    <Button variant="outline">Show Dialog</Button>
   </AlertDialogTrigger>
   <AlertDialogContent>
    <AlertDialogHeader>
     <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
     <AlertDialogDescription>
      This action cannot be undone. This will permanently delete your account
      and remove your data from our servers.
     </AlertDialogDescription>
    </AlertDialogHeader>
    <AlertDialogFooter>
     <AlertDialogCancel>Cancel</AlertDialogCancel>
     <AlertDialogAction>Continue</AlertDialogAction>
    </AlertDialogFooter>
   </AlertDialogContent>
  </AlertDialog>
 ),
};

/**
 * Destructive action confirmation
 */
export const DeleteConfirmation: Story = {
 render: () => (
  <AlertDialog>
   <AlertDialogTrigger asChild>
    <Button variant="destructive">Delete Account</Button>
   </AlertDialogTrigger>
   <AlertDialogContent>
    <AlertDialogHeader>
     <AlertDialogTitle>Delete Account</AlertDialogTitle>
     <AlertDialogDescription>
      Are you sure you want to delete your account? This action cannot be
      undone. All your data will be permanently removed from our servers.
     </AlertDialogDescription>
    </AlertDialogHeader>
    <AlertDialogFooter>
     <AlertDialogCancel>Cancel</AlertDialogCancel>
     <AlertDialogAction className="bg-red-600 hover:bg-red-700">
      Delete Account
     </AlertDialogAction>
    </AlertDialogFooter>
   </AlertDialogContent>
  </AlertDialog>
 ),
};

/**
 * Save confirmation with unsaved changes
 */
export const UnsavedChanges: Story = {
 render: () => (
  <AlertDialog>
   <AlertDialogTrigger asChild>
    <Button variant="outline">Leave Page</Button>
   </AlertDialogTrigger>
   <AlertDialogContent>
    <AlertDialogHeader>
     <AlertDialogTitle>Unsaved Changes</AlertDialogTitle>
     <AlertDialogDescription>
      You have unsaved changes that will be lost if you leave this page. Do you
      want to save your changes before leaving?
     </AlertDialogDescription>
    </AlertDialogHeader>
    <AlertDialogFooter>
     <AlertDialogCancel>Stay on Page</AlertDialogCancel>
     <AlertDialogAction variant="outline">
      Leave Without Saving
     </AlertDialogAction>
     <AlertDialogAction>Save & Leave</AlertDialogAction>
    </AlertDialogFooter>
   </AlertDialogContent>
  </AlertDialog>
 ),
};

/**
 * Logout confirmation
 */
export const LogoutConfirmation: Story = {
 render: () => (
  <AlertDialog>
   <AlertDialogTrigger asChild>
    <Button variant="ghost">Logout</Button>
   </AlertDialogTrigger>
   <AlertDialogContent>
    <AlertDialogHeader>
     <AlertDialogTitle>Logout</AlertDialogTitle>
     <AlertDialogDescription>
      Are you sure you want to logout? You will need to sign in again to access
      your account.
     </AlertDialogDescription>
    </AlertDialogHeader>
    <AlertDialogFooter>
     <AlertDialogCancel>Cancel</AlertDialogCancel>
     <AlertDialogAction>Logout</AlertDialogAction>
    </AlertDialogFooter>
   </AlertDialogContent>
  </AlertDialog>
 ),
};

/**
 * File deletion with name confirmation
 */
export const FileDeleteConfirmation: Story = {
 render: () => {
  const [fileName, setFileName] = useState("");
  const targetFileName = "important-document.pdf";

  return (
   <AlertDialog>
    <AlertDialogTrigger asChild>
     <Button variant="destructive">Delete File</Button>
    </AlertDialogTrigger>
    <AlertDialogContent>
     <AlertDialogHeader>
      <AlertDialogTitle>Delete File</AlertDialogTitle>
      <AlertDialogDescription>
       This will permanently delete "{targetFileName}". This action cannot be
       undone. Type the file name to confirm deletion.
      </AlertDialogDescription>
     </AlertDialogHeader>
     <div className="py-4">
      <Label htmlFor="filename">File name</Label>
      <Input
       id="filename"
       value={fileName}
       onChange={(e) => setFileName(e.target.value)}
       placeholder={targetFileName}
       className="mt-2"
      />
     </div>
     <AlertDialogFooter>
      <AlertDialogCancel>Cancel</AlertDialogCancel>
      <AlertDialogAction
       className="bg-red-600 hover:bg-red-700"
       disabled={fileName !== targetFileName}
      >
       Delete File
      </AlertDialogAction>
     </AlertDialogFooter>
    </AlertDialogContent>
   </AlertDialog>
  );
 },
};

/**
 * Payment confirmation
 */
export const PaymentConfirmation: Story = {
 render: () => (
  <AlertDialog>
   <AlertDialogTrigger asChild>
    <Button>Process Payment</Button>
   </AlertDialogTrigger>
   <AlertDialogContent>
    <AlertDialogHeader>
     <AlertDialogTitle>Confirm Payment</AlertDialogTitle>
     <AlertDialogDescription>
      You are about to process a payment of $99.99 for Premium Plan. This will
      be charged to your default payment method.
     </AlertDialogDescription>
    </AlertDialogHeader>
    <div className="py-4">
     <div className="bg-gray-50 rounded-lg p-4 space-y-2">
      <div className="flex justify-between text-sm">
       <span>Premium Plan (1 month)</span>
       <span>$99.99</span>
      </div>
      <div className="flex justify-between text-sm">
       <span>Tax</span>
       <span>$8.00</span>
      </div>
      <div className="border-t pt-2">
       <div className="flex justify-between font-medium">
        <span>Total</span>
        <span>$107.99</span>
       </div>
      </div>
     </div>
    </div>
    <AlertDialogFooter>
     <AlertDialogCancel>Cancel</AlertDialogCancel>
     <AlertDialogAction>Confirm Payment</AlertDialogAction>
    </AlertDialogFooter>
   </AlertDialogContent>
  </AlertDialog>
 ),
};

/**
 * Data export confirmation
 */
export const DataExport: Story = {
 render: () => (
  <AlertDialog>
   <AlertDialogTrigger asChild>
    <Button variant="outline">Export Data</Button>
   </AlertDialogTrigger>
   <AlertDialogContent>
    <AlertDialogHeader>
     <AlertDialogTitle>Export Your Data</AlertDialogTitle>
     <AlertDialogDescription>
      This will create a downloadable archive containing all your account data.
      The export may take a few minutes to complete.
     </AlertDialogDescription>
    </AlertDialogHeader>
    <div className="py-4">
     <div className="space-y-2 text-sm">
      <p className="font-medium">Your export will include:</p>
      <ul className="space-y-1 text-gray-600">
       <li>• Profile information</li>
       <li>• Account settings</li>
       <li>• Project data and files</li>
       <li>• Message history</li>
       <li>• Usage analytics</li>
      </ul>
     </div>
    </div>
    <AlertDialogFooter>
     <AlertDialogCancel>Cancel</AlertDialogCancel>
     <AlertDialogAction>Start Export</AlertDialogAction>
    </AlertDialogFooter>
   </AlertDialogContent>
  </AlertDialog>
 ),
};

/**
 * Permission request
 */
export const PermissionRequest: Story = {
 render: () => (
  <AlertDialog>
   <AlertDialogTrigger asChild>
    <Button variant="outline">Enable Notifications</Button>
   </AlertDialogTrigger>
   <AlertDialogContent>
    <AlertDialogHeader>
     <AlertDialogTitle>Enable Notifications</AlertDialogTitle>
     <AlertDialogDescription>
      We'd like to send you notifications for important updates and messages.
      You can change this setting at any time in your preferences.
     </AlertDialogDescription>
    </AlertDialogHeader>
    <div className="py-4">
     <div className="space-y-2 text-sm">
      <p className="font-medium">We'll notify you about:</p>
      <ul className="space-y-1 text-gray-600">
       <li>• New messages and mentions</li>
       <li>• Project updates and deadlines</li>
       <li>• Security alerts</li>
       <li>• System maintenance</li>
      </ul>
     </div>
    </div>
    <AlertDialogFooter>
     <AlertDialogCancel>Not Now</AlertDialogCancel>
     <AlertDialogAction>Enable Notifications</AlertDialogAction>
    </AlertDialogFooter>
   </AlertDialogContent>
  </AlertDialog>
 ),
};

/**
 * Simple information dialog
 */
export const Information: Story = {
 render: () => (
  <AlertDialog>
   <AlertDialogTrigger asChild>
    <Button variant="outline">Show Info</Button>
   </AlertDialogTrigger>
   <AlertDialogContent>
    <AlertDialogHeader>
     <AlertDialogTitle>Feature Coming Soon</AlertDialogTitle>
     <AlertDialogDescription>
      This feature is currently in development and will be available in the next
      update. Thank you for your patience!
     </AlertDialogDescription>
    </AlertDialogHeader>
    <AlertDialogFooter>
     <AlertDialogAction>Got it</AlertDialogAction>
    </AlertDialogFooter>
   </AlertDialogContent>
  </AlertDialog>
 ),
};
