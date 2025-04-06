import type { Meta, StoryObj } from "@storybook/react";
import { BrowserRouter } from "react-router-dom";
import { fn } from "@storybook/test";
import SignupForm from "./index";
import { AuthProvider } from "@/hooks/useAuth";
import { Card } from "@/components/ui/card";

/**
 * SignupForm is a component used for user registration.
 * It includes fields for email, password, and account type selection.
 */
const meta = {
  title: "Auth/SignupForm",
  component: SignupForm,
  parameters: {
    layout: "centered",
  },
  decorators: [
    (Story) => (
      <BrowserRouter>
        <AuthProvider>
          <Card className="w-full max-w-md">
            <Story />
          </Card>
        </AuthProvider>
      </BrowserRouter>
    ),
  ],
  tags: ["autodocs"],
} satisfies Meta<typeof SignupForm>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Default signup form with empty fields
 */
export const Default: Story = {
  args: {},
};

/**
 * Signup form with client account type selected
 */
export const ClientSelected: Story = {
  args: {},
  parameters: {
    docs: {
      description: {
        story: "The signup form with the 'Client' account type selected.",
      },
    },
  },
  decorators: [
    (Story) => {
      // After the component mounts, select the client account type
      setTimeout(() => {
        const clientButton = document.querySelector('button:contains("Client")') as HTMLButtonElement;
        
        if (clientButton) {
          clientButton.click();
        }
      }, 100);
      
      return <Story />;
    },
  ],
};

/**
 * Signup form with freelancer account type selected
 */
export const FreelancerSelected: Story = {
  args: {},
  parameters: {
    docs: {
      description: {
        story: "The signup form with the 'Freelancer' account type selected.",
      },
    },
  },
  decorators: [
    (Story) => {
      // After the component mounts, select the freelancer account type
      setTimeout(() => {
        const freelancerButton = document.querySelector('button:contains("Freelancer")') as HTMLButtonElement;
        
        if (freelancerButton) {
          freelancerButton.click();
        }
      }, 100);
      
      return <Story />;
    },
  ],
};

/**
 * Signup form in loading state (submitting)
 */
export const Loading: Story = {
  args: {},
  parameters: {
    docs: {
      description: {
        story: "The signup form in a loading state, showing a loading indicator while the form is being submitted.",
      },
    },
  },
  decorators: [
    (Story) => {
      // Mock the form submission state
      const originalSubmit = HTMLFormElement.prototype.submit;
      HTMLFormElement.prototype.submit = fn();
      
      // Add a submit event listener to prevent actual form submission
      document.addEventListener('submit', (e) => {
        e.preventDefault();
      }, { once: true });
      
      return (
        <div className="w-full max-w-md">
          <Card>
            <Story />
          </Card>
          <div className="mt-4 text-sm text-muted-foreground">
            <p>Note: This story shows the loading state of the form.</p>
            <p>In a real application, the button would show "Creating Account..." text.</p>
          </div>
        </div>
      );
    },
  ],
};

/**
 * Signup form with validation errors
 */
export const ValidationError: Story = {
  args: {},
  parameters: {
    docs: {
      description: {
        story: "The signup form showing validation errors when submitted with empty fields.",
      },
    },
  },
  decorators: [
    (Story) => {
      return (
        <div className="w-full max-w-md">
          <Card>
            <Story />
          </Card>
          <div className="mt-4 p-3 bg-destructive/10 rounded-md border border-destructive/20 text-sm text-destructive">
            <p className="font-medium">Error</p>
            <p>Email and password are required</p>
          </div>
        </div>
      );
    },
  ],
};

/**
 * Signup form with filled values
 */
export const FilledForm: Story = {
  args: {},
  parameters: {
    docs: {
      description: {
        story: "The signup form with pre-filled values.",
      },
    },
  },
  decorators: [
    (Story) => {
      // After the component mounts, fill in the form fields
      setTimeout(() => {
        const emailInput = document.getElementById('reg-email') as HTMLInputElement;
        const passwordInput = document.getElementById('reg-password') as HTMLInputElement;
        const freelancerButton = document.querySelector('button:contains("Freelancer")') as HTMLButtonElement;
        
        if (emailInput && passwordInput && freelancerButton) {
          emailInput.value = 'newuser@example.com';
          passwordInput.value = 'securepassword123';
          freelancerButton.click();
          
          // Dispatch input events to trigger React state updates
          emailInput.dispatchEvent(new Event('input', { bubbles: true }));
          passwordInput.dispatchEvent(new Event('input', { bubbles: true }));
        }
      }, 100);
      
      return <Story />;
    },
  ],
};
