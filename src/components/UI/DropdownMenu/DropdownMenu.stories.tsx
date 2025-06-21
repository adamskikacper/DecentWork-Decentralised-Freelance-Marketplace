import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { Button } from "../Button";
import { Avatar } from "../Avatar";
import { Badge } from "../Badge";
import { Separator } from "../Separator";
import {
 DropdownMenu,
 DropdownMenuContent,
 DropdownMenuItem,
 DropdownMenuLabel,
 DropdownMenuSeparator,
 DropdownMenuTrigger,
 DropdownMenuGroup,
 DropdownMenuPortal,
 DropdownMenuSub,
 DropdownMenuSubContent,
 DropdownMenuSubTrigger,
 DropdownMenuCheckboxItem,
 DropdownMenuRadioGroup,
 DropdownMenuRadioItem,
 DropdownMenuShortcut,
} from "./index";

const meta: Meta<typeof DropdownMenu> = {
 title: "UI/DropdownMenu",
 component: DropdownMenu,
 parameters: {
  layout: "centered",
  docs: {
   description: {
    component:
     "A dropdown menu component that displays a list of actions or options. Perfect for user menus, context menus, and action lists.",
   },
  },
 },
 tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof DropdownMenu>;

/**
 * Basic dropdown menu with simple items
 */
export const Default: Story = {
 render: () => (
  <DropdownMenu>
   <DropdownMenuTrigger asChild>
    <Button variant="outline">Open Menu</Button>
   </DropdownMenuTrigger>
   <DropdownMenuContent>
    <DropdownMenuLabel>My Account</DropdownMenuLabel>
    <DropdownMenuSeparator />
    <DropdownMenuItem>Profile</DropdownMenuItem>
    <DropdownMenuItem>Billing</DropdownMenuItem>
    <DropdownMenuItem>Team</DropdownMenuItem>
    <DropdownMenuItem>Subscription</DropdownMenuItem>
   </DropdownMenuContent>
  </DropdownMenu>
 ),
};

/**
 * User profile dropdown with avatar
 */
export const UserProfile: Story = {
 render: () => (
  <DropdownMenu>
   <DropdownMenuTrigger asChild>
    <Button variant="ghost" className="relative h-8 w-8 rounded-full">
     <Avatar className="h-8 w-8">
      <img src="https://github.com/shadcn.png" alt="User" />
     </Avatar>
    </Button>
   </DropdownMenuTrigger>
   <DropdownMenuContent className="w-56" align="end" forceMount>
    <DropdownMenuLabel className="font-normal">
     <div className="flex flex-col space-y-1">
      <p className="text-sm font-medium leading-none">John Doe</p>
      <p className="text-xs leading-none text-muted-foreground">
       john.doe@example.com
      </p>
     </div>
    </DropdownMenuLabel>
    <DropdownMenuSeparator />
    <DropdownMenuGroup>
     <DropdownMenuItem>
      Profile
      <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
     </DropdownMenuItem>
     <DropdownMenuItem>
      Billing
      <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
     </DropdownMenuItem>
     <DropdownMenuItem>
      Settings
      <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
     </DropdownMenuItem>
     <DropdownMenuItem>
      Keyboard shortcuts
      <DropdownMenuShortcut>⌘K</DropdownMenuShortcut>
     </DropdownMenuItem>
    </DropdownMenuGroup>
    <DropdownMenuSeparator />
    <DropdownMenuItem>
     Log out
     <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
    </DropdownMenuItem>
   </DropdownMenuContent>
  </DropdownMenu>
 ),
};

/**
 * Dropdown with checkboxes for settings
 */
export const WithCheckboxes: Story = {
 render: () => {
  const [showStatusBar, setShowStatusBar] = useState(true);
  const [showActivityBar, setShowActivityBar] = useState(false);
  const [showPanel, setShowPanel] = useState(false);

  return (
   <DropdownMenu>
    <DropdownMenuTrigger asChild>
     <Button variant="outline">View Options</Button>
    </DropdownMenuTrigger>
    <DropdownMenuContent className="w-56">
     <DropdownMenuLabel>Appearance</DropdownMenuLabel>
     <DropdownMenuSeparator />
     <DropdownMenuCheckboxItem
      checked={showStatusBar}
      onCheckedChange={setShowStatusBar}
     >
      Status Bar
     </DropdownMenuCheckboxItem>
     <DropdownMenuCheckboxItem
      checked={showActivityBar}
      onCheckedChange={setShowActivityBar}
      disabled
     >
      Activity Bar
     </DropdownMenuCheckboxItem>
     <DropdownMenuCheckboxItem
      checked={showPanel}
      onCheckedChange={setShowPanel}
     >
      Panel
     </DropdownMenuCheckboxItem>
    </DropdownMenuContent>
   </DropdownMenu>
  );
 },
};

/**
 * Dropdown with radio items for selection
 */
export const WithRadioItems: Story = {
 render: () => {
  const [position, setPosition] = useState("bottom");

  return (
   <DropdownMenu>
    <DropdownMenuTrigger asChild>
     <Button variant="outline">Panel Position</Button>
    </DropdownMenuTrigger>
    <DropdownMenuContent className="w-56">
     <DropdownMenuLabel>Panel Position</DropdownMenuLabel>
     <DropdownMenuSeparator />
     <DropdownMenuRadioGroup value={position} onValueChange={setPosition}>
      <DropdownMenuRadioItem value="top">Top</DropdownMenuRadioItem>
      <DropdownMenuRadioItem value="bottom">Bottom</DropdownMenuRadioItem>
      <DropdownMenuRadioItem value="right">Right</DropdownMenuRadioItem>
     </DropdownMenuRadioGroup>
    </DropdownMenuContent>
   </DropdownMenu>
  );
 },
};

/**
 * Dropdown with submenus
 */
export const WithSubmenus: Story = {
 render: () => (
  <DropdownMenu>
   <DropdownMenuTrigger asChild>
    <Button variant="outline">File Menu</Button>
   </DropdownMenuTrigger>
   <DropdownMenuContent className="w-56">
    <DropdownMenuItem>
     New Tab
     <DropdownMenuShortcut>⌘T</DropdownMenuShortcut>
    </DropdownMenuItem>
    <DropdownMenuItem>
     New Window
     <DropdownMenuShortcut>⌘N</DropdownMenuShortcut>
    </DropdownMenuItem>
    <DropdownMenuItem disabled>
     New Private Window
     <DropdownMenuShortcut>⇧⌘N</DropdownMenuShortcut>
    </DropdownMenuItem>
    <DropdownMenuSub>
     <DropdownMenuSubTrigger>More Tools</DropdownMenuSubTrigger>
     <DropdownMenuPortal>
      <DropdownMenuSubContent>
       <DropdownMenuItem>
        Save Page As...
        <DropdownMenuShortcut>⇧⌘S</DropdownMenuShortcut>
       </DropdownMenuItem>
       <DropdownMenuItem>Create Shortcut...</DropdownMenuItem>
       <DropdownMenuItem>Name Window...</DropdownMenuItem>
       <DropdownMenuSeparator />
       <DropdownMenuItem>Developer Tools</DropdownMenuItem>
      </DropdownMenuSubContent>
     </DropdownMenuPortal>
    </DropdownMenuSub>
    <DropdownMenuSeparator />
    <DropdownMenuItem>
     Print...
     <DropdownMenuShortcut>⌘P</DropdownMenuShortcut>
    </DropdownMenuItem>
   </DropdownMenuContent>
  </DropdownMenu>
 ),
};

/**
 * Action menu for table rows
 */
export const ActionMenu: Story = {
 render: () => (
  <DropdownMenu>
   <DropdownMenuTrigger asChild>
    <Button variant="ghost" className="h-8 w-8 p-0">
     <span className="sr-only">Open menu</span>
     <span className="h-4 w-4">⋮</span>
    </Button>
   </DropdownMenuTrigger>
   <DropdownMenuContent align="end">
    <DropdownMenuLabel>Actions</DropdownMenuLabel>
    <DropdownMenuItem>Copy payment ID</DropdownMenuItem>
    <DropdownMenuSeparator />
    <DropdownMenuItem>View customer</DropdownMenuItem>
    <DropdownMenuItem>View payment details</DropdownMenuItem>
    <DropdownMenuSeparator />
    <DropdownMenuItem className="text-red-600">Delete payment</DropdownMenuItem>
   </DropdownMenuContent>
  </DropdownMenu>
 ),
};

/**
 * Notification settings dropdown
 */
export const NotificationSettings: Story = {
 render: () => {
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [pushNotifications, setPushNotifications] = useState(false);
  const [smsNotifications, setSmsNotifications] = useState(true);

  return (
   <DropdownMenu>
    <DropdownMenuTrigger asChild>
     <Button variant="outline" className="relative">
      Notifications
      <Badge variant="destructive" className="ml-2 h-2 w-2 p-0" />
     </Button>
    </DropdownMenuTrigger>
    <DropdownMenuContent className="w-64">
     <DropdownMenuLabel>Notification Settings</DropdownMenuLabel>
     <DropdownMenuSeparator />
     <DropdownMenuCheckboxItem
      checked={emailNotifications}
      onCheckedChange={setEmailNotifications}
     >
      Email Notifications
     </DropdownMenuCheckboxItem>
     <DropdownMenuCheckboxItem
      checked={pushNotifications}
      onCheckedChange={setPushNotifications}
     >
      Push Notifications
     </DropdownMenuCheckboxItem>
     <DropdownMenuCheckboxItem
      checked={smsNotifications}
      onCheckedChange={setSmsNotifications}
     >
      SMS Notifications
     </DropdownMenuCheckboxItem>
     <DropdownMenuSeparator />
     <DropdownMenuItem>Manage all notifications</DropdownMenuItem>
    </DropdownMenuContent>
   </DropdownMenu>
  );
 },
};

/**
 * Language selection dropdown
 */
export const LanguageSelector: Story = {
 render: () => {
  const [language, setLanguage] = useState("en");

  const languages = [
   { value: "en", label: "🇺🇸 English" },
   { value: "es", label: "🇪🇸 Español" },
   { value: "fr", label: "🇫🇷 Français" },
   { value: "de", label: "🇩🇪 Deutsch" },
   { value: "it", label: "🇮🇹 Italiano" },
   { value: "pt", label: "🇵🇹 Português" },
  ];

  const currentLanguage = languages.find((lang) => lang.value === language);

  return (
   <DropdownMenu>
    <DropdownMenuTrigger asChild>
     <Button variant="outline">
      {currentLanguage?.label || "Select Language"}
     </Button>
    </DropdownMenuTrigger>
    <DropdownMenuContent className="w-48">
     <DropdownMenuLabel>Select Language</DropdownMenuLabel>
     <DropdownMenuSeparator />
     <DropdownMenuRadioGroup value={language} onValueChange={setLanguage}>
      {languages.map((lang) => (
       <DropdownMenuRadioItem key={lang.value} value={lang.value}>
        {lang.label}
       </DropdownMenuRadioItem>
      ))}
     </DropdownMenuRadioGroup>
    </DropdownMenuContent>
   </DropdownMenu>
  );
 },
};

/**
 * Complex team management dropdown
 */
export const TeamManagement: Story = {
 render: () => {
  const [teamRole, setTeamRole] = useState("member");

  return (
   <DropdownMenu>
    <DropdownMenuTrigger asChild>
     <Button variant="outline">Team Actions</Button>
    </DropdownMenuTrigger>
    <DropdownMenuContent className="w-56">
     <DropdownMenuLabel>Team Management</DropdownMenuLabel>
     <DropdownMenuSeparator />
     <DropdownMenuGroup>
      <DropdownMenuItem>
       Invite Members
       <DropdownMenuShortcut>⌘I</DropdownMenuShortcut>
      </DropdownMenuItem>
      <DropdownMenuItem>
       View Team
       <DropdownMenuShortcut>⌘T</DropdownMenuShortcut>
      </DropdownMenuItem>
      <DropdownMenuSub>
       <DropdownMenuSubTrigger>Change Role</DropdownMenuSubTrigger>
       <DropdownMenuPortal>
        <DropdownMenuSubContent>
         <DropdownMenuRadioGroup value={teamRole} onValueChange={setTeamRole}>
          <DropdownMenuRadioItem value="owner">Owner</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="admin">Admin</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="member">Member</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="viewer">Viewer</DropdownMenuRadioItem>
         </DropdownMenuRadioGroup>
        </DropdownMenuSubContent>
       </DropdownMenuPortal>
      </DropdownMenuSub>
     </DropdownMenuGroup>
     <DropdownMenuSeparator />
     <DropdownMenuGroup>
      <DropdownMenuItem>Team Settings</DropdownMenuItem>
      <DropdownMenuItem>Billing</DropdownMenuItem>
     </DropdownMenuGroup>
     <DropdownMenuSeparator />
     <DropdownMenuItem className="text-red-600">Leave Team</DropdownMenuItem>
    </DropdownMenuContent>
   </DropdownMenu>
  );
 },
};
