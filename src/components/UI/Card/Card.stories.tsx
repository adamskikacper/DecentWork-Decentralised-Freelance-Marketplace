import type { Meta, StoryObj } from "@storybook/react";
import {
 Bell,
 Settings as SettingsIcon,
 User,
 Calendar,
 MapPin,
 Clock,
} from "lucide-react";
import {
 Card,
 CardHeader,
 CardTitle,
 CardDescription,
 CardContent,
 CardFooter,
} from "./index";
import { Button } from "../Button";
import { Badge } from "../Badge";

/**
 * Card component provides a flexible container for content with header, body, and footer sections.
 * Built with semantic HTML and comprehensive styling options.
 */
const meta = {
 title: "UI/Card",
 component: Card,
 parameters: {
  layout: "centered",
 },
 tags: ["autodocs"],
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Basic card with minimal content
 */
export const Default: Story = {
 render: () => (
  <Card className="w-[350px]">
   <CardHeader>
    <CardTitle>Card Title</CardTitle>
    <CardDescription>Card description goes here.</CardDescription>
   </CardHeader>
   <CardContent>
    <p>This is the main content of the card.</p>
   </CardContent>
   <CardFooter>
    <Button>Action</Button>
   </CardFooter>
  </Card>
 ),
};

/**
 * Card with only header and content
 */
export const HeaderAndContent: Story = {
 render: () => (
  <Card className="w-[350px]">
   <CardHeader>
    <CardTitle>Simple Card</CardTitle>
    <CardDescription>No footer needed here.</CardDescription>
   </CardHeader>
   <CardContent>
    <p>
     This card contains only header and content sections for a cleaner look when
     actions aren't needed.
    </p>
   </CardContent>
  </Card>
 ),
};

/**
 * Card with only content
 */
export const ContentOnly: Story = {
 render: () => (
  <Card className="w-[350px]">
   <CardContent className="pt-6">
    <p>
     This is a minimal card with only content. Perfect for simple displays or
     when headers aren't necessary.
    </p>
   </CardContent>
  </Card>
 ),
};

/**
 * User profile card
 */
export const UserProfile: Story = {
 render: () => (
  <Card className="w-[350px]">
   <CardHeader>
    <div className="flex items-center gap-4">
     <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
      <User className="h-6 w-6" />
     </div>
     <div>
      <CardTitle>John Doe</CardTitle>
      <CardDescription>Senior Developer</CardDescription>
     </div>
    </div>
   </CardHeader>
   <CardContent>
    <div className="space-y-2">
     <div className="flex items-center gap-2 text-sm">
      <MapPin className="h-4 w-4 text-muted-foreground" />
      <span>San Francisco, CA</span>
     </div>
     <div className="flex items-center gap-2 text-sm">
      <Calendar className="h-4 w-4 text-muted-foreground" />
      <span>Joined March 2020</span>
     </div>
    </div>
   </CardContent>
   <CardFooter className="gap-2">
    <Button variant="outline" size="sm">
     <User className="h-4 w-4 mr-2" />
     View Profile
    </Button>
    <Button size="sm">Connect</Button>
   </CardFooter>
  </Card>
 ),
};

/**
 * Notification card
 */
export const Notification: Story = {
 render: () => (
  <Card className="w-[400px]">
   <CardHeader>
    <div className="flex items-center justify-between">
     <div className="flex items-center gap-2">
      <Bell className="h-5 w-5" />
      <CardTitle className="text-base">New Message</CardTitle>
     </div>
     <Badge variant="destructive">New</Badge>
    </div>
    <CardDescription>
     You have received a new message from Sarah
    </CardDescription>
   </CardHeader>
   <CardContent>
    <p className="text-sm">
     "Hey! I wanted to follow up on our conversation about the project timeline.
     Could we schedule a quick call this week?"
    </p>
   </CardContent>
   <CardFooter className="text-sm text-muted-foreground">
    <Clock className="h-4 w-4 mr-1" />2 minutes ago
   </CardFooter>
  </Card>
 ),
};

/**
 * Settings card with form elements
 */
export const Settings: Story = {
 render: () => (
  <Card className="w-[400px]">
   <CardHeader>
    <CardTitle className="flex items-center gap-2">
     <SettingsIcon className="h-5 w-5" />
     Notification Settings
    </CardTitle>
    <CardDescription>Manage how you receive notifications</CardDescription>
   </CardHeader>
   <CardContent className="space-y-4">
    <div className="flex items-center justify-between">
     <div>
      <p className="font-medium">Email notifications</p>
      <p className="text-sm text-muted-foreground">
       Receive notifications via email
      </p>
     </div>
     <Button variant="outline" size="sm">
      Toggle
     </Button>
    </div>
    <div className="flex items-center justify-between">
     <div>
      <p className="font-medium">Push notifications</p>
      <p className="text-sm text-muted-foreground">
       Receive push notifications on your device
      </p>
     </div>
     <Button variant="outline" size="sm">
      Toggle
     </Button>
    </div>
   </CardContent>
   <CardFooter>
    <Button className="w-full">Save Changes</Button>
   </CardFooter>
  </Card>
 ),
};

/**
 * Product card
 */
export const Product: Story = {
 render: () => (
  <Card className="w-[300px]">
   <CardHeader className="pb-2">
    <div className="w-full h-40 bg-gradient-to-br from-blue-100 to-blue-200 rounded-md mb-2" />
    <CardTitle>Wireless Headphones</CardTitle>
    <CardDescription>Premium noise-cancelling headphones</CardDescription>
   </CardHeader>
   <CardContent>
    <div className="space-y-2">
     <div className="flex items-center justify-between">
      <span className="text-2xl font-bold">$299</span>
      <Badge>In Stock</Badge>
     </div>
     <div className="flex gap-1">
      {Array.from({ length: 5 }).map((_, i) => (
       <span key={i} className="text-yellow-400">
        ★
       </span>
      ))}
      <span className="text-sm text-muted-foreground ml-1">(124 reviews)</span>
     </div>
    </div>
   </CardContent>
   <CardFooter className="gap-2">
    <Button variant="outline" className="flex-1">
     Add to Cart
    </Button>
    <Button className="flex-1">Buy Now</Button>
   </CardFooter>
  </Card>
 ),
};

/**
 * Multiple cards layout
 */
export const MultipleCards: Story = {
 render: () => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-6xl">
   <Card>
    <CardHeader>
     <CardTitle>Analytics</CardTitle>
     <CardDescription>Track your performance</CardDescription>
    </CardHeader>
    <CardContent>
     <div className="text-2xl font-bold">12,543</div>
     <p className="text-sm text-muted-foreground">Total views this month</p>
    </CardContent>
   </Card>

   <Card>
    <CardHeader>
     <CardTitle>Revenue</CardTitle>
     <CardDescription>Your earnings</CardDescription>
    </CardHeader>
    <CardContent>
     <div className="text-2xl font-bold">$4,329</div>
     <p className="text-sm text-muted-foreground">+12% from last month</p>
    </CardContent>
   </Card>

   <Card>
    <CardHeader>
     <CardTitle>Users</CardTitle>
     <CardDescription>Active users</CardDescription>
    </CardHeader>
    <CardContent>
     <div className="text-2xl font-bold">1,234</div>
     <p className="text-sm text-muted-foreground">+5% from last week</p>
    </CardContent>
   </Card>
  </div>
 ),
};

/**
 * Card with interactive content
 */
export const Interactive: Story = {
 render: () => (
  <Card className="w-[400px]">
   <CardHeader>
    <CardTitle>Quick Actions</CardTitle>
    <CardDescription>Commonly used features</CardDescription>
   </CardHeader>
   <CardContent className="grid grid-cols-2 gap-4">
    <Button variant="outline" className="h-20 flex-col gap-2">
     <User className="h-6 w-6" />
     <span>Profile</span>
    </Button>
    <Button variant="outline" className="h-20 flex-col gap-2">
     <SettingsIcon className="h-6 w-6" />
     <span>Settings</span>
    </Button>
    <Button variant="outline" className="h-20 flex-col gap-2">
     <Bell className="h-6 w-6" />
     <span>Notifications</span>
    </Button>
    <Button variant="outline" className="h-20 flex-col gap-2">
     <Calendar className="h-6 w-6" />
     <span>Calendar</span>
    </Button>
   </CardContent>
  </Card>
 ),
};
