import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { Button } from "../Button";
import { Input } from "../Input";
import { Label } from "../Label";
import { Textarea } from "../Textarea";
import { Separator } from "../Separator";
import { Badge } from "../Badge";
import { Avatar } from "../Avatar";
import { Switch } from "../Switch";
import {
 Sheet,
 SheetContent,
 SheetDescription,
 SheetFooter,
 SheetHeader,
 SheetTitle,
 SheetTrigger,
} from "./index";

const meta: Meta<typeof Sheet> = {
 title: "UI/Sheet",
 component: Sheet,
 parameters: {
  layout: "centered",
  docs: {
   description: {
    component:
     "A sliding panel that overlays content from the side of the screen. Perfect for navigation, forms, and settings.",
   },
  },
 },
 tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Sheet>;

/**
 * Basic sheet sliding from the right
 */
export const Default: Story = {
 render: () => (
  <Sheet>
   <SheetTrigger asChild>
    <Button variant="outline">Open Sheet</Button>
   </SheetTrigger>
   <SheetContent>
    <SheetHeader>
     <SheetTitle>Edit Profile</SheetTitle>
     <SheetDescription>
      Make changes to your profile here. Click save when you're done.
     </SheetDescription>
    </SheetHeader>
    <div className="grid gap-4 py-4">
     <div className="grid grid-cols-4 items-center gap-4">
      <Label htmlFor="name" className="text-right">
       Name
      </Label>
      <Input id="name" value="Pedro Duarte" className="col-span-3" />
     </div>
     <div className="grid grid-cols-4 items-center gap-4">
      <Label htmlFor="username" className="text-right">
       Username
      </Label>
      <Input id="username" value="@peduarte" className="col-span-3" />
     </div>
    </div>
    <SheetFooter>
     <Button type="submit">Save changes</Button>
    </SheetFooter>
   </SheetContent>
  </Sheet>
 ),
};

/**
 * Sheet sliding from the left for navigation
 */
export const LeftSide: Story = {
 render: () => (
  <Sheet>
   <SheetTrigger asChild>
    <Button variant="outline">Menu</Button>
   </SheetTrigger>
   <SheetContent side="left">
    <SheetHeader>
     <SheetTitle>Navigation</SheetTitle>
     <SheetDescription>Navigate through the application</SheetDescription>
    </SheetHeader>
    <div className="py-4">
     <nav className="space-y-2">
      <Button variant="ghost" className="w-full justify-start">
       Dashboard
      </Button>
      <Button variant="ghost" className="w-full justify-start">
       Projects
      </Button>
      <Button variant="ghost" className="w-full justify-start">
       Team
      </Button>
      <Button variant="ghost" className="w-full justify-start">
       Settings
      </Button>
      <Separator className="my-4" />
      <Button variant="ghost" className="w-full justify-start">
       Help & Support
      </Button>
      <Button variant="ghost" className="w-full justify-start">
       Logout
      </Button>
     </nav>
    </div>
   </SheetContent>
  </Sheet>
 ),
};

/**
 * Sheet from top for notifications
 */
export const TopSide: Story = {
 render: () => (
  <Sheet>
   <SheetTrigger asChild>
    <Button variant="outline">Notifications</Button>
   </SheetTrigger>
   <SheetContent side="top">
    <SheetHeader>
     <SheetTitle>Recent Notifications</SheetTitle>
     <SheetDescription>
      Stay updated with your latest notifications
     </SheetDescription>
    </SheetHeader>
    <div className="py-4 space-y-4">
     <div className="flex items-start gap-3 p-3 border rounded-lg">
      <Avatar className="h-8 w-8">
       <img src="https://github.com/shadcn.png" alt="User" />
      </Avatar>
      <div className="flex-1">
       <p className="text-sm font-medium">New message from John</p>
       <p className="text-xs text-gray-600">2 minutes ago</p>
      </div>
      <Badge variant="secondary">New</Badge>
     </div>
     <div className="flex items-start gap-3 p-3 border rounded-lg">
      <Avatar className="h-8 w-8">
       <img src="https://github.com/shadcn.png" alt="User" />
      </Avatar>
      <div className="flex-1">
       <p className="text-sm font-medium">Project updated</p>
       <p className="text-xs text-gray-600">1 hour ago</p>
      </div>
     </div>
     <div className="flex items-start gap-3 p-3 border rounded-lg">
      <Avatar className="h-8 w-8">
       <img src="https://github.com/shadcn.png" alt="User" />
      </Avatar>
      <div className="flex-1">
       <p className="text-sm font-medium">Payment received</p>
       <p className="text-xs text-gray-600">3 hours ago</p>
      </div>
     </div>
    </div>
    <SheetFooter>
     <Button variant="outline" className="w-full">
      Mark all as read
     </Button>
    </SheetFooter>
   </SheetContent>
  </Sheet>
 ),
};

/**
 * Sheet from bottom for mobile-style actions
 */
export const BottomSide: Story = {
 render: () => (
  <Sheet>
   <SheetTrigger asChild>
    <Button variant="outline">Actions</Button>
   </SheetTrigger>
   <SheetContent side="bottom">
    <SheetHeader>
     <SheetTitle>Quick Actions</SheetTitle>
     <SheetDescription>Choose an action to perform</SheetDescription>
    </SheetHeader>
    <div className="py-4 grid grid-cols-2 gap-4">
     <Button variant="outline" className="h-20 flex-col gap-2">
      <span>📄</span>
      Create Document
     </Button>
     <Button variant="outline" className="h-20 flex-col gap-2">
      <span>📁</span>
      New Folder
     </Button>
     <Button variant="outline" className="h-20 flex-col gap-2">
      <span>📤</span>
      Upload File
     </Button>
     <Button variant="outline" className="h-20 flex-col gap-2">
      <span>🔗</span>
      Share Link
     </Button>
    </div>
   </SheetContent>
  </Sheet>
 ),
};

/**
 * Contact form sheet
 */
export const ContactForm: Story = {
 render: () => {
  const [formData, setFormData] = useState({
   name: "",
   email: "",
   subject: "",
   message: "",
  });

  return (
   <Sheet>
    <SheetTrigger asChild>
     <Button>Contact Us</Button>
    </SheetTrigger>
    <SheetContent className="sm:max-w-[540px]">
     <SheetHeader>
      <SheetTitle>Contact Form</SheetTitle>
      <SheetDescription>
       Send us a message and we'll get back to you soon.
      </SheetDescription>
     </SheetHeader>
     <div className="grid gap-4 py-4">
      <div className="space-y-2">
       <Label htmlFor="contact-name">Name</Label>
       <Input
        id="contact-name"
        value={formData.name}
        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        placeholder="Your full name"
       />
      </div>
      <div className="space-y-2">
       <Label htmlFor="contact-email">Email</Label>
       <Input
        id="contact-email"
        type="email"
        value={formData.email}
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        placeholder="your.email@example.com"
       />
      </div>
      <div className="space-y-2">
       <Label htmlFor="contact-subject">Subject</Label>
       <Input
        id="contact-subject"
        value={formData.subject}
        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
        placeholder="What is this about?"
       />
      </div>
      <div className="space-y-2">
       <Label htmlFor="contact-message">Message</Label>
       <Textarea
        id="contact-message"
        value={formData.message}
        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
        placeholder="Your message here..."
        rows={4}
       />
      </div>
     </div>
     <SheetFooter>
      <Button variant="outline">Cancel</Button>
      <Button type="submit">Send Message</Button>
     </SheetFooter>
    </SheetContent>
   </Sheet>
  );
 },
};

/**
 * Settings panel sheet
 */
export const SettingsPanel: Story = {
 render: () => {
  const [settings, setSettings] = useState({
   notifications: true,
   darkMode: false,
   autoSave: true,
   publicProfile: false,
  });

  return (
   <Sheet>
    <SheetTrigger asChild>
     <Button variant="outline">Settings</Button>
    </SheetTrigger>
    <SheetContent>
     <SheetHeader>
      <SheetTitle>Settings</SheetTitle>
      <SheetDescription>
       Manage your account settings and preferences.
      </SheetDescription>
     </SheetHeader>
     <div className="py-4 space-y-6">
      <div>
       <h4 className="text-sm font-medium mb-4">Notifications</h4>
       <div className="space-y-4">
        <div className="flex items-center justify-between">
         <div className="space-y-0.5">
          <Label>Email Notifications</Label>
          <p className="text-xs text-gray-600">
           Receive notifications via email
          </p>
         </div>
         <Switch
          checked={settings.notifications}
          onCheckedChange={(checked) =>
           setSettings({ ...settings, notifications: checked })
          }
         />
        </div>
        <div className="flex items-center justify-between">
         <div className="space-y-0.5">
          <Label>Public Profile</Label>
          <p className="text-xs text-gray-600">
           Make your profile visible to others
          </p>
         </div>
         <Switch
          checked={settings.publicProfile}
          onCheckedChange={(checked) =>
           setSettings({ ...settings, publicProfile: checked })
          }
         />
        </div>
       </div>
      </div>

      <Separator />

      <div>
       <h4 className="text-sm font-medium mb-4">Preferences</h4>
       <div className="space-y-4">
        <div className="flex items-center justify-between">
         <div className="space-y-0.5">
          <Label>Dark Mode</Label>
          <p className="text-xs text-gray-600">Toggle dark theme</p>
         </div>
         <Switch
          checked={settings.darkMode}
          onCheckedChange={(checked) =>
           setSettings({ ...settings, darkMode: checked })
          }
         />
        </div>
        <div className="flex items-center justify-between">
         <div className="space-y-0.5">
          <Label>Auto Save</Label>
          <p className="text-xs text-gray-600">Automatically save your work</p>
         </div>
         <Switch
          checked={settings.autoSave}
          onCheckedChange={(checked) =>
           setSettings({ ...settings, autoSave: checked })
          }
         />
        </div>
       </div>
      </div>

      <Separator />

      <div>
       <h4 className="text-sm font-medium mb-4">Account</h4>
       <div className="space-y-2">
        <Button variant="outline" className="w-full justify-start">
         Change Password
        </Button>
        <Button variant="outline" className="w-full justify-start">
         Export Data
        </Button>
        <Button variant="destructive" className="w-full justify-start">
         Delete Account
        </Button>
       </div>
      </div>
     </div>
     <SheetFooter>
      <Button variant="outline">Cancel</Button>
      <Button>Save Changes</Button>
     </SheetFooter>
    </SheetContent>
   </Sheet>
  );
 },
};

/**
 * Shopping cart sheet
 */
export const ShoppingCart: Story = {
 render: () => {
  const [cartItems] = useState([
   { id: 1, name: "Wireless Headphones", price: 99.99, quantity: 1 },
   { id: 2, name: "USB-C Cable", price: 19.99, quantity: 2 },
   { id: 3, name: "Phone Case", price: 29.99, quantity: 1 },
  ]);

  const total = cartItems.reduce(
   (sum, item) => sum + item.price * item.quantity,
   0
  );

  return (
   <Sheet>
    <SheetTrigger asChild>
     <Button variant="outline">Cart ({cartItems.length})</Button>
    </SheetTrigger>
    <SheetContent>
     <SheetHeader>
      <SheetTitle>Shopping Cart</SheetTitle>
      <SheetDescription>Review your items before checkout</SheetDescription>
     </SheetHeader>
     <div className="py-4">
      <div className="space-y-4">
       {cartItems.map((item) => (
        <div
         key={item.id}
         className="flex items-center gap-3 p-3 border rounded-lg"
        >
         <div className="h-12 w-12 bg-gray-100 rounded-lg"></div>
         <div className="flex-1">
          <h4 className="text-sm font-medium">{item.name}</h4>
          <p className="text-xs text-gray-600">Qty: {item.quantity}</p>
         </div>
         <div className="text-sm font-medium">
          ${(item.price * item.quantity).toFixed(2)}
         </div>
        </div>
       ))}
      </div>

      <Separator className="my-4" />

      <div className="space-y-2">
       <div className="flex justify-between text-sm">
        <span>Subtotal</span>
        <span>${total.toFixed(2)}</span>
       </div>
       <div className="flex justify-between text-sm">
        <span>Shipping</span>
        <span>$5.99</span>
       </div>
       <div className="flex justify-between text-sm">
        <span>Tax</span>
        <span>${(total * 0.08).toFixed(2)}</span>
       </div>
       <Separator />
       <div className="flex justify-between font-medium">
        <span>Total</span>
        <span>${(total + 5.99 + total * 0.08).toFixed(2)}</span>
       </div>
      </div>
     </div>
     <SheetFooter>
      <Button variant="outline" className="w-full">
       Continue Shopping
      </Button>
      <Button className="w-full">Checkout</Button>
     </SheetFooter>
    </SheetContent>
   </Sheet>
  );
 },
};
