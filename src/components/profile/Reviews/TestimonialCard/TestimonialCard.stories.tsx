import type { Meta, StoryObj } from "@storybook/react";
import TestimonialCard from "./index";

/**
 * TestimonialCard is a component used to display user testimonials and reviews.
 * It shows a rating, review text, and information about the reviewer.
 */
const meta = {
 title: "Profile/Reviews/TestimonialCard",
 component: TestimonialCard,
 parameters: {
  layout: "centered",
 },
 argTypes: {
  rating: {
   control: { type: "number", min: 1, max: 5, step: 0.1 },
   description: "Rating value (1-5)",
  },
  text: {
   control: "text",
   description: "Testimonial text content",
  },
  authorInitial: {
   control: "text",
   description: "Initial letter(s) of the author's name",
  },
  authorName: {
   control: "text",
   description: "Full name of the author",
  },
  authorRole: {
   control: "text",
   description: "Role or title of the author",
  },
 },
 tags: ["autodocs"],
} satisfies Meta<typeof TestimonialCard>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Default testimonial card with 5-star rating
 */
export const Default: Story = {
 args: {
  rating: 5.0,
  text:
   "DecentWork transformed how I hire blockchain developers. The smart contract escrow system gives me peace of mind for every job.",
  authorInitial: "J",
  authorName: "James Chen",
  authorRole: "DeFi Project Founder",
 },
};

/**
 * Testimonial with a 4.5 star rating
 */
export const PartialRating: Story = {
 args: {
  rating: 4.5,
  text:
   "Great platform for finding quality blockchain work. The payment system is seamless and secure.",
  authorInitial: "S",
  authorName: "Sarah Johnson",
  authorRole: "Startup CEO",
 },
};

/**
 * Testimonial with a long review text
 */
export const LongReview: Story = {
 args: {
  rating: 5.0,
  text:
   "I've been using this platform for over a year now, and it has completely changed how I find and manage freelance work. The blockchain-based payment system ensures I always get paid on time, and the smart contract escrow gives both me and my clients peace of mind. The quality of clients on this platform is also much higher than what I've found elsewhere.",
  authorInitial: "M",
  authorName: "Michael Rodriguez",
  authorRole: "Blockchain Developer",
 },
};

/**
 * Testimonial with a lower rating
 */
export const LowerRating: Story = {
 args: {
  rating: 3.8,
  text:
   "Good platform overall. Some features could be improved, but the payment system works well and the job quality is decent.",
  authorInitial: "A",
  authorName: "Aisha Patel",
  authorRole: "UI/UX Designer",
 },
};

/**
 * Multiple testimonial cards displayed in a row
 */
export const TestimonialRow: Story = {
 args: {
  rating: 5.0,
  text: "Example testimonial for the row layout",
  authorInitial: "E",
  authorName: "Example User",
  authorRole: "Example Role",
 },
 render: () => (
  <div className="flex overflow-x-auto gap-6 pb-6 max-w-4xl">
   <TestimonialCard
    rating={5.0}
    text="DecentWork transformed how I hire blockchain developers. The smart contract escrow system gives me peace of mind for every job."
    authorInitial="J"
    authorName="James Chen"
    authorRole="DeFi Project Founder"
   />
   <TestimonialCard
    rating={4.8}
    text="As a freelance smart contract developer, getting paid has never been easier. Instant payments directly to my wallet make this platform stand out."
    authorInitial="A"
    authorName="Aisha Johnson"
    authorRole="Solidity Developer"
   />
   <TestimonialCard
    rating={4.9}
    text="The quality of talent on this platform is exceptional. I've hired multiple blockchain developers and designers with great results."
    authorInitial="R"
    authorName="Robert Kim"
    authorRole="NFT Marketplace Owner"
   />
  </div>
 ),
};
