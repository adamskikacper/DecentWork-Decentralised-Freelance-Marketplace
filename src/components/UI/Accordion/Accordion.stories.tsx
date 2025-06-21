import type { Meta, StoryObj } from "@storybook/react";
import {
 Accordion,
 AccordionContent,
 AccordionItem,
 AccordionTrigger,
} from "./index";
import { Badge } from "../Badge";
import { Button } from "../Button";
import {
 ChevronDown,
 HelpCircle,
 Settings,
 User,
 CreditCard,
 Shield,
 Bell,
 Globe,
} from "lucide-react";

/**
 * Accordion component provides collapsible content sections.
 * Built on Radix UI Accordion primitive with smooth animations.
 */
const meta = {
 title: "UI/Accordion",
 component: Accordion,
 parameters: {
  layout: "centered",
 },
 tags: ["autodocs"],
} satisfies Meta<typeof Accordion>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Basic accordion
 */
export const Basic: Story = {
 render: () => (
  <Accordion type="single" collapsible className="w-full max-w-md">
   <AccordionItem value="item-1">
    <AccordionTrigger>Is it accessible?</AccordionTrigger>
    <AccordionContent>
     Yes. It adheres to the WAI-ARIA design pattern and uses semantic HTML.
    </AccordionContent>
   </AccordionItem>
   <AccordionItem value="item-2">
    <AccordionTrigger>Is it styled?</AccordionTrigger>
    <AccordionContent>
     Yes. It comes with default styles that matches the other components'
     aesthetic.
    </AccordionContent>
   </AccordionItem>
   <AccordionItem value="item-3">
    <AccordionTrigger>Is it animated?</AccordionTrigger>
    <AccordionContent>
     Yes. It's animated by default, but you can disable it if you prefer.
    </AccordionContent>
   </AccordionItem>
  </Accordion>
 ),
};

/**
 * Multiple items open
 */
export const Multiple = {
 render: () => (
  <Accordion type="multiple" className="w-full max-w-md">
   <AccordionItem value="item-1">
    <AccordionTrigger>Getting Started</AccordionTrigger>
    <AccordionContent>
     Learn the basics of our platform and how to get up and running quickly.
     This section covers installation, setup, and your first project.
    </AccordionContent>
   </AccordionItem>
   <AccordionItem value="item-2">
    <AccordionTrigger>Advanced Features</AccordionTrigger>
    <AccordionContent>
     Explore advanced functionality including custom configurations,
     integrations, and optimization techniques for power users.
    </AccordionContent>
   </AccordionItem>
   <AccordionItem value="item-3">
    <AccordionTrigger>Troubleshooting</AccordionTrigger>
    <AccordionContent>
     Common issues and their solutions. Find answers to frequently encountered
     problems and learn debugging techniques.
    </AccordionContent>
   </AccordionItem>
  </Accordion>
 ),
};

/**
 * FAQ accordion
 */
export const FAQ = {
 render: () => (
  <Accordion type="single" collapsible className="w-full max-w-2xl">
   <AccordionItem value="faq-1">
    <AccordionTrigger className="flex items-center">
     <HelpCircle className="mr-2 h-4 w-4" />
     What payment methods do you accept?
    </AccordionTrigger>
    <AccordionContent>
     We accept all major credit cards (Visa, MasterCard, American Express),
     PayPal, bank transfers, and cryptocurrency payments. All transactions are
     secured with industry-standard encryption.
    </AccordionContent>
   </AccordionItem>

   <AccordionItem value="faq-2">
    <AccordionTrigger className="flex items-center">
     <Shield className="mr-2 h-4 w-4" />
     Is my data secure?
    </AccordionTrigger>
    <AccordionContent>
     Absolutely. We use enterprise-grade security measures including end-to-end
     encryption, regular security audits, and compliance with SOC 2 Type II
     standards. Your data is stored in secure data centers with 24/7 monitoring.
    </AccordionContent>
   </AccordionItem>

   <AccordionItem value="faq-3">
    <AccordionTrigger className="flex items-center">
     <CreditCard className="mr-2 h-4 w-4" />
     Can I cancel my subscription anytime?
    </AccordionTrigger>
    <AccordionContent>
     Yes, you can cancel your subscription at any time from your account
     settings. There are no cancellation fees, and you'll retain access to your
     account until the end of your current billing period.
    </AccordionContent>
   </AccordionItem>

   <AccordionItem value="faq-4">
    <AccordionTrigger className="flex items-center">
     <Globe className="mr-2 h-4 w-4" />
     Do you offer international support?
    </AccordionTrigger>
    <AccordionContent>
     We provide 24/7 customer support in multiple languages and time zones. Our
     platform is available globally with local data centers in North America,
     Europe, and Asia-Pacific regions.
    </AccordionContent>
   </AccordionItem>
  </Accordion>
 ),
};

/**
 * Settings accordion
 */
export const Settings = {
 render: () => (
  <Accordion type="single" collapsible className="w-full max-w-lg">
   <AccordionItem value="account">
    <AccordionTrigger className="flex items-center">
     <User className="mr-2 h-4 w-4" />
     Account Settings
    </AccordionTrigger>
    <AccordionContent className="space-y-4">
     <div className="space-y-2">
      <p className="text-sm font-medium">Profile Information</p>
      <p className="text-sm text-muted-foreground">
       Update your personal information and preferences.
      </p>
      <Button variant="outline" size="sm">
       Edit Profile
      </Button>
     </div>

     <div className="space-y-2">
      <p className="text-sm font-medium">Password & Security</p>
      <p className="text-sm text-muted-foreground">
       Manage your password and two-factor authentication.
      </p>
      <Button variant="outline" size="sm">
       Security Settings
      </Button>
     </div>
    </AccordionContent>
   </AccordionItem>

   <AccordionItem value="notifications">
    <AccordionTrigger className="flex items-center">
     <Bell className="mr-2 h-4 w-4" />
     Notifications
     <Badge variant="secondary" className="ml-auto">
      3 new
     </Badge>
    </AccordionTrigger>
    <AccordionContent className="space-y-4">
     <div className="flex items-center justify-between">
      <div>
       <p className="text-sm font-medium">Email Notifications</p>
       <p className="text-xs text-muted-foreground">
        Receive updates via email
       </p>
      </div>
      <input type="checkbox" defaultChecked />
     </div>

     <div className="flex items-center justify-between">
      <div>
       <p className="text-sm font-medium">Push Notifications</p>
       <p className="text-xs text-muted-foreground">
        Browser and mobile notifications
       </p>
      </div>
      <input type="checkbox" />
     </div>

     <div className="flex items-center justify-between">
      <div>
       <p className="text-sm font-medium">Marketing Updates</p>
       <p className="text-xs text-muted-foreground">Product news and offers</p>
      </div>
      <input type="checkbox" defaultChecked />
     </div>
    </AccordionContent>
   </AccordionItem>

   <AccordionItem value="billing">
    <AccordionTrigger className="flex items-center">
     <CreditCard className="mr-2 h-4 w-4" />
     Billing & Subscription
    </AccordionTrigger>
    <AccordionContent className="space-y-4">
     <div className="flex items-center justify-between p-3 border rounded-lg">
      <div>
       <p className="text-sm font-medium">Pro Plan</p>
       <p className="text-xs text-muted-foreground">$29/month</p>
      </div>
      <Badge>Active</Badge>
     </div>

     <div className="space-y-2">
      <p className="text-sm font-medium">Payment Method</p>
      <div className="flex items-center space-x-2 text-sm">
       <CreditCard className="h-4 w-4" />
       <span>•••• •••• •••• 4242</span>
      </div>
     </div>

     <div className="flex space-x-2">
      <Button variant="outline" size="sm">
       Change Plan
      </Button>
      <Button variant="outline" size="sm">
       Update Payment
      </Button>
     </div>
    </AccordionContent>
   </AccordionItem>

   <AccordionItem value="preferences">
    <AccordionTrigger className="flex items-center">
     <Settings className="mr-2 h-4 w-4" />
     Preferences
    </AccordionTrigger>
    <AccordionContent className="space-y-4">
     <div className="space-y-2">
      <p className="text-sm font-medium">Language</p>
      <select className="w-full p-2 border rounded-md text-sm">
       <option>English</option>
       <option>Spanish</option>
       <option>French</option>
       <option>German</option>
      </select>
     </div>

     <div className="space-y-2">
      <p className="text-sm font-medium">Theme</p>
      <select className="w-full p-2 border rounded-md text-sm">
       <option>Light</option>
       <option>Dark</option>
       <option>System</option>
      </select>
     </div>

     <div className="space-y-2">
      <p className="text-sm font-medium">Timezone</p>
      <select className="w-full p-2 border rounded-md text-sm">
       <option>UTC-8 (Pacific)</option>
       <option>UTC-5 (Eastern)</option>
       <option>UTC+0 (GMT)</option>
       <option>UTC+1 (CET)</option>
      </select>
     </div>
    </AccordionContent>
   </AccordionItem>
  </Accordion>
 ),
};

/**
 * Product features accordion
 */
export const ProductFeatures = {
 render: () => (
  <Accordion type="single" collapsible className="w-full max-w-2xl">
   <AccordionItem value="feature-1">
    <AccordionTrigger>
     <div className="flex items-center justify-between w-full">
      <span>Advanced Analytics</span>
      <Badge variant="outline" className="mr-4">
       Pro
      </Badge>
     </div>
    </AccordionTrigger>
    <AccordionContent>
     <div className="space-y-3">
      <p>
       Get detailed insights into your data with our advanced analytics suite.
       Track key metrics, create custom dashboards, and generate automated
       reports.
      </p>
      <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
       <li>Real-time data visualization</li>
       <li>Custom dashboard creation</li>
       <li>Automated report generation</li>
       <li>Data export capabilities</li>
      </ul>
      <Button size="sm">Learn More</Button>
     </div>
    </AccordionContent>
   </AccordionItem>

   <AccordionItem value="feature-2">
    <AccordionTrigger>
     <div className="flex items-center justify-between w-full">
      <span>Team Collaboration</span>
      <Badge variant="outline" className="mr-4">
       All Plans
      </Badge>
     </div>
    </AccordionTrigger>
    <AccordionContent>
     <div className="space-y-3">
      <p>
       Work together seamlessly with built-in collaboration tools. Share
       projects, leave comments, and track changes in real-time.
      </p>
      <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
       <li>Real-time collaboration</li>
       <li>Comment and review system</li>
       <li>Version control</li>
       <li>Team permissions</li>
      </ul>
      <Button size="sm">Get Started</Button>
     </div>
    </AccordionContent>
   </AccordionItem>

   <AccordionItem value="feature-3">
    <AccordionTrigger>
     <div className="flex items-center justify-between w-full">
      <span>API Integration</span>
      <Badge variant="outline" className="mr-4">
       Enterprise
      </Badge>
     </div>
    </AccordionTrigger>
    <AccordionContent>
     <div className="space-y-3">
      <p>
       Connect with your existing tools and workflows using our comprehensive
       API. Build custom integrations and automate your processes.
      </p>
      <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
       <li>RESTful API endpoints</li>
       <li>Webhook support</li>
       <li>SDK libraries</li>
       <li>Developer documentation</li>
      </ul>
      <Button size="sm">View API Docs</Button>
     </div>
    </AccordionContent>
   </AccordionItem>
  </Accordion>
 ),
};

/**
 * Compact accordion
 */
export const Compact = {
 render: () => (
  <Accordion type="single" collapsible className="w-full max-w-sm">
   <AccordionItem value="item-1" className="border-b">
    <AccordionTrigger className="py-2 text-sm">Quick Start</AccordionTrigger>
    <AccordionContent className="text-sm">
     Get up and running in under 5 minutes.
    </AccordionContent>
   </AccordionItem>

   <AccordionItem value="item-2" className="border-b">
    <AccordionTrigger className="py-2 text-sm">Documentation</AccordionTrigger>
    <AccordionContent className="text-sm">
     Comprehensive guides and API reference.
    </AccordionContent>
   </AccordionItem>

   <AccordionItem value="item-3" className="border-b">
    <AccordionTrigger className="py-2 text-sm">Support</AccordionTrigger>
    <AccordionContent className="text-sm">
     24/7 customer support and community forum.
    </AccordionContent>
   </AccordionItem>
  </Accordion>
 ),
};
