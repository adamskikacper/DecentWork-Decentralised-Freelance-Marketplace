import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import {
 Select,
 SelectContent,
 SelectItem,
 SelectTrigger,
 SelectValue,
 SelectGroup,
 SelectLabel,
 SelectSeparator,
} from "./index";
import { Label } from "../Label";

/**
 * Select component provides dropdown selection with comprehensive options and grouping.
 * Built on Radix UI Select primitive with keyboard navigation and accessibility.
 */
const meta = {
 title: "UI/Select",
 component: Select,
 parameters: {
  layout: "centered",
 },
 argTypes: {
  disabled: {
   control: "boolean",
   description: "Whether the select is disabled",
  },
  defaultValue: {
   control: "text",
   description: "Default selected value",
  },
 },
 tags: ["autodocs"],
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Default select
 */
export const Default: Story = {
 render: () => (
  <Select>
   <SelectTrigger className="w-[180px]">
    <SelectValue placeholder="Select a fruit" />
   </SelectTrigger>
   <SelectContent>
    <SelectItem value="apple">Apple</SelectItem>
    <SelectItem value="banana">Banana</SelectItem>
    <SelectItem value="orange">Orange</SelectItem>
    <SelectItem value="grape">Grape</SelectItem>
    <SelectItem value="pineapple">Pineapple</SelectItem>
   </SelectContent>
  </Select>
 ),
};

/**
 * With default value
 */
export const WithDefaultValue: Story = {
 render: () => (
  <Select defaultValue="banana">
   <SelectTrigger className="w-[180px]">
    <SelectValue placeholder="Select a fruit" />
   </SelectTrigger>
   <SelectContent>
    <SelectItem value="apple">Apple</SelectItem>
    <SelectItem value="banana">Banana</SelectItem>
    <SelectItem value="orange">Orange</SelectItem>
    <SelectItem value="grape">Grape</SelectItem>
    <SelectItem value="pineapple">Pineapple</SelectItem>
   </SelectContent>
  </Select>
 ),
};

/**
 * Disabled select
 */
export const Disabled: Story = {
 render: () => (
  <Select disabled>
   <SelectTrigger className="w-[180px]">
    <SelectValue placeholder="Select a fruit" />
   </SelectTrigger>
   <SelectContent>
    <SelectItem value="apple">Apple</SelectItem>
    <SelectItem value="banana">Banana</SelectItem>
    <SelectItem value="orange">Orange</SelectItem>
   </SelectContent>
  </Select>
 ),
};

/**
 * With label
 */
export const WithLabel = {
 render: () => (
  <div className="space-y-2">
   <Label htmlFor="fruit-select">Choose your favorite fruit</Label>
   <Select>
    <SelectTrigger className="w-[180px]" id="fruit-select">
     <SelectValue placeholder="Select a fruit" />
    </SelectTrigger>
    <SelectContent>
     <SelectItem value="apple">Apple</SelectItem>
     <SelectItem value="banana">Banana</SelectItem>
     <SelectItem value="orange">Orange</SelectItem>
     <SelectItem value="grape">Grape</SelectItem>
     <SelectItem value="pineapple">Pineapple</SelectItem>
    </SelectContent>
   </Select>
  </div>
 ),
};

/**
 * With groups
 */
export const WithGroups = {
 render: () => (
  <Select>
   <SelectTrigger className="w-[200px]">
    <SelectValue placeholder="Select a food" />
   </SelectTrigger>
   <SelectContent>
    <SelectGroup>
     <SelectLabel>Fruits</SelectLabel>
     <SelectItem value="apple">Apple</SelectItem>
     <SelectItem value="banana">Banana</SelectItem>
     <SelectItem value="orange">Orange</SelectItem>
    </SelectGroup>
    <SelectSeparator />
    <SelectGroup>
     <SelectLabel>Vegetables</SelectLabel>
     <SelectItem value="carrot">Carrot</SelectItem>
     <SelectItem value="broccoli">Broccoli</SelectItem>
     <SelectItem value="spinach">Spinach</SelectItem>
    </SelectGroup>
    <SelectSeparator />
    <SelectGroup>
     <SelectLabel>Proteins</SelectLabel>
     <SelectItem value="chicken">Chicken</SelectItem>
     <SelectItem value="beef">Beef</SelectItem>
     <SelectItem value="fish">Fish</SelectItem>
    </SelectGroup>
   </SelectContent>
  </Select>
 ),
};

/**
 * Interactive select
 */
export const Interactive = {
 render: () => {
  const [value, setValue] = useState("");

  return (
   <div className="space-y-4">
    <Select value={value} onValueChange={setValue}>
     <SelectTrigger className="w-[200px]">
      <SelectValue placeholder="Select a country" />
     </SelectTrigger>
     <SelectContent>
      <SelectItem value="us">United States</SelectItem>
      <SelectItem value="ca">Canada</SelectItem>
      <SelectItem value="uk">United Kingdom</SelectItem>
      <SelectItem value="fr">France</SelectItem>
      <SelectItem value="de">Germany</SelectItem>
      <SelectItem value="jp">Japan</SelectItem>
      <SelectItem value="au">Australia</SelectItem>
     </SelectContent>
    </Select>

    <p className="text-sm text-muted-foreground">Selected: {value || "None"}</p>
   </div>
  );
 },
};

/**
 * Different sizes
 */
export const Sizes = {
 render: () => (
  <div className="space-y-4">
   <div className="space-y-2">
    <Label>Small</Label>
    <Select>
     <SelectTrigger className="w-[150px] h-8 text-sm">
      <SelectValue placeholder="Small select" />
     </SelectTrigger>
     <SelectContent>
      <SelectItem value="option1">Option 1</SelectItem>
      <SelectItem value="option2">Option 2</SelectItem>
      <SelectItem value="option3">Option 3</SelectItem>
     </SelectContent>
    </Select>
   </div>

   <div className="space-y-2">
    <Label>Default</Label>
    <Select>
     <SelectTrigger className="w-[180px]">
      <SelectValue placeholder="Default select" />
     </SelectTrigger>
     <SelectContent>
      <SelectItem value="option1">Option 1</SelectItem>
      <SelectItem value="option2">Option 2</SelectItem>
      <SelectItem value="option3">Option 3</SelectItem>
     </SelectContent>
    </Select>
   </div>

   <div className="space-y-2">
    <Label>Large</Label>
    <Select>
     <SelectTrigger className="w-[220px] h-12 text-lg">
      <SelectValue placeholder="Large select" />
     </SelectTrigger>
     <SelectContent>
      <SelectItem value="option1">Option 1</SelectItem>
      <SelectItem value="option2">Option 2</SelectItem>
      <SelectItem value="option3">Option 3</SelectItem>
     </SelectContent>
    </Select>
   </div>
  </div>
 ),
};

/**
 * Form integration
 */
export const FormIntegration = {
 render: () => {
  const [formData, setFormData] = useState({
   category: "",
   priority: "",
   assignee: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
   e.preventDefault();
   console.log("Form submitted:", formData);
  };

  return (
   <form onSubmit={handleSubmit} className="space-y-4 max-w-sm">
    <div className="space-y-2">
     <Label htmlFor="category">Category</Label>
     <Select
      value={formData.category}
      onValueChange={(value) =>
       setFormData((prev) => ({ ...prev, category: value }))
      }
     >
      <SelectTrigger id="category">
       <SelectValue placeholder="Select category" />
      </SelectTrigger>
      <SelectContent>
       <SelectItem value="bug">Bug Report</SelectItem>
       <SelectItem value="feature">Feature Request</SelectItem>
       <SelectItem value="improvement">Improvement</SelectItem>
       <SelectItem value="question">Question</SelectItem>
      </SelectContent>
     </Select>
    </div>

    <div className="space-y-2">
     <Label htmlFor="priority">Priority</Label>
     <Select
      value={formData.priority}
      onValueChange={(value) =>
       setFormData((prev) => ({ ...prev, priority: value }))
      }
     >
      <SelectTrigger id="priority">
       <SelectValue placeholder="Select priority" />
      </SelectTrigger>
      <SelectContent>
       <SelectItem value="low">Low</SelectItem>
       <SelectItem value="medium">Medium</SelectItem>
       <SelectItem value="high">High</SelectItem>
       <SelectItem value="urgent">Urgent</SelectItem>
      </SelectContent>
     </Select>
    </div>

    <div className="space-y-2">
     <Label htmlFor="assignee">Assignee</Label>
     <Select
      value={formData.assignee}
      onValueChange={(value) =>
       setFormData((prev) => ({ ...prev, assignee: value }))
      }
     >
      <SelectTrigger id="assignee">
       <SelectValue placeholder="Select assignee" />
      </SelectTrigger>
      <SelectContent>
       <SelectGroup>
        <SelectLabel>Developers</SelectLabel>
        <SelectItem value="john">John Doe</SelectItem>
        <SelectItem value="jane">Jane Smith</SelectItem>
        <SelectItem value="bob">Bob Johnson</SelectItem>
       </SelectGroup>
       <SelectSeparator />
       <SelectGroup>
        <SelectLabel>Designers</SelectLabel>
        <SelectItem value="alice">Alice Brown</SelectItem>
        <SelectItem value="charlie">Charlie Wilson</SelectItem>
       </SelectGroup>
      </SelectContent>
     </Select>
    </div>

    <button
     type="submit"
     className="w-full bg-primary text-primary-foreground px-4 py-2 rounded-md disabled:opacity-50"
     disabled={!formData.category || !formData.priority}
    >
     Create Ticket
    </button>

    <div className="text-xs text-muted-foreground">
     <p>Current selections:</p>
     <pre className="mt-1 bg-muted p-2 rounded text-xs">
      {JSON.stringify(formData, null, 2)}
     </pre>
    </div>
   </form>
  );
 },
};

/**
 * With disabled options
 */
export const WithDisabledOptions = {
 render: () => (
  <Select>
   <SelectTrigger className="w-[200px]">
    <SelectValue placeholder="Select a plan" />
   </SelectTrigger>
   <SelectContent>
    <SelectItem value="free">Free Plan</SelectItem>
    <SelectItem value="basic">Basic Plan</SelectItem>
    <SelectItem value="pro">Pro Plan</SelectItem>
    <SelectItem value="enterprise" disabled>
     Enterprise Plan (Coming Soon)
    </SelectItem>
   </SelectContent>
  </Select>
 ),
};

/**
 * Multiple selects
 */
export const MultipleSelects = {
 render: () => {
  const [filters, setFilters] = useState({
   category: "",
   status: "",
   sort: "newest",
  });

  return (
   <div className="space-y-4 max-w-md">
    <h3 className="font-medium">Filter Options</h3>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
     <div className="space-y-2">
      <Label>Category</Label>
      <Select
       value={filters.category}
       onValueChange={(value) =>
        setFilters((prev) => ({ ...prev, category: value }))
       }
      >
       <SelectTrigger>
        <SelectValue placeholder="All" />
       </SelectTrigger>
       <SelectContent>
        <SelectItem value="all">All Categories</SelectItem>
        <SelectItem value="tech">Technology</SelectItem>
        <SelectItem value="design">Design</SelectItem>
        <SelectItem value="business">Business</SelectItem>
        <SelectItem value="marketing">Marketing</SelectItem>
       </SelectContent>
      </Select>
     </div>

     <div className="space-y-2">
      <Label>Status</Label>
      <Select
       value={filters.status}
       onValueChange={(value) =>
        setFilters((prev) => ({ ...prev, status: value }))
       }
      >
       <SelectTrigger>
        <SelectValue placeholder="All" />
       </SelectTrigger>
       <SelectContent>
        <SelectItem value="all">All Status</SelectItem>
        <SelectItem value="active">Active</SelectItem>
        <SelectItem value="inactive">Inactive</SelectItem>
        <SelectItem value="pending">Pending</SelectItem>
       </SelectContent>
      </Select>
     </div>

     <div className="space-y-2">
      <Label>Sort By</Label>
      <Select
       value={filters.sort}
       onValueChange={(value) =>
        setFilters((prev) => ({ ...prev, sort: value }))
       }
      >
       <SelectTrigger>
        <SelectValue />
       </SelectTrigger>
       <SelectContent>
        <SelectItem value="newest">Newest First</SelectItem>
        <SelectItem value="oldest">Oldest First</SelectItem>
        <SelectItem value="name">Name A-Z</SelectItem>
        <SelectItem value="name-desc">Name Z-A</SelectItem>
       </SelectContent>
      </Select>
     </div>
    </div>

    <div className="text-sm text-muted-foreground">
     <p>Active filters:</p>
     <div className="mt-1 flex flex-wrap gap-1">
      {filters.category && (
       <span className="bg-primary/10 text-primary px-2 py-1 rounded text-xs">
        Category: {filters.category}
       </span>
      )}
      {filters.status && (
       <span className="bg-primary/10 text-primary px-2 py-1 rounded text-xs">
        Status: {filters.status}
       </span>
      )}
      <span className="bg-primary/10 text-primary px-2 py-1 rounded text-xs">
       Sort: {filters.sort}
      </span>
     </div>
    </div>
   </div>
  );
 },
};
