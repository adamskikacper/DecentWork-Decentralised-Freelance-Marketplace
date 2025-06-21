import type { Meta, StoryObj } from "@storybook/react";
import { RatingDisplay } from "./index";
import { RATING_SIZES } from "@/constants";

/**
 * RatingDisplay is a component used to display ratings with a star icon.
 * It supports different sizes and can show or hide the numerical rating.
 */
const meta = {
 title: "Common/RatingDisplay",
 component: RatingDisplay,
 parameters: {
  layout: "centered",
 },
 argTypes: {
  rating: {
   control: { type: "number", min: 0, max: 5, step: 0.1 },
   description: "The rating value to display (0-5)",
  },
  showText: {
   control: "boolean",
   description: "Whether to show the numerical rating value",
  },
  size: {
   control: { type: "select" },
   options: Object.values(RATING_SIZES),
   description: "The size of the rating display",
  },
  className: {
   control: "text",
   description: "Additional CSS classes to apply",
  },
 },
 tags: ["autodocs"],
} satisfies Meta<typeof RatingDisplay>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Default medium-sized rating display with text
 */
export const Default: Story = {
 args: {
  rating: 4.5,
  showText: true,
  size: RATING_SIZES.MD,
 },
};

/**
 * Small-sized rating display
 */
export const Small: Story = {
 args: {
  rating: 4.2,
  showText: true,
  size: RATING_SIZES.SM,
 },
};

/**
 * Large-sized rating display
 */
export const Large: Story = {
 args: {
  rating: 4.8,
  showText: true,
  size: RATING_SIZES.LG,
 },
};

/**
 * Rating display without text (icon only)
 */
export const IconOnly: Story = {
 args: {
  rating: 4.5,
  showText: false,
  size: RATING_SIZES.MD,
 },
};

/**
 * Rating display with custom styling
 */
export const CustomStyling: Story = {
 args: {
  rating: 4.7,
  showText: true,
  size: RATING_SIZES.MD,
  className: "bg-primary/10 p-2 rounded-md",
 },
};

/**
 * Multiple rating displays with different values
 */
export const RatingComparison = {
 render: () => (
  <div className="space-y-4">
   <div className="flex items-center gap-2">
    <span className="w-24">Excellent:</span>
    <RatingDisplay rating={5.0} size={RATING_SIZES.MD} />
   </div>
   <div className="flex items-center gap-2">
    <span className="w-24">Very Good:</span>
    <RatingDisplay rating={4.5} size={RATING_SIZES.MD} />
   </div>
   <div className="flex items-center gap-2">
    <span className="w-24">Good:</span>
    <RatingDisplay rating={4.0} size={RATING_SIZES.MD} />
   </div>
   <div className="flex items-center gap-2">
    <span className="w-24">Average:</span>
    <RatingDisplay rating={3.0} size={RATING_SIZES.MD} />
   </div>
   <div className="flex items-center gap-2">
    <span className="w-24">Poor:</span>
    <RatingDisplay rating={2.0} size={RATING_SIZES.MD} />
   </div>
  </div>
 ),
};
