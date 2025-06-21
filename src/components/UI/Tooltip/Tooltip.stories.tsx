import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "../Button";
import { Badge } from "../Badge";
import { Avatar } from "../Avatar";
import {
 Tooltip,
 TooltipContent,
 TooltipProvider,
 TooltipTrigger,
} from "./index";

const meta: Meta<typeof Tooltip> = {
 title: "UI/Tooltip",
 component: Tooltip,
 parameters: {
  layout: "centered",
  docs: {
   description: {
    component:
     "A tooltip component that displays helpful information when hovering over an element. Perfect for providing context and additional details.",
   },
  },
 },
 tags: ["autodocs"],
 decorators: [
  (Story) => (
   <TooltipProvider>
    <Story />
   </TooltipProvider>
  ),
 ],
};

export default meta;
type Story = StoryObj<typeof Tooltip>;

/**
 * Basic tooltip with simple text
 */
export const Default: Story = {
 render: () => (
  <Tooltip>
   <TooltipTrigger asChild>
    <Button variant="outline">Hover me</Button>
   </TooltipTrigger>
   <TooltipContent>
    <p>Add to library</p>
   </TooltipContent>
  </Tooltip>
 ),
};

/**
 * Tooltip with different positions
 */
export const Positions: Story = {
 render: () => (
  <div className="flex flex-col items-center space-y-8">
   <Tooltip>
    <TooltipTrigger asChild>
     <Button variant="outline">Top (default)</Button>
    </TooltipTrigger>
    <TooltipContent>
     <p>This tooltip appears on top</p>
    </TooltipContent>
   </Tooltip>

   <div className="flex space-x-8">
    <Tooltip>
     <TooltipTrigger asChild>
      <Button variant="outline">Left</Button>
     </TooltipTrigger>
     <TooltipContent side="left">
      <p>This tooltip appears on the left</p>
     </TooltipContent>
    </Tooltip>

    <Tooltip>
     <TooltipTrigger asChild>
      <Button variant="outline">Right</Button>
     </TooltipTrigger>
     <TooltipContent side="right">
      <p>This tooltip appears on the right</p>
     </TooltipContent>
    </Tooltip>
   </div>

   <Tooltip>
    <TooltipTrigger asChild>
     <Button variant="outline">Bottom</Button>
    </TooltipTrigger>
    <TooltipContent side="bottom">
     <p>This tooltip appears on the bottom</p>
    </TooltipContent>
   </Tooltip>
  </div>
 ),
};

/**
 * Icon buttons with tooltips
 */
export const IconButtons: Story = {
 render: () => (
  <div className="flex space-x-4">
   <Tooltip>
    <TooltipTrigger asChild>
     <Button variant="outline" size="icon">
      ❤️
     </Button>
    </TooltipTrigger>
    <TooltipContent>
     <p>Add to favorites</p>
    </TooltipContent>
   </Tooltip>

   <Tooltip>
    <TooltipTrigger asChild>
     <Button variant="outline" size="icon">
      🔗
     </Button>
    </TooltipTrigger>
    <TooltipContent>
     <p>Copy link</p>
    </TooltipContent>
   </Tooltip>

   <Tooltip>
    <TooltipTrigger asChild>
     <Button variant="outline" size="icon">
      📤
     </Button>
    </TooltipTrigger>
    <TooltipContent>
     <p>Share</p>
    </TooltipContent>
   </Tooltip>

   <Tooltip>
    <TooltipTrigger asChild>
     <Button variant="outline" size="icon">
      ⚙️
     </Button>
    </TooltipTrigger>
    <TooltipContent>
     <p>Settings</p>
    </TooltipContent>
   </Tooltip>
  </div>
 ),
};

/**
 * Tooltips with rich content
 */
export const RichContent: Story = {
 render: () => (
  <div className="flex space-x-8">
   <Tooltip>
    <TooltipTrigger asChild>
     <Button variant="outline">User Info</Button>
    </TooltipTrigger>
    <TooltipContent className="max-w-xs">
     <div className="flex items-center space-x-2">
      <Avatar className="h-8 w-8">
       <img src="https://github.com/shadcn.png" alt="User" />
      </Avatar>
      <div>
       <p className="font-medium">John Doe</p>
       <p className="text-xs text-gray-500">Software Engineer</p>
      </div>
     </div>
    </TooltipContent>
   </Tooltip>

   <Tooltip>
    <TooltipTrigger asChild>
     <Button variant="outline">Status</Button>
    </TooltipTrigger>
    <TooltipContent>
     <div className="flex items-center space-x-2">
      <div className="h-2 w-2 bg-green-500 rounded-full"></div>
      <span>Online</span>
     </div>
    </TooltipContent>
   </Tooltip>

   <Tooltip>
    <TooltipTrigger asChild>
     <Button variant="outline">Progress</Button>
    </TooltipTrigger>
    <TooltipContent className="max-w-xs">
     <div className="space-y-2">
      <p className="font-medium">Upload Progress</p>
      <div className="w-32 bg-gray-200 rounded-full h-2">
       <div
        className="bg-blue-600 h-2 rounded-full"
        style={{ width: "65%" }}
       ></div>
      </div>
      <p className="text-xs text-gray-500">65% complete</p>
     </div>
    </TooltipContent>
   </Tooltip>
  </div>
 ),
};

/**
 * Tooltip with keyboard shortcuts
 */
export const WithShortcuts: Story = {
 render: () => (
  <div className="flex space-x-4">
   <Tooltip>
    <TooltipTrigger asChild>
     <Button variant="outline">Save</Button>
    </TooltipTrigger>
    <TooltipContent>
     <div className="flex items-center space-x-2">
      <span>Save file</span>
      <Badge variant="secondary" className="text-xs">
       ⌘S
      </Badge>
     </div>
    </TooltipContent>
   </Tooltip>

   <Tooltip>
    <TooltipTrigger asChild>
     <Button variant="outline">Copy</Button>
    </TooltipTrigger>
    <TooltipContent>
     <div className="flex items-center space-x-2">
      <span>Copy to clipboard</span>
      <Badge variant="secondary" className="text-xs">
       ⌘C
      </Badge>
     </div>
    </TooltipContent>
   </Tooltip>

   <Tooltip>
    <TooltipTrigger asChild>
     <Button variant="outline">Undo</Button>
    </TooltipTrigger>
    <TooltipContent>
     <div className="flex items-center space-x-2">
      <span>Undo last action</span>
      <Badge variant="secondary" className="text-xs">
       ⌘Z
      </Badge>
     </div>
    </TooltipContent>
   </Tooltip>
  </div>
 ),
};

/**
 * Disabled elements with tooltips
 */
export const DisabledElements: Story = {
 render: () => (
  <div className="flex space-x-4">
   <Tooltip>
    <TooltipTrigger asChild>
     <span>
      <Button variant="outline" disabled>
       Disabled Button
      </Button>
     </span>
    </TooltipTrigger>
    <TooltipContent>
     <p>This action is not available right now</p>
    </TooltipContent>
   </Tooltip>

   <Tooltip>
    <TooltipTrigger asChild>
     <span>
      <Button variant="outline" disabled size="icon">
       🔒
      </Button>
     </span>
    </TooltipTrigger>
    <TooltipContent>
     <div className="max-w-xs">
      <p className="font-medium">Premium Feature</p>
      <p className="text-xs text-gray-500 mt-1">
       Upgrade to Pro to unlock this feature
      </p>
     </div>
    </TooltipContent>
   </Tooltip>
  </div>
 ),
};

/**
 * Form field tooltips
 */
export const FormFields: Story = {
 render: () => (
  <div className="space-y-4 w-80">
   <div className="space-y-2">
    <div className="flex items-center space-x-2">
     <label className="text-sm font-medium">Password</label>
     <Tooltip>
      <TooltipTrigger asChild>
       <Button variant="ghost" size="sm" className="h-4 w-4 p-0">
        ℹ️
       </Button>
      </TooltipTrigger>
      <TooltipContent className="max-w-xs">
       <div className="space-y-1">
        <p className="font-medium">Password Requirements:</p>
        <ul className="text-xs space-y-1">
         <li>• At least 8 characters</li>
         <li>• One uppercase letter</li>
         <li>• One number</li>
         <li>• One special character</li>
        </ul>
       </div>
      </TooltipContent>
     </Tooltip>
    </div>
    <input
     type="password"
     className="w-full px-3 py-2 border border-gray-300 rounded-md"
     placeholder="Enter password"
    />
   </div>

   <div className="space-y-2">
    <div className="flex items-center space-x-2">
     <label className="text-sm font-medium">API Key</label>
     <Tooltip>
      <TooltipTrigger asChild>
       <Button variant="ghost" size="sm" className="h-4 w-4 p-0">
        ❓
       </Button>
      </TooltipTrigger>
      <TooltipContent className="max-w-xs">
       <p>
        Your API key can be found in your account settings under the Developer
        section.
       </p>
      </TooltipContent>
     </Tooltip>
    </div>
    <input
     type="text"
     className="w-full px-3 py-2 border border-gray-300 rounded-md"
     placeholder="Enter API key"
    />
   </div>
  </div>
 ),
};

/**
 * Interactive tooltips with delays
 */
export const WithDelays: Story = {
 render: () => (
  <div className="flex space-x-4">
   <Tooltip delayDuration={0}>
    <TooltipTrigger asChild>
     <Button variant="outline">No Delay</Button>
    </TooltipTrigger>
    <TooltipContent>
     <p>Appears immediately</p>
    </TooltipContent>
   </Tooltip>

   <Tooltip delayDuration={500}>
    <TooltipTrigger asChild>
     <Button variant="outline">500ms Delay</Button>
    </TooltipTrigger>
    <TooltipContent>
     <p>Appears after 500ms</p>
    </TooltipContent>
   </Tooltip>

   <Tooltip delayDuration={1000}>
    <TooltipTrigger asChild>
     <Button variant="outline">1s Delay</Button>
    </TooltipTrigger>
    <TooltipContent>
     <p>Appears after 1 second</p>
    </TooltipContent>
   </Tooltip>
  </div>
 ),
};

/**
 * Navigation tooltips
 */
export const Navigation: Story = {
 render: () => (
  <div className="flex space-x-2 p-4 bg-gray-100 rounded-lg">
   <Tooltip>
    <TooltipTrigger asChild>
     <Button variant="ghost" size="icon">
      🏠
     </Button>
    </TooltipTrigger>
    <TooltipContent>
     <p>Home</p>
    </TooltipContent>
   </Tooltip>

   <Tooltip>
    <TooltipTrigger asChild>
     <Button variant="ghost" size="icon">
      📊
     </Button>
    </TooltipTrigger>
    <TooltipContent>
     <p>Dashboard</p>
    </TooltipContent>
   </Tooltip>

   <Tooltip>
    <TooltipTrigger asChild>
     <Button variant="ghost" size="icon">
      👥
     </Button>
    </TooltipTrigger>
    <TooltipContent>
     <p>Team</p>
    </TooltipContent>
   </Tooltip>

   <Tooltip>
    <TooltipTrigger asChild>
     <Button variant="ghost" size="icon">
      📁
     </Button>
    </TooltipTrigger>
    <TooltipContent>
     <p>Projects</p>
    </TooltipContent>
   </Tooltip>

   <Tooltip>
    <TooltipTrigger asChild>
     <Button variant="ghost" size="icon">
      ⚙️
     </Button>
    </TooltipTrigger>
    <TooltipContent>
     <p>Settings</p>
    </TooltipContent>
   </Tooltip>
  </div>
 ),
};
