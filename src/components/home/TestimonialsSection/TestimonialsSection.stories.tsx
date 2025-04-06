import type { Meta, StoryObj } from "@storybook/react";
import TestimonialsSection from "./index";

/**
 * TestimonialsSection is a component that displays platform statistics and user testimonials.
 * It includes a title, subtitle, stats cards, and testimonial cards.
 */
const meta = {
  title: "Home/TestimonialsSection",
  component: TestimonialsSection,
  parameters: {
    layout: "fullscreen",
  },
  argTypes: {
    title: {
      control: "text",
      description: "Section title",
    },
    subtitle: {
      control: "text",
      description: "Section subtitle",
    },
    stats: {
      control: "object",
      description: "Array of stat objects with value and label",
    },
    testimonials: {
      control: "object",
      description: "Array of testimonial objects",
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof TestimonialsSection>;

export default meta;
type Story = StoryObj<typeof meta>;

const defaultStats = [
  { value: "5,000+", label: "Freelancers", delay: "0s" },
  { value: "1,200+", label: "Clients", delay: "0.1s" },
  { value: "10,000+", label: "Jobs", delay: "0.2s" },
  { value: "$15M+", label: "Paid to Freelancers", delay: "0.3s" },
];

const defaultTestimonials = [
  {
    rating: 5.0,
    text: "DecentWork transformed how I hire blockchain developers. The smart contract escrow system gives me peace of mind for every job.",
    authorInitial: "J",
    authorName: "James Chen",
    authorRole: "DeFi Project Founder",
  },
  {
    rating: 5.0,
    text: "As a freelance smart contract developer, getting paid has never been easier. Instant payments directly to my wallet make this platform stand out.",
    authorInitial: "A",
    authorName: "Aisha Johnson",
    authorRole: "Solidity Developer",
  },
  {
    rating: 4.9,
    text: "The transparency and security of DecentWork has helped me build a thriving freelance business in Web3 design. Highly recommended!",
    authorInitial: "M",
    authorName: "Miguel Santos",
    authorRole: "UI/UX Designer",
  },
  {
    rating: 4.8,
    text: "Found amazing blockchain talent for our startup within days. The quality of professionals on this platform is unmatched in the Web3 space.",
    authorInitial: "S",
    authorName: "Sarah Kim",
    authorRole: "Crypto Startup CEO",
  },
];

/**
 * Default testimonials section with stats and testimonials
 */
export const Default: Story = {
  args: {
    title: "Trusted by Blockchain Professionals",
    subtitle: "Join thousands of freelancers and clients who trust DecentWork for Web3 jobs.",
    stats: defaultStats,
    testimonials: defaultTestimonials,
  },
};

/**
 * Testimonials section with custom title and subtitle
 */
export const CustomHeadings: Story = {
  args: {
    title: "What Our Users Say",
    subtitle: "Hear from the freelancers and clients who use our platform every day.",
    stats: defaultStats,
    testimonials: defaultTestimonials,
  },
};

/**
 * Testimonials section with stats only (no testimonials)
 */
export const StatsOnly: Story = {
  args: {
    title: "Platform Statistics",
    subtitle: "Our growing community of Web3 professionals.",
    stats: defaultStats,
    testimonials: [],
  },
};

/**
 * Testimonials section with testimonials only (no stats)
 */
export const TestimonialsOnly: Story = {
  args: {
    title: "User Testimonials",
    subtitle: "Read what our users have to say about their experience.",
    stats: [],
    testimonials: defaultTestimonials,
  },
};

/**
 * Testimonials section with different stats
 */
export const AlternativeStats: Story = {
  args: {
    title: "Platform Impact",
    subtitle: "Making a difference in the Web3 ecosystem.",
    stats: [
      { value: "30+", label: "Countries", delay: "0s" },
      { value: "95%", label: "Satisfaction Rate", delay: "0.1s" },
      { value: "48 Hours", label: "Average Response Time", delay: "0.2s" },
      { value: "4.8/5", label: "Average Rating", delay: "0.3s" },
    ],
    testimonials: defaultTestimonials,
  },
};

/**
 * Testimonials section on mobile devices
 */
export const Mobile: Story = {
  args: {
    title: "Trusted by Blockchain Professionals",
    subtitle: "Join thousands of freelancers and clients who trust DecentWork for Web3 jobs.",
    stats: defaultStats,
    testimonials: defaultTestimonials,
  },
  parameters: {
    viewport: {
      defaultViewport: "mobile1",
    },
  },
};

/**
 * Testimonials section with dark theme
 */
export const DarkTheme: Story = {
  args: {
    title: "Trusted by Blockchain Professionals",
    subtitle: "Join thousands of freelancers and clients who trust DecentWork for Web3 jobs.",
    stats: defaultStats,
    testimonials: defaultTestimonials,
  },
  parameters: {
    backgrounds: { default: "dark" },
  },
  decorators: [
    (Story) => (
      <div className="dark">
        <Story />
      </div>
    ),
  ],
};
