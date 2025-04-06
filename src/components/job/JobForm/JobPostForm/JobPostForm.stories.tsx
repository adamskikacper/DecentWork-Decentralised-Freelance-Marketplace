import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import JobPostForm from "./index";
import { ExperienceLevel, JobDuration, JobType } from "@/types/blockchain";

/**
 * JobPostForm is a component used for creating new job listings.
 * It includes fields for job details, budget, deadline, and required skills.
 */
const meta = {
  title: "Job/JobPostForm",
  component: JobPostForm,
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
} satisfies Meta<typeof JobPostForm>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Default job post form with empty fields
 */
export const Default: Story = {
  args: {
    onSubmit: fn(),
  },
};

/**
 * Job post form with pre-filled values
 */
export const Prefilled: Story = {
  args: {
    onSubmit: fn(),
  },
  parameters: {
    docs: {
      description: {
        story: "The job post form with pre-filled values for all fields.",
      },
    },
  },
  decorators: [
    (Story) => {
      // After the component mounts, fill in the form fields
      setTimeout(() => {
        const titleInput = document.getElementById('title') as HTMLInputElement;
        const descriptionInput = document.getElementById('description') as HTMLTextAreaElement;
        const budgetInput = document.getElementById('budget') as HTMLInputElement;
        const deadlineInput = document.getElementById('deadline') as HTMLInputElement;
        
        if (titleInput && descriptionInput && budgetInput && deadlineInput) {
          titleInput.value = 'Smart Contract Developer for DeFi Project';
          descriptionInput.value = 'We are looking for an experienced Solidity developer to create a set of smart contracts for our DeFi platform. The contracts should include staking, yield farming, and liquidity provision functionality.';
          budgetInput.value = '5.0';
          
          // Set date to 30 days from now
          const futureDate = new Date();
          futureDate.setDate(futureDate.getDate() + 30);
          const formattedDate = futureDate.toISOString().split('T')[0];
          deadlineInput.value = formattedDate;
          
          // Dispatch input events to trigger React state updates
          titleInput.dispatchEvent(new Event('input', { bubbles: true }));
          descriptionInput.dispatchEvent(new Event('input', { bubbles: true }));
          budgetInput.dispatchEvent(new Event('input', { bubbles: true }));
          deadlineInput.dispatchEvent(new Event('input', { bubbles: true }));
        }
      }, 100);
      
      return <Story />;
    },
  ],
};

/**
 * Job post form with skills added
 */
export const WithSkills: Story = {
  args: {
    onSubmit: fn(),
  },
  parameters: {
    docs: {
      description: {
        story: "The job post form with skills added to the required skills list.",
      },
    },
  },
  render: (args) => {
    // Mock implementation to show skills
    const mockSkills = ["Solidity", "Ethereum", "Smart Contracts", "DeFi"];
    
    return (
      <div className="space-y-6">
        <JobPostForm {...args} />
        
        <div className="p-4 border rounded-md bg-card">
          <h3 className="text-lg font-medium mb-2">Preview: Required Skills</h3>
          <div className="flex flex-wrap gap-2">
            {mockSkills.map((skill) => (
              <div key={skill} className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm flex items-center gap-2">
                {skill}
                <button className="text-primary/70 hover:text-primary">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  },
};

/**
 * Job post form with different experience level
 */
export const ExpertLevel: Story = {
  args: {
    onSubmit: fn(),
  },
  parameters: {
    docs: {
      description: {
        story: "The job post form with Expert experience level selected.",
      },
    },
  },
  render: (args) => {
    return (
      <div className="space-y-6">
        <JobPostForm {...args} />
        
        <div className="p-4 border rounded-md bg-card">
          <h3 className="text-lg font-medium mb-2">Preview: Selected Options</h3>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-sm font-medium">Experience Level</p>
              <p className="text-sm text-muted-foreground">{ExperienceLevel.Expert}</p>
            </div>
            <div>
              <p className="text-sm font-medium">Job Duration</p>
              <p className="text-sm text-muted-foreground">{JobDuration.ThreeToSixMonths}</p>
            </div>
            <div>
              <p className="text-sm font-medium">Job Type</p>
              <p className="text-sm text-muted-foreground">{JobType.OneTime}</p>
            </div>
          </div>
        </div>
      </div>
    );
  },
};

/**
 * Job post form with file attachments
 */
export const WithAttachments: Story = {
  args: {
    onSubmit: fn(),
  },
  parameters: {
    docs: {
      description: {
        story: "The job post form with file attachments added.",
      },
    },
  },
  render: (args) => {
    return (
      <div className="space-y-6">
        <JobPostForm {...args} />
        
        <div className="p-4 border rounded-md bg-card">
          <h3 className="text-lg font-medium mb-2">Preview: Attached Files</h3>
          <div className="space-y-2">
            <div className="p-2 border rounded flex items-center justify-between">
              <div className="flex items-center gap-2">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M14 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V8L14 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M14 2V8H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M16 13H8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M16 17H8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M10 9H9H8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span className="text-sm">project_requirements.pdf</span>
              </div>
              <button className="text-muted-foreground hover:text-foreground">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
            <div className="p-2 border rounded flex items-center justify-between">
              <div className="flex items-center gap-2">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M14 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V8L14 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M14 2V8H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M16 13H8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M16 17H8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M10 9H9H8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span className="text-sm">design_mockups.zip</span>
              </div>
              <button className="text-muted-foreground hover:text-foreground">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  },
};
