import React, { useState } from "react";
import Navbar from "../../components/layout/Header";
import Footer from "../../components/layout/Footer";
import SearchFilterBar from "../../components/project/SearchFilterBar";
import JobCard from "../../components/project/ProjectCard/JobCard";

const JobList = () => {
 const [searchQuery, setSearchQuery] = useState("");
 const [categoryFilter, setCategoryFilter] = useState("All");

 // Mock categories
 const categories = [
  "All",
  "Development",
  "Design",
  "Smart Contracts",
  "DApp",
  "NFT",
  "Web3",
  "UI/UX",
  "Backend",
  "Frontend",
 ];

 // Mock job data
 const jobListings = [
  {
   id: 1,
   title: "DeFi Dashboard UI Design",
   description:
    "Looking for a skilled UI designer to create a modern and intuitive dashboard for our DeFi platform. The design should be clean, user-friendly, and align with our brand identity.",
   category: "Design",
   client: "FinDEX",
   budget: "1.5-2.0 ETH",
   duration: "10-15 days",
   postedDate: "2 days ago",
   proposals: 8,
   tags: ["UI/UX", "Figma", "Dashboard"],
  },
  {
   id: 2,
   title: "Solidity Smart Contract for Staking",
   description:
    "We need an experienced Solidity developer to create a secure staking smart contract for our token. The contract should include features like rewards distribution, lock periods, and emergency withdrawal.",
   category: "Smart Contracts",
   client: "StakeCoin",
   budget: "3.0-4.5 ETH",
   duration: "5-7 days",
   postedDate: "5 days ago",
   proposals: 12,
   tags: ["Solidity", "ERC-20", "Staking"],
  },
  {
   id: 3,
   title: "Web3 Integration for E-commerce",
   description:
    "Integrate cryptocurrency payments and NFT authentication into our existing e-commerce platform. The solution should be scalable, secure, and user-friendly.",
   category: "Development",
   client: "CryptoShop",
   budget: "5.0-8.0 ETH",
   duration: "20+ days",
   postedDate: "1 week ago",
   proposals: 15,
   tags: ["Web3.js", "E-commerce", "Payments"],
  },
  {
   id: 4,
   title: "NFT Marketplace Frontend Development",
   description:
    "Build a responsive frontend for our NFT marketplace using React. The design should be visually appealing and provide a seamless user experience for browsing, buying, and selling NFTs.",
   category: "Frontend",
   client: "NFTVerse",
   budget: "2.5-4.0 ETH",
   duration: "15-20 days",
   postedDate: "3 days ago",
   proposals: 10,
   tags: ["React", "JavaScript", "NFT"],
  },
  {
   id: 5,
   title: "Smart Contract Security Audit",
   description:
    "Conduct a comprehensive security audit of our DeFi smart contracts. Identify potential vulnerabilities, suggest improvements, and provide a detailed report of your findings.",
   category: "Smart Contracts",
   client: "DeFiSecure",
   budget: "4.0-6.0 ETH",
   duration: "7-10 days",
   postedDate: "4 days ago",
   proposals: 6,
   tags: ["Security", "Audit", "DeFi"],
  },
 ];

 // Filter jobs based on search query and category
 const filteredJobs = jobListings.filter((job) => {
  const matchesSearch =
   job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
   job.description.toLowerCase().includes(searchQuery.toLowerCase());
  const matchesCategory =
   categoryFilter === "All" || job.category === categoryFilter;

  return matchesSearch && matchesCategory;
 });

 return (
  <div className="min-h-screen flex flex-col">
   <Navbar />

   <main className="flex-grow pt-24 pb-12 bg-background">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
     {/* Page Header */}
     <div className="mb-8 slide-in">
      <h1 className="text-3xl font-bold mb-2">Find Work</h1>
      <p className="text-muted-foreground max-w-3xl">
       Discover opportunities to collaborate with clients from around the world
       on blockchain and web3 projects.
      </p>
     </div>

     {/* Search and Filters */}
     <SearchFilterBar
      searchQuery={searchQuery}
      setSearchQuery={setSearchQuery}
      categoryFilter={categoryFilter}
      setCategoryFilter={setCategoryFilter}
      categories={categories}
     />

     {/* Job Listings */}
     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
      {filteredJobs.length > 0 ? (
       filteredJobs.map((job, index) => (
        <div
         key={job.id}
         className="slide-up"
         style={{ animationDelay: `${0.1 * index}s` }}
        >
         <JobCard
          id={job.id}
          title={job.title}
          description={job.description}
          postedDate={job.postedDate}
          proposals={job.proposals}
          tags={job.tags}
          budget={job.budget}
         />
        </div>
       ))
      ) : (
       <div className="col-span-3 py-16 text-center">
        <div className="w-16 h-16 rounded-full bg-secondary/50 flex items-center justify-center mx-auto mb-4">
         <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
         >
          <path
           d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z"
           stroke="currentColor"
           strokeWidth="2"
           strokeLinecap="round"
           strokeLinejoin="round"
          />
          <path
           d="M21 21L16.65 16.65"
           stroke="currentColor"
           strokeWidth="2"
           strokeLinecap="round"
           strokeLinejoin="round"
          />
         </svg>
        </div>
        <h3 className="text-lg font-medium mb-2">No jobs found</h3>
        <p className="text-muted-foreground">
         Try adjusting your search filters or check back later for new
         opportunities.
        </p>
       </div>
      )}
     </div>

     {/* Pagination - Limited to just the UI for the demo */}
     <div className="flex justify-center">
      <nav className="inline-flex gap-1" aria-label="Pagination">
       <button className="px-3 py-2 rounded text-sm font-medium bg-primary text-white">
        1
       </button>
       <button className="px-3 py-2 rounded text-sm font-medium text-foreground hover:bg-secondary transition-colors">
        2
       </button>
       <button className="px-3 py-2 rounded text-sm font-medium text-foreground hover:bg-secondary transition-colors">
        3
       </button>
       <button className="px-3 py-2 rounded text-sm font-medium text-foreground hover:bg-secondary transition-colors">
        ...
       </button>
       <button className="px-3 py-2 rounded text-sm font-medium text-foreground hover:bg-secondary transition-colors">
        10
       </button>
      </nav>
     </div>
    </div>
   </main>

   <Footer />
  </div>
 );
};

export default JobList;
