import React, { memo, useState } from "react";
import { Search } from "lucide-react";
import SectionHeader from "../../../components/Layout/SectionHeader";
import Breadcrumbs from "@/components/Layout/Breadcrumbs";
import { NAV_LINKS } from "@/constants";

// Define component props
interface FreelancerFindJobsProps {
 onJobDetails?: (jobId: string) => void;
}

// Sample job data
const AVAILABLE_JOBS = [
 {
  id: "job1",
  title: "DeFi Dashboard UI Design",
  client: {
   id: "client1",
   name: "FinDEX",
   rating: 4.8,
  },
  description:
   "We are looking for an experienced UI designer to create a modern, intuitive dashboard for our decentralized finance platform. The ideal candidate has experience with Web3 jobs and understands DeFi user needs.",
  skills: ["UI Design", "Figma", "Web3", "DeFi"],
  budget: "1.5-2.0 ETH",
  posted: "2 days ago",
  duration: "10-15 day job",
  proposals: 7,
 },
 {
  id: "job2",
  title: "Solidity Smart Contract for Staking",
  client: {
   id: "client2",
   name: "StakeCoin",
   rating: 4.6,
  },
  description:
   "Develop a secure and gas-efficient staking smart contract for our ERC-20 token. The contract should include features like reward distribution, lockup periods, and emergency withdrawal functions.",
  skills: ["Solidity", "Smart Contracts", "Staking", "Security Audits"],
  budget: "3.0-4.5 ETH",
  posted: "5 days ago",
  duration: "5-7 day job",
  proposals: 12,
 },
 {
  id: "job3",
  title: "Web3 Integration for E-commerce",
  client: {
   id: "client3",
   name: "CryptoShop",
   rating: 4.9,
  },
  description:
   "We need to integrate our e-commerce platform with various crypto payment methods and wallets. Looking for a developer with experience in payment gateways and wallet connections.",
  skills: ["Web3.js", "Ethereum", "Payment Integration", "E-commerce"],
  budget: "5.0-8.0 ETH",
  posted: "1 week ago",
  duration: "20+ day job",
  proposals: 15,
 },
 {
  id: "job4",
  title: "NFT Collection Artwork and Metadata",
  client: {
   id: "client4",
   name: "PixelVerse",
   rating: 4.7,
  },
  description:
   "Create artwork for a 10,000 NFT collection with generative traits. Also develop metadata formatting and preparation for on-chain storage.",
  skills: ["NFT Design", "Digital Art", "Metadata", "JSON"],
  budget: "4.0-6.0 ETH",
  posted: "2 weeks ago",
  duration: "30 day job",
  proposals: 22,
 },
];

const FreelancerFindJobs = memo(({ onJobDetails }: FreelancerFindJobsProps) => {
 const [searchTerm, setSearchTerm] = useState("");
 const [selectedSkill, setSelectedSkill] = useState<string | null>(null);

 // Get unique skills from all jobs
 const allSkills = Array.from(
  new Set(AVAILABLE_JOBS.flatMap((job) => job.skills))
 );

 // Filter jobs based on search term and selected skill
 const filteredJobs = AVAILABLE_JOBS.filter((job) => {
  const matchesSearch =
   searchTerm === "" ||
   job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
   job.description.toLowerCase().includes(searchTerm.toLowerCase());

  const matchesSkill =
   selectedSkill === null || job.skills.includes(selectedSkill);

  return matchesSearch && matchesSkill;
 });

 return (
  <>
   <Breadcrumbs
    items={[
     { label: "Home", path: NAV_LINKS.HOME },
     { label: "Dashboard", path: NAV_LINKS.DASHBOARD },
     { label: "Find Jobs", path: "/dashboard/find-jobs" },
    ]}
   />
   <SectionHeader
    title="Find Jobs"
    description="Browse available jobs and submit proposals."
   />

   {/* Search and Filter Bar */}
   <div className="glass-card rounded-xl p-6 mb-6">
    <div className="flex flex-col md:flex-row gap-4">
     <div className="flex-1 relative">
      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
       <Search className="h-5 w-5 text-muted-foreground" />
      </div>
      <input
       type="text"
       placeholder="Search jobs..."
       className="w-full pl-10 px-4 py-2 rounded-md border border-border bg-background"
       value={searchTerm}
       onChange={(e) => setSearchTerm(e.target.value)}
      />
     </div>
     <div className="w-full md:w-auto">
      <select
       className="w-full px-4 py-2 rounded-md border border-border bg-background"
       value={selectedSkill || ""}
       onChange={(e) => setSelectedSkill(e.target.value || null)}
      >
       <option value="">All Skills</option>
       {allSkills.map((skill) => (
        <option key={skill} value={skill}>
         {skill}
        </option>
       ))}
      </select>
     </div>
    </div>
   </div>

   {/* Job Listings */}
   <div className="space-y-6">
    {filteredJobs.map((job) => (
     <div key={job.id} className="glass-card rounded-xl p-6">
      <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-4">
       <div>
        <h3 className="text-lg font-semibold mb-2">{job.title}</h3>
        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
         <span>Client: {job.client.name}</span>
         <span>•</span>
         <span>Rating: {job.client.rating}/5</span>
         <span>•</span>
         <span>Posted: {job.posted}</span>
        </div>
        <p className="text-sm mb-4">{job.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
         {job.skills.map((skill) => (
          <span
           key={skill}
           className="px-2 py-1 text-xs rounded-full bg-primary/10 text-primary"
          >
           {skill}
          </span>
         ))}
        </div>
       </div>
       <div className="flex flex-col items-end gap-2">
        <span className="text-sm font-medium">{job.budget}</span>
        <span className="text-xs text-muted-foreground">{job.duration}</span>
        <span className="text-xs text-muted-foreground">
         {job.proposals} proposals
        </span>
       </div>
      </div>

      <div className="flex justify-end gap-2">
       <button
        className="px-4 py-2 text-sm font-medium rounded-md bg-secondary text-foreground hover:bg-secondary/80 transition-colors"
        onClick={() => onJobDetails && onJobDetails(job.id)}
       >
        View Details
       </button>
       <button className="px-4 py-2 text-sm font-medium rounded-md bg-primary text-primary-foreground hover:bg-primary/90 transition-colors">
        Submit Proposal
       </button>
      </div>
     </div>
    ))}
   </div>
  </>
 );
});

FreelancerFindJobs.displayName = "FreelancerFindJobs";

export default FreelancerFindJobs;
