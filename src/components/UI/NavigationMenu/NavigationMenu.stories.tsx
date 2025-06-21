import type { Meta, StoryObj } from "@storybook/react";
import {
 NavigationMenu,
 NavigationMenuContent,
 NavigationMenuItem,
 NavigationMenuLink,
 NavigationMenuList,
 NavigationMenuTrigger,
 navigationMenuTriggerStyle,
} from "./index";
import { cn } from "@/lib/utils";
import React from "react";
import {
 Card,
 CardContent,
 CardDescription,
 CardHeader,
 CardTitle,
} from "../Card";
import { Badge } from "../Badge";
import { Button } from "../Button";
import {
 ChevronDown,
 User,
 Settings,
 Bell,
 Search,
 ShoppingCart,
 Heart,
 Star,
 Code,
 Palette,
 Zap,
 Shield,
} from "lucide-react";

/**
 * NavigationMenu component provides accessible navigation with dropdowns and mega menus.
 * Built on Radix UI Navigation Menu primitive.
 */
const meta = {
 title: "UI/NavigationMenu",
 component: NavigationMenu,
 parameters: {
  layout: "centered",
 },
 tags: ["autodocs"],
} satisfies Meta<typeof NavigationMenu>;

export default meta;
type Story = StoryObj<typeof meta>;

// Helper component for styled navigation links
const ListItem = React.forwardRef<
 React.ElementRef<"a">,
 React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
 return (
  <li>
   <NavigationMenuLink asChild>
    <a
     ref={ref}
     className={cn(
      "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
      className
     )}
     {...props}
    >
     <div className="text-sm font-medium leading-none">{title}</div>
     <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
      {children}
     </p>
    </a>
   </NavigationMenuLink>
  </li>
 );
});
ListItem.displayName = "ListItem";

/**
 * Basic navigation menu
 */
export const Basic: Story = {
 render: () => (
  <NavigationMenu>
   <NavigationMenuList>
    <NavigationMenuItem>
     <NavigationMenuLink className={navigationMenuTriggerStyle()}>
      Home
     </NavigationMenuLink>
    </NavigationMenuItem>
    <NavigationMenuItem>
     <NavigationMenuLink className={navigationMenuTriggerStyle()}>
      About
     </NavigationMenuLink>
    </NavigationMenuItem>
    <NavigationMenuItem>
     <NavigationMenuLink className={navigationMenuTriggerStyle()}>
      Services
     </NavigationMenuLink>
    </NavigationMenuItem>
    <NavigationMenuItem>
     <NavigationMenuLink className={navigationMenuTriggerStyle()}>
      Contact
     </NavigationMenuLink>
    </NavigationMenuItem>
   </NavigationMenuList>
  </NavigationMenu>
 ),
};

/**
 * Navigation with dropdown menus
 */
export const WithDropdowns = {
 render: () => (
  <NavigationMenu>
   <NavigationMenuList>
    <NavigationMenuItem>
     <NavigationMenuTrigger>Products</NavigationMenuTrigger>
     <NavigationMenuContent>
      <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
       <li className="row-span-3">
        <NavigationMenuLink asChild>
         <a
          className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
          href="/"
         >
          <Zap className="h-6 w-6" />
          <div className="mb-2 mt-4 text-lg font-medium">Pro Suite</div>
          <p className="text-sm leading-tight text-muted-foreground">
           Advanced tools for professional developers.
          </p>
         </a>
        </NavigationMenuLink>
       </li>
       <ListItem href="/docs" title="Documentation">
        Learn how to use our products effectively.
       </ListItem>
       <ListItem href="/api" title="API Reference">
        Complete API documentation and examples.
       </ListItem>
       <ListItem href="/templates" title="Templates">
        Pre-built templates to get started quickly.
       </ListItem>
      </ul>
     </NavigationMenuContent>
    </NavigationMenuItem>

    <NavigationMenuItem>
     <NavigationMenuTrigger>Solutions</NavigationMenuTrigger>
     <NavigationMenuContent>
      <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
       <ListItem title="For Developers">
        <Code className="h-4 w-4 mb-2" />
        Tools and APIs for building applications.
       </ListItem>
       <ListItem title="For Designers">
        <Palette className="h-4 w-4 mb-2" />
        Design systems and component libraries.
       </ListItem>
       <ListItem title="For Teams">
        <Shield className="h-4 w-4 mb-2" />
        Collaboration and project management tools.
       </ListItem>
       <ListItem title="Enterprise">
        <Star className="h-4 w-4 mb-2" />
        Scalable solutions for large organizations.
       </ListItem>
      </ul>
     </NavigationMenuContent>
    </NavigationMenuItem>

    <NavigationMenuItem>
     <NavigationMenuLink className={navigationMenuTriggerStyle()}>
      Pricing
     </NavigationMenuLink>
    </NavigationMenuItem>

    <NavigationMenuItem>
     <NavigationMenuLink className={navigationMenuTriggerStyle()}>
      Contact
     </NavigationMenuLink>
    </NavigationMenuItem>
   </NavigationMenuList>
  </NavigationMenu>
 ),
};

/**
 * E-commerce navigation
 */
export const ECommerce = {
 render: () => (
  <NavigationMenu>
   <NavigationMenuList>
    <NavigationMenuItem>
     <NavigationMenuTrigger>Categories</NavigationMenuTrigger>
     <NavigationMenuContent>
      <div className="grid gap-3 p-6 md:w-[400px] lg:w-[600px] lg:grid-cols-2">
       <div className="space-y-3">
        <h4 className="text-sm font-medium">Clothing</h4>
        <ul className="space-y-1 text-sm">
         <li>
          <NavigationMenuLink href="#">Men's Clothing</NavigationMenuLink>
         </li>
         <li>
          <NavigationMenuLink href="#">Women's Clothing</NavigationMenuLink>
         </li>
         <li>
          <NavigationMenuLink href="#">Kids' Clothing</NavigationMenuLink>
         </li>
         <li>
          <NavigationMenuLink href="#">Accessories</NavigationMenuLink>
         </li>
        </ul>
       </div>
       <div className="space-y-3">
        <h4 className="text-sm font-medium">Electronics</h4>
        <ul className="space-y-1 text-sm">
         <li>
          <NavigationMenuLink href="#">Smartphones</NavigationMenuLink>
         </li>
         <li>
          <NavigationMenuLink href="#">Laptops</NavigationMenuLink>
         </li>
         <li>
          <NavigationMenuLink href="#">Headphones</NavigationMenuLink>
         </li>
         <li>
          <NavigationMenuLink href="#">Gaming</NavigationMenuLink>
         </li>
        </ul>
       </div>
      </div>
     </NavigationMenuContent>
    </NavigationMenuItem>

    <NavigationMenuItem>
     <NavigationMenuTrigger>Brands</NavigationMenuTrigger>
     <NavigationMenuContent>
      <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-3">
       <ListItem title="Nike">
        <Badge variant="outline">Popular</Badge>
        <p className="text-xs mt-1">Athletic wear and footwear</p>
       </ListItem>
       <ListItem title="Apple">
        <Badge variant="outline">Tech</Badge>
        <p className="text-xs mt-1">Consumer electronics</p>
       </ListItem>
       <ListItem title="Samsung">
        <Badge variant="outline">Electronics</Badge>
        <p className="text-xs mt-1">Smartphones and appliances</p>
       </ListItem>
      </ul>
     </NavigationMenuContent>
    </NavigationMenuItem>

    <NavigationMenuItem>
     <NavigationMenuLink className={navigationMenuTriggerStyle()}>
      <Heart className="mr-2 h-4 w-4" />
      Wishlist
     </NavigationMenuLink>
    </NavigationMenuItem>

    <NavigationMenuItem>
     <NavigationMenuLink className={navigationMenuTriggerStyle()}>
      <ShoppingCart className="mr-2 h-4 w-4" />
      Cart (3)
     </NavigationMenuLink>
    </NavigationMenuItem>
   </NavigationMenuList>
  </NavigationMenu>
 ),
};

/**
 * Application navigation
 */
export const Application = {
 render: () => (
  <NavigationMenu>
   <NavigationMenuList>
    <NavigationMenuItem>
     <NavigationMenuTrigger>
      <User className="mr-2 h-4 w-4" />
      Account
     </NavigationMenuTrigger>
     <NavigationMenuContent>
      <div className="w-[300px] p-4">
       <div className="flex items-center space-x-4 pb-4 border-b">
        <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-medium">
         JD
        </div>
        <div>
         <p className="font-medium">John Doe</p>
         <p className="text-sm text-muted-foreground">john@example.com</p>
        </div>
       </div>
       <ul className="space-y-1 pt-4">
        <ListItem title="Profile Settings">
         <Settings className="h-4 w-4" />
         Manage your account and preferences
        </ListItem>
        <ListItem title="Notifications">
         <Bell className="h-4 w-4" />
         View and manage notifications
        </ListItem>
        <ListItem title="Billing">
         <ShoppingCart className="h-4 w-4" />
         Subscription and payment details
        </ListItem>
       </ul>
       <div className="pt-4 border-t mt-4">
        <Button variant="outline" className="w-full">
         Sign Out
        </Button>
       </div>
      </div>
     </NavigationMenuContent>
    </NavigationMenuItem>

    <NavigationMenuItem>
     <NavigationMenuTrigger>Workspace</NavigationMenuTrigger>
     <NavigationMenuContent>
      <ul className="grid w-[400px] gap-3 p-4">
       <ListItem title="Dashboard">
        Overview of your projects and activity
       </ListItem>
       <ListItem title="Projects">Manage and organize your projects</ListItem>
       <ListItem title="Team">Collaborate with team members</ListItem>
       <ListItem title="Analytics">
        View performance metrics and insights
       </ListItem>
      </ul>
     </NavigationMenuContent>
    </NavigationMenuItem>

    <NavigationMenuItem>
     <NavigationMenuLink className={navigationMenuTriggerStyle()}>
      <Search className="mr-2 h-4 w-4" />
      Search
     </NavigationMenuLink>
    </NavigationMenuItem>

    <NavigationMenuItem>
     <NavigationMenuLink className={navigationMenuTriggerStyle()}>
      Help
     </NavigationMenuLink>
    </NavigationMenuItem>
   </NavigationMenuList>
  </NavigationMenu>
 ),
};

/**
 * Mega menu with cards
 */
export const MegaMenu = {
 render: () => (
  <NavigationMenu>
   <NavigationMenuList>
    <NavigationMenuItem>
     <NavigationMenuTrigger>Services</NavigationMenuTrigger>
     <NavigationMenuContent>
      <div className="w-[800px] p-6">
       <div className="grid grid-cols-3 gap-6">
        <Card>
         <CardHeader>
          <Code className="h-8 w-8 text-blue-600" />
          <CardTitle className="text-lg">Development</CardTitle>
          <CardDescription>
           Custom software development services
          </CardDescription>
         </CardHeader>
         <CardContent>
          <ul className="space-y-1 text-sm">
           <li>Web Applications</li>
           <li>Mobile Apps</li>
           <li>API Development</li>
          </ul>
         </CardContent>
        </Card>

        <Card>
         <CardHeader>
          <Palette className="h-8 w-8 text-purple-600" />
          <CardTitle className="text-lg">Design</CardTitle>
          <CardDescription>
           User experience and interface design
          </CardDescription>
         </CardHeader>
         <CardContent>
          <ul className="space-y-1 text-sm">
           <li>UI/UX Design</li>
           <li>Brand Identity</li>
           <li>Prototyping</li>
          </ul>
         </CardContent>
        </Card>

        <Card>
         <CardHeader>
          <Shield className="h-8 w-8 text-green-600" />
          <CardTitle className="text-lg">Consulting</CardTitle>
          <CardDescription>Strategic technology consulting</CardDescription>
         </CardHeader>
         <CardContent>
          <ul className="space-y-1 text-sm">
           <li>Architecture Review</li>
           <li>Performance Audit</li>
           <li>Security Assessment</li>
          </ul>
         </CardContent>
        </Card>
       </div>

       <div className="mt-6 pt-6 border-t">
        <div className="flex items-center justify-between">
         <div>
          <h4 className="font-medium">Need custom solutions?</h4>
          <p className="text-sm text-muted-foreground">
           Contact our team for personalized service
          </p>
         </div>
         <Button>Get Started</Button>
        </div>
       </div>
      </div>
     </NavigationMenuContent>
    </NavigationMenuItem>

    <NavigationMenuItem>
     <NavigationMenuLink className={navigationMenuTriggerStyle()}>
      About
     </NavigationMenuLink>
    </NavigationMenuItem>

    <NavigationMenuItem>
     <NavigationMenuLink className={navigationMenuTriggerStyle()}>
      Portfolio
     </NavigationMenuLink>
    </NavigationMenuItem>

    <NavigationMenuItem>
     <NavigationMenuLink className={navigationMenuTriggerStyle()}>
      Contact
     </NavigationMenuLink>
    </NavigationMenuItem>
   </NavigationMenuList>
  </NavigationMenu>
 ),
};

/**
 * Mobile-friendly navigation
 */
export const MobileFriendly = {
 render: () => (
  <NavigationMenu>
   <NavigationMenuList className="flex-col md:flex-row">
    <NavigationMenuItem>
     <NavigationMenuTrigger className="w-full md:w-auto">
      Menu
     </NavigationMenuTrigger>
     <NavigationMenuContent>
      <ul className="grid w-[300px] gap-3 p-4">
       <ListItem title="Home">Return to the homepage</ListItem>
       <ListItem title="Products">Browse our product catalog</ListItem>
       <ListItem title="Services">Learn about our services</ListItem>
       <ListItem title="About">Learn more about our company</ListItem>
       <ListItem title="Contact">Get in touch with us</ListItem>
      </ul>
     </NavigationMenuContent>
    </NavigationMenuItem>
   </NavigationMenuList>
  </NavigationMenu>
 ),
};
