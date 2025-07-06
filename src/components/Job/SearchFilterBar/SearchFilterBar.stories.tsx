/* eslint-disable react-hooks/rules-of-hooks */
import type { Meta, StoryObj } from "@storybook/react";
import SearchFilterBar from "./index";
import { useState } from "react";

/**
 * SearchFilterBar is a component that provides search and filtering functionality for job listings.
 */
const meta = {
  title: "Job/SearchFilterBar",
  component: SearchFilterBar,
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof SearchFilterBar>;

export default meta;
type Story = StoryObj<typeof meta>;

const defaultArgs = {
  searchQuery: "",
  setSearchQuery: () => {},
  categoryFilter: "All",
  setCategoryFilter: () => {},
  categories: ["All"],
};

/**
 * Default SearchFilterBar with controlled state
 */
export const Default: Story = {
  args: defaultArgs,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  render: (_args) => {
    const [searchQuery, setSearchQuery] = useState("");
    const [categoryFilter, setCategoryFilter] = useState("All");
    
    return (
      <SearchFilterBar
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        categoryFilter={categoryFilter}
        setCategoryFilter={setCategoryFilter}
        categories={[
          "All",
          "Development",
          "Design",
          "Smart Contracts",
          "DApp",
          "NFT",
          "Web3",
          "UI/UX",
        ]}
      />
    );
  },
};

/**
 * SearchFilterBar with pre-selected category
 */
export const WithPreselectedCategory: Story = {
  args: defaultArgs,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  render: (_args) => {
    const [searchQuery, setSearchQuery] = useState("");
    const [categoryFilter, setCategoryFilter] = useState("Web3");
    
    return (
      <SearchFilterBar
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        categoryFilter={categoryFilter}
        setCategoryFilter={setCategoryFilter}
        categories={["All", "Development", "Design", "Smart Contracts", "DApp", "NFT", "Web3", "UI/UX"]}
      />
    );
  },
};

/**
 * SearchFilterBar with search query
 */
export const WithSearchQuery: Story = {
  args: defaultArgs,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  render: (_args) => {
    const [searchQuery, setSearchQuery] = useState("blockchain");
    const [categoryFilter, setCategoryFilter] = useState("All");
    
    return (
      <SearchFilterBar
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        categoryFilter={categoryFilter}
        setCategoryFilter={setCategoryFilter}
        categories={["All", "Development", "Design", "Smart Contracts", "DApp", "NFT", "Web3", "UI/UX"]}
      />
    );
  },
};
