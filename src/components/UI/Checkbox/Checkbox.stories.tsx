import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { Checkbox } from "./index";
import { Label } from "../Label";

/**
 * Checkbox component provides selectable input with checked, unchecked, and indeterminate states.
 * Built on Radix UI Checkbox primitive with comprehensive form integration.
 */
const meta = {
 title: "UI/Checkbox",
 component: Checkbox,
 parameters: {
  layout: "centered",
 },
 argTypes: {
  checked: {
   control: { type: "select" },
   options: [true, false, "indeterminate"],
   description: "Checkbox state",
  },
  disabled: {
   control: "boolean",
   description: "Whether the checkbox is disabled",
  },
 },
 tags: ["autodocs"],
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Default checkbox
 */
export const Default: Story = {
 args: {
  checked: false,
 },
};

/**
 * Checked checkbox
 */
export const Checked: Story = {
 args: {
  checked: true,
 },
};

/**
 * Indeterminate checkbox
 */
export const Indeterminate: Story = {
 args: {
  checked: "indeterminate",
 },
};

/**
 * Disabled checkbox
 */
export const Disabled: Story = {
 args: {
  disabled: true,
  checked: false,
 },
};

/**
 * Disabled and checked
 */
export const DisabledChecked: Story = {
 args: {
  disabled: true,
  checked: true,
 },
};

/**
 * With label
 */
export const WithLabel = {
 render: () => (
  <div className="flex items-center space-x-2">
   <Checkbox id="terms" />
   <Label htmlFor="terms">Accept terms and conditions</Label>
  </div>
 ),
};

/**
 * Interactive checkbox
 */
export const Interactive = {
 render: () => {
  const [checked, setChecked] = useState(false);

  return (
   <div className="flex items-center space-x-2">
    <Checkbox id="interactive" checked={checked} onCheckedChange={setChecked} />
    <Label htmlFor="interactive">{checked ? "Checked" : "Unchecked"}</Label>
   </div>
  );
 },
};

/**
 * Checkbox group
 */
export const CheckboxGroup = {
 render: () => {
  const [selected, setSelected] = useState<string[]>([]);

  const options = [
   { id: "option1", label: "Option 1" },
   { id: "option2", label: "Option 2" },
   { id: "option3", label: "Option 3" },
   { id: "option4", label: "Option 4" },
  ];

  const handleChange = (optionId: string, checked: boolean) => {
   if (checked) {
    setSelected([...selected, optionId]);
   } else {
    setSelected(selected.filter((id) => id !== optionId));
   }
  };

  return (
   <div className="space-y-3">
    <h4 className="font-medium">Select options:</h4>
    {options.map((option) => (
     <div key={option.id} className="flex items-center space-x-2">
      <Checkbox
       id={option.id}
       checked={selected.includes(option.id)}
       onCheckedChange={(checked) =>
        handleChange(option.id, checked as boolean)
       }
      />
      <Label htmlFor={option.id}>{option.label}</Label>
     </div>
    ))}
    <p className="text-sm text-muted-foreground">
     Selected: {selected.length > 0 ? selected.join(", ") : "None"}
    </p>
   </div>
  );
 },
};

/**
 * Select all checkbox
 */
export const SelectAll = {
 render: () => {
  const [items, setItems] = useState([
   { id: "item1", label: "Item 1", checked: false },
   { id: "item2", label: "Item 2", checked: false },
   { id: "item3", label: "Item 3", checked: false },
  ]);

  const allChecked = items.every((item) => item.checked);
  const someChecked = items.some((item) => item.checked);
  const selectAllState = allChecked
   ? true
   : someChecked
   ? "indeterminate"
   : false;

  const handleSelectAll = (checked: boolean) => {
   setItems(items.map((item) => ({ ...item, checked })));
  };

  const handleItemChange = (itemId: string, checked: boolean) => {
   setItems(
    items.map((item) => (item.id === itemId ? { ...item, checked } : item))
   );
  };

  return (
   <div className="space-y-3">
    <div className="flex items-center space-x-2 pb-2 border-b">
     <Checkbox
      id="select-all"
      checked={selectAllState}
      onCheckedChange={handleSelectAll}
     />
     <Label htmlFor="select-all" className="font-medium">
      Select All
     </Label>
    </div>

    {items.map((item) => (
     <div key={item.id} className="flex items-center space-x-2 ml-6">
      <Checkbox
       id={item.id}
       checked={item.checked}
       onCheckedChange={(checked) =>
        handleItemChange(item.id, checked as boolean)
       }
      />
      <Label htmlFor={item.id}>{item.label}</Label>
     </div>
    ))}
   </div>
  );
 },
};

/**
 * Form integration
 */
export const FormIntegration = {
 render: () => {
  const [formData, setFormData] = useState({
   newsletter: false,
   marketing: false,
   terms: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
   e.preventDefault();
   console.log("Form submitted:", formData);
  };

  return (
   <form onSubmit={handleSubmit} className="space-y-4 max-w-sm">
    <div className="space-y-3">
     <div className="flex items-center space-x-2">
      <Checkbox
       id="newsletter"
       checked={formData.newsletter}
       onCheckedChange={(checked) =>
        setFormData((prev) => ({ ...prev, newsletter: checked as boolean }))
       }
      />
      <Label htmlFor="newsletter">Subscribe to newsletter</Label>
     </div>

     <div className="flex items-center space-x-2">
      <Checkbox
       id="marketing"
       checked={formData.marketing}
       onCheckedChange={(checked) =>
        setFormData((prev) => ({ ...prev, marketing: checked as boolean }))
       }
      />
      <Label htmlFor="marketing">Receive marketing emails</Label>
     </div>

     <div className="flex items-center space-x-2">
      <Checkbox
       id="terms-form"
       checked={formData.terms}
       onCheckedChange={(checked) =>
        setFormData((prev) => ({ ...prev, terms: checked as boolean }))
       }
      />
      <Label htmlFor="terms-form">I agree to the terms and conditions *</Label>
     </div>
    </div>

    <button
     type="submit"
     disabled={!formData.terms}
     className="w-full bg-primary text-primary-foreground px-4 py-2 rounded-md disabled:opacity-50 disabled:cursor-not-allowed"
    >
     Submit
    </button>

    <div className="text-xs text-muted-foreground">
     <p>Current selections:</p>
     <pre className="mt-1 bg-muted p-2 rounded">
      {JSON.stringify(formData, null, 2)}
     </pre>
    </div>
   </form>
  );
 },
};

/**
 * Checkbox states
 */
export const AllStates = {
 render: () => (
  <div className="space-y-4">
   <div className="space-y-3">
    <h4 className="font-medium">Normal States</h4>
    <div className="flex items-center space-x-2">
     <Checkbox checked={false} />
     <Label>Unchecked</Label>
    </div>
    <div className="flex items-center space-x-2">
     <Checkbox checked={true} />
     <Label>Checked</Label>
    </div>
    <div className="flex items-center space-x-2">
     <Checkbox checked="indeterminate" />
     <Label>Indeterminate</Label>
    </div>
   </div>

   <div className="space-y-3">
    <h4 className="font-medium">Disabled States</h4>
    <div className="flex items-center space-x-2">
     <Checkbox checked={false} disabled />
     <Label className="text-muted-foreground">Disabled unchecked</Label>
    </div>
    <div className="flex items-center space-x-2">
     <Checkbox checked={true} disabled />
     <Label className="text-muted-foreground">Disabled checked</Label>
    </div>
    <div className="flex items-center space-x-2">
     <Checkbox checked="indeterminate" disabled />
     <Label className="text-muted-foreground">Disabled indeterminate</Label>
    </div>
   </div>
  </div>
 ),
};

/**
 * Checkbox sizes (custom styling)
 */
export const Sizes = {
 render: () => (
  <div className="space-y-4">
   <div className="flex items-center space-x-2">
    <Checkbox className="h-3 w-3" />
    <Label className="text-sm">Small checkbox</Label>
   </div>
   <div className="flex items-center space-x-2">
    <Checkbox />
    <Label>Default checkbox</Label>
   </div>
   <div className="flex items-center space-x-2">
    <Checkbox className="h-5 w-5" />
    <Label className="text-lg">Large checkbox</Label>
   </div>
  </div>
 ),
};
