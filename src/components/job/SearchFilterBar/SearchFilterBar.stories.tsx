import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import SearchFilterBar from "./index";

/**
 * SearchFilterBar is a component used for filtering and searching job listings.
 * It includes a search input, category filter, and category pills.
 */
const meta = {
  title: "Job/SearchFilterBar",
  component: SearchFilterBar,
  parameters: {
    layout: "padded",
  },
  argTypes: {
    searchQuery: { 
      control: "text", 
      description: "Current search query value" 
    },
    setSearchQuery: { 
      action: "searchQueryChanged", 
      description: "Function called when search query changes" 
    },
    categoryFilter: { 
      control: "text", 
      description: "Currently selected category filter" 
    },
    setCategoryFilter: { 
      action: "categoryFilterChanged", 
      description: "Function called when category filter changes" 
    },
    categories: { 
      control: "array", 
      description: "Array of available categories" 
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof SearchFilterBar>;

export default meta;
type Story = StoryObj<typeof meta>;

const defaultCategories = [
  "All Categories",
  "Smart Contracts",
  "DeFi",
  "NFT",
  "Web3",
  "Blockchain",
  "Solidity",
  "Frontend",
  "Backend",
];

/**
 * Default search filter bar with empty search
 */
export const Default: Story = {
  args: {
    searchQuery: "",
    setSearchQuery: fn(),
    categoryFilter: "All Categories",
    setCategoryFilter: fn(),
    categories: defaultCategories,
  },
};

/**
 * Search filter bar with active search query
 */
export const WithSearchQuery: Story = {
  args: {
    searchQuery: "smart contract developer",
    setSearchQuery: fn(),
    categoryFilter: "All Categories",
    setCategoryFilter: fn(),
    categories: defaultCategories,
  },
};

/**
 * Search filter bar with category selected
 */
export const CategorySelected: Story = {
  args: {
    searchQuery: "",
    setSearchQuery: fn(),
    categoryFilter: "DeFi",
    setCategoryFilter: fn(),
    categories: defaultCategories,
  },
};

/**
 * Search filter bar with both search and category
 */
export const SearchAndCategory: Story = {
  args: {
    searchQuery: "yield farming",
    setSearchQuery: fn(),
    categoryFilter: "DeFi",
    setCategoryFilter: fn(),
    categories: defaultCategories,
  },
};

/**
 * Search filter bar with many categories
 */
export const ManyCategories: Story = {
  args: {
    searchQuery: "",
    setSearchQuery: fn(),
    categoryFilter: "All Categories",
    setCategoryFilter: fn(),
    categories: [
      "All Categories",
      "Smart Contracts",
      "DeFi",
      "NFT",
      "Web3",
      "Blockchain",
      "Solidity",
      "Frontend",
      "Backend",
      "UI/UX Design",
      "Mobile",
      "Testing",
      "Security Audit",
      "Research",
      "Technical Writing",
      "Community Management",
    ],
  },
};

/**
 * Search filter bar in a page context
 */
export const InPageContext: Story = {
  args: {
    searchQuery: "",
    setSearchQuery: fn(),
    categoryFilter: "All Categories",
    setCategoryFilter: fn(),
    categories: defaultCategories,
  },
  render: (args) => {
    return (
      <div className="space-y-6">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Find Work</h1>
          <p className="text-muted-foreground max-w-3xl">
            Discover opportunities to collaborate with clients from around the world
            on blockchain and web3 jobs.
          </p>
        </div>
        
        <SearchFilterBar {...args} />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="p-4 border rounded-lg bg-card">
              <h3 className="text-lg font-medium mb-2">Example Job Listing {i}</h3>
              <p className="text-sm text-muted-foreground mb-4">
                This is a placeholder for a job listing that would appear after filtering.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-2 py-1 bg-primary/10 text-primary rounded-full text-xs">
                  Smart Contracts
                </span>
                <span className="px-2 py-1 bg-primary/10 text-primary rounded-full text-xs">
                  Solidity
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  },
};
