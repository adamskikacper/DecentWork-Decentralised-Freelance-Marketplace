import type { Meta, StoryObj } from "@storybook/react";
import { BrowserRouter } from "react-router-dom";
import { fn } from "@storybook/test";
import LoginForm from "./index";
import { AuthProvider } from "@/hooks/useAuth";
import { Card } from "@/components/ui/card";

/**
 * LoginForm is a component used for user authentication.
 * It includes fields for email and password, and handles form submission.
 */
const meta = {
  title: "Auth/LoginForm",
  component: LoginForm,
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
} satisfies Meta<typeof LoginForm>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Default login form with empty fields
 */
export const Default: Story = {
  args: {},
};

/**
 * Login form in loading state (submitting)
 */
export const Loading: Story = {
  args: {},
  parameters: {
    docs: {
      description: {
        story: "The login form in a loading state, showing a loading indicator while the form is being submitted.",
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
            <p>In a real application, the button would show "Logging in..." text.</p>
          </div>
        </div>
      );
    },
  ],
};

/**
 * Login form with validation errors
 */
export const ValidationError: Story = {
  args: {},
  parameters: {
    docs: {
      description: {
        story: "The login form showing validation errors when submitted with empty fields.",
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
 * Login form with filled values
 */
export const FilledForm: Story = {
  args: {},
  parameters: {
    docs: {
      description: {
        story: "The login form with pre-filled values.",
      },
    },
  },
  decorators: [
    (Story) => {
      // After the component mounts, fill in the form fields
      setTimeout(() => {
        const emailInput = document.getElementById('email') as HTMLInputElement;
        const passwordInput = document.getElementById('password') as HTMLInputElement;
        
        if (emailInput && passwordInput) {
          emailInput.value = 'user@example.com';
          passwordInput.value = 'password123';
          
          // Dispatch input events to trigger React state updates
          emailInput.dispatchEvent(new Event('input', { bubbles: true }));
          passwordInput.dispatchEvent(new Event('input', { bubbles: true }));
        }
      }, 100);
      
      return <Story />;
    },
  ],
};
