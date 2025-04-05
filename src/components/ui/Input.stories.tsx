import type { Meta, StoryObj } from "@storybook/react";
import { Input } from "./input";

/**
 * Input component stories showing different states and use cases
 *
 * The Input component is used to collect user data in forms.
 */
const meta = {
 title: "UI/Input",
 component: Input,
 parameters: {
  layout: "centered",
 },
 tags: ["autodocs"],
 argTypes: {
  disabled: {
   control: "boolean",
   description: "Whether the input is disabled",
  },
  type: {
   control: { type: "select" },
   options: ["text", "password", "email", "number", "search", "tel", "url"],
   description: "The type of input field",
  },
  placeholder: {
   control: "text",
   description: "Placeholder text to display when the input is empty",
  },
  value: {
   control: "text",
   description: "The value of the input",
  },
  className: {
   control: "text",
   description: "Additional CSS classes to apply to the input",
  },
 },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Default input with placeholder text
 */
export const Default: Story = {
 args: {
  placeholder: "Enter text...",
  className: "w-[300px]",
 },
};

/**
 * Disabled input that cannot receive focus or input
 */
export const Disabled: Story = {
 args: {
  placeholder: "Disabled input",
  className: "w-[300px]",
  disabled: true,
 },
};

/**
 * Input with a label providing context
 */
export const WithLabel: Story = {
 render: (args) => (
  <div className="grid w-full max-w-sm items-center gap-1.5">
   <label htmlFor="email" className="text-sm font-medium">
    Email
   </label>
   <Input
    id="email"
    type="email"
    placeholder="Email"
    className="w-[300px]"
    {...args}
   />
  </div>
 ),
};

/**
 * Input with pre-filled text value
 */
export const WithText: Story = {
 args: {
  value: "Input with text",
  className: "w-[300px]",
 },
};

/**
 * Password input that masks the entered text
 */
export const Password: Story = {
 args: {
  type: "password",
  placeholder: "Enter password...",
  className: "w-[300px]",
 },
};

/**
 * Input with an icon for visual context
 */
export const WithIcon: Story = {
 render: (args) => (
  <div className="relative w-[300px]">
   <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="absolute left-2.5 top-2.5 h-5 w-5 text-gray-500"
   >
    <circle cx="11" cy="11" r="8"></circle>
    <path d="m21 21-4.3-4.3"></path>
   </svg>
   <Input placeholder="Search..." className="pl-10" {...args} />
  </div>
 ),
};

/**
 * Input in an error state with error message
 */
export const WithError: Story = {
 render: (args) => (
  <div className="grid w-full max-w-sm items-center gap-1.5">
   <label htmlFor="email-error" className="text-sm font-medium">
    Email
   </label>
   <Input
    id="email-error"
    type="email"
    placeholder="Email"
    className="w-[300px] border-red-500 focus-visible:ring-red-500"
    {...args}
   />
   <p className="text-sm text-red-500">Invalid email address</p>
  </div>
 ),
};
