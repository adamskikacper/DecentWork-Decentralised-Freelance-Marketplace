import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { Toggle } from "./index";

const meta: Meta<typeof Toggle> = {
 title: "UI/Toggle",
 component: Toggle,
 parameters: {
  layout: "centered",
  docs: {
   description: {
    component:
     "A toggle component that can be pressed and unpressed. Perfect for on/off states, preferences, and feature toggles.",
   },
  },
 },
 tags: ["autodocs"],
 argTypes: {
  variant: {
   control: "select",
   options: ["default", "outline"],
  },
  size: {
   control: "select",
   options: ["default", "sm", "lg"],
  },
  pressed: {
   control: "boolean",
  },
  disabled: {
   control: "boolean",
  },
 },
};

export default meta;
type Story = StoryObj<typeof Toggle>;

/**
 * Basic toggle button
 */
export const Default: Story = {
 args: {
  children: "Toggle",
 },
};

/**
 * Toggle with different variants
 */
export const Variants: Story = {
 render: () => (
  <div className="flex space-x-4">
   <Toggle variant="default">Default</Toggle>
   <Toggle variant="outline">Outline</Toggle>
  </div>
 ),
};

/**
 * Toggle with different sizes
 */
export const Sizes: Story = {
 render: () => (
  <div className="flex items-center space-x-4">
   <Toggle size="sm">Small</Toggle>
   <Toggle size="default">Default</Toggle>
   <Toggle size="lg">Large</Toggle>
  </div>
 ),
};

/**
 * Toggle states
 */
export const States: Story = {
 render: () => (
  <div className="flex space-x-4">
   <Toggle>Unpressed</Toggle>
   <Toggle pressed>Pressed</Toggle>
   <Toggle disabled>Disabled</Toggle>
   <Toggle pressed disabled>
    Pressed Disabled
   </Toggle>
  </div>
 ),
};

/**
 * Icon toggles
 */
export const IconToggles: Story = {
 render: () => (
  <div className="flex space-x-4">
   <Toggle size="sm">⭐</Toggle>
   <Toggle>❤️</Toggle>
   <Toggle size="lg">🔖</Toggle>
   <Toggle variant="outline">👍</Toggle>
  </div>
 ),
};

/**
 * Interactive toggle examples
 */
export const Interactive: Story = {
 render: () => {
  const [boldPressed, setBoldPressed] = useState(false);
  const [italicPressed, setItalicPressed] = useState(false);
  const [underlinePressed, setUnderlinePressed] = useState(false);

  return (
   <div className="space-y-4">
    <div className="flex space-x-2">
     <Toggle
      pressed={boldPressed}
      onPressedChange={setBoldPressed}
      variant="outline"
     >
      <strong>B</strong>
     </Toggle>
     <Toggle
      pressed={italicPressed}
      onPressedChange={setItalicPressed}
      variant="outline"
     >
      <em>I</em>
     </Toggle>
     <Toggle
      pressed={underlinePressed}
      onPressedChange={setUnderlinePressed}
      variant="outline"
     >
      <u>U</u>
     </Toggle>
    </div>

    <div className="p-4 border rounded-lg">
     <p
      className={`
              ${boldPressed ? "font-bold" : ""}
              ${italicPressed ? "italic" : ""}
              ${underlinePressed ? "underline" : ""}
            `}
     >
      This text will change based on the toggles above.
     </p>
    </div>
   </div>
  );
 },
};

/**
 * Settings toggles
 */
export const Settings: Story = {
 render: () => {
  const [notifications, setNotifications] = useState(true);
  const [darkMode, setDarkMode] = useState(false);
  const [autoSave, setAutoSave] = useState(true);

  return (
   <div className="space-y-4 w-80">
    <div className="flex items-center justify-between">
     <span className="text-sm font-medium">Notifications</span>
     <Toggle
      pressed={notifications}
      onPressedChange={setNotifications}
      size="sm"
     >
      {notifications ? "🔔" : "🔕"}
     </Toggle>
    </div>

    <div className="flex items-center justify-between">
     <span className="text-sm font-medium">Dark Mode</span>
     <Toggle pressed={darkMode} onPressedChange={setDarkMode} size="sm">
      {darkMode ? "🌙" : "☀️"}
     </Toggle>
    </div>

    <div className="flex items-center justify-between">
     <span className="text-sm font-medium">Auto Save</span>
     <Toggle pressed={autoSave} onPressedChange={setAutoSave} size="sm">
      {autoSave ? "💾" : "📝"}
     </Toggle>
    </div>
   </div>
  );
 },
};

/**
 * Toolbar toggles
 */
export const Toolbar: Story = {
 render: () => {
  const [activeTools, setActiveTools] = useState<string[]>([]);

  const toggleTool = (tool: string) => {
   setActiveTools((prev) =>
    prev.includes(tool) ? prev.filter((t) => t !== tool) : [...prev, tool]
   );
  };

  const tools = [
   { id: "select", icon: "↖️", label: "Select" },
   { id: "move", icon: "✋", label: "Move" },
   { id: "draw", icon: "✏️", label: "Draw" },
   { id: "text", icon: "📝", label: "Text" },
   { id: "shape", icon: "⬜", label: "Shape" },
  ];

  return (
   <div className="space-y-4">
    <div className="flex space-x-1 p-2 bg-gray-100 rounded-lg">
     {tools.map((tool) => (
      <Toggle
       key={tool.id}
       pressed={activeTools.includes(tool.id)}
       onPressedChange={() => toggleTool(tool.id)}
       variant="outline"
       size="sm"
       title={tool.label}
      >
       {tool.icon}
      </Toggle>
     ))}
    </div>

    <div className="text-sm text-gray-600">
     Active tools: {activeTools.length > 0 ? activeTools.join(", ") : "None"}
    </div>
   </div>
  );
 },
};

/**
 * View mode toggles
 */
export const ViewModes: Story = {
 render: () => {
  const [viewMode, setViewMode] = useState("grid");

  return (
   <div className="space-y-4">
    <div className="flex space-x-2">
     <Toggle
      pressed={viewMode === "list"}
      onPressedChange={() => setViewMode("list")}
      variant="outline"
     >
      📋 List
     </Toggle>
     <Toggle
      pressed={viewMode === "grid"}
      onPressedChange={() => setViewMode("grid")}
      variant="outline"
     >
      ⚏ Grid
     </Toggle>
     <Toggle
      pressed={viewMode === "card"}
      onPressedChange={() => setViewMode("card")}
      variant="outline"
     >
      🃏 Card
     </Toggle>
    </div>

    <div className="p-4 border rounded-lg">
     <p className="text-sm">
      Current view mode: <strong>{viewMode}</strong>
     </p>
    </div>
   </div>
  );
 },
};
