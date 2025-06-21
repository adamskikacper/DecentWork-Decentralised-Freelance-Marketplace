import type { Meta, StoryObj } from "@storybook/react";
import { Separator } from "./index";

/**
 * Separator component provides visual separation between content sections.
 * Built on Radix UI Separator primitive with horizontal and vertical orientations.
 */
const meta = {
 title: "UI/Separator",
 component: Separator,
 parameters: {
  layout: "centered",
 },
 argTypes: {
  orientation: {
   control: { type: "select" },
   options: ["horizontal", "vertical"],
   description: "Separator orientation",
  },
  decorative: {
   control: "boolean",
   description: "Whether separator is decorative (not semantic)",
  },
 },
 tags: ["autodocs"],
} satisfies Meta<typeof Separator>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Default horizontal separator
 */
export const Default: Story = {
 render: () => (
  <div className="w-full max-w-md space-y-4">
   <div>
    <h3 className="text-lg font-semibold">Section 1</h3>
    <p className="text-sm text-muted-foreground">Content above separator</p>
   </div>
   <Separator />
   <div>
    <h3 className="text-lg font-semibold">Section 2</h3>
    <p className="text-sm text-muted-foreground">Content below separator</p>
   </div>
  </div>
 ),
};

/**
 * Horizontal separator
 */
export const Horizontal: Story = {
 render: () => (
  <div className="w-full max-w-md space-y-4">
   <p>Content above</p>
   <Separator orientation="horizontal" />
   <p>Content below</p>
  </div>
 ),
};

/**
 * Vertical separator
 */
export const Vertical: Story = {
 render: () => (
  <div className="flex h-20 items-center space-x-4">
   <div>Left content</div>
   <Separator orientation="vertical" />
   <div>Right content</div>
  </div>
 ),
};

/**
 * In navigation menu
 */
export const InNavigation = {
 render: () => (
  <div className="flex items-center space-x-4">
   <a href="#" className="text-sm font-medium hover:underline">
    Home
   </a>
   <Separator orientation="vertical" className="h-4" />
   <a href="#" className="text-sm font-medium hover:underline">
    About
   </a>
   <Separator orientation="vertical" className="h-4" />
   <a href="#" className="text-sm font-medium hover:underline">
    Services
   </a>
   <Separator orientation="vertical" className="h-4" />
   <a href="#" className="text-sm font-medium hover:underline">
    Contact
   </a>
  </div>
 ),
};

/**
 * In breadcrumb
 */
export const InBreadcrumb = {
 render: () => (
  <div className="flex items-center space-x-2 text-sm">
   <a href="#" className="hover:underline">
    Home
   </a>
   <Separator orientation="vertical" className="h-4" />
   <a href="#" className="hover:underline">
    Category
   </a>
   <Separator orientation="vertical" className="h-4" />
   <span className="text-muted-foreground">Current Page</span>
  </div>
 ),
};

/**
 * In card layout
 */
export const InCard = {
 render: () => (
  <div className="w-full max-w-sm border rounded-lg p-6 space-y-4">
   <div>
    <h3 className="font-semibold">User Profile</h3>
    <p className="text-sm text-muted-foreground">
     Manage your account settings
    </p>
   </div>

   <Separator />

   <div className="space-y-2">
    <div className="flex justify-between">
     <span className="text-sm">Name</span>
     <span className="text-sm font-medium">John Doe</span>
    </div>
    <div className="flex justify-between">
     <span className="text-sm">Email</span>
     <span className="text-sm font-medium">john@example.com</span>
    </div>
   </div>

   <Separator />

   <div className="flex justify-end">
    <button className="text-sm font-medium hover:underline">
     Edit Profile
    </button>
   </div>
  </div>
 ),
};

/**
 * In sidebar layout
 */
export const InSidebar = {
 render: () => (
  <div className="flex w-full max-w-md">
   <div className="w-48 space-y-4 p-4 border-r">
    <div>
     <h4 className="font-medium">Navigation</h4>
     <div className="mt-2 space-y-1">
      <a href="#" className="block text-sm hover:underline">
       Dashboard
      </a>
      <a href="#" className="block text-sm hover:underline">
       Projects
      </a>
      <a href="#" className="block text-sm hover:underline">
       Tasks
      </a>
     </div>
    </div>

    <Separator />

    <div>
     <h4 className="font-medium">Settings</h4>
     <div className="mt-2 space-y-1">
      <a href="#" className="block text-sm hover:underline">
       Profile
      </a>
      <a href="#" className="block text-sm hover:underline">
       Preferences
      </a>
      <a href="#" className="block text-sm hover:underline">
       Security
      </a>
     </div>
    </div>
   </div>

   <Separator orientation="vertical" />

   <div className="flex-1 p-4">
    <h3 className="font-semibold">Main Content</h3>
    <p className="text-sm text-muted-foreground mt-2">
     This is the main content area.
    </p>
   </div>
  </div>
 ),
};

/**
 * Custom styling
 */
export const CustomStyling = {
 render: () => (
  <div className="w-full max-w-md space-y-6">
   <div className="space-y-4">
    <p>Thick separator</p>
    <Separator className="h-1 bg-primary" />
    <p>Content after thick separator</p>
   </div>

   <div className="space-y-4">
    <p>Dashed separator</p>
    <div className="border-t border-dashed border-muted-foreground" />
    <p>Content after dashed separator</p>
   </div>

   <div className="space-y-4">
    <p>Colored separator</p>
    <Separator className="bg-red-500" />
    <p>Content after colored separator</p>
   </div>
  </div>
 ),
};

/**
 * In list items
 */
export const InList = {
 render: () => (
  <div className="w-full max-w-sm space-y-0">
   <div className="py-3">
    <h4 className="font-medium">First Item</h4>
    <p className="text-sm text-muted-foreground">Description of first item</p>
   </div>

   <Separator />

   <div className="py-3">
    <h4 className="font-medium">Second Item</h4>
    <p className="text-sm text-muted-foreground">Description of second item</p>
   </div>

   <Separator />

   <div className="py-3">
    <h4 className="font-medium">Third Item</h4>
    <p className="text-sm text-muted-foreground">Description of third item</p>
   </div>
  </div>
 ),
};

/**
 * Multiple orientations
 */
export const MultipleOrientations = {
 render: () => (
  <div className="grid grid-cols-2 gap-4 w-full max-w-md">
   <div className="space-y-2">
    <p className="text-sm font-medium">Horizontal separators</p>
    <div className="space-y-2">
     <div>Item 1</div>
     <Separator />
     <div>Item 2</div>
     <Separator />
     <div>Item 3</div>
    </div>
   </div>

   <div className="space-y-2">
    <p className="text-sm font-medium">Vertical separators</p>
    <div className="flex items-center space-x-2 h-20">
     <div>A</div>
     <Separator orientation="vertical" />
     <div>B</div>
     <Separator orientation="vertical" />
     <div>C</div>
    </div>
   </div>
  </div>
 ),
};
