import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { RadioGroup, RadioGroupItem } from "./index";
import { Label } from "../Label";

/**
 * RadioGroup component provides mutually exclusive selection options.
 * Built on Radix UI RadioGroup primitive with comprehensive form integration.
 */
const meta = {
 title: "UI/RadioGroup",
 component: RadioGroup,
 parameters: {
  layout: "centered",
 },
 argTypes: {
  defaultValue: {
   control: "text",
   description: "Default selected value",
  },
  disabled: {
   control: "boolean",
   description: "Whether the radio group is disabled",
  },
  orientation: {
   control: { type: "select" },
   options: ["horizontal", "vertical"],
   description: "Layout orientation",
  },
 },
 tags: ["autodocs"],
} satisfies Meta<typeof RadioGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Default radio group
 */
export const Default: Story = {
 render: () => (
  <RadioGroup defaultValue="option1">
   <div className="flex items-center space-x-2">
    <RadioGroupItem value="option1" id="option1" />
    <Label htmlFor="option1">Option 1</Label>
   </div>
   <div className="flex items-center space-x-2">
    <RadioGroupItem value="option2" id="option2" />
    <Label htmlFor="option2">Option 2</Label>
   </div>
   <div className="flex items-center space-x-2">
    <RadioGroupItem value="option3" id="option3" />
    <Label htmlFor="option3">Option 3</Label>
   </div>
  </RadioGroup>
 ),
};

/**
 * Horizontal layout
 */
export const Horizontal = {
 render: () => (
  <RadioGroup defaultValue="small" className="flex flex-row space-x-6">
   <div className="flex items-center space-x-2">
    <RadioGroupItem value="small" id="size-small" />
    <Label htmlFor="size-small">Small</Label>
   </div>
   <div className="flex items-center space-x-2">
    <RadioGroupItem value="medium" id="size-medium" />
    <Label htmlFor="size-medium">Medium</Label>
   </div>
   <div className="flex items-center space-x-2">
    <RadioGroupItem value="large" id="size-large" />
    <Label htmlFor="size-large">Large</Label>
   </div>
  </RadioGroup>
 ),
};

/**
 * Disabled radio group
 */
export const Disabled = {
 render: () => (
  <RadioGroup defaultValue="option1" disabled>
   <div className="flex items-center space-x-2">
    <RadioGroupItem value="option1" id="disabled-option1" />
    <Label htmlFor="disabled-option1" className="text-muted-foreground">
     Option 1 (Selected)
    </Label>
   </div>
   <div className="flex items-center space-x-2">
    <RadioGroupItem value="option2" id="disabled-option2" />
    <Label htmlFor="disabled-option2" className="text-muted-foreground">
     Option 2
    </Label>
   </div>
   <div className="flex items-center space-x-2">
    <RadioGroupItem value="option3" id="disabled-option3" />
    <Label htmlFor="disabled-option3" className="text-muted-foreground">
     Option 3
    </Label>
   </div>
  </RadioGroup>
 ),
};

/**
 * Interactive radio group
 */
export const Interactive = {
 render: () => {
  const [value, setValue] = useState("option1");

  return (
   <div className="space-y-4">
    <RadioGroup value={value} onValueChange={setValue}>
     <div className="flex items-center space-x-2">
      <RadioGroupItem value="option1" id="interactive-option1" />
      <Label htmlFor="interactive-option1">Option 1</Label>
     </div>
     <div className="flex items-center space-x-2">
      <RadioGroupItem value="option2" id="interactive-option2" />
      <Label htmlFor="interactive-option2">Option 2</Label>
     </div>
     <div className="flex items-center space-x-2">
      <RadioGroupItem value="option3" id="interactive-option3" />
      <Label htmlFor="interactive-option3">Option 3</Label>
     </div>
    </RadioGroup>

    <p className="text-sm text-muted-foreground">Selected: {value}</p>
   </div>
  );
 },
};

/**
 * With descriptions
 */
export const WithDescriptions = {
 render: () => (
  <RadioGroup defaultValue="basic" className="space-y-4">
   <div className="flex items-start space-x-3">
    <RadioGroupItem value="basic" id="plan-basic" className="mt-1" />
    <div className="space-y-1">
     <Label htmlFor="plan-basic" className="font-medium">
      Basic Plan
     </Label>
     <p className="text-sm text-muted-foreground">
      Perfect for individuals getting started
     </p>
     <p className="text-sm font-medium">$9/month</p>
    </div>
   </div>

   <div className="flex items-start space-x-3">
    <RadioGroupItem value="pro" id="plan-pro" className="mt-1" />
    <div className="space-y-1">
     <Label htmlFor="plan-pro" className="font-medium">
      Pro Plan
     </Label>
     <p className="text-sm text-muted-foreground">
      Best for growing businesses
     </p>
     <p className="text-sm font-medium">$29/month</p>
    </div>
   </div>

   <div className="flex items-start space-x-3">
    <RadioGroupItem value="enterprise" id="plan-enterprise" className="mt-1" />
    <div className="space-y-1">
     <Label htmlFor="plan-enterprise" className="font-medium">
      Enterprise Plan
     </Label>
     <p className="text-sm text-muted-foreground">
      Advanced features for large teams
     </p>
     <p className="text-sm font-medium">$99/month</p>
    </div>
   </div>
  </RadioGroup>
 ),
};

/**
 * Payment method selection
 */
export const PaymentMethods = {
 render: () => {
  const [paymentMethod, setPaymentMethod] = useState("card");

  return (
   <div className="space-y-4 max-w-sm">
    <h3 className="font-medium">Payment Method</h3>

    <RadioGroup value={paymentMethod} onValueChange={setPaymentMethod}>
     <div className="flex items-center space-x-3 p-3 border rounded-lg">
      <RadioGroupItem value="card" id="payment-card" />
      <div className="flex items-center space-x-2">
       <div className="w-8 h-5 bg-gradient-to-r from-blue-600 to-purple-600 rounded"></div>
       <Label htmlFor="payment-card">Credit Card</Label>
      </div>
     </div>

     <div className="flex items-center space-x-3 p-3 border rounded-lg">
      <RadioGroupItem value="paypal" id="payment-paypal" />
      <div className="flex items-center space-x-2">
       <div className="w-8 h-5 bg-blue-500 rounded flex items-center justify-center">
        <span className="text-white text-xs font-bold">PP</span>
       </div>
       <Label htmlFor="payment-paypal">PayPal</Label>
      </div>
     </div>

     <div className="flex items-center space-x-3 p-3 border rounded-lg">
      <RadioGroupItem value="bank" id="payment-bank" />
      <div className="flex items-center space-x-2">
       <div className="w-8 h-5 bg-green-500 rounded flex items-center justify-center">
        <span className="text-white text-xs font-bold">$</span>
       </div>
       <Label htmlFor="payment-bank">Bank Transfer</Label>
      </div>
     </div>
    </RadioGroup>

    <div className="mt-4 p-3 bg-muted rounded-lg">
     <p className="text-sm">
      Selected: <span className="font-medium">{paymentMethod}</span>
     </p>
    </div>
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
   size: "medium",
   color: "blue",
   delivery: "standard",
  });

  const handleSubmit = (e: React.FormEvent) => {
   e.preventDefault();
   console.log("Form submitted:", formData);
  };

  return (
   <form onSubmit={handleSubmit} className="space-y-6 max-w-md">
    <div className="space-y-3">
     <Label className="text-base font-medium">Size</Label>
     <RadioGroup
      value={formData.size}
      onValueChange={(value) =>
       setFormData((prev) => ({ ...prev, size: value }))
      }
     >
      <div className="flex items-center space-x-2">
       <RadioGroupItem value="small" id="form-size-small" />
       <Label htmlFor="form-size-small">Small (+$0)</Label>
      </div>
      <div className="flex items-center space-x-2">
       <RadioGroupItem value="medium" id="form-size-medium" />
       <Label htmlFor="form-size-medium">Medium (+$5)</Label>
      </div>
      <div className="flex items-center space-x-2">
       <RadioGroupItem value="large" id="form-size-large" />
       <Label htmlFor="form-size-large">Large (+$10)</Label>
      </div>
     </RadioGroup>
    </div>

    <div className="space-y-3">
     <Label className="text-base font-medium">Color</Label>
     <RadioGroup
      value={formData.color}
      onValueChange={(value) =>
       setFormData((prev) => ({ ...prev, color: value }))
      }
      className="flex flex-row space-x-6"
     >
      <div className="flex items-center space-x-2">
       <RadioGroupItem value="blue" id="form-color-blue" />
       <Label htmlFor="form-color-blue">Blue</Label>
      </div>
      <div className="flex items-center space-x-2">
       <RadioGroupItem value="red" id="form-color-red" />
       <Label htmlFor="form-color-red">Red</Label>
      </div>
      <div className="flex items-center space-x-2">
       <RadioGroupItem value="green" id="form-color-green" />
       <Label htmlFor="form-color-green">Green</Label>
      </div>
     </RadioGroup>
    </div>

    <div className="space-y-3">
     <Label className="text-base font-medium">Delivery</Label>
     <RadioGroup
      value={formData.delivery}
      onValueChange={(value) =>
       setFormData((prev) => ({ ...prev, delivery: value }))
      }
     >
      <div className="flex items-center space-x-2">
       <RadioGroupItem value="standard" id="form-delivery-standard" />
       <Label htmlFor="form-delivery-standard">Standard (5-7 days)</Label>
      </div>
      <div className="flex items-center space-x-2">
       <RadioGroupItem value="express" id="form-delivery-express" />
       <Label htmlFor="form-delivery-express">Express (2-3 days)</Label>
      </div>
      <div className="flex items-center space-x-2">
       <RadioGroupItem value="overnight" id="form-delivery-overnight" />
       <Label htmlFor="form-delivery-overnight">Overnight</Label>
      </div>
     </RadioGroup>
    </div>

    <button
     type="submit"
     className="w-full bg-primary text-primary-foreground px-4 py-2 rounded-md"
    >
     Add to Cart
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
 * Card-style radio options
 */
export const CardStyle = {
 render: () => {
  const [selected, setSelected] = useState("starter");

  return (
   <RadioGroup
    value={selected}
    onValueChange={setSelected}
    className="space-y-3"
   >
    <div
     className={`relative p-4 border-2 rounded-lg cursor-pointer transition-colors ${
      selected === "starter"
       ? "border-primary bg-primary/5"
       : "border-border hover:border-primary/50"
     }`}
    >
     <div className="flex items-start space-x-3">
      <RadioGroupItem value="starter" id="card-starter" className="mt-1" />
      <div className="flex-1">
       <Label htmlFor="card-starter" className="font-medium cursor-pointer">
        Starter
       </Label>
       <p className="text-sm text-muted-foreground mt-1">
        Perfect for small projects
       </p>
       <p className="text-lg font-bold mt-2">$19/mo</p>
      </div>
     </div>
    </div>

    <div
     className={`relative p-4 border-2 rounded-lg cursor-pointer transition-colors ${
      selected === "professional"
       ? "border-primary bg-primary/5"
       : "border-border hover:border-primary/50"
     }`}
    >
     <div className="flex items-start space-x-3">
      <RadioGroupItem
       value="professional"
       id="card-professional"
       className="mt-1"
      />
      <div className="flex-1">
       <Label
        htmlFor="card-professional"
        className="font-medium cursor-pointer"
       >
        Professional
       </Label>
       <p className="text-sm text-muted-foreground mt-1">
        For growing businesses
       </p>
       <p className="text-lg font-bold mt-2">$49/mo</p>
      </div>
     </div>
    </div>

    <div
     className={`relative p-4 border-2 rounded-lg cursor-pointer transition-colors ${
      selected === "enterprise"
       ? "border-primary bg-primary/5"
       : "border-border hover:border-primary/50"
     }`}
    >
     <div className="flex items-start space-x-3">
      <RadioGroupItem
       value="enterprise"
       id="card-enterprise"
       className="mt-1"
      />
      <div className="flex-1">
       <Label htmlFor="card-enterprise" className="font-medium cursor-pointer">
        Enterprise
       </Label>
       <p className="text-sm text-muted-foreground mt-1">
        For large organizations
       </p>
       <p className="text-lg font-bold mt-2">$99/mo</p>
      </div>
     </div>
    </div>
   </RadioGroup>
  );
 },
};
