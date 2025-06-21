import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { Slider } from "./index";
import { Label } from "../Label";

/**
 * Slider component provides range input with customizable min, max, and step values.
 * Built on Radix UI Slider primitive with accessibility support.
 */
const meta = {
 title: "UI/Slider",
 component: Slider,
 parameters: {
  layout: "centered",
 },
 argTypes: {
  defaultValue: {
   control: "object",
   description: "Default value array",
  },
  min: {
   control: "number",
   description: "Minimum value",
  },
  max: {
   control: "number",
   description: "Maximum value",
  },
  step: {
   control: "number",
   description: "Step increment",
  },
  disabled: {
   control: "boolean",
   description: "Whether the slider is disabled",
  },
 },
 tags: ["autodocs"],
} satisfies Meta<typeof Slider>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Default slider
 */
export const Default: Story = {
 args: {
  defaultValue: [50],
  max: 100,
  step: 1,
  className: "w-[200px]",
 },
};

/**
 * Range slider
 */
export const Range: Story = {
 args: {
  defaultValue: [25, 75],
  max: 100,
  step: 1,
  className: "w-[200px]",
 },
};

/**
 * With custom range
 */
export const CustomRange: Story = {
 args: {
  defaultValue: [200],
  min: 0,
  max: 1000,
  step: 10,
  className: "w-[200px]",
 },
};

/**
 * Disabled slider
 */
export const Disabled: Story = {
 args: {
  defaultValue: [60],
  max: 100,
  step: 1,
  disabled: true,
  className: "w-[200px]",
 },
};

/**
 * With label and value display
 */
export const WithLabel = {
 render: () => {
  const [value, setValue] = useState([50]);

  return (
   <div className="space-y-4 w-[300px]">
    <div className="flex items-center justify-between">
     <Label>Volume</Label>
     <span className="text-sm text-muted-foreground">{value[0]}%</span>
    </div>
    <Slider value={value} onValueChange={setValue} max={100} step={1} />
   </div>
  );
 },
};

/**
 * Interactive slider
 */
export const Interactive = {
 render: () => {
  const [value, setValue] = useState([33]);

  return (
   <div className="space-y-4 w-[300px]">
    <div className="flex items-center justify-between">
     <Label>Brightness</Label>
     <span className="text-sm font-medium">{value[0]}%</span>
    </div>
    <Slider value={value} onValueChange={setValue} max={100} step={1} />
    <div className="flex justify-between text-xs text-muted-foreground">
     <span>0%</span>
     <span>50%</span>
     <span>100%</span>
    </div>
   </div>
  );
 },
};

/**
 * Price range slider
 */
export const PriceRange = {
 render: () => {
  const [priceRange, setPriceRange] = useState([250, 750]);

  return (
   <div className="space-y-4 w-[300px]">
    <div className="flex items-center justify-between">
     <Label>Price Range</Label>
     <span className="text-sm font-medium">
      ${priceRange[0]} - ${priceRange[1]}
     </span>
    </div>
    <Slider
     value={priceRange}
     onValueChange={setPriceRange}
     min={0}
     max={1000}
     step={25}
    />
    <div className="flex justify-between text-xs text-muted-foreground">
     <span>$0</span>
     <span>$500</span>
     <span>$1000</span>
    </div>
   </div>
  );
 },
};

/**
 * Multiple sliders
 */
export const MultipleSliders = {
 render: () => {
  const [settings, setSettings] = useState({
   volume: [75],
   brightness: [60],
   contrast: [50],
   saturation: [80],
  });

  return (
   <div className="space-y-6 w-[300px]">
    <h3 className="font-medium">Display Settings</h3>

    <div className="space-y-4">
     <div className="space-y-2">
      <div className="flex items-center justify-between">
       <Label>Volume</Label>
       <span className="text-sm text-muted-foreground">
        {settings.volume[0]}%
       </span>
      </div>
      <Slider
       value={settings.volume}
       onValueChange={(value) =>
        setSettings((prev) => ({ ...prev, volume: value }))
       }
       max={100}
       step={1}
      />
     </div>

     <div className="space-y-2">
      <div className="flex items-center justify-between">
       <Label>Brightness</Label>
       <span className="text-sm text-muted-foreground">
        {settings.brightness[0]}%
       </span>
      </div>
      <Slider
       value={settings.brightness}
       onValueChange={(value) =>
        setSettings((prev) => ({ ...prev, brightness: value }))
       }
       max={100}
       step={1}
      />
     </div>

     <div className="space-y-2">
      <div className="flex items-center justify-between">
       <Label>Contrast</Label>
       <span className="text-sm text-muted-foreground">
        {settings.contrast[0]}%
       </span>
      </div>
      <Slider
       value={settings.contrast}
       onValueChange={(value) =>
        setSettings((prev) => ({ ...prev, contrast: value }))
       }
       max={100}
       step={1}
      />
     </div>

     <div className="space-y-2">
      <div className="flex items-center justify-between">
       <Label>Saturation</Label>
       <span className="text-sm text-muted-foreground">
        {settings.saturation[0]}%
       </span>
      </div>
      <Slider
       value={settings.saturation}
       onValueChange={(value) =>
        setSettings((prev) => ({ ...prev, saturation: value }))
       }
       max={100}
       step={1}
      />
     </div>
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
   budget: [500],
   experience: [3],
   teamSize: [2, 8],
   timeline: [6],
  });

  const handleSubmit = (e: React.FormEvent) => {
   e.preventDefault();
   console.log("Form submitted:", formData);
  };

  return (
   <form onSubmit={handleSubmit} className="space-y-6 max-w-md">
    <h3 className="font-medium">Project Requirements</h3>

    <div className="space-y-4">
     <div className="space-y-2">
      <div className="flex items-center justify-between">
       <Label>Budget (USD)</Label>
       <span className="text-sm font-medium">${formData.budget[0]}</span>
      </div>
      <Slider
       value={formData.budget}
       onValueChange={(value) =>
        setFormData((prev) => ({ ...prev, budget: value }))
       }
       min={100}
       max={2000}
       step={50}
      />
      <div className="flex justify-between text-xs text-muted-foreground">
       <span>$100</span>
       <span>$1000</span>
       <span>$2000</span>
      </div>
     </div>

     <div className="space-y-2">
      <div className="flex items-center justify-between">
       <Label>Experience Level</Label>
       <span className="text-sm font-medium">
        {formData.experience[0]} years
       </span>
      </div>
      <Slider
       value={formData.experience}
       onValueChange={(value) =>
        setFormData((prev) => ({ ...prev, experience: value }))
       }
       min={0}
       max={10}
       step={1}
      />
      <div className="flex justify-between text-xs text-muted-foreground">
       <span>0 years</span>
       <span>5 years</span>
       <span>10+ years</span>
      </div>
     </div>

     <div className="space-y-2">
      <div className="flex items-center justify-between">
       <Label>Team Size</Label>
       <span className="text-sm font-medium">
        {formData.teamSize[0]} - {formData.teamSize[1]} people
       </span>
      </div>
      <Slider
       value={formData.teamSize}
       onValueChange={(value) =>
        setFormData((prev) => ({ ...prev, teamSize: value }))
       }
       min={1}
       max={20}
       step={1}
      />
      <div className="flex justify-between text-xs text-muted-foreground">
       <span>1</span>
       <span>10</span>
       <span>20</span>
      </div>
     </div>

     <div className="space-y-2">
      <div className="flex items-center justify-between">
       <Label>Timeline (months)</Label>
       <span className="text-sm font-medium">
        {formData.timeline[0]} months
       </span>
      </div>
      <Slider
       value={formData.timeline}
       onValueChange={(value) =>
        setFormData((prev) => ({ ...prev, timeline: value }))
       }
       min={1}
       max={12}
       step={1}
      />
      <div className="flex justify-between text-xs text-muted-foreground">
       <span>1 month</span>
       <span>6 months</span>
       <span>12 months</span>
      </div>
     </div>
    </div>

    <button
     type="submit"
     className="w-full bg-primary text-primary-foreground px-4 py-2 rounded-md"
    >
     Save Requirements
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
 * Different step sizes
 */
export const StepSizes = {
 render: () => (
  <div className="space-y-6 w-[300px]">
   <div className="space-y-2">
    <Label>Fine Control (step: 1)</Label>
    <Slider defaultValue={[50]} max={100} step={1} />
   </div>

   <div className="space-y-2">
    <Label>Coarse Control (step: 10)</Label>
    <Slider defaultValue={[50]} max={100} step={10} />
   </div>

   <div className="space-y-2">
    <Label>Very Coarse (step: 25)</Label>
    <Slider defaultValue={[50]} max={100} step={25} />
   </div>
  </div>
 ),
};

/**
 * Vertical slider
 */
export const Vertical = {
 render: () => (
  <div className="flex items-center space-x-8 h-[200px]">
   <div className="flex flex-col items-center space-y-2">
    <Label>Volume</Label>
    <Slider
     defaultValue={[75]}
     max={100}
     step={1}
     orientation="vertical"
     className="h-[150px]"
    />
   </div>

   <div className="flex flex-col items-center space-y-2">
    <Label>Bass</Label>
    <Slider
     defaultValue={[50]}
     max={100}
     step={1}
     orientation="vertical"
     className="h-[150px]"
    />
   </div>

   <div className="flex flex-col items-center space-y-2">
    <Label>Treble</Label>
    <Slider
     defaultValue={[60]}
     max={100}
     step={1}
     orientation="vertical"
     className="h-[150px]"
    />
   </div>
  </div>
 ),
};
