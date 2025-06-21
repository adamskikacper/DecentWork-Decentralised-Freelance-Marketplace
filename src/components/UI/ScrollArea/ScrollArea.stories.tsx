import type { Meta, StoryObj } from "@storybook/react";
import { ScrollArea } from "./index";
import { Separator } from "../Separator";
import { Badge } from "../Badge";
import { Avatar, AvatarFallback, AvatarImage } from "../Avatar";

/**
 * ScrollArea component provides custom scrollbars with smooth scrolling.
 * Built on Radix UI ScrollArea primitive with consistent styling.
 */
const meta = {
 title: "UI/ScrollArea",
 component: ScrollArea,
 parameters: {
  layout: "centered",
 },
 tags: ["autodocs"],
} satisfies Meta<typeof ScrollArea>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Basic scroll area
 */
export const Basic: Story = {
 render: () => (
  <ScrollArea className="h-72 w-48 rounded-md border">
   <div className="p-4">
    <h4 className="mb-4 text-sm font-medium leading-none">Tags</h4>
    {Array.from({ length: 50 }).map((_, i) => (
     <div key={i} className="text-sm">
      v1.2.0-beta.{i}
     </div>
    ))}
   </div>
  </ScrollArea>
 ),
};

/**
 * Horizontal scroll
 */
export const Horizontal = {
 render: () => (
  <ScrollArea className="w-96 whitespace-nowrap rounded-md border">
   <div className="flex w-max space-x-4 p-4">
    {Array.from({ length: 20 }).map((_, i) => (
     <figure key={i} className="shrink-0">
      <div className="overflow-hidden rounded-md">
       <img
        src={`https://picsum.photos/300/400?random=${i}`}
        alt={`Photo ${i + 1}`}
        className="aspect-[3/4] h-fit w-fit object-cover"
        width={300}
        height={400}
       />
      </div>
      <figcaption className="pt-2 text-xs text-muted-foreground">
       Photo by{" "}
       <span className="font-semibold text-foreground">
        Photographer {i + 1}
       </span>
      </figcaption>
     </figure>
    ))}
   </div>
  </ScrollArea>
 ),
};

/**
 * Chat messages
 */
export const ChatMessages = {
 render: () => (
  <ScrollArea className="h-80 w-80 rounded-md border p-4">
   <div className="space-y-4">
    {[
     {
      name: "Alice",
      message: "Hey everyone! How's the project going?",
      time: "2 min ago",
      avatar: "A",
     },
     {
      name: "Bob",
      message:
       "Making great progress on the frontend. Should be ready for review tomorrow.",
      time: "1 min ago",
      avatar: "B",
     },
     {
      name: "Charlie",
      message: "Backend APIs are all set. Just need to deploy to staging.",
      time: "30 sec ago",
      avatar: "C",
     },
     {
      name: "Diana",
      message: "Perfect! I'll start preparing the test cases.",
      time: "15 sec ago",
      avatar: "D",
     },
     {
      name: "Eve",
      message: "Let me know if you need any help with the deployment.",
      time: "5 sec ago",
      avatar: "E",
     },
     {
      name: "Frank",
      message: "Thanks everyone! This is looking really good.",
      time: "Just now",
      avatar: "F",
     },
    ].map((msg, i) => (
     <div key={i} className="flex space-x-3">
      <Avatar className="h-8 w-8">
       <AvatarFallback>{msg.avatar}</AvatarFallback>
      </Avatar>
      <div className="flex-1 space-y-1">
       <div className="flex items-center space-x-2">
        <p className="text-sm font-medium">{msg.name}</p>
        <p className="text-xs text-muted-foreground">{msg.time}</p>
       </div>
       <p className="text-sm text-muted-foreground">{msg.message}</p>
      </div>
     </div>
    ))}
   </div>
  </ScrollArea>
 ),
};

/**
 * File list
 */
export const FileList = {
 render: () => (
  <ScrollArea className="h-72 w-64 rounded-md border">
   <div className="p-4">
    <h4 className="mb-4 text-sm font-medium">Project Files</h4>
    <div className="space-y-2">
     {[
      { name: "package.json", type: "config", size: "2.1 KB" },
      { name: "README.md", type: "doc", size: "4.5 KB" },
      { name: "src/", type: "folder", size: "—" },
      { name: "src/components/", type: "folder", size: "—" },
      { name: "src/components/Button.tsx", type: "code", size: "3.2 KB" },
      { name: "src/components/Input.tsx", type: "code", size: "2.8 KB" },
      { name: "src/components/Modal.tsx", type: "code", size: "5.1 KB" },
      { name: "src/hooks/", type: "folder", size: "—" },
      { name: "src/hooks/useAuth.ts", type: "code", size: "1.9 KB" },
      { name: "src/hooks/useApi.ts", type: "code", size: "2.3 KB" },
      { name: "src/utils/", type: "folder", size: "—" },
      { name: "src/utils/helpers.ts", type: "code", size: "1.5 KB" },
      { name: "src/utils/constants.ts", type: "code", size: "0.8 KB" },
      { name: "public/", type: "folder", size: "—" },
      { name: "public/favicon.ico", type: "image", size: "15.2 KB" },
      { name: "public/logo.png", type: "image", size: "23.7 KB" },
      { name: "dist/", type: "folder", size: "—" },
      { name: "node_modules/", type: "folder", size: "—" },
      { name: ".gitignore", type: "config", size: "0.3 KB" },
      { name: "tsconfig.json", type: "config", size: "1.1 KB" },
     ].map((file, i) => (
      <div
       key={i}
       className="flex items-center justify-between rounded-lg p-2 hover:bg-accent"
      >
       <div className="flex items-center space-x-2">
        <div
         className={`h-2 w-2 rounded-full ${
          file.type === "folder"
           ? "bg-blue-500"
           : file.type === "code"
           ? "bg-green-500"
           : file.type === "config"
           ? "bg-yellow-500"
           : file.type === "doc"
           ? "bg-purple-500"
           : "bg-gray-500"
         }`}
        />
        <span className="text-sm">{file.name}</span>
       </div>
       <span className="text-xs text-muted-foreground">{file.size}</span>
      </div>
     ))}
    </div>
   </div>
  </ScrollArea>
 ),
};

/**
 * Notification list
 */
export const NotificationList = {
 render: () => (
  <ScrollArea className="h-80 w-80 rounded-md border">
   <div className="p-4">
    <h4 className="mb-4 text-sm font-medium">Notifications</h4>
    <div className="space-y-3">
     {[
      {
       title: "New message from John",
       desc: "Hey, can we schedule a call?",
       time: "2m",
       unread: true,
      },
      {
       title: "Project deployed successfully",
       desc: "Your app is now live on production",
       time: "5m",
       unread: true,
      },
      {
       title: "Weekly report ready",
       desc: "Analytics report for last week",
       time: "1h",
       unread: false,
      },
      {
       title: "Password changed",
       desc: "Your password was updated successfully",
       time: "2h",
       unread: false,
      },
      {
       title: "New team member joined",
       desc: "Sarah joined the development team",
       time: "1d",
       unread: false,
      },
      {
       title: "Backup completed",
       desc: "Daily backup finished successfully",
       time: "1d",
       unread: false,
      },
      {
       title: "Invoice generated",
       desc: "Monthly invoice #INV-001 is ready",
       time: "2d",
       unread: false,
      },
      {
       title: "System maintenance",
       desc: "Scheduled maintenance completed",
       time: "3d",
       unread: false,
      },
     ].map((notification, i) => (
      <div
       key={i}
       className={`rounded-lg border p-3 ${
        notification.unread ? "bg-blue-50" : ""
       }`}
      >
       <div className="flex items-start justify-between">
        <div className="space-y-1">
         <p className="text-sm font-medium flex items-center">
          {notification.title}
          {notification.unread && (
           <div className="ml-2 h-2 w-2 rounded-full bg-blue-600" />
          )}
         </p>
         <p className="text-xs text-muted-foreground">{notification.desc}</p>
        </div>
        <span className="text-xs text-muted-foreground">
         {notification.time}
        </span>
       </div>
      </div>
     ))}
    </div>
   </div>
  </ScrollArea>
 ),
};

/**
 * Code block
 */
export const CodeBlock = {
 render: () => (
  <ScrollArea className="h-80 w-96 rounded-md border bg-slate-950 text-slate-50">
   <pre className="p-4">
    <code>{`import React from 'react';
import { Button } from './components/Button';
import { Input } from './components/Input';
import { Card } from './components/Card';

function App() {
  const [count, setCount] = React.useState(0);
  const [name, setName] = React.useState('');
  
  const handleIncrement = () => {
    setCount(prev => prev + 1);
  };
  
  const handleDecrement = () => {
    setCount(prev => prev - 1);
  };
  
  const handleNameChange = (e) => {
    setName(e.target.value);
  };
  
  return (
    <div className="app">
      <Card>
        <h1>Hello, {name || 'World'}!</h1>
        <Input
          value={name}
          onChange={handleNameChange}
          placeholder="Enter your name"
        />
        <div className="counter">
          <Button onClick={handleDecrement}>-</Button>
          <span>Count: {count}</span>
          <Button onClick={handleIncrement}>+</Button>
        </div>
      </Card>
    </div>
  );
}

export default App;`}</code>
   </pre>
  </ScrollArea>
 ),
};

/**
 * Menu list with separators
 */
export const MenuList = {
 render: () => (
  <ScrollArea className="h-64 w-56 rounded-md border">
   <div className="p-1">
    {[
     { section: "File", items: ["New", "Open", "Save", "Save As", "Export"] },
     { section: "Edit", items: ["Undo", "Redo", "Cut", "Copy", "Paste"] },
     {
      section: "View",
      items: ["Zoom In", "Zoom Out", "Fit to Screen", "Fullscreen"],
     },
     { section: "Tools", items: ["Settings", "Preferences", "Extensions"] },
     { section: "Help", items: ["Documentation", "Shortcuts", "About"] },
    ].map((section, sectionIndex) => (
     <div key={sectionIndex}>
      <div className="px-3 py-2">
       <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
        {section.section}
       </p>
      </div>
      {section.items.map((item, itemIndex) => (
       <div
        key={itemIndex}
        className="relative flex cursor-pointer items-center rounded-sm px-3 py-2 text-sm hover:bg-accent hover:text-accent-foreground"
       >
        {item}
       </div>
      ))}
      {sectionIndex < 4 && <Separator className="my-1" />}
     </div>
    ))}
   </div>
  </ScrollArea>
 ),
};
