import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import {
 ContextMenu,
 ContextMenuContent,
 ContextMenuItem,
 ContextMenuTrigger,
 ContextMenuSeparator,
 ContextMenuSub,
 ContextMenuSubContent,
 ContextMenuSubTrigger,
 ContextMenuCheckboxItem,
 ContextMenuRadioGroup,
 ContextMenuRadioItem,
 ContextMenuLabel,
 ContextMenuShortcut,
} from "./index";

const meta: Meta<typeof ContextMenu> = {
 title: "UI/ContextMenu",
 component: ContextMenu,
 parameters: {
  layout: "centered",
  docs: {
   description: {
    component:
     "A context menu component that appears on right-click. Perfect for file operations, text editing, and application-specific actions.",
   },
  },
 },
 tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof ContextMenu>;

/**
 * Basic context menu with simple actions
 */
export const Default: Story = {
 render: () => (
  <ContextMenu>
   <ContextMenuTrigger className="flex h-32 w-64 items-center justify-center rounded-md border border-dashed text-sm">
    Right click here
   </ContextMenuTrigger>
   <ContextMenuContent className="w-64">
    <ContextMenuItem>Back</ContextMenuItem>
    <ContextMenuItem>Forward</ContextMenuItem>
    <ContextMenuItem>Reload</ContextMenuItem>
    <ContextMenuSeparator />
    <ContextMenuItem>More Tools</ContextMenuItem>
    <ContextMenuSeparator />
    <ContextMenuItem>View Page Source</ContextMenuItem>
    <ContextMenuItem>Inspect Element</ContextMenuItem>
   </ContextMenuContent>
  </ContextMenu>
 ),
};

/**
 * File operations context menu
 */
export const FileOperations: Story = {
 render: () => (
  <ContextMenu>
   <ContextMenuTrigger className="flex h-32 w-64 items-center justify-center rounded-md border bg-gray-50 text-sm">
    📁 Project Folder
    <br />
    <span className="text-xs text-gray-500">Right click for options</span>
   </ContextMenuTrigger>
   <ContextMenuContent className="w-64">
    <ContextMenuItem>
     Open
     <ContextMenuShortcut>⌘O</ContextMenuShortcut>
    </ContextMenuItem>
    <ContextMenuItem>
     Open in New Window
     <ContextMenuShortcut>⌘⇧O</ContextMenuShortcut>
    </ContextMenuItem>
    <ContextMenuSeparator />
    <ContextMenuItem>
     Cut
     <ContextMenuShortcut>⌘X</ContextMenuShortcut>
    </ContextMenuItem>
    <ContextMenuItem>
     Copy
     <ContextMenuShortcut>⌘C</ContextMenuShortcut>
    </ContextMenuItem>
    <ContextMenuItem>
     Paste
     <ContextMenuShortcut>⌘V</ContextMenuShortcut>
    </ContextMenuItem>
    <ContextMenuSeparator />
    <ContextMenuItem>
     Rename
     <ContextMenuShortcut>F2</ContextMenuShortcut>
    </ContextMenuItem>
    <ContextMenuItem className="text-red-600">
     Delete
     <ContextMenuShortcut>⌘⌫</ContextMenuShortcut>
    </ContextMenuItem>
    <ContextMenuSeparator />
    <ContextMenuItem>Properties</ContextMenuItem>
   </ContextMenuContent>
  </ContextMenu>
 ),
};

/**
 * Text editing context menu
 */
export const TextEditing: Story = {
 render: () => (
  <ContextMenu>
   <ContextMenuTrigger className="flex h-32 w-64 items-center justify-center rounded-md border bg-white p-4 text-sm">
    <div className="text-center">
     This is some sample text that you can right-click to see editing options.
    </div>
   </ContextMenuTrigger>
   <ContextMenuContent className="w-64">
    <ContextMenuItem>
     Cut
     <ContextMenuShortcut>⌘X</ContextMenuShortcut>
    </ContextMenuItem>
    <ContextMenuItem>
     Copy
     <ContextMenuShortcut>⌘C</ContextMenuShortcut>
    </ContextMenuItem>
    <ContextMenuItem>
     Paste
     <ContextMenuShortcut>⌘V</ContextMenuShortcut>
    </ContextMenuItem>
    <ContextMenuSeparator />
    <ContextMenuItem>
     Select All
     <ContextMenuShortcut>⌘A</ContextMenuShortcut>
    </ContextMenuItem>
    <ContextMenuSeparator />
    <ContextMenuItem>
     Find
     <ContextMenuShortcut>⌘F</ContextMenuShortcut>
    </ContextMenuItem>
    <ContextMenuItem>
     Replace
     <ContextMenuShortcut>⌘H</ContextMenuShortcut>
    </ContextMenuItem>
    <ContextMenuSeparator />
    <ContextMenuItem>Spell Check</ContextMenuItem>
    <ContextMenuItem>Word Count</ContextMenuItem>
   </ContextMenuContent>
  </ContextMenu>
 ),
};

/**
 * Context menu with submenus
 */
export const WithSubmenus: Story = {
 render: () => (
  <ContextMenu>
   <ContextMenuTrigger className="flex h-32 w-64 items-center justify-center rounded-md border bg-blue-50 text-sm">
    🎨 Design Canvas
    <br />
    <span className="text-xs text-gray-500">Right click for tools</span>
   </ContextMenuTrigger>
   <ContextMenuContent className="w-64">
    <ContextMenuItem>
     Select Tool
     <ContextMenuShortcut>V</ContextMenuShortcut>
    </ContextMenuItem>
    <ContextMenuItem>
     Move Tool
     <ContextMenuShortcut>M</ContextMenuShortcut>
    </ContextMenuItem>
    <ContextMenuSeparator />
    <ContextMenuSub>
     <ContextMenuSubTrigger>Insert</ContextMenuSubTrigger>
     <ContextMenuSubContent className="w-48">
      <ContextMenuItem>Rectangle</ContextMenuItem>
      <ContextMenuItem>Circle</ContextMenuItem>
      <ContextMenuItem>Line</ContextMenuItem>
      <ContextMenuItem>Text Box</ContextMenuItem>
      <ContextMenuSeparator />
      <ContextMenuItem>Image</ContextMenuItem>
      <ContextMenuItem>Icon</ContextMenuItem>
     </ContextMenuSubContent>
    </ContextMenuSub>
    <ContextMenuSub>
     <ContextMenuSubTrigger>Arrange</ContextMenuSubTrigger>
     <ContextMenuSubContent className="w-48">
      <ContextMenuItem>Bring to Front</ContextMenuItem>
      <ContextMenuItem>Send to Back</ContextMenuItem>
      <ContextMenuSeparator />
      <ContextMenuItem>Align Left</ContextMenuItem>
      <ContextMenuItem>Align Center</ContextMenuItem>
      <ContextMenuItem>Align Right</ContextMenuItem>
      <ContextMenuSeparator />
      <ContextMenuItem>Group</ContextMenuItem>
      <ContextMenuItem>Ungroup</ContextMenuItem>
     </ContextMenuSubContent>
    </ContextMenuSub>
    <ContextMenuSeparator />
    <ContextMenuItem>
     Zoom In
     <ContextMenuShortcut>⌘+</ContextMenuShortcut>
    </ContextMenuItem>
    <ContextMenuItem>
     Zoom Out
     <ContextMenuShortcut>⌘-</ContextMenuShortcut>
    </ContextMenuItem>
   </ContextMenuContent>
  </ContextMenu>
 ),
};

/**
 * Context menu with checkboxes and radio items
 */
export const WithOptions: Story = {
 render: () => {
  const [showGrid, setShowGrid] = useState(true);
  const [showRulers, setShowRulers] = useState(false);
  const [showGuides, setShowGuides] = useState(true);
  const [viewMode, setViewMode] = useState("design");

  return (
   <ContextMenu>
    <ContextMenuTrigger className="flex h-32 w-64 items-center justify-center rounded-md border bg-green-50 text-sm">
     🖥️ Workspace
     <br />
     <span className="text-xs text-gray-500">Right click for view options</span>
    </ContextMenuTrigger>
    <ContextMenuContent className="w-64">
     <ContextMenuLabel>View Options</ContextMenuLabel>
     <ContextMenuSeparator />
     <ContextMenuCheckboxItem checked={showGrid} onCheckedChange={setShowGrid}>
      Show Grid
      <ContextMenuShortcut>⌘G</ContextMenuShortcut>
     </ContextMenuCheckboxItem>
     <ContextMenuCheckboxItem
      checked={showRulers}
      onCheckedChange={setShowRulers}
     >
      Show Rulers
      <ContextMenuShortcut>⌘R</ContextMenuShortcut>
     </ContextMenuCheckboxItem>
     <ContextMenuCheckboxItem
      checked={showGuides}
      onCheckedChange={setShowGuides}
     >
      Show Guides
      <ContextMenuShortcut>⌘;</ContextMenuShortcut>
     </ContextMenuCheckboxItem>
     <ContextMenuSeparator />
     <ContextMenuLabel>View Mode</ContextMenuLabel>
     <ContextMenuRadioGroup value={viewMode} onValueChange={setViewMode}>
      <ContextMenuRadioItem value="design">Design</ContextMenuRadioItem>
      <ContextMenuRadioItem value="prototype">Prototype</ContextMenuRadioItem>
      <ContextMenuRadioItem value="code">Code</ContextMenuRadioItem>
     </ContextMenuRadioGroup>
     <ContextMenuSeparator />
     <ContextMenuItem>
      Refresh
      <ContextMenuShortcut>⌘R</ContextMenuShortcut>
     </ContextMenuItem>
    </ContextMenuContent>
   </ContextMenu>
  );
 },
};

/**
 * Image context menu
 */
export const ImageOperations: Story = {
 render: () => (
  <ContextMenu>
   <ContextMenuTrigger className="flex h-40 w-64 items-center justify-center rounded-md border bg-gray-100 text-sm">
    <div className="text-center">
     🖼️
     <br />
     Sample Image
     <br />
     <span className="text-xs text-gray-500">Right click for options</span>
    </div>
   </ContextMenuTrigger>
   <ContextMenuContent className="w-64">
    <ContextMenuItem>
     Open Image
     <ContextMenuShortcut>⌘O</ContextMenuShortcut>
    </ContextMenuItem>
    <ContextMenuItem>
     Save Image As...
     <ContextMenuShortcut>⌘S</ContextMenuShortcut>
    </ContextMenuItem>
    <ContextMenuItem>
     Copy Image
     <ContextMenuShortcut>⌘C</ContextMenuShortcut>
    </ContextMenuItem>
    <ContextMenuSeparator />
    <ContextMenuSub>
     <ContextMenuSubTrigger>Edit</ContextMenuSubTrigger>
     <ContextMenuSubContent className="w-48">
      <ContextMenuItem>Crop</ContextMenuItem>
      <ContextMenuItem>Resize</ContextMenuItem>
      <ContextMenuItem>Rotate</ContextMenuItem>
      <ContextMenuSeparator />
      <ContextMenuItem>Adjust Brightness</ContextMenuItem>
      <ContextMenuItem>Adjust Contrast</ContextMenuItem>
      <ContextMenuSeparator />
      <ContextMenuItem>Add Filter</ContextMenuItem>
     </ContextMenuSubContent>
    </ContextMenuSub>
    <ContextMenuSub>
     <ContextMenuSubTrigger>Share</ContextMenuSubTrigger>
     <ContextMenuSubContent className="w-48">
      <ContextMenuItem>Email</ContextMenuItem>
      <ContextMenuItem>Social Media</ContextMenuItem>
      <ContextMenuItem>Copy Link</ContextMenuItem>
      <ContextMenuSeparator />
      <ContextMenuItem>Export</ContextMenuItem>
     </ContextMenuSubContent>
    </ContextMenuSub>
    <ContextMenuSeparator />
    <ContextMenuItem>Properties</ContextMenuItem>
   </ContextMenuContent>
  </ContextMenu>
 ),
};

/**
 * Table row context menu
 */
export const TableRow: Story = {
 render: () => (
  <ContextMenu>
   <ContextMenuTrigger className="flex h-20 w-80 items-center rounded-md border bg-white p-4 text-sm hover:bg-gray-50">
    <div className="flex w-full items-center justify-between">
     <div>
      <div className="font-medium">John Doe</div>
      <div className="text-xs text-gray-500">john.doe@example.com</div>
     </div>
     <div className="text-xs text-gray-500">Right click for actions</div>
    </div>
   </ContextMenuTrigger>
   <ContextMenuContent className="w-64">
    <ContextMenuLabel>User Actions</ContextMenuLabel>
    <ContextMenuSeparator />
    <ContextMenuItem>View Profile</ContextMenuItem>
    <ContextMenuItem>Send Message</ContextMenuItem>
    <ContextMenuItem>Assign Task</ContextMenuItem>
    <ContextMenuSeparator />
    <ContextMenuItem>
     Edit User
     <ContextMenuShortcut>⌘E</ContextMenuShortcut>
    </ContextMenuItem>
    <ContextMenuItem>
     Duplicate User
     <ContextMenuShortcut>⌘D</ContextMenuShortcut>
    </ContextMenuItem>
    <ContextMenuSeparator />
    <ContextMenuSub>
     <ContextMenuSubTrigger>Change Status</ContextMenuSubTrigger>
     <ContextMenuSubContent className="w-48">
      <ContextMenuItem>Active</ContextMenuItem>
      <ContextMenuItem>Inactive</ContextMenuItem>
      <ContextMenuItem>Pending</ContextMenuItem>
      <ContextMenuItem>Suspended</ContextMenuItem>
     </ContextMenuSubContent>
    </ContextMenuSub>
    <ContextMenuSeparator />
    <ContextMenuItem className="text-red-600">
     Delete User
     <ContextMenuShortcut>⌘⌫</ContextMenuShortcut>
    </ContextMenuItem>
   </ContextMenuContent>
  </ContextMenu>
 ),
};

/**
 * Code editor context menu
 */
export const CodeEditor: Story = {
 render: () => (
  <ContextMenu>
   <ContextMenuTrigger className="flex h-40 w-80 items-start rounded-md border bg-gray-900 p-4 text-sm font-mono text-green-400">
    <div className="whitespace-pre">
     {`function hello() {
  console.log("Hello World!");
  return true;
}`}
     <br />
     <span className="text-xs text-gray-500">Right click for code actions</span>
    </div>
   </ContextMenuTrigger>
   <ContextMenuContent className="w-64">
    <ContextMenuItem>
     Cut Line
     <ContextMenuShortcut>⌘X</ContextMenuShortcut>
    </ContextMenuItem>
    <ContextMenuItem>
     Copy Line
     <ContextMenuShortcut>⌘C</ContextMenuShortcut>
    </ContextMenuItem>
    <ContextMenuItem>
     Paste
     <ContextMenuShortcut>⌘V</ContextMenuShortcut>
    </ContextMenuItem>
    <ContextMenuSeparator />
    <ContextMenuItem>
     Go to Definition
     <ContextMenuShortcut>F12</ContextMenuShortcut>
    </ContextMenuItem>
    <ContextMenuItem>
     Find All References
     <ContextMenuShortcut>⇧F12</ContextMenuShortcut>
    </ContextMenuItem>
    <ContextMenuItem>
     Rename Symbol
     <ContextMenuShortcut>F2</ContextMenuShortcut>
    </ContextMenuItem>
    <ContextMenuSeparator />
    <ContextMenuSub>
     <ContextMenuSubTrigger>Refactor</ContextMenuSubTrigger>
     <ContextMenuSubContent className="w-48">
      <ContextMenuItem>Extract Method</ContextMenuItem>
      <ContextMenuItem>Extract Variable</ContextMenuItem>
      <ContextMenuItem>Inline Variable</ContextMenuItem>
      <ContextMenuSeparator />
      <ContextMenuItem>Convert to Arrow Function</ContextMenuItem>
     </ContextMenuSubContent>
    </ContextMenuSub>
    <ContextMenuItem>
     Format Document
     <ContextMenuShortcut>⇧⌥F</ContextMenuShortcut>
    </ContextMenuItem>
    <ContextMenuSeparator />
    <ContextMenuItem>Add Comment</ContextMenuItem>
    <ContextMenuItem>Toggle Breakpoint</ContextMenuItem>
   </ContextMenuContent>
  </ContextMenu>
 ),
};
