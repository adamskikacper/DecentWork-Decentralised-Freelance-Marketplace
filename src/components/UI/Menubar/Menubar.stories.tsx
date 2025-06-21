import type { Meta, StoryObj } from "@storybook/react";
import {
 Menubar,
 MenubarContent,
 MenubarItem,
 MenubarMenu,
 MenubarSeparator,
 MenubarShortcut,
 MenubarTrigger,
 MenubarCheckboxItem,
 MenubarRadioGroup,
 MenubarRadioItem,
 MenubarSub,
 MenubarSubContent,
 MenubarSubTrigger,
} from "./index";
import {
 File,
 Edit,
 Eye,
 Settings,
 HelpCircle,
 Save,
 Copy,
 ClipboardPaste,
 Undo,
 Redo,
 Search,
 ZoomIn,
 ZoomOut,
} from "lucide-react";

/**
 * Menubar component provides a horizontal menu bar with dropdown menus.
 * Built on Radix UI Menubar primitive with keyboard navigation.
 */
const meta = {
 title: "UI/Menubar",
 component: Menubar,
 parameters: {
  layout: "centered",
 },
 tags: ["autodocs"],
} satisfies Meta<typeof Menubar>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Basic menubar
 */
export const Basic: Story = {
 render: () => (
  <Menubar>
   <MenubarMenu>
    <MenubarTrigger>File</MenubarTrigger>
    <MenubarContent>
     <MenubarItem>
      New <MenubarShortcut>⌘N</MenubarShortcut>
     </MenubarItem>
     <MenubarItem>
      Open <MenubarShortcut>⌘O</MenubarShortcut>
     </MenubarItem>
     <MenubarItem>
      Save <MenubarShortcut>⌘S</MenubarShortcut>
     </MenubarItem>
     <MenubarSeparator />
     <MenubarItem>
      Exit <MenubarShortcut>⌘Q</MenubarShortcut>
     </MenubarItem>
    </MenubarContent>
   </MenubarMenu>

   <MenubarMenu>
    <MenubarTrigger>Edit</MenubarTrigger>
    <MenubarContent>
     <MenubarItem>
      Undo <MenubarShortcut>⌘Z</MenubarShortcut>
     </MenubarItem>
     <MenubarItem>
      Redo <MenubarShortcut>⇧⌘Z</MenubarShortcut>
     </MenubarItem>
     <MenubarSeparator />
     <MenubarItem>
      Cut <MenubarShortcut>⌘X</MenubarShortcut>
     </MenubarItem>
     <MenubarItem>
      Copy <MenubarShortcut>⌘C</MenubarShortcut>
     </MenubarItem>
     <MenubarItem>
      Paste <MenubarShortcut>⌘V</MenubarShortcut>
     </MenubarItem>
    </MenubarContent>
   </MenubarMenu>

   <MenubarMenu>
    <MenubarTrigger>View</MenubarTrigger>
    <MenubarContent>
     <MenubarCheckboxItem checked>Show Toolbar</MenubarCheckboxItem>
     <MenubarCheckboxItem>Show Sidebar</MenubarCheckboxItem>
     <MenubarSeparator />
     <MenubarItem>
      Zoom In <MenubarShortcut>⌘+</MenubarShortcut>
     </MenubarItem>
     <MenubarItem>
      Zoom Out <MenubarShortcut>⌘-</MenubarShortcut>
     </MenubarItem>
    </MenubarContent>
   </MenubarMenu>
  </Menubar>
 ),
};

/**
 * Application menubar with icons
 */
export const Application = {
 render: () => (
  <Menubar>
   <MenubarMenu>
    <MenubarTrigger className="flex items-center">
     <File className="mr-2 h-4 w-4" />
     File
    </MenubarTrigger>
    <MenubarContent>
     <MenubarItem>
      <File className="mr-2 h-4 w-4" />
      New File <MenubarShortcut>⌘N</MenubarShortcut>
     </MenubarItem>
     <MenubarItem>
      <File className="mr-2 h-4 w-4" />
      Open File <MenubarShortcut>⌘O</MenubarShortcut>
     </MenubarItem>
     <MenubarItem>
      <Save className="mr-2 h-4 w-4" />
      Save <MenubarShortcut>⌘S</MenubarShortcut>
     </MenubarItem>
     <MenubarItem>
      Save As... <MenubarShortcut>⇧⌘S</MenubarShortcut>
     </MenubarItem>
     <MenubarSeparator />
     <MenubarItem disabled>Recent Files</MenubarItem>
     <MenubarSeparator />
     <MenubarItem>
      Exit <MenubarShortcut>⌘Q</MenubarShortcut>
     </MenubarItem>
    </MenubarContent>
   </MenubarMenu>

   <MenubarMenu>
    <MenubarTrigger className="flex items-center">
     <Edit className="mr-2 h-4 w-4" />
     Edit
    </MenubarTrigger>
    <MenubarContent>
     <MenubarItem>
      <Undo className="mr-2 h-4 w-4" />
      Undo <MenubarShortcut>⌘Z</MenubarShortcut>
     </MenubarItem>
     <MenubarItem>
      <Redo className="mr-2 h-4 w-4" />
      Redo <MenubarShortcut>⇧⌘Z</MenubarShortcut>
     </MenubarItem>
     <MenubarSeparator />
     <MenubarItem>
      Cut <MenubarShortcut>⌘X</MenubarShortcut>
     </MenubarItem>
     <MenubarItem>
      <Copy className="mr-2 h-4 w-4" />
      Copy <MenubarShortcut>⌘C</MenubarShortcut>
     </MenubarItem>
     <MenubarItem>
      <ClipboardPaste className="mr-2 h-4 w-4" />
      Paste <MenubarShortcut>⌘V</MenubarShortcut>
     </MenubarItem>
     <MenubarSeparator />
     <MenubarItem>
      <Search className="mr-2 h-4 w-4" />
      Find <MenubarShortcut>⌘F</MenubarShortcut>
     </MenubarItem>
     <MenubarItem>
      Find and Replace <MenubarShortcut>⌘H</MenubarShortcut>
     </MenubarItem>
    </MenubarContent>
   </MenubarMenu>

   <MenubarMenu>
    <MenubarTrigger className="flex items-center">
     <Eye className="mr-2 h-4 w-4" />
     View
    </MenubarTrigger>
    <MenubarContent>
     <MenubarCheckboxItem checked>
      <File className="mr-2 h-4 w-4" />
      File Explorer
     </MenubarCheckboxItem>
     <MenubarCheckboxItem>Search Panel</MenubarCheckboxItem>
     <MenubarCheckboxItem checked>Status Bar</MenubarCheckboxItem>
     <MenubarSeparator />
     <MenubarSub>
      <MenubarSubTrigger>Zoom</MenubarSubTrigger>
      <MenubarSubContent>
       <MenubarItem>
        <ZoomIn className="mr-2 h-4 w-4" />
        Zoom In <MenubarShortcut>⌘+</MenubarShortcut>
       </MenubarItem>
       <MenubarItem>
        <ZoomOut className="mr-2 h-4 w-4" />
        Zoom Out <MenubarShortcut>⌘-</MenubarShortcut>
       </MenubarItem>
       <MenubarItem>
        Reset Zoom <MenubarShortcut>⌘0</MenubarShortcut>
       </MenubarItem>
      </MenubarSubContent>
     </MenubarSub>
     <MenubarSeparator />
     <MenubarRadioGroup value="light">
      <MenubarRadioItem value="light">Light Theme</MenubarRadioItem>
      <MenubarRadioItem value="dark">Dark Theme</MenubarRadioItem>
      <MenubarRadioItem value="system">System Theme</MenubarRadioItem>
     </MenubarRadioGroup>
    </MenubarContent>
   </MenubarMenu>

   <MenubarMenu>
    <MenubarTrigger className="flex items-center">
     <Settings className="mr-2 h-4 w-4" />
     Settings
    </MenubarTrigger>
    <MenubarContent>
     <MenubarItem>
      <Settings className="mr-2 h-4 w-4" />
      Preferences <MenubarShortcut>⌘,</MenubarShortcut>
     </MenubarItem>
     <MenubarItem>
      Keyboard Shortcuts <MenubarShortcut>⌘K ⌘S</MenubarShortcut>
     </MenubarItem>
     <MenubarSeparator />
     <MenubarItem>Extensions</MenubarItem>
     <MenubarItem>Color Theme</MenubarItem>
    </MenubarContent>
   </MenubarMenu>

   <MenubarMenu>
    <MenubarTrigger className="flex items-center">
     <HelpCircle className="mr-2 h-4 w-4" />
     Help
    </MenubarTrigger>
    <MenubarContent>
     <MenubarItem>Documentation</MenubarItem>
     <MenubarItem>Keyboard Shortcuts</MenubarItem>
     <MenubarSeparator />
     <MenubarItem>About</MenubarItem>
    </MenubarContent>
   </MenubarMenu>
  </Menubar>
 ),
};

/**
 * Simple menubar
 */
export const Simple = {
 render: () => (
  <Menubar>
   <MenubarMenu>
    <MenubarTrigger>Home</MenubarTrigger>
   </MenubarMenu>
   <MenubarMenu>
    <MenubarTrigger>Products</MenubarTrigger>
    <MenubarContent>
     <MenubarItem>Laptops</MenubarItem>
     <MenubarItem>Phones</MenubarItem>
     <MenubarItem>Tablets</MenubarItem>
     <MenubarSeparator />
     <MenubarItem>Accessories</MenubarItem>
    </MenubarContent>
   </MenubarMenu>
   <MenubarMenu>
    <MenubarTrigger>Services</MenubarTrigger>
    <MenubarContent>
     <MenubarItem>Support</MenubarItem>
     <MenubarItem>Training</MenubarItem>
     <MenubarItem>Consulting</MenubarItem>
    </MenubarContent>
   </MenubarMenu>
   <MenubarMenu>
    <MenubarTrigger>About</MenubarTrigger>
   </MenubarMenu>
   <MenubarMenu>
    <MenubarTrigger>Contact</MenubarTrigger>
   </MenubarMenu>
  </Menubar>
 ),
};

/**
 * Menubar with radio groups
 */
export const WithRadioGroups = {
 render: () => (
  <Menubar>
   <MenubarMenu>
    <MenubarTrigger>View</MenubarTrigger>
    <MenubarContent>
     <MenubarSub>
      <MenubarSubTrigger>Layout</MenubarSubTrigger>
      <MenubarSubContent>
       <MenubarRadioGroup value="grid">
        <MenubarRadioItem value="list">List View</MenubarRadioItem>
        <MenubarRadioItem value="grid">Grid View</MenubarRadioItem>
        <MenubarRadioItem value="card">Card View</MenubarRadioItem>
       </MenubarRadioGroup>
      </MenubarSubContent>
     </MenubarSub>
     <MenubarSub>
      <MenubarSubTrigger>Sort By</MenubarSubTrigger>
      <MenubarSubContent>
       <MenubarRadioGroup value="name">
        <MenubarRadioItem value="name">Name</MenubarRadioItem>
        <MenubarRadioItem value="date">Date Modified</MenubarRadioItem>
        <MenubarRadioItem value="size">Size</MenubarRadioItem>
        <MenubarRadioItem value="type">Type</MenubarRadioItem>
       </MenubarRadioGroup>
      </MenubarSubContent>
     </MenubarSub>
     <MenubarSeparator />
     <MenubarCheckboxItem checked>Show Hidden Files</MenubarCheckboxItem>
     <MenubarCheckboxItem>Show File Extensions</MenubarCheckboxItem>
    </MenubarContent>
   </MenubarMenu>

   <MenubarMenu>
    <MenubarTrigger>Tools</MenubarTrigger>
    <MenubarContent>
     <MenubarItem>Calculator</MenubarItem>
     <MenubarItem>Text Editor</MenubarItem>
     <MenubarSeparator />
     <MenubarSub>
      <MenubarSubTrigger>Developer Tools</MenubarSubTrigger>
      <MenubarSubContent>
       <MenubarItem>Console</MenubarItem>
       <MenubarItem>Network</MenubarItem>
       <MenubarItem>Performance</MenubarItem>
       <MenubarItem>Application</MenubarItem>
      </MenubarSubContent>
     </MenubarSub>
    </MenubarContent>
   </MenubarMenu>
  </Menubar>
 ),
};

/**
 * Minimal menubar
 */
export const Minimal = {
 render: () => (
  <Menubar>
   <MenubarMenu>
    <MenubarTrigger>File</MenubarTrigger>
    <MenubarContent>
     <MenubarItem>New</MenubarItem>
     <MenubarItem>Open</MenubarItem>
     <MenubarItem>Save</MenubarItem>
    </MenubarContent>
   </MenubarMenu>
   <MenubarMenu>
    <MenubarTrigger>Edit</MenubarTrigger>
    <MenubarContent>
     <MenubarItem>Cut</MenubarItem>
     <MenubarItem>Copy</MenubarItem>
     <MenubarItem>Paste</MenubarItem>
    </MenubarContent>
   </MenubarMenu>
  </Menubar>
 ),
};
