import type {
 Job,
 JobsData,
 JobSummary,
 JobOpportunity,
 JobOpportunityWithCategory,
} from "@/shared/models/dashboard";
import type { JobDetails } from "@/shared/models/job/model";
import {
 transformToJobSummary,
 transformToJobOpportunity,
 type JobDatabaseItem,
} from "@/shared/mappers";

const JOBS_DATABASE: JobDatabaseItem[] = [
 {
  id: "job-1",
  title: "E-commerce DApp Frontend",
  description:
   "We need a skilled frontend developer to build a decentralized e-commerce platform with React and Web3 integration. The application should include user authentication, product catalog, and shopping cart functionality with seamless blockchain integration.",
  category: "Development",
  budget: "3.5 ETH",
  postedDate: "1 week ago",
  dueDate: "Due in 7 days",
  status: "In Progress",
  proposals: 1,
  tags: ["React", "Web3", "E-commerce", "TypeScript"],
  freelancer: {
   id: "alex123",
   name: "Alex Chen",
  },
  clientId: "client-1",
  daysLeft: 7,
 },
 {
  id: "job-2",
  title: "DeFi Protocol Smart Contract",
  description:
   "Looking for an experienced Solidity developer to create a yield farming smart contract with automated reward distribution and staking mechanisms. The contract must include security features and gas optimization for our DeFi protocol.",
  category: "Smart Contracts",
  budget: "8.0 ETH",
  postedDate: "2 weeks ago",
  dueDate: "Due in 14 days",
  status: "In Progress",
  proposals: 1,
  tags: ["Solidity", "DeFi", "Smart Contracts", "Yield Farming"],
  freelancer: {
   id: "sarah123",
   name: "Sarah Wilson",
  },
  clientId: "client-2",
  daysLeft: 14,
 },
 {
  id: "job-3",
  title: "NFT Marketplace Backend API",
  description:
   "Build a robust backend API for an NFT marketplace with user authentication, metadata storage, and transaction handling. Must support IPFS integration and handle high-volume trading operations.",
  category: "Backend",
  budget: "6.2 ETH",
  postedDate: "3 weeks ago",
  dueDate: "Due in 21 days",
  status: "Just Started",
  proposals: 2,
  tags: ["Node.js", "NFT", "API", "IPFS", "MongoDB"],
  freelancer: {
   id: "michael123",
   name: "Michael Rodriguez",
  },
  clientId: "client-1",
  daysLeft: 21,
 },
 {
  id: "job-4",
  title: "Cross-Chain Bridge Interface",
  description:
   "Develop a user-friendly interface for a cross-chain bridge allowing seamless token transfers between Ethereum and Polygon networks. Focus on security and user experience.",
  category: "Development",
  budget: "10.5 ETH",
  postedDate: "1 month ago",
  dueDate: "Due in 30 days",
  status: "In Progress",
  proposals: 3,
  tags: ["React", "Cross-chain", "Bridge", "Ethereum", "Polygon"],
  freelancer: {
   id: "emma123",
   name: "Emma Thompson",
  },
  clientId: "client-3",
  daysLeft: 30,
 },
 {
  id: "job-5",
  title: "DAO Governance Dashboard",
  description:
   "Create a comprehensive dashboard for DAO members to view proposals, cast votes, and track governance activities. Include real-time updates and voting analytics.",
  category: "Development",
  budget: "7.8 ETH",
  postedDate: "5 weeks ago",
  dueDate: "Due in 35 days",
  status: "Just Started",
  proposals: 1,
  tags: ["Vue.js", "DAO", "Governance", "Analytics", "Web3"],
  freelancer: {
   id: "james123",
   name: "James Kumar",
  },
  clientId: "client-2",
  daysLeft: 35,
 },
 {
  id: "job-6",
  title: "Token Vesting Smart Contract Audit",
  description:
   "Comprehensive security audit of token vesting smart contracts including automated testing, vulnerability assessment, and gas optimization recommendations.",
  category: "Security",
  budget: "4.5 ETH",
  postedDate: "6 weeks ago",
  dueDate: "Due in 42 days",
  status: "In Progress",
  proposals: 1,
  tags: ["Solidity", "Audit", "Security", "Testing", "Gas Optimization"],
  freelancer: {
   id: "lisa123",
   name: "Lisa Park",
  },
  clientId: "client-1",
  daysLeft: 42,
 },
];

const AVAILABLE_JOBS = [
 {
  id: "available-1",
  title: "Build DeFi Dashboard",
  description:
   "Create a comprehensive DeFi dashboard with real-time data visualization",
  budget: "5.0 ETH",
  postedDate: "2 days ago",
  proposals: 12,
  tags: ["React", "TypeScript", "Web3", "DeFi"],
 },
 {
  id: "available-2",
  title: "Smart Contract Audit",
  description: "Security audit for NFT marketplace smart contracts",
  budget: "8.0 ETH",
  postedDate: "1 day ago",
  proposals: 8,
  tags: ["Solidity", "Security", "Audit", "NFT"],
 },
 {
  id: "available-3",
  title: "Mobile Wallet App",
  description:
   "Develop a mobile wallet application for Ethereum and ERC-20 tokens",
  budget: "12.0 ETH",
  postedDate: "3 days ago",
  proposals: 15,
  tags: ["React Native", "Mobile", "Wallet", "Ethereum"],
 },
 {
  id: "available-4",
  title: "DAO Governance Interface",
  description: "Build a user-friendly interface for DAO voting and governance",
  budget: "6.5 ETH",
  postedDate: "4 days ago",
  proposals: 9,
  tags: ["Vue.js", "DAO", "Governance", "Web3"],
 },
 {
  id: "available-5",
  title: "NFT Marketplace Backend",
  description: "Develop scalable backend infrastructure for NFT marketplace",
  budget: "9.0 ETH",
  postedDate: "5 days ago",
  proposals: 11,
  tags: ["Node.js", "NFT", "Backend", "Scalability"],
 },
 {
  id: "available-6",
  title: "Metaverse Gaming Platform",
  description:
   "Build a blockchain-based gaming platform with virtual land ownership and in-game asset trading",
  budget: "15.5 ETH",
  postedDate: "1 week ago",
  proposals: 22,
  tags: ["Unity", "Blockchain", "Gaming", "Metaverse", "NFT"],
 },
];

export const getFreelancerJobs = async (
 freelancerId: string
): Promise<JobOpportunityWithCategory[]> => {
 const freelancerJobs = JOBS_DATABASE.filter(
  (job) => job.freelancer.id === freelancerId
 );
 return freelancerJobs.map(transformToJobOpportunity);
};

export const getClientJobs = async (
 clientId: string
): Promise<JobOpportunityWithCategory[]> => {
 const clientJobs = JOBS_DATABASE.filter((job) => job.clientId === clientId);
 return clientJobs.map(transformToJobOpportunity);
};

export const getActiveJobs = async (
 userId: string,
 userType: "client" | "freelancer"
): Promise<JobSummary[]> => {
 let userJobs: JobDatabaseItem[];

 if (userType === "freelancer") {
  userJobs = JOBS_DATABASE.filter((job) => job.freelancer.id === userId);
 } else {
  userJobs = JOBS_DATABASE.filter((job) => job.clientId === userId);
 }

 const activeJobs = userJobs.filter(
  (job) => job.status === "In Progress" || job.status === "Just Started"
 );

 return activeJobs.map(transformToJobSummary);
};

export const getAvailableJobs = async (): Promise<JobOpportunity[]> => {
 return AVAILABLE_JOBS;
};

export const getJobById = async (
 _jobId: string
): Promise<JobDetails | null> => {
 return null;
};

export const getJobStats = async (
 userId: string,
 userType: "client" | "freelancer"
) => {
 let userJobs: JobDatabaseItem[];

 if (userType === "freelancer") {
  userJobs = JOBS_DATABASE.filter((job) => job.freelancer.id === userId);
 } else {
  userJobs = JOBS_DATABASE.filter((job) => job.clientId === userId);
 }

 const activeJobs = userJobs.filter(
  (job) => job.status === "In Progress" || job.status === "Just Started"
 );
 const completedJobs = userJobs.filter((job) => job.status === "Completed");

 return {
  total: userJobs.length,
  active: activeJobs.length,
  completed: completedJobs.length,
  totalEarnings: userJobs.reduce((sum, job) => sum + parseFloat(job.budget), 0),
 };
};

export const getMyJobs = async (
 userId: string
): Promise<JobOpportunityWithCategory[]> => {
 return getFreelancerJobs(userId);
};

export const getAllJobOpportunities = async (): Promise<JobOpportunity[]> => {
 return getAvailableJobs();
};

export const updateJobStatus = async (
 _jobId: string,
 _status: string
): Promise<void> => {};

export const applyToJob = async (
 _jobId: string,
 _freelancerId: string
): Promise<void> => {};

export const assignJob = async (
 _jobId: string,
 _freelancerId: string
): Promise<void> => {};

export const completeJob = async (_jobId: string): Promise<void> => {};

const getClientJobsData = (): Job[] => {
 return JOBS_DATABASE.map((job) => ({
  id: job.id,
  title: job.title,
  freelancer: job.freelancer,
  dueDate: job.dueDate,
  status: job.status,
  cost: job.budget,
  daysLeft: job.daysLeft,
 }));
};

const getFreelancerJobsData = (): Job[] => {
 return getClientJobsData();
};

export const getClientJobsOverview = async (): Promise<JobsData> => {
 const allJobs = getClientJobsData();
 const activeJobs = allJobs.filter(
  (job) => job.status === "In Progress" || job.status === "Just Started"
 );
 const completedJobs = allJobs.filter((job) => job.status === "Completed");

 return {
  allJobs,
  activeJobs,
  completedJobs,
 };
};

export const getFreelancerJobsOverview = async (): Promise<JobsData> => {
 const allJobs = getFreelancerJobsData();
 const activeJobs = allJobs.filter(
  (job) => job.status === "In Progress" || job.status === "Just Started"
 );
 const completedJobs = allJobs.filter((job) => job.status === "Completed");

 return {
  allJobs,
  activeJobs,
  completedJobs,
 };
};

export const getJobsData = async (
 userType: "client" | "freelancer"
): Promise<JobsData> => {
 return userType === "client"
  ? await getClientJobsOverview()
  : await getFreelancerJobsOverview();
};

export const getClientSatisfactionStats = async () => {
 return {
  satisfactionPercentage: 96,
  averageRating: 4.8,
  totalReviews: 23,
  monthlyChange: 0.2,
  recentFeedback: "Great communication and quality work!",
 };
};
