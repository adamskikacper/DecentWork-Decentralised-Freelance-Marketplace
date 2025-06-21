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
 Drawer,
 DrawerClose,
 DrawerContent,
 DrawerDescription,
 DrawerFooter,
 DrawerHeader,
 DrawerTitle,
 DrawerTrigger,
} from "./index";

const meta: Meta<typeof Drawer> = {
 title: "UI/Drawer",
 component: Drawer,
 parameters: {
  layout: "centered",
  docs: {
   description: {
    component:
     "A drawer component that slides in from the edge of the screen. Perfect for mobile navigation, forms, and content panels.",
   },
  },
 },
 tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Drawer>;

/**
 * Basic drawer from bottom (mobile-first)
 */
export const Default: Story = {
 render: () => (
  <Drawer>
   <DrawerTrigger asChild>
    <Button variant="outline">Open Drawer</Button>
   </DrawerTrigger>
   <DrawerContent>
    <DrawerHeader>
     <DrawerTitle>Edit Profile</DrawerTitle>
     <DrawerDescription>
      Make changes to your profile here. Click save when you're done.
     </DrawerDescription>
    </DrawerHeader>
    <div className="px-4 pb-4">
     <div className="space-y-4">
      <div className="space-y-2">
       <Label htmlFor="name">Name</Label>
       <Input id="name" defaultValue="Pedro Duarte" />
      </div>
      <div className="space-y-2">
       <Label htmlFor="username">Username</Label>
       <Input id="username" defaultValue="@peduarte" />
      </div>
     </div>
    </div>
    <DrawerFooter>
     <Button>Save changes</Button>
     <DrawerClose asChild>
      <Button variant="outline">Cancel</Button>
     </DrawerClose>
    </DrawerFooter>
   </DrawerContent>
  </Drawer>
 ),
};

/**
 * Mobile navigation drawer
 */
export const MobileNavigation: Story = {
 render: () => (
  <Drawer>
   <DrawerTrigger asChild>
    <Button variant="outline">Menu</Button>
   </DrawerTrigger>
   <DrawerContent>
    <DrawerHeader>
     <DrawerTitle>Navigation</DrawerTitle>
     <DrawerDescription>Browse through the application</DrawerDescription>
    </DrawerHeader>
    <div className="px-4 pb-4">
     <nav className="space-y-2">
      <Button variant="ghost" className="w-full justify-start">
       🏠 Dashboard
      </Button>
      <Button variant="ghost" className="w-full justify-start">
       📁 Projects
      </Button>
      <Button variant="ghost" className="w-full justify-start">
       👥 Team
      </Button>
      <Button variant="ghost" className="w-full justify-start">
       📊 Analytics
      </Button>
      <Button variant="ghost" className="w-full justify-start">
       ⚙️ Settings
      </Button>
      <Separator className="my-4" />
      <Button variant="ghost" className="w-full justify-start">
       ❓ Help & Support
      </Button>
      <Button variant="ghost" className="w-full justify-start text-red-600">
       🚪 Logout
      </Button>
     </nav>
    </div>
   </DrawerContent>
  </Drawer>
 ),
};

/**
 * Contact form drawer
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
   <Drawer>
    <DrawerTrigger asChild>
     <Button>Contact Us</Button>
    </DrawerTrigger>
    <DrawerContent>
     <DrawerHeader>
      <DrawerTitle>Contact Form</DrawerTitle>
      <DrawerDescription>
       Send us a message and we'll get back to you soon.
      </DrawerDescription>
     </DrawerHeader>
     <div className="px-4 pb-4">
      <div className="space-y-4">
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
     </div>
     <DrawerFooter>
      <Button type="submit">Send Message</Button>
      <DrawerClose asChild>
       <Button variant="outline">Cancel</Button>
      </DrawerClose>
     </DrawerFooter>
    </DrawerContent>
   </Drawer>
  );
 },
};

/**
 * Notifications drawer
 */
export const Notifications: Story = {
 render: () => {
  const notifications = [
   {
    id: 1,
    title: "New message from John",
    description: "Hey, how are you doing?",
    time: "2 min ago",
    unread: true,
   },
   {
    id: 2,
    title: "Project updated",
    description: "Design system has been updated",
    time: "1 hour ago",
    unread: true,
   },
   {
    id: 3,
    title: "Payment received",
    description: "Your payment of $99 has been processed",
    time: "3 hours ago",
    unread: false,
   },
  ];

  return (
   <Drawer>
    <DrawerTrigger asChild>
     <Button variant="outline">
      Notifications ({notifications.filter((n) => n.unread).length})
     </Button>
    </DrawerTrigger>
    <DrawerContent>
     <DrawerHeader>
      <DrawerTitle>Notifications</DrawerTitle>
      <DrawerDescription>
       Stay updated with your latest notifications
      </DrawerDescription>
     </DrawerHeader>
     <div className="px-4 pb-4">
      <div className="space-y-4">
       {notifications.map((notification) => (
        <div
         key={notification.id}
         className={`flex items-start gap-3 p-3 border rounded-lg ${
          notification.unread ? "bg-blue-50 border-blue-200" : ""
         }`}
        >
         <Avatar className="h-8 w-8">
          <img src="https://github.com/shadcn.png" alt="User" />
         </Avatar>
         <div className="flex-1">
          <p className="text-sm font-medium">{notification.title}</p>
          <p className="text-xs text-gray-600">{notification.description}</p>
          <p className="text-xs text-gray-500 mt-1">{notification.time}</p>
         </div>
         {notification.unread && (
          <Badge variant="secondary" className="text-xs">
           New
          </Badge>
         )}
        </div>
       ))}
      </div>
     </div>
     <DrawerFooter>
      <Button variant="outline" className="w-full">
       Mark all as read
      </Button>
      <DrawerClose asChild>
       <Button variant="ghost" className="w-full">
        Close
       </Button>
      </DrawerClose>
     </DrawerFooter>
    </DrawerContent>
   </Drawer>
  );
 },
};

/**
 * Product details drawer
 */
export const ProductDetails: Story = {
 render: () => {
  const [quantity, setQuantity] = useState(1);

  return (
   <Drawer>
    <DrawerTrigger asChild>
     <Button variant="outline">View Product</Button>
    </DrawerTrigger>
    <DrawerContent>
     <DrawerHeader>
      <DrawerTitle>Wireless Headphones</DrawerTitle>
      <DrawerDescription>
       Premium quality wireless headphones with noise cancellation
      </DrawerDescription>
     </DrawerHeader>
     <div className="px-4 pb-4">
      <div className="space-y-4">
       <div className="h-48 bg-gray-100 rounded-lg flex items-center justify-center">
        <span className="text-gray-500">Product Image</span>
       </div>

       <div className="space-y-2">
        <div className="flex items-center justify-between">
         <span className="text-2xl font-bold">$199.99</span>
         <Badge variant="secondary">In Stock</Badge>
        </div>
        <div className="flex items-center gap-2">
         <span>⭐⭐⭐⭐⭐</span>
         <span className="text-sm text-gray-600">(124 reviews)</span>
        </div>
       </div>

       <Separator />

       <div>
        <h4 className="font-medium mb-2">Features</h4>
        <ul className="space-y-1 text-sm text-gray-600">
         <li>• Active noise cancellation</li>
         <li>• 30-hour battery life</li>
         <li>• Bluetooth 5.0 connectivity</li>
         <li>• Premium leather headband</li>
        </ul>
       </div>

       <div className="flex items-center gap-4">
        <Label htmlFor="quantity">Quantity:</Label>
        <div className="flex items-center gap-2">
         <Button
          variant="outline"
          size="sm"
          onClick={() => setQuantity(Math.max(1, quantity - 1))}
         >
          -
         </Button>
         <Input
          id="quantity"
          type="number"
          value={quantity}
          onChange={(e) =>
           setQuantity(Math.max(1, parseInt(e.target.value) || 1))
          }
          className="w-16 text-center"
          min="1"
         />
         <Button
          variant="outline"
          size="sm"
          onClick={() => setQuantity(quantity + 1)}
         >
          +
         </Button>
        </div>
       </div>
      </div>
     </div>
     <DrawerFooter>
      <Button className="w-full">
       Add to Cart - ${(199.99 * quantity).toFixed(2)}
      </Button>
      <DrawerClose asChild>
       <Button variant="outline" className="w-full">
        Continue Shopping
       </Button>
      </DrawerClose>
     </DrawerFooter>
    </DrawerContent>
   </Drawer>
  );
 },
};

/**
 * Settings drawer
 */
export const Settings: Story = {
 render: () => {
  const [settings, setSettings] = useState({
   notifications: true,
   darkMode: false,
   autoSave: true,
  });

  return (
   <Drawer>
    <DrawerTrigger asChild>
     <Button variant="outline">Settings</Button>
    </DrawerTrigger>
    <DrawerContent>
     <DrawerHeader>
      <DrawerTitle>Settings</DrawerTitle>
      <DrawerDescription>
       Manage your account settings and preferences
      </DrawerDescription>
     </DrawerHeader>
     <div className="px-4 pb-4">
      <div className="space-y-6">
       <div>
        <h4 className="text-sm font-medium mb-3">Notifications</h4>
        <div className="space-y-3">
         <div className="flex items-center justify-between">
          <div>
           <p className="text-sm">Push Notifications</p>
           <p className="text-xs text-gray-600">Receive push notifications</p>
          </div>
          <Button
           variant={settings.notifications ? "default" : "outline"}
           size="sm"
           onClick={() =>
            setSettings({ ...settings, notifications: !settings.notifications })
           }
          >
           {settings.notifications ? "On" : "Off"}
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
           <p className="text-xs text-gray-600">Toggle dark theme</p>
          </div>
          <Button
           variant={settings.darkMode ? "default" : "outline"}
           size="sm"
           onClick={() =>
            setSettings({ ...settings, darkMode: !settings.darkMode })
           }
          >
           {settings.darkMode ? "On" : "Off"}
          </Button>
         </div>
        </div>
       </div>

       <Separator />

       <div>
        <h4 className="text-sm font-medium mb-3">Preferences</h4>
        <div className="space-y-3">
         <div className="flex items-center justify-between">
          <div>
           <p className="text-sm">Auto Save</p>
           <p className="text-xs text-gray-600">Automatically save changes</p>
          </div>
          <Button
           variant={settings.autoSave ? "default" : "outline"}
           size="sm"
           onClick={() =>
            setSettings({ ...settings, autoSave: !settings.autoSave })
           }
          >
           {settings.autoSave ? "On" : "Off"}
          </Button>
         </div>
        </div>
       </div>
      </div>
     </div>
     <DrawerFooter>
      <Button>Save Changes</Button>
      <DrawerClose asChild>
       <Button variant="outline">Cancel</Button>
      </DrawerClose>
     </DrawerFooter>
    </DrawerContent>
   </Drawer>
  );
 },
};

/**
 * Simple information drawer
 */
export const Information: Story = {
 render: () => (
  <Drawer>
   <DrawerTrigger asChild>
    <Button variant="outline">Show Info</Button>
   </DrawerTrigger>
   <DrawerContent>
    <DrawerHeader>
     <DrawerTitle>App Information</DrawerTitle>
     <DrawerDescription>Learn more about this application</DrawerDescription>
    </DrawerHeader>
    <div className="px-4 pb-4">
     <div className="space-y-4 text-sm">
      <div>
       <h4 className="font-medium">Version</h4>
       <p className="text-gray-600">2.1.0</p>
      </div>
      <div>
       <h4 className="font-medium">Last Updated</h4>
       <p className="text-gray-600">January 15, 2024</p>
      </div>
      <div>
       <h4 className="font-medium">Developer</h4>
       <p className="text-gray-600">Your Company Name</p>
      </div>
      <Separator />
      <div>
       <h4 className="font-medium mb-2">What's New</h4>
       <ul className="space-y-1 text-gray-600">
        <li>• Improved performance</li>
        <li>• Bug fixes and stability improvements</li>
        <li>• New dark mode theme</li>
        <li>• Enhanced user interface</li>
       </ul>
      </div>
     </div>
    </div>
    <DrawerFooter>
     <DrawerClose asChild>
      <Button className="w-full">Got it</Button>
     </DrawerClose>
    </DrawerFooter>
   </DrawerContent>
  </Drawer>
 ),
};
