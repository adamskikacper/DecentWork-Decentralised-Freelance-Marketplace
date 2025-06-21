import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { Button } from "../Button";
import { Badge } from "../Badge";
import { Separator } from "../Separator";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "./index";

const meta: Meta<typeof Collapsible> = {
 title: "UI/Collapsible",
 component: Collapsible,
 parameters: {
  layout: "centered",
  docs: {
   description: {
    component:
     "A collapsible component that can expand and collapse content. Perfect for FAQ sections, navigation menus, and content organization.",
   },
  },
 },
 tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Collapsible>;

/**
 * Basic collapsible with simple content
 */
export const Default: Story = {
 render: () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
   <Collapsible open={isOpen} onOpenChange={setIsOpen} className="w-80">
    <CollapsibleTrigger asChild>
     <Button variant="outline" className="w-full justify-between">
      Can I use this component?
      <span
       className={`transform transition-transform ${
        isOpen ? "rotate-180" : ""
       }`}
      >
       ▼
      </span>
     </Button>
    </CollapsibleTrigger>
    <CollapsibleContent className="mt-2 p-4 border rounded-md">
     <p className="text-sm text-gray-600">
      Yes! This component is built using Radix UI primitives.
     </p>
    </CollapsibleContent>
   </Collapsible>
  );
 },
};

/**
 * FAQ section with multiple collapsibles
 */
export const FAQ: Story = {
 render: () => {
  const [openItems, setOpenItems] = useState<string[]>([]);

  const toggleItem = (item: string) => {
   setOpenItems((prev) =>
    prev.includes(item) ? prev.filter((i) => i !== item) : [...prev, item]
   );
  };

  const faqs = [
   {
    id: "faq1",
    question: "What is this component library?",
    answer:
     "This is a collection of reusable UI components built with React, TypeScript, and Tailwind CSS. It provides a comprehensive set of accessible components for building modern web applications.",
   },
   {
    id: "faq2",
    question: "How do I install and use it?",
    answer:
     "You can install the components via npm or copy the source code directly. Each component comes with detailed documentation and examples to help you get started quickly.",
   },
   {
    id: "faq3",
    question: "Is it accessible?",
    answer:
     "Yes! All components are built with accessibility in mind, following WAI-ARIA guidelines and best practices. They work well with screen readers and keyboard navigation.",
   },
   {
    id: "faq4",
    question: "Can I customize the styling?",
    answer:
     "Absolutely! The components are built with Tailwind CSS and can be easily customized. You can override styles, change colors, and modify the design to match your brand.",
   },
  ];

  return (
   <div className="w-96 space-y-2">
    <h3 className="text-lg font-semibold mb-4">Frequently Asked Questions</h3>
    {faqs.map((faq) => (
     <Collapsible
      key={faq.id}
      open={openItems.includes(faq.id)}
      onOpenChange={() => toggleItem(faq.id)}
     >
      <CollapsibleTrigger asChild>
       <Button
        variant="ghost"
        className="w-full justify-between p-4 h-auto text-left border rounded-md hover:bg-gray-50"
       >
        <span className="font-medium">{faq.question}</span>
        <span
         className={`transform transition-transform ${
          openItems.includes(faq.id) ? "rotate-180" : ""
         }`}
        >
         ▼
        </span>
       </Button>
      </CollapsibleTrigger>
      <CollapsibleContent className="px-4 pb-4">
       <p className="text-sm text-gray-600">{faq.answer}</p>
      </CollapsibleContent>
     </Collapsible>
    ))}
   </div>
  );
 },
};

/**
 * Navigation menu with collapsible sections
 */
export const NavigationMenu: Story = {
 render: () => {
  const [openSections, setOpenSections] = useState<string[]>(["dashboard"]);

  const toggleSection = (section: string) => {
   setOpenSections((prev) =>
    prev.includes(section)
     ? prev.filter((s) => s !== section)
     : [...prev, section]
   );
  };

  const menuSections = [
   {
    id: "dashboard",
    title: "Dashboard",
    icon: "📊",
    items: ["Overview", "Analytics", "Reports", "Real-time"],
   },
   {
    id: "projects",
    title: "Projects",
    icon: "📁",
    items: ["All Projects", "Active", "Completed", "Archived"],
   },
   {
    id: "team",
    title: "Team",
    icon: "👥",
    items: ["Members", "Roles", "Permissions", "Invitations"],
   },
   {
    id: "settings",
    title: "Settings",
    icon: "⚙️",
    items: ["General", "Security", "Billing", "Integrations"],
   },
  ];

  return (
   <div className="w-64 bg-gray-50 p-4 rounded-lg">
    <h3 className="text-sm font-semibold text-gray-900 mb-4">Navigation</h3>
    <div className="space-y-1">
     {menuSections.map((section) => (
      <Collapsible
       key={section.id}
       open={openSections.includes(section.id)}
       onOpenChange={() => toggleSection(section.id)}
      >
       <CollapsibleTrigger asChild>
        <Button
         variant="ghost"
         className="w-full justify-between p-2 h-auto text-left"
        >
         <div className="flex items-center space-x-2">
          <span>{section.icon}</span>
          <span className="text-sm">{section.title}</span>
         </div>
         <span
          className={`transform transition-transform text-xs ${
           openSections.includes(section.id) ? "rotate-180" : ""
          }`}
         >
          ▼
         </span>
        </Button>
       </CollapsibleTrigger>
       <CollapsibleContent className="ml-6 mt-1">
        <div className="space-y-1">
         {section.items.map((item) => (
          <Button
           key={item}
           variant="ghost"
           className="w-full justify-start p-2 h-auto text-xs text-gray-600 hover:text-gray-900"
          >
           {item}
          </Button>
         ))}
        </div>
       </CollapsibleContent>
      </Collapsible>
     ))}
    </div>
   </div>
  );
 },
};

/**
 * Product features with collapsible details
 */
export const ProductFeatures: Story = {
 render: () => {
  const [openFeatures, setOpenFeatures] = useState<string[]>([]);

  const toggleFeature = (feature: string) => {
   setOpenFeatures((prev) =>
    prev.includes(feature)
     ? prev.filter((f) => f !== feature)
     : [...prev, feature]
   );
  };

  const features = [
   {
    id: "authentication",
    title: "Authentication & Security",
    badge: "New",
    description:
     "Comprehensive authentication system with multiple providers and security features.",
    details: [
     "OAuth integration (Google, GitHub, Twitter)",
     "Two-factor authentication (2FA)",
     "Session management",
     "Password encryption",
     "Rate limiting",
     "Security audit logs",
    ],
   },
   {
    id: "analytics",
    title: "Advanced Analytics",
    badge: "Popular",
    description:
     "Real-time analytics and reporting tools for your application.",
    details: [
     "Real-time user tracking",
     "Custom event tracking",
     "Conversion funnels",
     "A/B testing framework",
     "Performance monitoring",
     "Custom dashboards",
    ],
   },
   {
    id: "collaboration",
    title: "Team Collaboration",
    badge: "Pro",
    description: "Tools for team collaboration and project management.",
    details: [
     "Real-time collaboration",
     "Comment system",
     "Task management",
     "File sharing",
     "Version control",
     "Team permissions",
    ],
   },
  ];

  return (
   <div className="w-96 space-y-4">
    <h3 className="text-lg font-semibold mb-4">Product Features</h3>
    {features.map((feature) => (
     <Collapsible
      key={feature.id}
      open={openFeatures.includes(feature.id)}
      onOpenChange={() => toggleFeature(feature.id)}
      className="border rounded-lg"
     >
      <CollapsibleTrigger asChild>
       <Button
        variant="ghost"
        className="w-full justify-between p-4 h-auto text-left"
       >
        <div className="space-y-1">
         <div className="flex items-center space-x-2">
          <span className="font-medium">{feature.title}</span>
          <Badge
           variant={
            feature.badge === "New"
             ? "default"
             : feature.badge === "Popular"
             ? "secondary"
             : "outline"
           }
           className="text-xs"
          >
           {feature.badge}
          </Badge>
         </div>
         <p className="text-sm text-gray-600">{feature.description}</p>
        </div>
        <span
         className={`transform transition-transform ${
          openFeatures.includes(feature.id) ? "rotate-180" : ""
         }`}
        >
         ▼
        </span>
       </Button>
      </CollapsibleTrigger>
      <CollapsibleContent>
       <Separator />
       <div className="p-4">
        <h4 className="text-sm font-medium mb-2">What's included:</h4>
        <ul className="space-y-1">
         {feature.details.map((detail, index) => (
          <li key={index} className="text-sm text-gray-600 flex items-start">
           <span className="text-green-500 mr-2">✓</span>
           {detail}
          </li>
         ))}
        </ul>
       </div>
      </CollapsibleContent>
     </Collapsible>
    ))}
   </div>
  );
 },
};

/**
 * Settings panel with collapsible sections
 */
export const SettingsPanel: Story = {
 render: () => {
  const [openSections, setOpenSections] = useState<string[]>(["account"]);

  const toggleSection = (section: string) => {
   setOpenSections((prev) =>
    prev.includes(section)
     ? prev.filter((s) => s !== section)
     : [...prev, section]
   );
  };

  return (
   <div className="w-96 space-y-2">
    <h3 className="text-lg font-semibold mb-4">Settings</h3>

    <Collapsible
     open={openSections.includes("account")}
     onOpenChange={() => toggleSection("account")}
     className="border rounded-lg"
    >
     <CollapsibleTrigger asChild>
      <Button
       variant="ghost"
       className="w-full justify-between p-4 h-auto text-left"
      >
       <div className="flex items-center space-x-2">
        <span>👤</span>
        <span className="font-medium">Account Settings</span>
       </div>
       <span
        className={`transform transition-transform ${
         openSections.includes("account") ? "rotate-180" : ""
        }`}
       >
        ▼
       </span>
      </Button>
     </CollapsibleTrigger>
     <CollapsibleContent>
      <Separator />
      <div className="p-4 space-y-3">
       <div className="flex items-center justify-between">
        <span className="text-sm">Email notifications</span>
        <Button size="sm" variant="outline">
         Configure
        </Button>
       </div>
       <div className="flex items-center justify-between">
        <span className="text-sm">Two-factor authentication</span>
        <Badge variant="secondary">Enabled</Badge>
       </div>
       <div className="flex items-center justify-between">
        <span className="text-sm">Profile visibility</span>
        <Button size="sm" variant="outline">
         Public
        </Button>
       </div>
      </div>
     </CollapsibleContent>
    </Collapsible>

    <Collapsible
     open={openSections.includes("privacy")}
     onOpenChange={() => toggleSection("privacy")}
     className="border rounded-lg"
    >
     <CollapsibleTrigger asChild>
      <Button
       variant="ghost"
       className="w-full justify-between p-4 h-auto text-left"
      >
       <div className="flex items-center space-x-2">
        <span>🔒</span>
        <span className="font-medium">Privacy & Security</span>
       </div>
       <span
        className={`transform transition-transform ${
         openSections.includes("privacy") ? "rotate-180" : ""
        }`}
       >
        ▼
       </span>
      </Button>
     </CollapsibleTrigger>
     <CollapsibleContent>
      <Separator />
      <div className="p-4 space-y-3">
       <div className="flex items-center justify-between">
        <span className="text-sm">Data sharing</span>
        <Button size="sm" variant="outline">
         Manage
        </Button>
       </div>
       <div className="flex items-center justify-between">
        <span className="text-sm">Activity tracking</span>
        <Badge variant="outline">Disabled</Badge>
       </div>
       <div className="flex items-center justify-between">
        <span className="text-sm">Cookie preferences</span>
        <Button size="sm" variant="outline">
         Update
        </Button>
       </div>
      </div>
     </CollapsibleContent>
    </Collapsible>

    <Collapsible
     open={openSections.includes("billing")}
     onOpenChange={() => toggleSection("billing")}
     className="border rounded-lg"
    >
     <CollapsibleTrigger asChild>
      <Button
       variant="ghost"
       className="w-full justify-between p-4 h-auto text-left"
      >
       <div className="flex items-center space-x-2">
        <span>💳</span>
        <span className="font-medium">Billing & Subscription</span>
       </div>
       <span
        className={`transform transition-transform ${
         openSections.includes("billing") ? "rotate-180" : ""
        }`}
       >
        ▼
       </span>
      </Button>
     </CollapsibleTrigger>
     <CollapsibleContent>
      <Separator />
      <div className="p-4 space-y-3">
       <div className="flex items-center justify-between">
        <span className="text-sm">Current plan</span>
        <Badge>Pro Plan</Badge>
       </div>
       <div className="flex items-center justify-between">
        <span className="text-sm">Payment method</span>
        <span className="text-sm text-gray-600">•••• 4242</span>
       </div>
       <div className="flex items-center justify-between">
        <span className="text-sm">Next billing date</span>
        <span className="text-sm text-gray-600">Jan 15, 2024</span>
       </div>
      </div>
     </CollapsibleContent>
    </Collapsible>
   </div>
  );
 },
};

/**
 * Simple content sections
 */
export const ContentSections: Story = {
 render: () => {
  const [openSections, setOpenSections] = useState<string[]>(["intro"]);

  const toggleSection = (section: string) => {
   setOpenSections((prev) =>
    prev.includes(section)
     ? prev.filter((s) => s !== section)
     : [...prev, section]
   );
  };

  return (
   <div className="w-96 space-y-4">
    <Collapsible
     open={openSections.includes("intro")}
     onOpenChange={() => toggleSection("intro")}
    >
     <CollapsibleTrigger asChild>
      <Button variant="outline" className="w-full justify-between">
       Introduction
       <span
        className={`transform transition-transform ${
         openSections.includes("intro") ? "rotate-180" : ""
        }`}
       >
        ▼
       </span>
      </Button>
     </CollapsibleTrigger>
     <CollapsibleContent className="mt-2 p-4 border rounded-md">
      <p className="text-sm text-gray-600">
       Welcome to our component library! This section provides an overview of
       what you'll find and how to get started with building amazing user
       interfaces.
      </p>
     </CollapsibleContent>
    </Collapsible>

    <Collapsible
     open={openSections.includes("getting-started")}
     onOpenChange={() => toggleSection("getting-started")}
    >
     <CollapsibleTrigger asChild>
      <Button variant="outline" className="w-full justify-between">
       Getting Started
       <span
        className={`transform transition-transform ${
         openSections.includes("getting-started") ? "rotate-180" : ""
        }`}
       >
        ▼
       </span>
      </Button>
     </CollapsibleTrigger>
     <CollapsibleContent className="mt-2 p-4 border rounded-md">
      <div className="space-y-2 text-sm text-gray-600">
       <p>Follow these steps to get started:</p>
       <ol className="list-decimal list-inside space-y-1">
        <li>Install the required dependencies</li>
        <li>Import the components you need</li>
        <li>Customize the styling to match your design</li>
        <li>Start building your application</li>
       </ol>
      </div>
     </CollapsibleContent>
    </Collapsible>

    <Collapsible
     open={openSections.includes("examples")}
     onOpenChange={() => toggleSection("examples")}
    >
     <CollapsibleTrigger asChild>
      <Button variant="outline" className="w-full justify-between">
       Examples & Demos
       <span
        className={`transform transition-transform ${
         openSections.includes("examples") ? "rotate-180" : ""
        }`}
       >
        ▼
       </span>
      </Button>
     </CollapsibleTrigger>
     <CollapsibleContent className="mt-2 p-4 border rounded-md">
      <p className="text-sm text-gray-600">
       Explore our collection of examples and interactive demos to see the
       components in action. Each example includes the source code and
       implementation details.
      </p>
     </CollapsibleContent>
    </Collapsible>
   </div>
  );
 },
};
