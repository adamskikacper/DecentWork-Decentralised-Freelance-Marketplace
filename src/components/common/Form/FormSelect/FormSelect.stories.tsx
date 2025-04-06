import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import FormSelect from "./index";

/**
 * FormSelect is a component for selecting options from a dropdown in forms.
 * It provides a simple, styled select element with a label.
 */
const meta = {
  title: "Common/Form/FormSelect",
  component: FormSelect,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    label: { 
      control: "text", 
      description: "The label text for the select field" 
    },
    name: { 
      control: "text", 
      description: "The name attribute for the select element" 
    },
    value: { 
      control: "text", 
      description: "The currently selected value" 
    },
    options: { 
      control: "object", 
      description: "Array of options with value and label properties" 
    },
    onChange: { 
      action: "changed", 
      description: "Function called when selection changes" 
    },
    className: { 
      control: "text", 
      description: "Additional CSS classes to apply" 
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof FormSelect>;

export default meta;
type Story = StoryObj<typeof meta>;

const defaultOptions = [
  { value: "", label: "Select an option" },
  { value: "option1", label: "Option 1" },
  { value: "option2", label: "Option 2" },
  { value: "option3", label: "Option 3" },
];

/**
 * Default form select with placeholder option
 */
export const Default: Story = {
  args: {
    label: "Select Option",
    name: "select",
    value: "",
    options: defaultOptions,
    onChange: (e) => console.log("Selected:", e.target.value),
  },
};

/**
 * Form select with a preselected value
 */
export const WithSelectedValue: Story = {
  args: {
    ...Default.args,
    value: "option2",
  },
};

/**
 * Form select with many options
 */
export const WithManyOptions: Story = {
  args: {
    label: "Select Country",
    name: "country",
    value: "",
    options: [
      { value: "", label: "Select a country" },
      { value: "us", label: "United States" },
      { value: "ca", label: "Canada" },
      { value: "mx", label: "Mexico" },
      { value: "uk", label: "United Kingdom" },
      { value: "fr", label: "France" },
      { value: "de", label: "Germany" },
      { value: "jp", label: "Japan" },
      { value: "cn", label: "China" },
      { value: "in", label: "India" },
      { value: "br", label: "Brazil" },
    ],
    onChange: (e) => console.log("Selected country:", e.target.value),
  },
};

/**
 * Form select with custom styling
 */
export const CustomStyling: Story = {
  args: {
    ...Default.args,
    className: "max-w-xs bg-secondary/10 p-4 rounded-lg",
  },
};

/**
 * Interactive form select with state management
 */
export const Interactive: Story = {
  render: () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [value, setValue] = useState("");
    
    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
      setValue(e.target.value);
    };
    
    return (
      <div className="w-full max-w-sm">
        <FormSelect
          label="Interactive Select"
          name="interactive"
          value={value}
          options={defaultOptions}
          onChange={handleChange}
        />
        {value && (
          <p className="mt-2 text-sm">You selected: {value}</p>
        )}
      </div>
    );
  },
};
