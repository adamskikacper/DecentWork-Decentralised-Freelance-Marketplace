import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import BidForm from "./index";

/**
 * BidForm is a component used for submitting proposals for jobs.
 * It includes fields for bid amount, delivery time, and proposal details.
 */
const meta = {
  title: "Job/BidForm",
  component: BidForm,
  parameters: {
    layout: "padded",
  },
  argTypes: {
    onSubmit: { 
      action: "submitted", 
      description: "Function called when the form is submitted" 
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof BidForm>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Default bid form with empty fields
 */
export const Default: Story = {
  args: {
    onSubmit: fn(),
  },
};

/**
 * Bid form with pre-filled values
 */
export const Prefilled: Story = {
  args: {
    onSubmit: fn(),
  },
  parameters: {
    docs: {
      description: {
        story: "The bid form with pre-filled values for all fields.",
      },
    },
  },
  decorators: [
    (Story) => {
      // After the component mounts, fill in the form fields
      setTimeout(() => {
        const bidAmountInput = document.getElementById('bidAmount') as HTMLInputElement;
        const deliveryDaysInput = document.getElementById('deliveryDays') as HTMLInputElement;
        const proposalInput = document.querySelector('textarea') as HTMLTextAreaElement;
        
        if (bidAmountInput && deliveryDaysInput && proposalInput) {
          bidAmountInput.value = '3.5';
          deliveryDaysInput.value = '14';
          proposalInput.value = 'I have extensive experience with similar projects and can deliver high-quality work within the specified timeframe. My approach would include regular updates and a focus on clean, well-documented code.';
          
          // Dispatch input events to trigger React state updates
          bidAmountInput.dispatchEvent(new Event('input', { bubbles: true }));
          deliveryDaysInput.dispatchEvent(new Event('input', { bubbles: true }));
          proposalInput.dispatchEvent(new Event('input', { bubbles: true }));
        }
      }, 100);
      
      return <Story />;
    },
  ],
};

/**
 * Bid form with competitive pricing
 */
export const CompetitivePricing: Story = {
  args: {
    onSubmit: fn(),
  },
  parameters: {
    docs: {
      description: {
        story: "The bid form with a competitive pricing strategy.",
      },
    },
  },
  render: (args) => {
    return (
      <div className="space-y-6">
        <div className="p-4 border rounded-md bg-card mb-4">
          <h3 className="text-lg font-medium mb-2">Job Budget</h3>
          <p className="text-2xl font-bold text-primary">4.0 ETH</p>
          <p className="text-sm text-muted-foreground mt-1">Average bid: 3.8 ETH</p>
        </div>
        
        <BidForm {...args} />
        
        <div className="p-4 border rounded-md bg-card mt-4">
          <h3 className="text-lg font-medium mb-2">Bidding Strategy</h3>
          <p className="text-sm">
            Consider bidding slightly below the average to increase your chances of winning the project,
            but ensure your bid reflects the quality of work you can deliver.
          </p>
        </div>
      </div>
    );
  },
};

/**
 * Bid form with quick delivery option
 */
export const QuickDelivery: Story = {
  args: {
    onSubmit: fn(),
  },
  parameters: {
    docs: {
      description: {
        story: "The bid form emphasizing a quick delivery timeframe.",
      },
    },
  },
  render: (args) => {
    return (
      <div className="space-y-6">
        <div className="p-4 border rounded-md bg-card mb-4">
          <h3 className="text-lg font-medium mb-2">Job Timeline</h3>
          <p className="text-muted-foreground">Client's expected delivery: <span className="font-medium text-foreground">30 days</span></p>
          <p className="text-muted-foreground">Average delivery time: <span className="font-medium text-foreground">25 days</span></p>
        </div>
        
        <BidForm {...args} />
        
        <div className="p-4 border rounded-md bg-primary/10 mt-4">
          <h3 className="text-lg font-medium mb-2 text-primary">Quick Delivery Advantage</h3>
          <p className="text-sm">
            Offering a faster delivery time can give you a competitive edge, especially if the client
            has time-sensitive requirements. Make sure you can realistically meet the timeline you propose.
          </p>
        </div>
      </div>
    );
  },
};

/**
 * Bid form with proposal tips
 */
export const ProposalTips: Story = {
  args: {
    onSubmit: fn(),
  },
  parameters: {
    docs: {
      description: {
        story: "The bid form with tips for writing an effective proposal.",
      },
    },
  },
  render: (args) => {
    return (
      <div className="space-y-6">
        <BidForm {...args} />
        
        <div className="p-4 border rounded-md bg-card mt-4">
          <h3 className="text-lg font-medium mb-2">Tips for a Winning Proposal</h3>
          <ul className="text-sm space-y-2 list-disc pl-5">
            <li>Address the client's specific requirements</li>
            <li>Highlight relevant experience and skills</li>
            <li>Explain your approach to the project</li>
            <li>Mention any additional value you can provide</li>
            <li>Keep it concise and well-structured</li>
          </ul>
        </div>
      </div>
    );
  },
};
