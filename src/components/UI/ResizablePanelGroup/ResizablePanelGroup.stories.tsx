import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { Button } from "../Button";
import { ResizablePanelGroup, ResizablePanel, ResizableHandle } from "./index";

const meta: Meta<typeof ResizablePanelGroup> = {
 title: "UI/ResizablePanelGroup",
 component: ResizablePanelGroup,
 parameters: {
  layout: "fullscreen",
  docs: {
   description: {
    component:
     "A resizable panel group component that allows users to resize panels by dragging handles. Perfect for creating flexible layouts and dashboards.",
   },
  },
 },
 tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof ResizablePanelGroup>;

/**
 * Basic horizontal resizable panels
 */
export const Horizontal: Story = {
 render: () => (
  <div className="h-96 w-full">
   <ResizablePanelGroup
    direction="horizontal"
    className="h-full rounded-lg border"
   >
    <ResizablePanel defaultSize={50}>
     <div className="flex h-full items-center justify-center p-6">
      <span className="font-semibold">Panel One</span>
     </div>
    </ResizablePanel>
    <ResizableHandle />
    <ResizablePanel defaultSize={50}>
     <div className="flex h-full items-center justify-center p-6">
      <span className="font-semibold">Panel Two</span>
     </div>
    </ResizablePanel>
   </ResizablePanelGroup>
  </div>
 ),
};

/**
 * Basic vertical resizable panels
 */
export const Vertical: Story = {
 render: () => (
  <div className="h-96 w-full">
   <ResizablePanelGroup
    direction="vertical"
    className="h-full rounded-lg border"
   >
    <ResizablePanel defaultSize={50}>
     <div className="flex h-full items-center justify-center p-6">
      <span className="font-semibold">Panel One</span>
     </div>
    </ResizablePanel>
    <ResizableHandle />
    <ResizablePanel defaultSize={50}>
     <div className="flex h-full items-center justify-center p-6">
      <span className="font-semibold">Panel Two</span>
     </div>
    </ResizablePanel>
   </ResizablePanelGroup>
  </div>
 ),
};

/**
 * Three panel layout
 */
export const ThreePanels: Story = {
 render: () => (
  <div className="h-96 w-full">
   <ResizablePanelGroup
    direction="horizontal"
    className="h-full rounded-lg border"
   >
    <ResizablePanel defaultSize={25} minSize={15}>
     <div className="flex h-full items-center justify-center p-6 bg-gray-50">
      <span className="font-semibold">Sidebar</span>
     </div>
    </ResizablePanel>
    <ResizableHandle />
    <ResizablePanel defaultSize={50}>
     <div className="flex h-full items-center justify-center p-6">
      <span className="font-semibold">Main Content</span>
     </div>
    </ResizablePanel>
    <ResizableHandle />
    <ResizablePanel defaultSize={25} minSize={15}>
     <div className="flex h-full items-center justify-center p-6 bg-gray-50">
      <span className="font-semibold">Right Panel</span>
     </div>
    </ResizablePanel>
   </ResizablePanelGroup>
  </div>
 ),
};

/**
 * Nested resizable panels
 */
export const Nested: Story = {
 render: () => (
  <div className="h-96 w-full">
   <ResizablePanelGroup
    direction="horizontal"
    className="h-full rounded-lg border"
   >
    <ResizablePanel defaultSize={30} minSize={20}>
     <div className="flex h-full items-center justify-center p-6 bg-blue-50">
      <span className="font-semibold">Left Panel</span>
     </div>
    </ResizablePanel>
    <ResizableHandle />
    <ResizablePanel defaultSize={70}>
     <ResizablePanelGroup direction="vertical">
      <ResizablePanel defaultSize={60}>
       <div className="flex h-full items-center justify-center p-6">
        <span className="font-semibold">Main Content</span>
       </div>
      </ResizablePanel>
      <ResizableHandle />
      <ResizablePanel defaultSize={40}>
       <div className="flex h-full items-center justify-center p-6 bg-green-50">
        <span className="font-semibold">Bottom Panel</span>
       </div>
      </ResizablePanel>
     </ResizablePanelGroup>
    </ResizablePanel>
   </ResizablePanelGroup>
  </div>
 ),
};

/**
 * IDE-like layout
 */
export const IDELayout: Story = {
 render: () => (
  <div className="h-96 w-full">
   <ResizablePanelGroup
    direction="vertical"
    className="h-full rounded-lg border"
   >
    {/* Header */}
    <ResizablePanel defaultSize={10} minSize={8} maxSize={15}>
     <div className="flex h-full items-center justify-between px-6 bg-gray-900 text-white">
      <span className="font-semibold">Code Editor</span>
      <div className="flex space-x-2">
       <Button
        size="sm"
        variant="ghost"
        className="text-white hover:bg-gray-700"
       >
        File
       </Button>
       <Button
        size="sm"
        variant="ghost"
        className="text-white hover:bg-gray-700"
       >
        Edit
       </Button>
       <Button
        size="sm"
        variant="ghost"
        className="text-white hover:bg-gray-700"
       >
        View
       </Button>
      </div>
     </div>
    </ResizablePanel>
    <ResizableHandle />

    {/* Main content area */}
    <ResizablePanel defaultSize={70}>
     <ResizablePanelGroup direction="horizontal">
      {/* File explorer */}
      <ResizablePanel defaultSize={20} minSize={15} maxSize={30}>
       <div className="h-full p-4 bg-gray-50">
        <h3 className="font-semibold mb-3">Explorer</h3>
        <div className="space-y-1 text-sm">
         <div>📁 src</div>
         <div className="ml-4">📁 components</div>
         <div className="ml-8">📄 Button.tsx</div>
         <div className="ml-8">📄 Input.tsx</div>
         <div className="ml-4">📄 App.tsx</div>
         <div className="ml-4">📄 index.tsx</div>
        </div>
       </div>
      </ResizablePanel>
      <ResizableHandle />

      {/* Code editor */}
      <ResizablePanel defaultSize={60}>
       <div className="h-full p-4 bg-gray-900 text-green-400 font-mono text-sm">
        <div className="mb-2 text-gray-400">// App.tsx</div>
        <div>import React from 'react';</div>
        <div>import {Button} from './components/Button';</div>
        <div></div>
        <div>function App() {"{"}</div>
        <div> return (</div>
        <div> &lt;div className="App"&gt;</div>
        <div> &lt;Button&gt;Hello World&lt;/Button&gt;</div>
        <div> &lt;/div&gt;</div>
        <div> );</div>
        <div>{"}"}</div>
       </div>
      </ResizablePanel>
      <ResizableHandle />

      {/* Properties panel */}
      <ResizablePanel defaultSize={20} minSize={15} maxSize={25}>
       <div className="h-full p-4 bg-gray-50">
        <h3 className="font-semibold mb-3">Properties</h3>
        <div className="space-y-2 text-sm">
         <div>
          <div className="font-medium">Component</div>
          <div className="text-gray-600">Button</div>
         </div>
         <div>
          <div className="font-medium">Variant</div>
          <div className="text-gray-600">Primary</div>
         </div>
         <div>
          <div className="font-medium">Size</div>
          <div className="text-gray-600">Medium</div>
         </div>
        </div>
       </div>
      </ResizablePanel>
     </ResizablePanelGroup>
    </ResizablePanel>
    <ResizableHandle />

    {/* Terminal/console */}
    <ResizablePanel defaultSize={20} minSize={10} maxSize={40}>
     <div className="h-full p-4 bg-black text-white font-mono text-sm">
      <div className="mb-2 text-gray-400">Terminal</div>
      <div>$ npm start</div>
      <div className="text-green-400">✓ Compiled successfully!</div>
      <div>Local: http://localhost:3000</div>
      <div className="animate-pulse">█</div>
     </div>
    </ResizablePanel>
   </ResizablePanelGroup>
  </div>
 ),
};

/**
 * Dashboard layout
 */
export const Dashboard: Story = {
 render: () => (
  <div className="h-96 w-full">
   <ResizablePanelGroup
    direction="horizontal"
    className="h-full rounded-lg border"
   >
    {/* Sidebar */}
    <ResizablePanel defaultSize={20} minSize={15} maxSize={25}>
     <div className="h-full p-4 bg-gray-50">
      <h3 className="font-semibold mb-4">Navigation</h3>
      <div className="space-y-2">
       <Button variant="ghost" className="w-full justify-start">
        📊 Dashboard
       </Button>
       <Button variant="ghost" className="w-full justify-start">
        👥 Users
       </Button>
       <Button variant="ghost" className="w-full justify-start">
        📈 Analytics
       </Button>
       <Button variant="ghost" className="w-full justify-start">
        ⚙️ Settings
       </Button>
      </div>
     </div>
    </ResizablePanel>
    <ResizableHandle />

    {/* Main content */}
    <ResizablePanel defaultSize={80}>
     <ResizablePanelGroup direction="vertical">
      {/* Top metrics */}
      <ResizablePanel defaultSize={30} minSize={20}>
       <div className="h-full p-4">
        <h2 className="text-lg font-semibold mb-4">Key Metrics</h2>
        <div className="grid grid-cols-3 gap-4 h-full">
         <div className="bg-blue-50 p-4 rounded-lg">
          <div className="text-2xl font-bold text-blue-600">1,234</div>
          <div className="text-sm text-gray-600">Total Users</div>
         </div>
         <div className="bg-green-50 p-4 rounded-lg">
          <div className="text-2xl font-bold text-green-600">$12.5K</div>
          <div className="text-sm text-gray-600">Revenue</div>
         </div>
         <div className="bg-purple-50 p-4 rounded-lg">
          <div className="text-2xl font-bold text-purple-600">98.2%</div>
          <div className="text-sm text-gray-600">Uptime</div>
         </div>
        </div>
       </div>
      </ResizablePanel>
      <ResizableHandle />

      {/* Charts area */}
      <ResizablePanel defaultSize={70}>
       <ResizablePanelGroup direction="horizontal">
        <ResizablePanel defaultSize={70}>
         <div className="h-full p-4">
          <h3 className="font-semibold mb-4">Analytics Chart</h3>
          <div className="h-full bg-gray-100 rounded-lg flex items-center justify-center">
           <span className="text-gray-500">Chart Placeholder</span>
          </div>
         </div>
        </ResizablePanel>
        <ResizableHandle />
        <ResizablePanel defaultSize={30}>
         <div className="h-full p-4">
          <h3 className="font-semibold mb-4">Recent Activity</h3>
          <div className="space-y-3 text-sm">
           <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            <span>User registered</span>
           </div>
           <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
            <span>Payment received</span>
           </div>
           <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
            <span>System update</span>
           </div>
          </div>
         </div>
        </ResizablePanel>
       </ResizablePanelGroup>
      </ResizablePanel>
     </ResizablePanelGroup>
    </ResizablePanel>
   </ResizablePanelGroup>
  </div>
 ),
};

/**
 * Email client layout
 */
export const EmailClient: Story = {
 render: () => (
  <div className="h-96 w-full">
   <ResizablePanelGroup
    direction="horizontal"
    className="h-full rounded-lg border"
   >
    {/* Folder list */}
    <ResizablePanel defaultSize={20} minSize={15} maxSize={30}>
     <div className="h-full p-4 bg-gray-50">
      <h3 className="font-semibold mb-4">Folders</h3>
      <div className="space-y-1 text-sm">
       <div className="p-2 bg-blue-100 rounded">📥 Inbox (12)</div>
       <div className="p-2 hover:bg-gray-100 rounded">📤 Sent</div>
       <div className="p-2 hover:bg-gray-100 rounded">📄 Drafts (3)</div>
       <div className="p-2 hover:bg-gray-100 rounded">🗑️ Trash</div>
       <div className="p-2 hover:bg-gray-100 rounded">⭐ Starred</div>
      </div>
     </div>
    </ResizablePanel>
    <ResizableHandle />

    {/* Email list */}
    <ResizablePanel defaultSize={35} minSize={25}>
     <div className="h-full p-4">
      <h3 className="font-semibold mb-4">Messages</h3>
      <div className="space-y-2">
       <div className="p-3 border rounded-lg bg-blue-50">
        <div className="font-medium">John Doe</div>
        <div className="text-sm text-gray-600">Meeting tomorrow</div>
        <div className="text-xs text-gray-500">2 hours ago</div>
       </div>
       <div className="p-3 border rounded-lg hover:bg-gray-50">
        <div className="font-medium">Jane Smith</div>
        <div className="text-sm text-gray-600">Project update</div>
        <div className="text-xs text-gray-500">5 hours ago</div>
       </div>
       <div className="p-3 border rounded-lg hover:bg-gray-50">
        <div className="font-medium">Team</div>
        <div className="text-sm text-gray-600">Weekly standup</div>
        <div className="text-xs text-gray-500">1 day ago</div>
       </div>
      </div>
     </div>
    </ResizablePanel>
    <ResizableHandle />

    {/* Email content */}
    <ResizablePanel defaultSize={45}>
     <div className="h-full p-4">
      <div className="border-b pb-4 mb-4">
       <h3 className="font-semibold">Meeting tomorrow</h3>
       <div className="text-sm text-gray-600">
        From: John Doe &lt;john@example.com&gt;
       </div>
       <div className="text-sm text-gray-600">To: me</div>
       <div className="text-xs text-gray-500">Today at 2:30 PM</div>
      </div>
      <div className="text-sm">
       <p>Hi there,</p>
       <p className="mt-2">
        Just wanted to confirm our meeting tomorrow at 2 PM. We'll be discussing
        the project roadmap and next steps.
       </p>
       <p className="mt-2">Please let me know if you need to reschedule.</p>
       <p className="mt-4">
        Best regards,
        <br />
        John
       </p>
      </div>
     </div>
    </ResizablePanel>
   </ResizablePanelGroup>
  </div>
 ),
};

/**
 * Collapsible panels
 */
export const Collapsible: Story = {
 render: () => {
  const [leftCollapsed, setLeftCollapsed] = useState(false);
  const [rightCollapsed, setRightCollapsed] = useState(false);

  return (
   <div className="h-96 w-full">
    <ResizablePanelGroup
     direction="horizontal"
     className="h-full rounded-lg border"
    >
     <ResizablePanel
      defaultSize={leftCollapsed ? 5 : 25}
      minSize={5}
      collapsible={true}
      onCollapse={() => setLeftCollapsed(true)}
      onExpand={() => setLeftCollapsed(false)}
     >
      <div className="flex h-full items-center justify-center p-6 bg-gray-50">
       {leftCollapsed ? (
        <Button
         variant="ghost"
         size="sm"
         onClick={() => setLeftCollapsed(false)}
        >
         ▶
        </Button>
       ) : (
        <div className="text-center">
         <span className="font-semibold block mb-2">Left Panel</span>
         <Button
          variant="outline"
          size="sm"
          onClick={() => setLeftCollapsed(true)}
         >
          Collapse
         </Button>
        </div>
       )}
      </div>
     </ResizablePanel>
     <ResizableHandle />

     <ResizablePanel defaultSize={50}>
      <div className="flex h-full items-center justify-center p-6">
       <span className="font-semibold">Main Content</span>
      </div>
     </ResizablePanel>
     <ResizableHandle />

     <ResizablePanel
      defaultSize={rightCollapsed ? 5 : 25}
      minSize={5}
      collapsible={true}
      onCollapse={() => setRightCollapsed(true)}
      onExpand={() => setRightCollapsed(false)}
     >
      <div className="flex h-full items-center justify-center p-6 bg-gray-50">
       {rightCollapsed ? (
        <Button
         variant="ghost"
         size="sm"
         onClick={() => setRightCollapsed(false)}
        >
         ◀
        </Button>
       ) : (
        <div className="text-center">
         <span className="font-semibold block mb-2">Right Panel</span>
         <Button
          variant="outline"
          size="sm"
          onClick={() => setRightCollapsed(true)}
         >
          Collapse
         </Button>
        </div>
       )}
      </div>
     </ResizablePanel>
    </ResizablePanelGroup>
   </div>
  );
 },
};
