// App details
export const APP_NAME = "DecentWork";
export const COPYRIGHT_YEAR = "2023";

// Navigation
export const NAV_LINKS = {
 HOME: "/",
 JOBS: "/jobs",
 DASHBOARD: "/dashboard",
 PROFILE: "/profile",
 LOGIN: "/login",
};

export const DASHBOARD_LINKS = {
 HOME: "/dashboard",
 FREELANCERS: "/dashboard/freelancers",
 JOBS: "/dashboard/jobs",
 POST_JOB: "/dashboard/post-job",
 CHATS: "/dashboard/chats",
 CHAT: "/dashboard/chats/:id",
 CONTRACTS: "/dashboard/contracts",
 PROFILE: "/dashboard/profile",
};

// User types
export const USER_TYPES = {
 FREELANCER: "freelancer",
 CLIENT: "client",
};

// Skills data
export const DEFAULT_SKILLS = [
 { value: "ui_design", label: "UI Design" },
 { value: "ux_design", label: "UX Design" },
 { value: "figma", label: "Figma" },
 { value: "responsive_design", label: "Responsive Design" },
 { value: "data_visualization", label: "Data Visualization" },
 { value: "web3", label: "Web3" },
 { value: "blockchain", label: "Blockchain" },
 { value: "smart_contracts", label: "Smart Contracts" },
 { value: "react", label: "React" },
 { value: "typescript", label: "TypeScript" },
];

// Job durations
export const JOB_DURATIONS = [
 { value: "less_than_1_month", label: "Less than 1 month" },
 { value: "1-3_months", label: "1-3 months" },
 { value: "3-6_months", label: "3-6 months" },
 { value: "more_than_6_months", label: "More than 6 months" },
];

// Job types
export const JOB_TYPES = [
 { value: "full_time", label: "Full Time" },
 { value: "part_time", label: "Part Time" },
 { value: "hourly", label: "Hourly" },
 { value: "fixed_price", label: "Fixed Price" },
];

// Experience levels
export const EXPERIENCE_LEVELS = [
 { value: "beginner", label: "Beginner" },
 { value: "intermediate", label: "Intermediate" },
 { value: "expert", label: "Expert" },
];

// Toast messages
export const TOAST_MESSAGES = {
 LOGOUT_SUCCESS: {
  title: "Logged out",
  description: "You have been successfully logged out",
 },
 LOGOUT_ERROR: {
  title: "Error",
  description: "There was a problem logging out.",
  variant: "destructive" as const,
 },
};

// Toast configuration
export const TOAST_CONFIG = {
 LIMIT: 1,
 REMOVE_DELAY: 1000000,
};

// Toast action types
export const TOAST_ACTION_TYPES = {
 ADD_TOAST: "ADD_TOAST",
 UPDATE_TOAST: "UPDATE_TOAST",
 DISMISS_TOAST: "DISMISS_TOAST",
 REMOVE_TOAST: "REMOVE_TOAST",
} as const;

// Status badge variants
export const STATUS_BADGE_VARIANTS = {
 DEFAULT: "default",
 SUCCESS: "success",
 WARNING: "warning",
 DANGER: "danger",
 INFO: "info",
 PENDING: "pending",
};

// Status badge colors
export const STATUS_BADGE_COLORS = {
 SUCCESS: "bg-green-100 text-green-800",
 WARNING: "bg-amber-100 text-amber-800",
 DANGER: "bg-red-100 text-red-800",
 INFO: "bg-blue-100 text-blue-800",
 PENDING: "bg-purple-100 text-purple-800",
 DEFAULT: "bg-secondary text-muted-foreground",
};

// Rating display sizes
export const RATING_SIZES = {
 SM: "sm",
 MD: "md",
 LG: "lg",
} as const;

// Rating display size classes
export const RATING_SIZE_CLASSES = {
 ICON: {
  [RATING_SIZES.SM]: "h-3 w-3",
  [RATING_SIZES.MD]: "h-4 w-4",
  [RATING_SIZES.LG]: "h-5 w-5",
 },
 TEXT: {
  [RATING_SIZES.SM]: "text-xs",
  [RATING_SIZES.MD]: "text-sm",
  [RATING_SIZES.LG]: "text-base",
 },
};

// Features section defaults
export const FEATURES_SECTION_DEFAULTS = {
 TITLE: "Secure, Transparent, and Efficient",
 SUBTITLE: "Why Choose DecentWork",
};

// How it works defaults
export const HOW_IT_WORKS_DEFAULTS = {
 TITLE: "How DecentWork Operates",
 SUBTITLE:
  "Our blockchain-powered platform ensures transparent, secure, and efficient freelance transactions.",
 STEPS: [
  {
   number: 1,
   title: "Post a Job",
   description:
    "Clients create detailed job listings specifying requirements, timeline, and budget for their jobs.",
   link: {
    text: "Browse Jobs →",
    url: "/jobs",
   },
  },
  {
   number: 2,
   title: "Secure Payment",
   description:
    "When a bid is accepted, funds are securely locked in a smart contract escrow until job completion.",
   link: {
    text: "Payment Options →",
    url: "#",
   },
  },
  {
   number: 3,
   title: "Complete & Get Paid",
   description:
    "Submit work for approval and receive instant payment directly to your wallet once accepted.",
   link: {
    text: "Start Earning →",
    url: "/dashboard",
   },
  },
 ],
};

// Footer content
export const FOOTER_CONTENT = {
 PLATFORM_LINKS: [
  { text: "Find Work", url: "/jobs" },
  { text: "Dashboard", url: "/dashboard" },
  { text: "Profile", url: "/profile" },
  { text: "How It Works", url: "#" },
 ],
 RESOURCE_LINKS: [
  { text: "Documentation", url: "#" },
  { text: "Smart Contracts", url: "#" },
  { text: "FAQ", url: "#" },
  { text: "Blog", url: "#" },
 ],
 LEGAL_LINKS: [
  { text: "Privacy Policy", url: "#" },
  { text: "Terms of Service", url: "#" },
  { text: "Cookie Policy", url: "#" },
 ],
 DESCRIPTION:
  "A decentralised freelance marketplace powered by blockchain technology, connecting clients and freelancers worldwide.",
 NEWSLETTER_TEXT: "Subscribe to our newsletter for updates and news.",
};

// Animation delays
export const ANIMATION_DELAYS = {
 FEATURES_CONTENT: "0.3s",
};

// Demo content
export const DEMO_CONTENT = {
 TITLE: "Smart Contract Demo",
 DESCRIPTION:
  "Watch how our secure escrow system works to protect both clients and freelancers.",
};
