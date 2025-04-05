import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./button";
import {
 Card,
 CardHeader,
 CardFooter,
 CardTitle,
 CardDescription,
 CardContent,
} from "./card";

/**
 * Card component stories showcasing different layouts and use cases
 *
 * Cards are used to group and display content in a way that is easily readable.
 */
const meta = {
 title: "UI/Card",
 component: Card,
 parameters: {
  layout: "centered",
 },
 argTypes: {
  className: {
   control: "text",
   description: "Additional CSS classes to apply to the card",
  },
 },
 tags: ["autodocs"],
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Basic card with header, content, and footer sections
 */
export const Default: Story = {
 render: () => (
  <Card className="w-[350px]">
   <CardHeader>
    <CardTitle>Card Title</CardTitle>
    <CardDescription>Card Description</CardDescription>
   </CardHeader>
   <CardContent>
    <p>Card Content</p>
   </CardContent>
   <CardFooter>
    <p>Card Footer</p>
   </CardFooter>
  </Card>
 ),
};

/**
 * Card component used as a form container
 */
export const WithForm: Story = {
 render: () => (
  <Card className="w-[350px]">
   <CardHeader>
    <CardTitle>Create job</CardTitle>
    <CardDescription>Deploy your new job in one-click.</CardDescription>
   </CardHeader>
   <CardContent>
    <form>
     <div className="grid w-full items-center gap-4">
      <div className="flex flex-col space-y-1.5">
       <label htmlFor="name">Name</label>
       <input id="name" placeholder="Name of your job" />
      </div>
      <div className="flex flex-col space-y-1.5">
       <label htmlFor="framework">Framework</label>
       <select id="framework">
        <option value="next">Next.js</option>
        <option value="sveltekit">SvelteKit</option>
        <option value="astro">Astro</option>
        <option value="nuxt">Nuxt.js</option>
       </select>
      </div>
     </div>
    </form>
   </CardContent>
   <CardFooter className="flex justify-between">
    <Button variant="outline">Cancel</Button>
    <Button>Deploy</Button>
   </CardFooter>
  </Card>
 ),
};

/**
 * Card styled as a pricing tier option
 */
export const Pricing: Story = {
 render: () => (
  <Card className="w-[350px]">
   <CardHeader>
    <CardTitle>Pro Plan</CardTitle>
    <CardDescription>$29/month</CardDescription>
   </CardHeader>
   <CardContent>
    <ul className="space-y-2">
     <li className="flex items-center">
      <svg
       xmlns="http://www.w3.org/2000/svg"
       width="24"
       height="24"
       viewBox="0 0 24 24"
       fill="none"
       stroke="currentColor"
       strokeWidth="2"
       strokeLinecap="round"
       strokeLinejoin="round"
       className="mr-2 h-4 w-4 text-primary"
      >
       <polyline points="20 6 9 17 4 12"></polyline>
      </svg>
      <span>10 users</span>
     </li>
     <li className="flex items-center">
      <svg
       xmlns="http://www.w3.org/2000/svg"
       width="24"
       height="24"
       viewBox="0 0 24 24"
       fill="none"
       stroke="currentColor"
       strokeWidth="2"
       strokeLinecap="round"
       strokeLinejoin="round"
       className="mr-2 h-4 w-4 text-primary"
      >
       <polyline points="20 6 9 17 4 12"></polyline>
      </svg>
      <span>Unlimited storage</span>
     </li>
     <li className="flex items-center">
      <svg
       xmlns="http://www.w3.org/2000/svg"
       width="24"
       height="24"
       viewBox="0 0 24 24"
       fill="none"
       stroke="currentColor"
       strokeWidth="2"
       strokeLinecap="round"
       strokeLinejoin="round"
       className="mr-2 h-4 w-4 text-primary"
      >
       <polyline points="20 6 9 17 4 12"></polyline>
      </svg>
      <span>Premium support</span>
     </li>
    </ul>
   </CardContent>
   <CardFooter>
    <Button className="w-full">Subscribe</Button>
   </CardFooter>
  </Card>
 ),
};
