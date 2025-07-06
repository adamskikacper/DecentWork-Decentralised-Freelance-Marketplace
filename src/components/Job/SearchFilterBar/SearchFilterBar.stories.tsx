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

/**
 * Default SearchFilterBar with controlled state
 */
export const Default: Story = {
  render: (args) => {
    const [searchQuery, setSearchQuery] = useState("");
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

/**
 * SearchFilterBar with pre-selected category
 */
export const WithPreselectedCategory: Story = {
  render: (args) => {
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
  render: (args) => {
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
