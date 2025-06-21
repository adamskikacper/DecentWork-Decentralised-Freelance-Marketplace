import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { CategoryPill } from "./index";

/**
 * CategoryPill is a component used for category selection and filtering.
 * It displays a pill-shaped button that can be toggled between selected and unselected states.
 */
const meta = {
 title: "Common/CategoryPill",
 component: CategoryPill,
 parameters: {
  layout: "centered",
 },
 argTypes: {
  category: {
   control: "text",
   description: "The category text to display in the pill",
  },
  isSelected: {
   control: "boolean",
   description: "Whether the pill is in a selected state",
  },
  onClick: {
   action: "clicked",
   description: "Function called when the pill is clicked",
  },
 },
 tags: ["autodocs"],
} satisfies Meta<typeof CategoryPill>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Default unselected state
 */
export const Default: Story = {
 args: {
  category: "Design",
  isSelected: false,
  onClick: () => console.log("Category pill clicked"),
 },
};

/**
 * Selected state
 */
export const Selected: Story = {
 args: {
  category: "Development",
  isSelected: true,
  onClick: () => console.log("Category pill clicked"),
 },
};

/**
 * Interactive example with state management
 */
export const Interactive = {
 render: () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [selected, setSelected] = useState("Development");

  const categories = ["Design", "Development", "Marketing", "Writing", "Admin"];

  return (
   <div className="flex flex-wrap gap-2">
    {categories.map((category) => (
     <CategoryPill
      key={category}
      category={category}
      isSelected={selected === category}
      onClick={() => setSelected(category)}
     />
    ))}
   </div>
  );
 },
};

/**
 * Multiple category pills displayed together
 */
export const CategoryGroup = {
 render: () => (
  <div className="flex flex-wrap gap-2">
   <CategoryPill
    category="Design"
    isSelected={false}
    onClick={() => console.log("Design clicked")}
   />
   <CategoryPill
    category="Development"
    isSelected={true}
    onClick={() => console.log("Development clicked")}
   />
   <CategoryPill
    category="Marketing"
    isSelected={false}
    onClick={() => console.log("Marketing clicked")}
   />
   <CategoryPill
    category="Writing"
    isSelected={false}
    onClick={() => console.log("Writing clicked")}
   />
  </div>
 ),
};
