import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { Popover, PopoverContent, PopoverTrigger } from "./index";
import { Button } from "../Button";
import { Input } from "../Input";
import { Label } from "../Label";
import { Avatar, AvatarFallback, AvatarImage } from "../Avatar";
import { Badge } from "../Badge";
import { Separator } from "../Separator";
import {
 Settings,
 User,
 Calendar as CalendarIcon,
 Info,
 HelpCircle,
 Share,
 Heart,
 MessageCircle,
 MoreHorizontal,
 Bell,
 Search,
} from "lucide-react";

/**
 * Popover component provides floating content that appears on trigger interaction.
 * Built on Radix UI Popover primitive with customizable positioning and styling.
 */
const meta = {
 title: "UI/Popover",
 component: Popover,
 parameters: {
  layout: "centered",
 },
 tags: ["autodocs"],
} satisfies Meta<typeof Popover>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Basic popover
 */
export const Basic = {
 render: () => (
  <Popover>
   <PopoverTrigger asChild>
    <Button variant="outline">Open Popover</Button>
   </PopoverTrigger>
   <PopoverContent className="w-80">
    <div className="space-y-2">
     <h4 className="font-medium leading-none">Popover Title</h4>
     <p className="text-sm text-muted-foreground">
      This is a basic popover with some content inside.
     </p>
    </div>
   </PopoverContent>
  </Popover>
 ),
};

/**
 * User profile popover
 */
export const UserProfile = {
 render: () => (
  <Popover>
   <PopoverTrigger asChild>
    <Button variant="ghost" className="relative h-8 w-8 rounded-full">
     <Avatar className="h-8 w-8">
      <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
      <AvatarFallback>SC</AvatarFallback>
     </Avatar>
    </Button>
   </PopoverTrigger>
   <PopoverContent className="w-80" align="end">
    <div className="space-y-4">
     <div className="flex items-center space-x-4">
      <Avatar className="h-12 w-12">
       <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
       <AvatarFallback>SC</AvatarFallback>
      </Avatar>
      <div className="space-y-1">
       <h4 className="text-sm font-semibold">shadcn</h4>
       <p className="text-sm text-muted-foreground">@shadcn</p>
       <div className="flex items-center space-x-2">
        <Badge variant="secondary" className="text-xs">
         Pro
        </Badge>
        <Badge variant="outline" className="text-xs">
         Developer
        </Badge>
       </div>
      </div>
     </div>

     <Separator />

     <div className="grid gap-2">
      <div className="grid grid-cols-3 gap-4 text-center">
       <div>
        <div className="text-lg font-semibold">1.2k</div>
        <div className="text-xs text-muted-foreground">Following</div>
       </div>
       <div>
        <div className="text-lg font-semibold">12.5k</div>
        <div className="text-xs text-muted-foreground">Followers</div>
       </div>
       <div>
        <div className="text-lg font-semibold">847</div>
        <div className="text-xs text-muted-foreground">Posts</div>
       </div>
      </div>
     </div>

     <Separator />

     <div className="flex space-x-2">
      <Button size="sm" className="flex-1">
       Follow
      </Button>
      <Button size="sm" variant="outline" className="flex-1">
       Message
      </Button>
     </div>
    </div>
   </PopoverContent>
  </Popover>
 ),
};

/**
 * Settings popover
 */
export const SettingsPopover = {
 render: () => (
  <Popover>
   <PopoverTrigger asChild>
    <Button variant="outline" size="icon">
     <Settings className="h-4 w-4" />
    </Button>
   </PopoverTrigger>
   <PopoverContent className="w-56">
    <div className="space-y-1">
     <div className="px-2 py-1.5 text-sm font-semibold">Settings</div>
     <Separator />
     <div className="space-y-1">
      <Button variant="ghost" className="w-full justify-start" size="sm">
       <User className="mr-2 h-4 w-4" />
       Profile
      </Button>
      <Button variant="ghost" className="w-full justify-start" size="sm">
       <Bell className="mr-2 h-4 w-4" />
       Notifications
      </Button>
      <Button variant="ghost" className="w-full justify-start" size="sm">
       <Settings className="mr-2 h-4 w-4" />
       Preferences
      </Button>
     </div>
     <Separator />
     <Button
      variant="ghost"
      className="w-full justify-start text-red-600"
      size="sm"
     >
      Sign Out
     </Button>
    </div>
   </PopoverContent>
  </Popover>
 ),
};

/**
 * Newsletter signup popover
 */
export const NewsletterSignup = {
 render: () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
   e.preventDefault();
   console.log("Form submitted:", { name, email });
  };

  return (
   <Popover>
    <PopoverTrigger asChild>
     <Button>Subscribe</Button>
    </PopoverTrigger>
    <PopoverContent className="w-80">
     <form onSubmit={handleSubmit} className="space-y-4">
      <div className="space-y-2">
       <h4 className="font-medium leading-none">Newsletter Signup</h4>
       <p className="text-sm text-muted-foreground">
        Get the latest updates delivered to your inbox.
       </p>
      </div>

      <div className="space-y-3">
       <div className="space-y-1">
        <Label htmlFor="name">Name</Label>
        <Input
         id="name"
         placeholder="Enter your name"
         value={name}
         onChange={(e) => setName(e.target.value)}
        />
       </div>

       <div className="space-y-1">
        <Label htmlFor="email">Email</Label>
        <Input
         id="email"
         type="email"
         placeholder="Enter your email"
         value={email}
         onChange={(e) => setEmail(e.target.value)}
        />
       </div>
      </div>

      <Button type="submit" className="w-full">
       Subscribe
      </Button>
     </form>
    </PopoverContent>
   </Popover>
  );
 },
};

/**
 * Help tooltip popover
 */
export const HelpTooltip = {
 render: () => (
  <div className="space-y-4">
   <div className="flex items-center space-x-2">
    <Label>Password</Label>
    <Popover>
     <PopoverTrigger asChild>
      <Button variant="ghost" size="icon" className="h-4 w-4">
       <HelpCircle className="h-3 w-3" />
      </Button>
     </PopoverTrigger>
     <PopoverContent className="w-80">
      <div className="space-y-2">
       <h4 className="font-medium">Password Requirements</h4>
       <ul className="text-sm text-muted-foreground space-y-1">
        <li>• At least 8 characters long</li>
        <li>• Contains at least one uppercase letter</li>
        <li>• Contains at least one lowercase letter</li>
        <li>• Contains at least one number</li>
        <li>• Contains at least one special character</li>
       </ul>
      </div>
     </PopoverContent>
    </Popover>
   </div>

   <Input type="password" placeholder="Enter your password" />

   <div className="flex items-center space-x-2">
    <Label>API Key</Label>
    <Popover>
     <PopoverTrigger asChild>
      <Button variant="ghost" size="icon" className="h-4 w-4">
       <Info className="h-3 w-3" />
      </Button>
     </PopoverTrigger>
     <PopoverContent className="w-72">
      <div className="space-y-2">
       <h4 className="font-medium">About API Keys</h4>
       <p className="text-sm text-muted-foreground">
        API keys are used to authenticate your requests to our API. Keep your
        API key secure and don't share it publicly.
       </p>
       <div className="pt-2">
        <Button size="sm" variant="outline">
         Generate New Key
        </Button>
       </div>
      </div>
     </PopoverContent>
    </Popover>
   </div>

   <Input placeholder="Enter your API key" />
  </div>
 ),
};

/**
 * Notification popover
 */
export const NotificationPopover = {
 render: () => {
  const notifications = [
   {
    id: 1,
    title: "New message from John",
    description: "Hey, are you available for a quick call?",
    time: "2 min ago",
    unread: true,
   },
   {
    id: 2,
    title: "Project deadline reminder",
    description: "The project is due tomorrow at 5 PM",
    time: "1 hour ago",
    unread: true,
   },
   {
    id: 3,
    title: "System update completed",
    description: "All systems are now running the latest version",
    time: "3 hours ago",
    unread: false,
   },
  ];

  const unreadCount = notifications.filter((n) => n.unread).length;

  return (
   <Popover>
    <PopoverTrigger asChild>
     <Button variant="outline" size="icon" className="relative">
      <Bell className="h-4 w-4" />
      {unreadCount > 0 && (
       <Badge
        variant="destructive"
        className="absolute -top-2 -right-2 h-5 w-5 p-0 text-xs flex items-center justify-center"
       >
        {unreadCount}
       </Badge>
      )}
     </Button>
    </PopoverTrigger>
    <PopoverContent className="w-80">
     <div className="space-y-4">
      <div className="flex items-center justify-between">
       <h4 className="font-medium">Notifications</h4>
       <Button variant="ghost" size="sm" className="text-xs">
        Mark all as read
       </Button>
      </div>

      <div className="space-y-3">
       {notifications.map((notification) => (
        <div
         key={notification.id}
         className={`p-3 rounded-lg border ${
          notification.unread ? "bg-blue-50 border-blue-200" : "bg-muted/50"
         }`}
        >
         <div className="flex items-start justify-between">
          <div className="space-y-1 flex-1">
           <p className="text-sm font-medium">{notification.title}</p>
           <p className="text-xs text-muted-foreground">
            {notification.description}
           </p>
          </div>
          {notification.unread && (
           <div className="w-2 h-2 bg-blue-600 rounded-full mt-1 ml-2" />
          )}
         </div>
         <p className="text-xs text-muted-foreground mt-2">
          {notification.time}
         </p>
        </div>
       ))}
      </div>

      <div className="pt-2">
       <Button variant="outline" className="w-full" size="sm">
        View All Notifications
       </Button>
      </div>
     </div>
    </PopoverContent>
   </Popover>
  );
 },
};

/**
 * Search popover
 */
export const SearchPopover = {
 render: () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [recentSearches] = useState([
   "React components",
   "TypeScript tutorial",
   "Next.js deployment",
   "Tailwind CSS",
  ]);

  const filteredSearches = recentSearches.filter((search) =>
   search.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
   <Popover>
    <PopoverTrigger asChild>
     <Button
      variant="outline"
      className="w-[300px] justify-start text-muted-foreground"
     >
      <Search className="mr-2 h-4 w-4" />
      Search...
     </Button>
    </PopoverTrigger>
    <PopoverContent className="w-[300px] p-0">
     <div className="p-2">
      <Input
       placeholder="Search..."
       value={searchQuery}
       onChange={(e) => setSearchQuery(e.target.value)}
       className="border-0 focus-visible:ring-0 focus-visible:ring-offset-0"
      />
     </div>

     {searchQuery.length === 0 && (
      <>
       <Separator />
       <div className="p-2">
        <div className="px-2 py-1.5 text-xs font-semibold text-muted-foreground">
         Recent Searches
        </div>
        <div className="space-y-1">
         {recentSearches.map((search, index) => (
          <Button
           key={index}
           variant="ghost"
           className="w-full justify-start font-normal"
           size="sm"
           onClick={() => setSearchQuery(search)}
          >
           <Search className="mr-2 h-3 w-3" />
           {search}
          </Button>
         ))}
        </div>
       </div>
      </>
     )}

     {searchQuery.length > 0 && (
      <>
       <Separator />
       <div className="p-2">
        {filteredSearches.length > 0 ? (
         <div className="space-y-1">
          {filteredSearches.map((search, index) => (
           <Button
            key={index}
            variant="ghost"
            className="w-full justify-start font-normal"
            size="sm"
           >
            <Search className="mr-2 h-3 w-3" />
            {search}
           </Button>
          ))}
         </div>
        ) : (
         <div className="py-4 text-center text-sm text-muted-foreground">
          No results found for "{searchQuery}"
         </div>
        )}
       </div>
      </>
     )}
    </PopoverContent>
   </Popover>
  );
 },
};

/**
 * Social actions popover
 */
export const SocialActions = {
 render: () => {
  const [liked, setLiked] = useState(false);

  return (
   <div className="space-y-4">
    <div className="p-4 border rounded-lg max-w-md">
     <div className="space-y-3">
      <div className="flex items-center space-x-3">
       <Avatar className="h-8 w-8">
        <AvatarFallback>JD</AvatarFallback>
       </Avatar>
       <div>
        <p className="text-sm font-medium">John Doe</p>
        <p className="text-xs text-muted-foreground">2 hours ago</p>
       </div>
      </div>

      <p className="text-sm">
       Just shipped a new feature! Really excited to see what everyone thinks.
       The team has been working hard on this for months. 🚀
      </p>

      <div className="flex items-center justify-between pt-2">
       <div className="flex items-center space-x-1">
        <Button
         variant="ghost"
         size="sm"
         onClick={() => setLiked(!liked)}
         className={liked ? "text-red-600" : ""}
        >
         <Heart className={`h-4 w-4 ${liked ? "fill-current" : ""}`} />
         <span className="ml-1">24</span>
        </Button>

        <Button variant="ghost" size="sm">
         <MessageCircle className="h-4 w-4" />
         <span className="ml-1">8</span>
        </Button>
       </div>

       <div className="flex items-center space-x-1">
        <Popover>
         <PopoverTrigger asChild>
          <Button variant="ghost" size="sm">
           <Share className="h-4 w-4" />
          </Button>
         </PopoverTrigger>
         <PopoverContent className="w-48">
          <div className="space-y-1">
           <div className="px-2 py-1.5 text-sm font-semibold">Share</div>
           <Separator />
           <Button variant="ghost" className="w-full justify-start" size="sm">
            Copy Link
           </Button>
           <Button variant="ghost" className="w-full justify-start" size="sm">
            Share to Twitter
           </Button>
           <Button variant="ghost" className="w-full justify-start" size="sm">
            Share to LinkedIn
           </Button>
           <Button variant="ghost" className="w-full justify-start" size="sm">
            Send via Email
           </Button>
          </div>
         </PopoverContent>
        </Popover>

        <Popover>
         <PopoverTrigger asChild>
          <Button variant="ghost" size="sm">
           <MoreHorizontal className="h-4 w-4" />
          </Button>
         </PopoverTrigger>
         <PopoverContent className="w-40">
          <div className="space-y-1">
           <Button variant="ghost" className="w-full justify-start" size="sm">
            Save Post
           </Button>
           <Button variant="ghost" className="w-full justify-start" size="sm">
            Hide Post
           </Button>
           <Button variant="ghost" className="w-full justify-start" size="sm">
            Report
           </Button>
          </div>
         </PopoverContent>
        </Popover>
       </div>
      </div>
     </div>
    </div>
   </div>
  );
 },
};

/**
 * Different positions
 */
export const Positions = {
 render: () => (
  <div className="grid grid-cols-3 gap-4 p-8">
   <Popover>
    <PopoverTrigger asChild>
     <Button variant="outline">Top Start</Button>
    </PopoverTrigger>
    <PopoverContent side="top" align="start" className="w-48">
     <p className="text-sm">Positioned at top start</p>
    </PopoverContent>
   </Popover>

   <Popover>
    <PopoverTrigger asChild>
     <Button variant="outline">Top</Button>
    </PopoverTrigger>
    <PopoverContent side="top" className="w-48">
     <p className="text-sm">Positioned at top center</p>
    </PopoverContent>
   </Popover>

   <Popover>
    <PopoverTrigger asChild>
     <Button variant="outline">Top End</Button>
    </PopoverTrigger>
    <PopoverContent side="top" align="end" className="w-48">
     <p className="text-sm">Positioned at top end</p>
    </PopoverContent>
   </Popover>

   <Popover>
    <PopoverTrigger asChild>
     <Button variant="outline">Left</Button>
    </PopoverTrigger>
    <PopoverContent side="left" className="w-48">
     <p className="text-sm">Positioned at left</p>
    </PopoverContent>
   </Popover>

   <Popover>
    <PopoverTrigger asChild>
     <Button variant="outline">Center</Button>
    </PopoverTrigger>
    <PopoverContent className="w-48">
     <p className="text-sm">Default position</p>
    </PopoverContent>
   </Popover>

   <Popover>
    <PopoverTrigger asChild>
     <Button variant="outline">Right</Button>
    </PopoverTrigger>
    <PopoverContent side="right" className="w-48">
     <p className="text-sm">Positioned at right</p>
    </PopoverContent>
   </Popover>

   <Popover>
    <PopoverTrigger asChild>
     <Button variant="outline">Bottom Start</Button>
    </PopoverTrigger>
    <PopoverContent side="bottom" align="start" className="w-48">
     <p className="text-sm">Positioned at bottom start</p>
    </PopoverContent>
   </Popover>

   <Popover>
    <PopoverTrigger asChild>
     <Button variant="outline">Bottom</Button>
    </PopoverTrigger>
    <PopoverContent side="bottom" className="w-48">
     <p className="text-sm">Positioned at bottom center</p>
    </PopoverContent>
   </Popover>

   <Popover>
    <PopoverTrigger asChild>
     <Button variant="outline">Bottom End</Button>
    </PopoverTrigger>
    <PopoverContent side="bottom" align="end" className="w-48">
     <p className="text-sm">Positioned at bottom end</p>
    </PopoverContent>
   </Popover>
  </div>
 ),
};
