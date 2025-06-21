import type { Meta, StoryObj } from "@storybook/react";
import { ResizablePanelGroup, ResizablePanel, ResizableHandle } from "./index";

const meta: Meta<typeof ResizablePanelGroup> = {
 title: "UI/Resizable",
 component: ResizablePanelGroup,
 parameters: {
  layout: "centered",
  docs: {
   description: {
    component:
     "Resizable components for creating flexible layouts with draggable handles. Perfect for dashboards, editors, and split-view interfaces.",
   },
  },
 },
 tags: ["autodocs"],
 argTypes: {
  direction: {
   control: "select",
   options: ["horizontal", "vertical"],
  },
 },
};

export default meta;
type Story = StoryObj<typeof ResizablePanelGroup>;

/**
 * Basic horizontal resizable panels
 */
export const Horizontal: Story = {
 render: () => (
  <div className="h-96 w-full max-w-2xl">
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
  <div className="h-96 w-full max-w-md">
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
  <div className="h-96 w-full max-w-3xl">
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
  <div className="h-96 w-full max-w-3xl">
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
 * Code editor layout
 */
export const CodeEditor: Story = {
 render: () => (
  <div className="h-96 w-full max-w-4xl">
   <ResizablePanelGroup
    direction="horizontal"
    className="h-full rounded-lg border"
   >
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

    {/* Main editor area */}
    <ResizablePanel defaultSize={60}>
     <ResizablePanelGroup direction="vertical">
      {/* Code editor */}
      <ResizablePanel defaultSize={70}>
       <div className="h-full p-4 bg-gray-900 text-white">
        <div className="mb-2 text-sm text-gray-400">src/App.tsx</div>
        <div className="font-mono text-sm space-y-1">
         <div>
          <span className="text-blue-400">import</span> React{" "}
          <span className="text-blue-400">from</span>{" "}
          <span className="text-green-400">'react'</span>;
         </div>
         <div>
          <span className="text-blue-400">import</span>{" "}
          <span className="text-yellow-400">Button</span>{" "}
          <span className="text-blue-400">from</span>{" "}
          <span className="text-green-400">'./Button'</span>;
         </div>
         <div></div>
         <div>
          <span className="text-blue-400">function</span>{" "}
          <span className="text-yellow-400">App</span>() {`{`}
         </div>
         <div className="ml-4">
          <span className="text-blue-400">return</span> (
         </div>
         <div className="ml-8">
          &lt;<span className="text-red-400">div</span>&gt;
         </div>
         <div className="ml-12">
          &lt;<span className="text-yellow-400">Button</span>&gt;Click me&lt;/
          <span className="text-yellow-400">Button</span>&gt;
         </div>
         <div className="ml-8">
          &lt;/<span className="text-red-400">div</span>&gt;
         </div>
         <div className="ml-4">);</div>
         <div>{`}`}</div>
        </div>
       </div>
      </ResizablePanel>
      <ResizableHandle />

      {/* Terminal */}
      <ResizablePanel defaultSize={30} minSize={20}>
       <div className="h-full p-4 bg-black text-green-400">
        <div className="font-mono text-sm space-y-1">
         <div>$ npm start</div>
         <div>Starting development server...</div>
         <div>Compiled successfully!</div>
         <div>Local: http://localhost:3000</div>
         <div className="flex">
          <span>$ </span>
          <span className="animate-pulse">|</span>
         </div>
        </div>
       </div>
      </ResizablePanel>
     </ResizablePanelGroup>
    </ResizablePanel>
    <ResizableHandle />

    {/* Properties panel */}
    <ResizablePanel defaultSize={20} minSize={15} maxSize={30}>
     <div className="h-full p-4 bg-gray-50">
      <h3 className="font-semibold mb-3">Properties</h3>
      <div className="space-y-3 text-sm">
       <div>
        <label className="block text-gray-600 mb-1">Component</label>
        <div className="font-semibold">Button</div>
       </div>
       <div>
        <label className="block text-gray-600 mb-1">Props</label>
        <div className="space-y-1">
         <div>variant: primary</div>
         <div>size: medium</div>
         <div>disabled: false</div>
        </div>
       </div>
      </div>
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
  <div className="h-96 w-full max-w-4xl">
   <ResizablePanelGroup
    direction="vertical"
    className="h-full rounded-lg border"
   >
    {/* Header */}
    <ResizablePanel defaultSize={15} minSize={10} maxSize={20}>
     <div className="flex h-full items-center justify-between px-6 bg-blue-600 text-white">
      <h1 className="text-lg font-semibold">Dashboard</h1>
      <div className="flex space-x-4">
       <span>👤 John Doe</span>
       <span>🔔</span>
      </div>
     </div>
    </ResizablePanel>
    <ResizableHandle />

    {/* Main content */}
    <ResizablePanel defaultSize={85}>
     <ResizablePanelGroup direction="horizontal">
      {/* Sidebar */}
      <ResizablePanel defaultSize={20} minSize={15} maxSize={25}>
       <div className="h-full p-4 bg-gray-100">
        <nav className="space-y-2">
         <div className="font-semibold text-blue-600">📊 Analytics</div>
         <div className="text-gray-600">📈 Reports</div>
         <div className="text-gray-600">👥 Users</div>
         <div className="text-gray-600">⚙️ Settings</div>
        </nav>
       </div>
      </ResizablePanel>
      <ResizableHandle />

      {/* Main dashboard */}
      <ResizablePanel defaultSize={60}>
       <div className="h-full p-6">
        <h2 className="text-xl font-semibold mb-4">Analytics Overview</h2>
        <div className="grid grid-cols-2 gap-4 h-full">
         <div className="bg-white border rounded-lg p-4 flex items-center justify-center">
          <div className="text-center">
           <div className="text-2xl font-bold text-blue-600">1,234</div>
           <div className="text-gray-600">Total Users</div>
          </div>
         </div>
         <div className="bg-white border rounded-lg p-4 flex items-center justify-center">
          <div className="text-center">
           <div className="text-2xl font-bold text-green-600">$12,345</div>
           <div className="text-gray-600">Revenue</div>
          </div>
         </div>
         <div className="bg-white border rounded-lg p-4 flex items-center justify-center col-span-2">
          <div className="text-gray-500">📊 Chart Placeholder</div>
         </div>
        </div>
       </div>
      </ResizablePanel>
      <ResizableHandle />

      {/* Right panel */}
      <ResizablePanel defaultSize={20} minSize={15} maxSize={25}>
       <div className="h-full p-4 bg-gray-50">
        <h3 className="font-semibold mb-3">Recent Activity</h3>
        <div className="space-y-3 text-sm">
         <div className="flex items-center space-x-2">
          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
          <span>User signed up</span>
         </div>
         <div className="flex items-center space-x-2">
          <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
          <span>Report generated</span>
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
  </div>
 ),
};

/**
 * Simple two-panel split
 */
export const SimpleSplit: Story = {
 render: () => (
  <div className="h-64 w-full max-w-lg">
   <ResizablePanelGroup
    direction="horizontal"
    className="h-full rounded-lg border"
   >
    <ResizablePanel defaultSize={40}>
     <div className="flex h-full items-center justify-center p-4 bg-blue-50">
      <span className="text-sm font-medium">Left</span>
     </div>
    </ResizablePanel>
    <ResizableHandle />
    <ResizablePanel defaultSize={60}>
     <div className="flex h-full items-center justify-center p-4 bg-green-50">
      <span className="text-sm font-medium">Right</span>
     </div>
    </ResizablePanel>
   </ResizablePanelGroup>
  </div>
 ),
};
