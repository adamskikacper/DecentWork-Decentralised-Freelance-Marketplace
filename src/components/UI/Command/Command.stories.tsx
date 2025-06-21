import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import {
 Command,
 CommandDialog,
 CommandEmpty,
 CommandGroup,
 CommandInput,
 CommandItem,
 CommandList,
 CommandSeparator,
 CommandShortcut,
} from "./index";
import { Button } from "../Button";
import {
 Search,
 Settings,
 User,
 FileText,
 Calendar,
 Mail,
 Home,
 Calculator,
 Camera,
 Music,
 Video,
 Download,
} from "lucide-react";

/**
 * Command component provides a command palette interface with search and keyboard navigation.
 * Built for quick actions and navigation with comprehensive keyboard shortcuts.
 */
const meta = {
 title: "UI/Command",
 component: Command,
 parameters: {
  layout: "centered",
 },
 tags: ["autodocs"],
} satisfies Meta<typeof Command>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Basic command palette
 */
export const Basic = {
 render: () => (
  <Command className="rounded-lg border shadow-md max-w-[450px]">
   <CommandInput placeholder="Type a command or search..." />
   <CommandList>
    <CommandEmpty>No results found.</CommandEmpty>
    <CommandGroup heading="Suggestions">
     <CommandItem>
      <Calendar className="mr-2 h-4 w-4" />
      <span>Calendar</span>
     </CommandItem>
     <CommandItem>
      <Search className="mr-2 h-4 w-4" />
      <span>Search Emoji</span>
     </CommandItem>
     <CommandItem>
      <Calculator className="mr-2 h-4 w-4" />
      <span>Calculator</span>
     </CommandItem>
    </CommandGroup>
    <CommandSeparator />
    <CommandGroup heading="Settings">
     <CommandItem>
      <User className="mr-2 h-4 w-4" />
      <span>Profile</span>
      <CommandShortcut>⌘P</CommandShortcut>
     </CommandItem>
     <CommandItem>
      <Settings className="mr-2 h-4 w-4" />
      <span>Settings</span>
      <CommandShortcut>⌘S</CommandShortcut>
     </CommandItem>
    </CommandGroup>
   </CommandList>
  </Command>
 ),
};

/**
 * Command dialog
 */
export const Dialog = {
 render: () => {
  const [open, setOpen] = useState(false);

  return (
   <>
    <Button onClick={() => setOpen(true)}>Open Command Palette</Button>

    <CommandDialog open={open} onOpenChange={setOpen}>
     <CommandInput placeholder="Type a command or search..." />
     <CommandList>
      <CommandEmpty>No results found.</CommandEmpty>
      <CommandGroup heading="Quick Actions">
       <CommandItem onSelect={() => setOpen(false)}>
        <FileText className="mr-2 h-4 w-4" />
        <span>New Document</span>
        <CommandShortcut>⌘N</CommandShortcut>
       </CommandItem>
       <CommandItem onSelect={() => setOpen(false)}>
        <Mail className="mr-2 h-4 w-4" />
        <span>Send Email</span>
        <CommandShortcut>⌘E</CommandShortcut>
       </CommandItem>
       <CommandItem onSelect={() => setOpen(false)}>
        <Calendar className="mr-2 h-4 w-4" />
        <span>Schedule Meeting</span>
        <CommandShortcut>⌘M</CommandShortcut>
       </CommandItem>
      </CommandGroup>
      <CommandSeparator />
      <CommandGroup heading="Navigation">
       <CommandItem onSelect={() => setOpen(false)}>
        <Home className="mr-2 h-4 w-4" />
        <span>Dashboard</span>
        <CommandShortcut>⌘D</CommandShortcut>
       </CommandItem>
       <CommandItem onSelect={() => setOpen(false)}>
        <User className="mr-2 h-4 w-4" />
        <span>Profile</span>
        <CommandShortcut>⌘P</CommandShortcut>
       </CommandItem>
       <CommandItem onSelect={() => setOpen(false)}>
        <Settings className="mr-2 h-4 w-4" />
        <span>Settings</span>
        <CommandShortcut>⌘,</CommandShortcut>
       </CommandItem>
      </CommandGroup>
     </CommandList>
    </CommandDialog>
   </>
  );
 },
};

/**
 * Search with filtering
 */
export const SearchFiltering = {
 render: () => {
  const [searchValue, setSearchValue] = useState("");

  const items = [
   { id: 1, name: "Dashboard", category: "Navigation", icon: Home },
   { id: 2, name: "Profile", category: "Navigation", icon: User },
   { id: 3, name: "Settings", category: "Navigation", icon: Settings },
   { id: 4, name: "Calendar", category: "Apps", icon: Calendar },
   { id: 5, name: "Mail", category: "Apps", icon: Mail },
   { id: 6, name: "Calculator", category: "Apps", icon: Calculator },
   { id: 7, name: "Camera", category: "Apps", icon: Camera },
   { id: 8, name: "Music", category: "Media", icon: Music },
   { id: 9, name: "Video", category: "Media", icon: Video },
   { id: 10, name: "Downloads", category: "Files", icon: Download },
   { id: 11, name: "Documents", category: "Files", icon: FileText },
  ];

  const filteredItems = items.filter(
   (item) =>
    item.name.toLowerCase().includes(searchValue.toLowerCase()) ||
    item.category.toLowerCase().includes(searchValue.toLowerCase())
  );

  const groupedItems = filteredItems.reduce((acc, item) => {
   if (!acc[item.category]) {
    acc[item.category] = [];
   }
   acc[item.category].push(item);
   return acc;
  }, {} as Record<string, typeof items>);

  return (
   <div className="space-y-4">
    <Command className="rounded-lg border shadow-md max-w-[450px]">
     <CommandInput
      placeholder="Search items..."
      value={searchValue}
      onValueChange={setSearchValue}
     />
     <CommandList>
      <CommandEmpty>No items found.</CommandEmpty>
      {Object.entries(groupedItems).map(([category, categoryItems], index) => (
       <div key={category}>
        {index > 0 && <CommandSeparator />}
        <CommandGroup heading={category}>
         {categoryItems.map((item) => {
          const Icon = item.icon;
          return (
           <CommandItem key={item.id}>
            <Icon className="mr-2 h-4 w-4" />
            <span>{item.name}</span>
           </CommandItem>
          );
         })}
        </CommandGroup>
       </div>
      ))}
     </CommandList>
    </Command>

    <div className="text-sm text-muted-foreground">
     <p>Found {filteredItems.length} items</p>
     <p>Search: "{searchValue}"</p>
    </div>
   </div>
  );
 },
};

/**
 * Application launcher
 */
export const ApplicationLauncher = {
 render: () => {
  const [open, setOpen] = useState(false);
  const [recentApps, setRecentApps] = useState<string[]>([]);

  const apps = [
   {
    name: "Calendar",
    description: "Manage your schedule",
    icon: Calendar,
    shortcut: "⌘1",
   },
   {
    name: "Mail",
    description: "Send and receive emails",
    icon: Mail,
    shortcut: "⌘2",
   },
   {
    name: "Calculator",
    description: "Perform calculations",
    icon: Calculator,
    shortcut: "⌘3",
   },
   {
    name: "Camera",
    description: "Take photos and videos",
    icon: Camera,
    shortcut: "⌘4",
   },
   {
    name: "Music",
    description: "Listen to your music",
    icon: Music,
    shortcut: "⌘5",
   },
   {
    name: "Video Player",
    description: "Watch videos",
    icon: Video,
    shortcut: "⌘6",
   },
   {
    name: "File Manager",
    description: "Browse your files",
    icon: FileText,
    shortcut: "⌘7",
   },
   {
    name: "Downloads",
    description: "View downloaded files",
    icon: Download,
    shortcut: "⌘8",
   },
  ];

  const handleAppSelect = (appName: string) => {
   setRecentApps((prev) => {
    const updated = [appName, ...prev.filter((name) => name !== appName)].slice(
     0,
     3
    );
    return updated;
   });
   setOpen(false);
   console.log(`Launching ${appName}`);
  };

  const recentAppData = recentApps
   .map((name) => apps.find((app) => app.name === name))
   .filter(Boolean);

  return (
   <>
    <div className="space-y-4">
     <Button onClick={() => setOpen(true)} className="w-full">
      <Search className="mr-2 h-4 w-4" />
      Launch Application
     </Button>

     {recentApps.length > 0 && (
      <div className="text-sm text-muted-foreground">
       <p>Recent: {recentApps.join(", ")}</p>
      </div>
     )}
    </div>

    <CommandDialog open={open} onOpenChange={setOpen}>
     <CommandInput placeholder="Search applications..." />
     <CommandList>
      <CommandEmpty>No applications found.</CommandEmpty>

      {recentAppData.length > 0 && (
       <>
        <CommandGroup heading="Recently Used">
         {recentAppData.map((app) => {
          const Icon = app!.icon;
          return (
           <CommandItem
            key={app!.name}
            onSelect={() => handleAppSelect(app!.name)}
           >
            <Icon className="mr-2 h-4 w-4" />
            <div className="flex-1">
             <div>{app!.name}</div>
             <div className="text-xs text-muted-foreground">
              {app!.description}
             </div>
            </div>
            <CommandShortcut>{app!.shortcut}</CommandShortcut>
           </CommandItem>
          );
         })}
        </CommandGroup>
        <CommandSeparator />
       </>
      )}

      <CommandGroup heading="All Applications">
       {apps.map((app) => {
        const Icon = app.icon;
        return (
         <CommandItem key={app.name} onSelect={() => handleAppSelect(app.name)}>
          <Icon className="mr-2 h-4 w-4" />
          <div className="flex-1">
           <div>{app.name}</div>
           <div className="text-xs text-muted-foreground">
            {app.description}
           </div>
          </div>
          <CommandShortcut>{app.shortcut}</CommandShortcut>
         </CommandItem>
        );
       })}
      </CommandGroup>
     </CommandList>
    </CommandDialog>
   </>
  );
 },
};

/**
 * File search
 */
export const FileSearch = {
 render: () => {
  const files = [
   {
    name: "project-plan.pdf",
    type: "PDF",
    size: "2.4 MB",
    modified: "2 hours ago",
   },
   {
    name: "meeting-notes.docx",
    type: "Word",
    size: "156 KB",
    modified: "1 day ago",
   },
   {
    name: "budget-2024.xlsx",
    type: "Excel",
    size: "892 KB",
    modified: "3 days ago",
   },
   {
    name: "presentation.pptx",
    type: "PowerPoint",
    size: "15.2 MB",
    modified: "1 week ago",
   },
   {
    name: "image-gallery.zip",
    type: "Archive",
    size: "45.6 MB",
    modified: "2 weeks ago",
   },
   {
    name: "database-backup.sql",
    type: "SQL",
    size: "128 MB",
    modified: "1 month ago",
   },
  ];

  return (
   <Command className="rounded-lg border shadow-md max-w-[500px]">
    <CommandInput placeholder="Search files..." />
    <CommandList>
     <CommandEmpty>No files found.</CommandEmpty>
     <CommandGroup heading="Recent Files">
      {files.map((file, index) => (
       <CommandItem key={index}>
        <FileText className="mr-2 h-4 w-4" />
        <div className="flex-1">
         <div className="flex items-center justify-between">
          <span>{file.name}</span>
          <span className="text-xs text-muted-foreground">{file.size}</span>
         </div>
         <div className="text-xs text-muted-foreground">
          {file.type} • Modified {file.modified}
         </div>
        </div>
       </CommandItem>
      ))}
     </CommandGroup>
    </CommandList>
   </Command>
  );
 },
};

/**
 * Command palette with actions
 */
export const WithActions = {
 render: () => {
  const [selectedAction, setSelectedAction] = useState<string | null>(null);

  const actions = [
   {
    name: "Create New Document",
    description: "Start with a blank document",
    icon: FileText,
    shortcut: "⌘N",
    action: () => setSelectedAction("Created new document"),
   },
   {
    name: "Open Recent",
    description: "Open a recently used file",
    icon: FileText,
    shortcut: "⌘O",
    action: () => setSelectedAction("Opened recent file"),
   },
   {
    name: "Send Email",
    description: "Compose a new email",
    icon: Mail,
    shortcut: "⌘E",
    action: () => setSelectedAction("Opened email composer"),
   },
   {
    name: "Schedule Meeting",
    description: "Create a new calendar event",
    icon: Calendar,
    shortcut: "⌘M",
    action: () => setSelectedAction("Opened meeting scheduler"),
   },
   {
    name: "Quick Calculate",
    description: "Open calculator",
    icon: Calculator,
    shortcut: "⌘C",
    action: () => setSelectedAction("Opened calculator"),
   },
  ];

  return (
   <div className="space-y-4">
    <Command className="rounded-lg border shadow-md max-w-[500px]">
     <CommandInput placeholder="What would you like to do?" />
     <CommandList>
      <CommandEmpty>No actions found.</CommandEmpty>
      <CommandGroup heading="Quick Actions">
       {actions.map((action, index) => {
        const Icon = action.icon;
        return (
         <CommandItem key={index} onSelect={() => action.action()}>
          <Icon className="mr-2 h-4 w-4" />
          <div className="flex-1">
           <div>{action.name}</div>
           <div className="text-xs text-muted-foreground">
            {action.description}
           </div>
          </div>
          <CommandShortcut>{action.shortcut}</CommandShortcut>
         </CommandItem>
        );
       })}
      </CommandGroup>
     </CommandList>
    </Command>

    {selectedAction && (
     <div className="p-3 bg-green-50 border border-green-200 rounded-lg">
      <p className="text-green-800 text-sm">✓ {selectedAction}</p>
     </div>
    )}
   </div>
  );
 },
};

/**
 * Compact command menu
 */
export const Compact = {
 render: () => (
  <Command className="rounded-lg border shadow-md max-w-[300px]">
   <CommandInput placeholder="Quick search..." className="h-8" />
   <CommandList className="max-h-[200px]">
    <CommandEmpty>No results.</CommandEmpty>
    <CommandGroup>
     <CommandItem className="py-1">
      <Home className="mr-2 h-3 w-3" />
      <span className="text-sm">Home</span>
      <CommandShortcut className="text-xs">⌘H</CommandShortcut>
     </CommandItem>
     <CommandItem className="py-1">
      <User className="mr-2 h-3 w-3" />
      <span className="text-sm">Profile</span>
      <CommandShortcut className="text-xs">⌘P</CommandShortcut>
     </CommandItem>
     <CommandItem className="py-1">
      <Settings className="mr-2 h-3 w-3" />
      <span className="text-sm">Settings</span>
      <CommandShortcut className="text-xs">⌘S</CommandShortcut>
     </CommandItem>
    </CommandGroup>
   </CommandList>
  </Command>
 ),
};
