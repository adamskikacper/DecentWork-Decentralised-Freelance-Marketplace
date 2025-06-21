import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { ToggleGroup, ToggleGroupItem } from "./index";

const meta: Meta<typeof ToggleGroup> = {
 title: "UI/ToggleGroup",
 component: ToggleGroup,
 parameters: {
  layout: "centered",
  docs: {
   description: {
    component:
     "A group of toggle buttons where only one or multiple can be active at once. Perfect for selecting options, filters, and grouped controls.",
   },
  },
 },
 tags: ["autodocs"],
 argTypes: {
  type: {
   control: "select",
   options: ["single", "multiple"],
  },
  variant: {
   control: "select",
   options: ["default", "outline"],
  },
  size: {
   control: "select",
   options: ["default", "sm", "lg"],
  },
 },
};

export default meta;
type Story = StoryObj<typeof ToggleGroup>;

/**
 * Basic single selection toggle group
 */
export const Single: Story = {
 args: {
  type: "single",
  children: (
   <>
    <ToggleGroupItem value="left">Left</ToggleGroupItem>
    <ToggleGroupItem value="center">Center</ToggleGroupItem>
    <ToggleGroupItem value="right">Right</ToggleGroupItem>
   </>
  ),
 },
};

/**
 * Multiple selection toggle group
 */
export const Multiple: Story = {
 args: {
  type: "multiple",
  children: (
   <>
    <ToggleGroupItem value="bold">Bold</ToggleGroupItem>
    <ToggleGroupItem value="italic">Italic</ToggleGroupItem>
    <ToggleGroupItem value="underline">Underline</ToggleGroupItem>
   </>
  ),
 },
};

/**
 * Different variants
 */
export const Variants: Story = {
 render: () => (
  <div className="space-y-4">
   <div>
    <p className="text-sm font-medium mb-2">Default</p>
    <ToggleGroup type="single" defaultValue="center">
     <ToggleGroupItem value="left">Left</ToggleGroupItem>
     <ToggleGroupItem value="center">Center</ToggleGroupItem>
     <ToggleGroupItem value="right">Right</ToggleGroupItem>
    </ToggleGroup>
   </div>

   <div>
    <p className="text-sm font-medium mb-2">Outline</p>
    <ToggleGroup type="single" variant="outline" defaultValue="center">
     <ToggleGroupItem value="left">Left</ToggleGroupItem>
     <ToggleGroupItem value="center">Center</ToggleGroupItem>
     <ToggleGroupItem value="right">Right</ToggleGroupItem>
    </ToggleGroup>
   </div>
  </div>
 ),
};

/**
 * Different sizes
 */
export const Sizes: Story = {
 render: () => (
  <div className="space-y-4">
   <div>
    <p className="text-sm font-medium mb-2">Small</p>
    <ToggleGroup type="single" size="sm" defaultValue="center">
     <ToggleGroupItem value="left">Left</ToggleGroupItem>
     <ToggleGroupItem value="center">Center</ToggleGroupItem>
     <ToggleGroupItem value="right">Right</ToggleGroupItem>
    </ToggleGroup>
   </div>

   <div>
    <p className="text-sm font-medium mb-2">Default</p>
    <ToggleGroup type="single" defaultValue="center">
     <ToggleGroupItem value="left">Left</ToggleGroupItem>
     <ToggleGroupItem value="center">Center</ToggleGroupItem>
     <ToggleGroupItem value="right">Right</ToggleGroupItem>
    </ToggleGroup>
   </div>

   <div>
    <p className="text-sm font-medium mb-2">Large</p>
    <ToggleGroup type="single" size="lg" defaultValue="center">
     <ToggleGroupItem value="left">Left</ToggleGroupItem>
     <ToggleGroupItem value="center">Center</ToggleGroupItem>
     <ToggleGroupItem value="right">Right</ToggleGroupItem>
    </ToggleGroup>
   </div>
  </div>
 ),
};

/**
 * Text alignment toggle group
 */
export const TextAlignment: Story = {
 render: () => {
  const [alignment, setAlignment] = useState("left");

  return (
   <div className="space-y-4">
    <ToggleGroup
     type="single"
     value={alignment}
     onValueChange={setAlignment}
     variant="outline"
    >
     <ToggleGroupItem value="left">⬅️</ToggleGroupItem>
     <ToggleGroupItem value="center">↔️</ToggleGroupItem>
     <ToggleGroupItem value="right">➡️</ToggleGroupItem>
     <ToggleGroupItem value="justify">↕️</ToggleGroupItem>
    </ToggleGroup>

    <div className="p-4 border rounded-lg w-80">
     <p
      className={`
              ${alignment === "left" ? "text-left" : ""}
              ${alignment === "center" ? "text-center" : ""}
              ${alignment === "right" ? "text-right" : ""}
              ${alignment === "justify" ? "text-justify" : ""}
            `}
     >
      This text alignment changes based on the selected toggle. Lorem ipsum
      dolor sit amet, consectetur adipiscing elit.
     </p>
    </div>
   </div>
  );
 },
};

/**
 * Text formatting toggle group
 */
export const TextFormatting: Story = {
 render: () => {
  const [formatting, setFormatting] = useState<string[]>([]);

  return (
   <div className="space-y-4">
    <ToggleGroup
     type="multiple"
     value={formatting}
     onValueChange={setFormatting}
     variant="outline"
    >
     <ToggleGroupItem value="bold">
      <strong>B</strong>
     </ToggleGroupItem>
     <ToggleGroupItem value="italic">
      <em>I</em>
     </ToggleGroupItem>
     <ToggleGroupItem value="underline">
      <u>U</u>
     </ToggleGroupItem>
     <ToggleGroupItem value="strikethrough">
      <s>S</s>
     </ToggleGroupItem>
    </ToggleGroup>

    <div className="p-4 border rounded-lg">
     <p
      className={`
              ${formatting.includes("bold") ? "font-bold" : ""}
              ${formatting.includes("italic") ? "italic" : ""}
              ${formatting.includes("underline") ? "underline" : ""}
              ${formatting.includes("strikethrough") ? "line-through" : ""}
            `}
     >
      This text formatting changes based on the selected toggles.
     </p>
    </div>
   </div>
  );
 },
};

/**
 * View mode toggle group
 */
export const ViewMode: Story = {
 render: () => {
  const [viewMode, setViewMode] = useState("grid");

  return (
   <div className="space-y-4">
    <ToggleGroup type="single" value={viewMode} onValueChange={setViewMode}>
     <ToggleGroupItem value="list">📋 List</ToggleGroupItem>
     <ToggleGroupItem value="grid">⚏ Grid</ToggleGroupItem>
     <ToggleGroupItem value="card">🃏 Card</ToggleGroupItem>
    </ToggleGroup>

    <div className="p-4 border rounded-lg">
     <p className="text-sm">
      Current view: <strong>{viewMode}</strong>
     </p>
     <div className="mt-2">
      {viewMode === "list" && (
       <div className="space-y-1">
        <div className="flex items-center space-x-2">
         <div className="w-4 h-4 bg-gray-300 rounded"></div>
         <span className="text-sm">Item 1</span>
        </div>
        <div className="flex items-center space-x-2">
         <div className="w-4 h-4 bg-gray-300 rounded"></div>
         <span className="text-sm">Item 2</span>
        </div>
       </div>
      )}
      {viewMode === "grid" && (
       <div className="grid grid-cols-3 gap-2">
        <div className="w-16 h-16 bg-gray-300 rounded"></div>
        <div className="w-16 h-16 bg-gray-300 rounded"></div>
        <div className="w-16 h-16 bg-gray-300 rounded"></div>
       </div>
      )}
      {viewMode === "card" && (
       <div className="space-y-2">
        <div className="p-3 border rounded-lg">
         <div className="w-full h-8 bg-gray-300 rounded mb-2"></div>
         <div className="w-3/4 h-4 bg-gray-200 rounded"></div>
        </div>
       </div>
      )}
     </div>
    </div>
   </div>
  );
 },
};

/**
 * Filter toggle group
 */
export const Filters: Story = {
 render: () => {
  const [filters, setFilters] = useState<string[]>(["active"]);

  const items = [
   { id: 1, name: "Project Alpha", status: "active", priority: "high" },
   { id: 2, name: "Project Beta", status: "completed", priority: "medium" },
   { id: 3, name: "Project Gamma", status: "active", priority: "low" },
   { id: 4, name: "Project Delta", status: "pending", priority: "high" },
  ];

  const filteredItems = items.filter(
   (item) =>
    filters.length === 0 ||
    filters.includes(item.status) ||
    filters.includes(item.priority)
  );

  return (
   <div className="space-y-4 w-96">
    <div>
     <p className="text-sm font-medium mb-2">Status Filters</p>
     <ToggleGroup
      type="multiple"
      value={filters}
      onValueChange={setFilters}
      variant="outline"
      size="sm"
     >
      <ToggleGroupItem value="active">Active</ToggleGroupItem>
      <ToggleGroupItem value="completed">Completed</ToggleGroupItem>
      <ToggleGroupItem value="pending">Pending</ToggleGroupItem>
     </ToggleGroup>
    </div>

    <div>
     <p className="text-sm font-medium mb-2">Priority Filters</p>
     <ToggleGroup
      type="multiple"
      value={filters}
      onValueChange={setFilters}
      variant="outline"
      size="sm"
     >
      <ToggleGroupItem value="high">High</ToggleGroupItem>
      <ToggleGroupItem value="medium">Medium</ToggleGroupItem>
      <ToggleGroupItem value="low">Low</ToggleGroupItem>
     </ToggleGroup>
    </div>

    <div className="border rounded-lg p-4">
     <p className="text-sm font-medium mb-2">
      Filtered Results ({filteredItems.length})
     </p>
     {filteredItems.length > 0 ? (
      <div className="space-y-2">
       {filteredItems.map((item) => (
        <div key={item.id} className="flex justify-between text-sm">
         <span>{item.name}</span>
         <div className="space-x-2">
          <span
           className={`px-2 py-1 rounded text-xs ${
            item.status === "active"
             ? "bg-green-100 text-green-800"
             : item.status === "completed"
             ? "bg-blue-100 text-blue-800"
             : "bg-yellow-100 text-yellow-800"
           }`}
          >
           {item.status}
          </span>
          <span
           className={`px-2 py-1 rounded text-xs ${
            item.priority === "high"
             ? "bg-red-100 text-red-800"
             : item.priority === "medium"
             ? "bg-orange-100 text-orange-800"
             : "bg-gray-100 text-gray-800"
           }`}
          >
           {item.priority}
          </span>
         </div>
        </div>
       ))}
      </div>
     ) : (
      <p className="text-sm text-gray-500">
       No items match the selected filters
      </p>
     )}
    </div>
   </div>
  );
 },
};

/**
 * Disabled state
 */
export const Disabled: Story = {
 render: () => (
  <div className="space-y-4">
   <ToggleGroup type="single" disabled>
    <ToggleGroupItem value="option1">Option 1</ToggleGroupItem>
    <ToggleGroupItem value="option2">Option 2</ToggleGroupItem>
    <ToggleGroupItem value="option3">Option 3</ToggleGroupItem>
   </ToggleGroup>

   <ToggleGroup type="single">
    <ToggleGroupItem value="option1">Enabled</ToggleGroupItem>
    <ToggleGroupItem value="option2" disabled>
     Disabled
    </ToggleGroupItem>
    <ToggleGroupItem value="option3">Enabled</ToggleGroupItem>
   </ToggleGroup>
  </div>
 ),
};
