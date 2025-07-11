import type { JobOpportunity } from "@/shared/models/dashboard";

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

export const getJobDetails = async (jobId: string) => {
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

export const getClientJobs = async (clientId: string) => {
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

export const getJobCategories = async () => {
  return null;
};