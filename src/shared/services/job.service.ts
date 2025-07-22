import type {
 JobOpportunity,
 JobOpportunityWithCategory,
} from "@/shared/models/dashboard";
import type { JobDetails } from "@/shared/models/job/model";

export const getAllJobOpportunities = async (): Promise<JobOpportunity[]> => {
 return [
  {
   id: "job1",
   title: "Build DeFi Dashboard",
   description:
    "Create a comprehensive DeFi dashboard with real-time data visualization",
   budget: "5.0 ETH",
   postedDate: "2 days ago",
   proposals: 12,
   tags: ["React", "TypeScript", "Web3", "DeFi"],
  },
  {
   id: "job2",
   title: "Smart Contract Audit",
   description: "Security audit for NFT marketplace smart contracts",
   budget: "8.0 ETH",
   postedDate: "1 day ago",
   proposals: 8,
   tags: ["Solidity", "Security", "Audit", "NFT"],
  },
  {
   id: "job3",
   title: "Mobile Wallet App",
   description:
    "Develop a mobile wallet application for Ethereum and ERC-20 tokens",
   budget: "12.0 ETH",
   postedDate: "3 days ago",
   proposals: 15,
   tags: ["React Native", "Mobile", "Wallet", "Ethereum"],
  },
  {
   id: "job4",
   title: "DAO Governance Interface",
   description: "Build a user-friendly interface for DAO voting and governance",
   budget: "6.5 ETH",
   postedDate: "4 days ago",
   proposals: 9,
   tags: ["Vue.js", "DAO", "Governance", "Web3"],
  },
  {
   id: "job5",
   title: "NFT Marketplace Backend",
   description: "Develop scalable backend infrastructure for NFT marketplace",
   budget: "10.0 ETH",
   postedDate: "5 days ago",
   proposals: 18,
   tags: ["Node.js", "MongoDB", "IPFS", "NFT"],
  },
  {
   id: "job6",
   title: "NFT Marketplace UI Design",
   description:
    "Design a modern and intuitive user interface for NFT marketplace",
   budget: "4.5 ETH",
   postedDate: "1 day ago",
   proposals: 22,
   tags: ["UI/UX", "Figma", "Design", "NFT"],
  },
  {
   id: "job7",
   title: "Tokenomics Consultation",
   description:
    "Provide tokenomics analysis and recommendations for new DeFi protocol",
   budget: "6.0 ETH",
   postedDate: "4 days ago",
   proposals: 5,
   tags: ["Tokenomics", "DeFi", "Consulting", "Economics"],
  },
  {
   id: "job8",
   title: "Cross-chain Bridge Development",
   description:
    "Build a secure cross-chain bridge for transferring assets between Ethereum and Polygon",
   budget: "15.0 ETH",
   postedDate: "2 days ago",
   proposals: 18,
   tags: ["Solidity", "Cross-chain", "Bridge", "Security"],
  },
  {
   id: "job9",
   title: "DeFi Yield Farming Protocol",
   description:
    "Develop a yield farming protocol with innovative staking mechanisms",
   budget: "20.0 ETH",
   postedDate: "6 days ago",
   proposals: 25,
   tags: ["Solidity", "DeFi", "Yield Farming", "Smart Contracts"],
  },
  {
   id: "job10",
   title: "Crypto Trading Bot",
   description:
    "Build an automated trading bot for cryptocurrency exchanges with advanced algorithms",
   budget: "8.5 ETH",
   postedDate: "3 days ago",
   proposals: 14,
   tags: ["Python", "Trading", "Algorithms", "API"],
  },
 ];
};

const jobDetailsMockData: JobDetails = {
 id: "1",
 title: "Web3 Dashboard UI Design",
 status: "In Progress",
 budget: "2.5 ETH",
 daysLeft: 12,
 description:
  "Design a modern and user-friendly dashboard for our Web3 application. The design should include wallet connection, transaction history, and asset management interfaces. We need a clean, intuitive design that makes complex blockchain data easy to understand.",
 startDate: "Mar 15, 2023",
 dueDate: "Apr 15, 2023",

 freelancer: {
  id: "f1",
  name: "Alex Johnson",
  role: "UI/UX Designer",
  rating: 4.9,
 },
};

export const getJobDetails = async (
 jobId: string
): Promise<JobDetails | null> => {
 if (jobId) {
  return { ...jobDetailsMockData, id: jobId };
 }
 return null;
};

export const createJob = async (jobData: any) => {
 return null;
};

export const updateJob = async (jobId: string, jobData: any) => {
 return null;
};

export const deleteJob = async (jobId: string) => {
 return null;
};

export const getClientJobsByUserId = async (clientId: string) => {
 return null;
};

export const getMyJobs = async (freelancerId: string) => {
 return null;
};

export const updateJobStatus = async (jobId: string, status: string) => {
 return null;
};

export const getJobApplications = async (jobId: string) => {
 return null;
};

export const updateJobProgress = async (jobId: string, progress: number) => {
 return null;
};

export const submitDeliverable = async (jobId: string, deliverable: any) => {
 return null;
};

const jobListingsMockData: JobOpportunityWithCategory[] = [
 {
  id: "1",
  title: "DeFi Dashboard UI Design",
  description:
   "Looking for a skilled UI designer to create a modern and intuitive dashboard for our DeFi platform. The design should be clean, user-friendly, and align with our brand identity.",
  category: "Design",
  budget: "1.5-2.0 ETH",
  postedDate: "2 days ago",
  proposals: 8,
  tags: ["UI/UX", "Figma", "Dashboard"],
 },
 {
  id: "2",
  title: "Solidity Smart Contract for Staking",
  description:
   "We need an experienced Solidity developer to create a secure staking smart contract for our token. The contract should include features like rewards distribution, lock periods, and emergency withdrawal.",
  category: "Smart Contracts",
  budget: "3.0-4.5 ETH",
  postedDate: "5 days ago",
  proposals: 12,
  tags: ["Solidity", "ERC-20", "Staking"],
 },
 {
  id: "3",
  title: "Web3 Integration for E-commerce",
  description:
   "Integrate cryptocurrency payments and NFT authentication into our existing e-commerce platform. The solution should be scalable, secure, and user-friendly.",
  category: "Development",
  budget: "5.0-8.0 ETH",
  postedDate: "1 week ago",
  proposals: 15,
  tags: ["Web3.js", "E-commerce", "Payments"],
 },
 {
  id: "4",
  title: "NFT Marketplace Frontend Development",
  description:
   "Build a responsive frontend for our NFT marketplace using React. The design should be visually appealing and provide a seamless user experience for browsing, buying, and selling NFTs.",
  category: "Frontend",
  budget: "2.5-4.0 ETH",
  postedDate: "3 days ago",
  proposals: 10,
  tags: ["React", "JavaScript", "NFT"],
 },
 {
  id: "5",
  title: "Smart Contract Security Audit",
  description:
   "Conduct a comprehensive security audit of our DeFi smart contracts. Identify potential vulnerabilities, suggest improvements, and provide a detailed report of your findings.",
  category: "Smart Contracts",
  budget: "4.0-6.0 ETH",
  postedDate: "4 days ago",
  proposals: 6,
  tags: ["Security", "Audit", "DeFi"],
 },
];

const categoriesMockData = [
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

export const getJobListings = async (): Promise<
 JobOpportunityWithCategory[]
> => {
 return jobListingsMockData;
};

export const getJobCategories = async (): Promise<string[]> => {
 return categoriesMockData;
};
