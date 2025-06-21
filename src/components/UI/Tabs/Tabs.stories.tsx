import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./index";
import { Button } from "../Button";
import { Input } from "../Input";
import { Label } from "../Label";
import {
 Card,
 CardContent,
 CardDescription,
 CardHeader,
 CardTitle,
} from "../Card";
import { Badge } from "../Badge";
import { Avatar, AvatarFallback, AvatarImage } from "../Avatar";
import {
 User,
 Settings,
 Bell,
 Shield,
 CreditCard,
 FileText,
 BarChart3,
 Users,
 Mail,
 Calendar,
 Home,
 Search,
} from "lucide-react";

/**
 * Tabs component provides tabbed navigation with content panels.
 * Built on Radix UI Tabs primitive with keyboard navigation and accessibility.
 */
const meta = {
 title: "UI/Tabs",
 component: Tabs,
 parameters: {
  layout: "centered",
 },
 argTypes: {
  orientation: {
   control: { type: "select" },
   options: ["horizontal", "vertical"],
   description: "Tab orientation",
  },
  defaultValue: {
   control: "text",
   description: "Default active tab",
  },
 },
 tags: ["autodocs"],
} satisfies Meta<typeof Tabs>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Basic tabs
 */
export const Basic: Story = {
 render: () => (
  <Tabs defaultValue="account" className="w-[400px]">
   <TabsList className="grid w-full grid-cols-2">
    <TabsTrigger value="account">Account</TabsTrigger>
    <TabsTrigger value="password">Password</TabsTrigger>
   </TabsList>
   <TabsContent value="account" className="space-y-2">
    <p className="text-sm text-muted-foreground">
     Make changes to your account here.
    </p>
    <div className="space-y-1">
     <Label htmlFor="name">Name</Label>
     <Input id="name" defaultValue="Pedro Duarte" />
    </div>
   </TabsContent>
   <TabsContent value="password" className="space-y-2">
    <p className="text-sm text-muted-foreground">Change your password here.</p>
    <div className="space-y-1">
     <Label htmlFor="current">Current password</Label>
     <Input id="current" type="password" />
    </div>
   </TabsContent>
  </Tabs>
 ),
};

/**
 * Tabs with icons
 */
export const WithIcons = {
 render: () => (
  <Tabs defaultValue="profile" className="w-[500px]">
   <TabsList className="grid w-full grid-cols-3">
    <TabsTrigger value="profile">
     <User className="mr-2 h-4 w-4" />
     Profile
    </TabsTrigger>
    <TabsTrigger value="security">
     <Shield className="mr-2 h-4 w-4" />
     Security
    </TabsTrigger>
    <TabsTrigger value="billing">
     <CreditCard className="mr-2 h-4 w-4" />
     Billing
    </TabsTrigger>
   </TabsList>

   <TabsContent value="profile" className="space-y-4">
    <Card>
     <CardHeader>
      <CardTitle>Profile Information</CardTitle>
      <CardDescription>Update your profile details</CardDescription>
     </CardHeader>
     <CardContent className="space-y-4">
      <div className="grid grid-cols-2 gap-4">
       <div className="space-y-2">
        <Label>First Name</Label>
        <Input defaultValue="John" />
       </div>
       <div className="space-y-2">
        <Label>Last Name</Label>
        <Input defaultValue="Doe" />
       </div>
      </div>
      <Button>Save Changes</Button>
     </CardContent>
    </Card>
   </TabsContent>

   <TabsContent value="security" className="space-y-4">
    <Card>
     <CardHeader>
      <CardTitle>Security Settings</CardTitle>
      <CardDescription>Manage your account security</CardDescription>
     </CardHeader>
     <CardContent className="space-y-4">
      <div className="space-y-2">
       <Label>New Password</Label>
       <Input type="password" />
      </div>
      <div className="flex items-center justify-between p-4 border rounded-lg">
       <div>
        <p className="font-medium">Two-Factor Authentication</p>
        <p className="text-sm text-muted-foreground">Extra security layer</p>
       </div>
       <Badge variant="outline">Disabled</Badge>
      </div>
      <Button>Update Security</Button>
     </CardContent>
    </Card>
   </TabsContent>

   <TabsContent value="billing" className="space-y-4">
    <Card>
     <CardHeader>
      <CardTitle>Billing & Subscription</CardTitle>
      <CardDescription>Manage your subscription</CardDescription>
     </CardHeader>
     <CardContent className="space-y-4">
      <div className="flex items-center justify-between p-4 border rounded-lg">
       <div>
        <p className="font-medium">Pro Plan</p>
        <p className="text-sm text-muted-foreground">$29/month</p>
       </div>
       <Badge>Active</Badge>
      </div>
      <Button variant="outline">Change Plan</Button>
     </CardContent>
    </Card>
   </TabsContent>
  </Tabs>
 ),
};

/**
 * Vertical tabs
 */
export const Vertical = {
 render: () => (
  <Tabs
   defaultValue="general"
   orientation="vertical"
   className="flex w-[600px] h-[300px]"
  >
   <TabsList className="flex flex-col h-full w-[200px]">
    <TabsTrigger value="general" className="w-full justify-start">
     <Settings className="mr-2 h-4 w-4" />
     General
    </TabsTrigger>
    <TabsTrigger value="account" className="w-full justify-start">
     <User className="mr-2 h-4 w-4" />
     Account
    </TabsTrigger>
    <TabsTrigger value="notifications" className="w-full justify-start">
     <Bell className="mr-2 h-4 w-4" />
     Notifications
    </TabsTrigger>
   </TabsList>

   <div className="flex-1 ml-4">
    <TabsContent value="general">
     <Card>
      <CardHeader>
       <CardTitle>General Settings</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
       <div className="space-y-2">
        <Label>Language</Label>
        <select className="w-full p-2 border rounded-md">
         <option>English</option>
         <option>Spanish</option>
        </select>
       </div>
      </CardContent>
     </Card>
    </TabsContent>

    <TabsContent value="account">
     <Card>
      <CardHeader>
       <CardTitle>Account Settings</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
       <div className="space-y-2">
        <Label>Username</Label>
        <Input defaultValue="johndoe" />
       </div>
      </CardContent>
     </Card>
    </TabsContent>

    <TabsContent value="notifications">
     <Card>
      <CardHeader>
       <CardTitle>Notification Settings</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
       <div className="flex items-center justify-between">
        <Label>Email Notifications</Label>
        <input type="checkbox" defaultChecked />
       </div>
      </CardContent>
     </Card>
    </TabsContent>
   </div>
  </Tabs>
 ),
};

/**
 * Interactive tabs with badges
 */
export const Interactive = {
 render: () => {
  const [counts, setCounts] = useState({ tab1: 0, tab2: 0, tab3: 0 });

  const increment = (tab: keyof typeof counts) => {
   setCounts((prev) => ({ ...prev, [tab]: prev[tab] + 1 }));
  };

  return (
   <Tabs defaultValue="tab1" className="w-[400px]">
    <TabsList className="grid w-full grid-cols-3">
     <TabsTrigger value="tab1">
      Tab 1
      {counts.tab1 > 0 && (
       <Badge variant="secondary" className="ml-2">
        {counts.tab1}
       </Badge>
      )}
     </TabsTrigger>
     <TabsTrigger value="tab2">
      Tab 2
      {counts.tab2 > 0 && (
       <Badge variant="secondary" className="ml-2">
        {counts.tab2}
       </Badge>
      )}
     </TabsTrigger>
     <TabsTrigger value="tab3">
      Tab 3
      {counts.tab3 > 0 && (
       <Badge variant="secondary" className="ml-2">
        {counts.tab3}
       </Badge>
      )}
     </TabsTrigger>
    </TabsList>

    <TabsContent value="tab1" className="space-y-4">
     <p>This is tab 1 content</p>
     <Button onClick={() => increment("tab1")}>
      Increment ({counts.tab1})
     </Button>
    </TabsContent>

    <TabsContent value="tab2" className="space-y-4">
     <p>This is tab 2 content</p>
     <Button onClick={() => increment("tab2")}>
      Increment ({counts.tab2})
     </Button>
    </TabsContent>

    <TabsContent value="tab3" className="space-y-4">
     <p>This is tab 3 content</p>
     <Button onClick={() => increment("tab3")}>
      Increment ({counts.tab3})
     </Button>
    </TabsContent>
   </Tabs>
  );
 },
};

/**
 * Dashboard tabs
 */
export const Dashboard = {
 render: () => (
  <Tabs defaultValue="overview" className="w-[600px]">
   <TabsList className="grid w-full grid-cols-3">
    <TabsTrigger value="overview">Overview</TabsTrigger>
    <TabsTrigger value="analytics">Analytics</TabsTrigger>
    <TabsTrigger value="reports">Reports</TabsTrigger>
   </TabsList>

   <TabsContent value="overview" className="space-y-4">
    <div className="grid gap-4 md:grid-cols-2">
     <Card>
      <CardHeader>
       <CardTitle className="text-sm">Total Revenue</CardTitle>
      </CardHeader>
      <CardContent>
       <div className="text-2xl font-bold">$45,231.89</div>
       <p className="text-xs text-muted-foreground">+20.1% from last month</p>
      </CardContent>
     </Card>

     <Card>
      <CardHeader>
       <CardTitle className="text-sm">Active Users</CardTitle>
      </CardHeader>
      <CardContent>
       <div className="text-2xl font-bold">2,350</div>
       <p className="text-xs text-muted-foreground">+180.1% from last month</p>
      </CardContent>
     </Card>
    </div>
   </TabsContent>

   <TabsContent value="analytics" className="space-y-4">
    <Card>
     <CardHeader>
      <CardTitle>Analytics Overview</CardTitle>
     </CardHeader>
     <CardContent>
      <div className="space-y-2">
       <div className="flex justify-between">
        <span>Page Views</span>
        <span className="font-bold">1,234,567</span>
       </div>
       <div className="flex justify-between">
        <span>Unique Visitors</span>
        <span className="font-bold">456,789</span>
       </div>
      </div>
     </CardContent>
    </Card>
   </TabsContent>

   <TabsContent value="reports" className="space-y-4">
    <Card>
     <CardHeader>
      <CardTitle>Reports</CardTitle>
     </CardHeader>
     <CardContent className="space-y-2">
      <Button variant="outline" className="w-full justify-start">
       Monthly Revenue Report
      </Button>
      <Button variant="outline" className="w-full justify-start">
       Analytics Summary
      </Button>
      <Button variant="outline" className="w-full justify-start">
       User Activity Report
      </Button>
     </CardContent>
    </Card>
   </TabsContent>
  </Tabs>
 ),
};
