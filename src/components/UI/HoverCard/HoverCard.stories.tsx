import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "../Button";
import { Avatar } from "../Avatar";
import { Badge } from "../Badge";
import { Separator } from "../Separator";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "./index";

const meta: Meta<typeof HoverCard> = {
 title: "UI/HoverCard",
 component: HoverCard,
 parameters: {
  layout: "centered",
  docs: {
   description: {
    component:
     "A hover card component that displays rich content when hovering over an element. Perfect for user profiles, previews, and additional information.",
   },
  },
 },
 tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof HoverCard>;

/**
 * Basic hover card with simple content
 */
export const Default: Story = {
 render: () => (
  <HoverCard>
   <HoverCardTrigger asChild>
    <Button variant="link">@nextjs</Button>
   </HoverCardTrigger>
   <HoverCardContent className="w-80">
    <div className="flex justify-between space-x-4">
     <Avatar>
      <img src="https://github.com/vercel.png" alt="Vercel" />
     </Avatar>
     <div className="space-y-1">
      <h4 className="text-sm font-semibold">@nextjs</h4>
      <p className="text-sm">
       The React Framework – created and maintained by @vercel.
      </p>
      <div className="flex items-center pt-2">
       <span className="text-xs text-muted-foreground">
        Joined December 2021
       </span>
      </div>
     </div>
    </div>
   </HoverCardContent>
  </HoverCard>
 ),
};

/**
 * User profile hover card
 */
export const UserProfile: Story = {
 render: () => (
  <div className="flex items-center space-x-4">
   <p className="text-sm">
    Created by{" "}
    <HoverCard>
     <HoverCardTrigger asChild>
      <Button variant="link" className="p-0 h-auto font-semibold">
       @shadcn
      </Button>
     </HoverCardTrigger>
     <HoverCardContent className="w-80">
      <div className="flex justify-between space-x-4">
       <Avatar>
        <img src="https://github.com/shadcn.png" alt="shadcn" />
       </Avatar>
       <div className="space-y-1">
        <h4 className="text-sm font-semibold">@shadcn</h4>
        <p className="text-sm">
         Building design systems and web applications. Creator of shadcn/ui.
        </p>
        <div className="flex items-center space-x-2 pt-2">
         <Badge variant="secondary">Developer</Badge>
         <Badge variant="outline">Designer</Badge>
        </div>
        <div className="flex items-center pt-2">
         <span className="text-xs text-muted-foreground">
          Joined March 2020
         </span>
        </div>
       </div>
      </div>
     </HoverCardContent>
    </HoverCard>{" "}
    last week
   </p>
  </div>
 ),
};

/**
 * Product information hover card
 */
export const ProductInfo: Story = {
 render: () => (
  <div className="p-4">
   <p className="text-sm">
    Check out our latest{" "}
    <HoverCard>
     <HoverCardTrigger asChild>
      <Button variant="link" className="p-0 h-auto">
       MacBook Pro
      </Button>
     </HoverCardTrigger>
     <HoverCardContent className="w-96">
      <div className="space-y-3">
       <div className="h-32 bg-gray-100 rounded-lg flex items-center justify-center">
        <span className="text-gray-500">Product Image</span>
       </div>
       <div className="space-y-2">
        <h4 className="text-lg font-semibold">MacBook Pro 14"</h4>
        <p className="text-sm text-gray-600">
         Supercharged by M3 Pro and M3 Max chips. Up to 22 hours of battery
         life.
        </p>
        <div className="flex items-center justify-between">
         <span className="text-xl font-bold">$1,999</span>
         <div className="flex items-center space-x-2">
          <span className="text-sm">⭐⭐⭐⭐⭐</span>
          <span className="text-xs text-gray-500">(4.8)</span>
         </div>
        </div>
        <div className="flex space-x-2">
         <Badge>M3 Pro</Badge>
         <Badge variant="secondary">16GB RAM</Badge>
         <Badge variant="outline">512GB SSD</Badge>
        </div>
       </div>
      </div>
     </HoverCardContent>
    </HoverCard>{" "}
    with amazing features.
   </p>
  </div>
 ),
};

/**
 * Team member hover card
 */
export const TeamMember: Story = {
 render: () => (
  <div className="flex items-center space-x-4">
   <HoverCard>
    <HoverCardTrigger asChild>
     <Avatar className="cursor-pointer">
      <img src="https://github.com/shadcn.png" alt="Team member" />
     </Avatar>
    </HoverCardTrigger>
    <HoverCardContent className="w-80">
     <div className="space-y-3">
      <div className="flex items-center space-x-3">
       <Avatar className="h-12 w-12">
        <img src="https://github.com/shadcn.png" alt="Sarah Johnson" />
       </Avatar>
       <div>
        <h4 className="text-sm font-semibold">Sarah Johnson</h4>
        <p className="text-xs text-gray-600">Senior Frontend Developer</p>
       </div>
      </div>

      <Separator />

      <div className="space-y-2">
       <div className="flex justify-between text-xs">
        <span className="text-gray-600">Location:</span>
        <span>San Francisco, CA</span>
       </div>
       <div className="flex justify-between text-xs">
        <span className="text-gray-600">Team:</span>
        <span>Engineering</span>
       </div>
       <div className="flex justify-between text-xs">
        <span className="text-gray-600">Joined:</span>
        <span>Jan 2023</span>
       </div>
      </div>

      <div className="space-y-2">
       <p className="text-xs font-medium">Skills:</p>
       <div className="flex flex-wrap gap-1">
        <Badge variant="secondary" className="text-xs">
         React
        </Badge>
        <Badge variant="secondary" className="text-xs">
         TypeScript
        </Badge>
        <Badge variant="secondary" className="text-xs">
         Next.js
        </Badge>
        <Badge variant="secondary" className="text-xs">
         Tailwind
        </Badge>
       </div>
      </div>
     </div>
    </HoverCardContent>
   </HoverCard>

   <div>
    <p className="text-sm font-medium">Sarah Johnson</p>
    <p className="text-xs text-gray-600">Hover over avatar for details</p>
   </div>
  </div>
 ),
};

/**
 * Repository hover card
 */
export const RepositoryInfo: Story = {
 render: () => (
  <div className="p-4">
   <p className="text-sm">
    Star our{" "}
    <HoverCard>
     <HoverCardTrigger asChild>
      <Button variant="link" className="p-0 h-auto">
       shadcn/ui
      </Button>
     </HoverCardTrigger>
     <HoverCardContent className="w-80">
      <div className="space-y-3">
       <div className="flex items-start justify-between">
        <div className="space-y-1">
         <h4 className="text-sm font-semibold">shadcn/ui</h4>
         <p className="text-xs text-gray-600">
          Beautifully designed components that you can copy and paste into your
          apps.
         </p>
        </div>
        <Badge>Public</Badge>
       </div>

       <div className="flex items-center space-x-4 text-xs text-gray-600">
        <div className="flex items-center space-x-1">
         <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
         <span>TypeScript</span>
        </div>
        <div className="flex items-center space-x-1">
         <span>⭐</span>
         <span>45.2k</span>
        </div>
        <div className="flex items-center space-x-1">
         <span>🍴</span>
         <span>2.8k</span>
        </div>
       </div>

       <div className="flex space-x-2">
        <Badge variant="secondary" className="text-xs">
         React
        </Badge>
        <Badge variant="secondary" className="text-xs">
         Tailwind CSS
        </Badge>
        <Badge variant="secondary" className="text-xs">
         Radix UI
        </Badge>
       </div>

       <p className="text-xs text-gray-500">Updated 2 hours ago</p>
      </div>
     </HoverCardContent>
    </HoverCard>{" "}
    repository on GitHub.
   </p>
  </div>
 ),
};

/**
 * Event information hover card
 */
export const EventInfo: Story = {
 render: () => (
  <div className="p-4">
   <p className="text-sm">
    Join us for{" "}
    <HoverCard>
     <HoverCardTrigger asChild>
      <Button variant="link" className="p-0 h-auto">
       React Conference 2024
      </Button>
     </HoverCardTrigger>
     <HoverCardContent className="w-96">
      <div className="space-y-3">
       <div className="h-24 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
        <span className="text-white font-semibold">React Conference 2024</span>
       </div>

       <div className="space-y-2">
        <h4 className="text-lg font-semibold">React Conference 2024</h4>
        <p className="text-sm text-gray-600">
         The biggest React conference of the year featuring talks from industry
         leaders.
        </p>
       </div>

       <div className="space-y-2 text-sm">
        <div className="flex justify-between">
         <span className="text-gray-600">Date:</span>
         <span>March 15-16, 2024</span>
        </div>
        <div className="flex justify-between">
         <span className="text-gray-600">Location:</span>
         <span>San Francisco, CA</span>
        </div>
        <div className="flex justify-between">
         <span className="text-gray-600">Price:</span>
         <span className="font-semibold">$299 - $599</span>
        </div>
        <div className="flex justify-between">
         <span className="text-gray-600">Attendees:</span>
         <span>2,500+</span>
        </div>
       </div>

       <div className="flex space-x-2">
        <Badge>Frontend</Badge>
        <Badge variant="secondary">React</Badge>
        <Badge variant="outline">Networking</Badge>
       </div>
      </div>
     </HoverCardContent>
    </HoverCard>{" "}
    next month.
   </p>
  </div>
 ),
};

/**
 * Company information hover card
 */
export const CompanyInfo: Story = {
 render: () => (
  <div className="p-4">
   <p className="text-sm">
    We're partnering with{" "}
    <HoverCard>
     <HoverCardTrigger asChild>
      <Button variant="link" className="p-0 h-auto">
       Vercel
      </Button>
     </HoverCardTrigger>
     <HoverCardContent className="w-80">
      <div className="space-y-3">
       <div className="flex items-center space-x-3">
        <Avatar className="h-12 w-12">
         <img src="https://github.com/vercel.png" alt="Vercel" />
        </Avatar>
        <div>
         <h4 className="text-sm font-semibold">Vercel</h4>
         <p className="text-xs text-gray-600">
          Platform for Frontend Developers
         </p>
        </div>
       </div>

       <p className="text-sm text-gray-600">
        Vercel is the platform for frontend developers, providing the speed and
        reliability innovators need to create at the moment of inspiration.
       </p>

       <div className="grid grid-cols-2 gap-4 text-xs">
        <div>
         <span className="text-gray-600">Founded:</span>
         <span className="ml-1">2015</span>
        </div>
        <div>
         <span className="text-gray-600">Employees:</span>
         <span className="ml-1">500+</span>
        </div>
        <div>
         <span className="text-gray-600">Location:</span>
         <span className="ml-1">San Francisco</span>
        </div>
        <div>
         <span className="text-gray-600">Industry:</span>
         <span className="ml-1">Cloud Platform</span>
        </div>
       </div>

       <div className="flex space-x-2">
        <Badge>Next.js</Badge>
        <Badge variant="secondary">React</Badge>
        <Badge variant="outline">Edge Computing</Badge>
       </div>
      </div>
     </HoverCardContent>
    </HoverCard>{" "}
    to bring you the best developer experience.
   </p>
  </div>
 ),
};
