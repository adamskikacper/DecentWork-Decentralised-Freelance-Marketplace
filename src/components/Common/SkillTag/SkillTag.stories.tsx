import type { Meta, StoryObj } from "@storybook/react";
import { SkillTag } from "./index";

/**
 * SkillTag is a component used to display skills as tags.
 * It supports different sizes and can be clickable.
 */
const meta = {
 title: "Common/SkillTag",
 component: SkillTag,
 parameters: {
  layout: "centered",
 },
 argTypes: {
  skill: {
   control: "text",
   description: "The skill text to display in the tag",
  },
  size: {
   control: { type: "select" },
   options: ["sm", "md", "lg"],
   description: "The size of the skill tag",
  },
  className: {
   control: "text",
   description: "Additional CSS classes to apply",
  },
  onClick: {
   action: "clicked",
   description: "Function called when the tag is clicked",
  },
 },
 tags: ["autodocs"],
} satisfies Meta<typeof SkillTag>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Default medium-sized skill tag
 */
export const Default: Story = {
 args: {
  skill: "React",
  size: "md",
 },
};

/**
 * Small-sized skill tag
 */
export const Small: Story = {
 args: {
  skill: "TypeScript",
  size: "sm",
 },
};

/**
 * Large-sized skill tag
 */
export const Large: Story = {
 args: {
  skill: "Blockchain",
  size: "lg",
 },
};

/**
 * Clickable skill tag with hover effect
 */
export const Clickable: Story = {
 args: {
  skill: "Smart Contracts",
  size: "md",
  onClick: () => console.log("Skill tag clicked"),
 },
};

/**
 * Skill tag with custom styling
 */
export const CustomStyling: Story = {
 args: {
  skill: "Solidity",
  size: "md",
  className: "bg-primary text-primary-foreground",
 },
};

/**
 * Multiple skill tags displayed together
 */
export const SkillTagGroup = {
 render: () => (
  <div className="flex flex-wrap gap-2">
   <SkillTag skill="React" size="md" />
   <SkillTag skill="TypeScript" size="md" />
   <SkillTag skill="Solidity" size="md" />
   <SkillTag skill="Web3" size="md" />
   <SkillTag skill="Smart Contracts" size="md" />
  </div>
 ),
};
