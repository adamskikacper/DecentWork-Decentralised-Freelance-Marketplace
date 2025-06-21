import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { Button } from "../Button";
import { Input } from "../Input";
import { Label } from "../Label";
import { Textarea } from "../Textarea";
import { Separator } from "../Separator";
import { Badge } from "../Badge";
import { Avatar } from "../Avatar";
import {
 Dialog,
 DialogContent,
 DialogDescription,
 DialogFooter,
 DialogHeader,
 DialogTitle,
 DialogTrigger,
} from "./index";

const meta: Meta<typeof Dialog> = {
 title: "UI/Dialog",
 component: Dialog,
 parameters: {
  layout: "centered",
  docs: {
   description: {
    component:
     "A modal dialog component that overlays content on top of the page. Perfect for forms, confirmations, and detailed views.",
   },
  },
 },
 tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Dialog>;

/**
 * Basic dialog with simple content
 */
export const Default: Story = {
 render: () => (
  <Dialog>
   <DialogTrigger asChild>
    <Button variant="outline">Open Dialog</Button>
   </DialogTrigger>
   <DialogContent>
    <DialogHeader>
     <DialogTitle>Are you absolutely sure?</DialogTitle>
     <DialogDescription>
      This action cannot be undone. This will permanently delete your account
      and remove your data from our servers.
     </DialogDescription>
    </DialogHeader>
    <DialogFooter>
     <Button variant="outline">Cancel</Button>
     <Button>Continue</Button>
    </DialogFooter>
   </DialogContent>
  </Dialog>
 ),
};

/**
 * Dialog with form inputs and validation
 */
export const WithForm: Story = {
 render: () => {
  const [formData, setFormData] = useState({
   name: "",
   email: "",
   message: "",
  });

  return (
   <Dialog>
    <DialogTrigger asChild>
     <Button>Contact Us</Button>
    </DialogTrigger>
    <DialogContent className="sm:max-w-[425px]">
     <DialogHeader>
      <DialogTitle>Contact Form</DialogTitle>
      <DialogDescription>
       Send us a message and we'll get back to you as soon as possible.
      </DialogDescription>
     </DialogHeader>
     <div className="grid gap-4 py-4">
      <div className="grid grid-cols-4 items-center gap-4">
       <Label htmlFor="name" className="text-right">
        Name
       </Label>
       <Input
        id="name"
        value={formData.name}
        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        className="col-span-3"
       />
      </div>
      <div className="grid grid-cols-4 items-center gap-4">
       <Label htmlFor="email" className="text-right">
        Email
       </Label>
       <Input
        id="email"
        type="email"
        value={formData.email}
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        className="col-span-3"
       />
      </div>
      <div className="grid grid-cols-4 items-center gap-4">
       <Label htmlFor="message" className="text-right">
        Message
       </Label>
       <Textarea
        id="message"
        value={formData.message}
        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
        className="col-span-3"
        rows={3}
       />
      </div>
     </div>
     <DialogFooter>
      <Button variant="outline">Cancel</Button>
      <Button type="submit">Send Message</Button>
     </DialogFooter>
    </DialogContent>
   </Dialog>
  );
 },
};

/**
 * Confirmation dialog for destructive actions
 */
export const DeleteConfirmation: Story = {
 render: () => (
  <Dialog>
   <DialogTrigger asChild>
    <Button variant="destructive">Delete Account</Button>
   </DialogTrigger>
   <DialogContent>
    <DialogHeader>
     <DialogTitle>Delete Account</DialogTitle>
     <DialogDescription>
      Are you sure you want to delete your account? This action cannot be
      undone. All your data will be permanently removed from our servers.
     </DialogDescription>
    </DialogHeader>
    <div className="py-4">
     <div className="bg-red-50 border border-red-200 rounded-lg p-4">
      <h4 className="text-sm font-medium text-red-800 mb-2">This will:</h4>
      <ul className="text-sm text-red-700 space-y-1">
       <li>• Delete all your projects and files</li>
       <li>• Remove your profile and settings</li>
       <li>• Cancel any active subscriptions</li>
       <li>• Permanently delete your account</li>
      </ul>
     </div>
    </div>
    <DialogFooter>
     <Button variant="outline">Cancel</Button>
     <Button variant="destructive">Delete Account</Button>
    </DialogFooter>
   </DialogContent>
  </Dialog>
 ),
};

/**
 * User profile dialog with avatar and details
 */
export const UserProfile: Story = {
 render: () => (
  <Dialog>
   <DialogTrigger asChild>
    <Button variant="ghost" className="flex items-center gap-2">
     <Avatar className="h-8 w-8">
      <img src="https://github.com/shadcn.png" alt="User" />
     </Avatar>
     View Profile
    </Button>
   </DialogTrigger>
   <DialogContent className="sm:max-w-[500px]">
    <DialogHeader>
     <DialogTitle>User Profile</DialogTitle>
     <DialogDescription>View and manage user information</DialogDescription>
    </DialogHeader>
    <div className="py-4">
     <div className="flex items-center gap-4 mb-6">
      <Avatar className="h-16 w-16">
       <img src="https://github.com/shadcn.png" alt="User" />
      </Avatar>
      <div>
       <h3 className="text-lg font-semibold">John Doe</h3>
       <p className="text-sm text-gray-600">john.doe@example.com</p>
       <div className="flex gap-2 mt-2">
        <Badge variant="secondary">Premium</Badge>
        <Badge variant="outline">Verified</Badge>
       </div>
      </div>
     </div>

     <Separator className="my-4" />

     <div className="space-y-4">
      <div>
       <h4 className="text-sm font-medium mb-2">Account Stats</h4>
       <div className="grid grid-cols-2 gap-4 text-sm">
        <div>
         <span className="text-gray-600">Joined:</span>
         <span className="ml-2">Jan 2023</span>
        </div>
        <div>
         <span className="text-gray-600">Projects:</span>
         <span className="ml-2">12</span>
        </div>
        <div>
         <span className="text-gray-600">Team Members:</span>
         <span className="ml-2">8</span>
        </div>
        <div>
         <span className="text-gray-600">Storage Used:</span>
         <span className="ml-2">2.4 GB</span>
        </div>
       </div>
      </div>
     </div>
    </div>
    <DialogFooter>
     <Button variant="outline">Edit Profile</Button>
     <Button>View Dashboard</Button>
    </DialogFooter>
   </DialogContent>
  </Dialog>
 ),
};

/**
 * Settings dialog with multiple sections
 */
export const Settings: Story = {
 render: () => {
  const [notifications, setNotifications] = useState(true);
  const [darkMode, setDarkMode] = useState(false);

  return (
   <Dialog>
    <DialogTrigger asChild>
     <Button variant="outline">Settings</Button>
    </DialogTrigger>
    <DialogContent className="sm:max-w-[600px]">
     <DialogHeader>
      <DialogTitle>Settings</DialogTitle>
      <DialogDescription>
       Manage your account settings and preferences
      </DialogDescription>
     </DialogHeader>
     <div className="py-4 space-y-6">
      <div>
       <h4 className="text-sm font-medium mb-3">Notifications</h4>
       <div className="space-y-3">
        <div className="flex items-center justify-between">
         <div>
          <p className="text-sm">Email Notifications</p>
          <p className="text-xs text-gray-600">
           Receive notifications via email
          </p>
         </div>
         <Button
          variant={notifications ? "default" : "outline"}
          size="sm"
          onClick={() => setNotifications(!notifications)}
         >
          {notifications ? "On" : "Off"}
         </Button>
        </div>
        <div className="flex items-center justify-between">
         <div>
          <p className="text-sm">Push Notifications</p>
          <p className="text-xs text-gray-600">Receive push notifications</p>
         </div>
         <Button variant="outline" size="sm">
          Configure
         </Button>
        </div>
       </div>
      </div>

      <Separator />

      <div>
       <h4 className="text-sm font-medium mb-3">Appearance</h4>
       <div className="space-y-3">
        <div className="flex items-center justify-between">
         <div>
          <p className="text-sm">Dark Mode</p>
          <p className="text-xs text-gray-600">Toggle dark mode theme</p>
         </div>
         <Button
          variant={darkMode ? "default" : "outline"}
          size="sm"
          onClick={() => setDarkMode(!darkMode)}
         >
          {darkMode ? "On" : "Off"}
         </Button>
        </div>
       </div>
      </div>

      <Separator />

      <div>
       <h4 className="text-sm font-medium mb-3">Account</h4>
       <div className="space-y-3">
        <Button variant="outline" className="w-full justify-start">
         Change Password
        </Button>
        <Button variant="outline" className="w-full justify-start">
         Download Data
        </Button>
        <Button variant="destructive" className="w-full justify-start">
         Delete Account
        </Button>
       </div>
      </div>
     </div>
     <DialogFooter>
      <Button variant="outline">Cancel</Button>
      <Button>Save Changes</Button>
     </DialogFooter>
    </DialogContent>
   </Dialog>
  );
 },
};

/**
 * Simple dialog without footer
 */
export const NoFooter: Story = {
 render: () => (
  <Dialog>
   <DialogTrigger asChild>
    <Button variant="outline">Show Info</Button>
   </DialogTrigger>
   <DialogContent>
    <DialogHeader>
     <DialogTitle>Information</DialogTitle>
     <DialogDescription>
      This is a simple dialog without footer buttons. It can be closed by
      clicking the X button or pressing Escape.
     </DialogDescription>
    </DialogHeader>
    <div className="py-4">
     <p className="text-sm text-gray-600">
      Sometimes you just need to display information without requiring user
      actions. This dialog demonstrates that pattern.
     </p>
    </div>
   </DialogContent>
  </Dialog>
 ),
};
