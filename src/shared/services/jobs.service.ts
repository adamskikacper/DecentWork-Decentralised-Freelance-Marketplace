import type { Job, JobsData } from "@/shared/models/dashboard";

const getClientJobsData = (): Job[] => {
 return [
  {
   id: "job1",
   title: "Wallet Integration for NFT Marketplace",
   freelancer: {
    id: "alex123",
    name: "Alex K.",
   },
   dueDate: "Due in 8 days",
   status: "In Progress",
   cost: "3.5 ETH",
   daysLeft: 8,
  },
  {
   id: "job2",
   title: "Smart Contract for Token Vesting",
   freelancer: {
    id: "maria123",
    name: "Maria S.",
   },
   dueDate: "Due in 15 days",
   status: "Just Started",
   cost: "5.0 ETH",
   daysLeft: 15,
  },
  {
   id: "job3",
   title: "DeFi Interface Redesign",
   freelancer: {
    id: "david123",
    name: "David C.",
   },
   dueDate: "Completed on April 2, 2023",
   status: "Completed",
   cost: "4.0 ETH",
   daysLeft: 0,
  },
  {
   id: "job4",
   title: "Blockchain Analytics Dashboard",
   freelancer: {
    id: "sarah123",
    name: "Sarah L.",
   },
   dueDate: "Due in 20 days",
   status: "In Progress",
   cost: "6.0 ETH",
   daysLeft: 20,
  },
  {
   id: "job5",
   title: "Smart Contract Audit",
   freelancer: {
    id: "james123",
    name: "James W.",
   },
   dueDate: "Completed on March 15, 2023",
   status: "Completed",
   cost: "3.0 ETH",
   daysLeft: 0,
  },
 ];
};

const getFreelancerJobsData = (): Job[] => {
 return [
  {
   id: "contract1",
   title: "Build DeFi Analytics Dashboard",
   freelancer: {
    id: "cryptotech_corp",
    name: "CryptoTech Corp",
   },
   dueDate: "Due in 12 days",
   status: "In Progress",
   cost: "4.2 ETH",
   daysLeft: 12,
  },
  {
   id: "contract2",
   title: "Smart Contract Security Review",
   freelancer: {
    id: "defi_solutions",
    name: "DeFi Solutions Ltd",
   },
   dueDate: "Due in 18 days",
   status: "Just Started",
   cost: "6.8 ETH",
   daysLeft: 18,
  },
  {
   id: "contract3",
   title: "NFT Marketplace Frontend",
   freelancer: {
    id: "blockchain_ventures",
    name: "Blockchain Ventures",
   },
   dueDate: "Due in 25 days",
   status: "In Progress",
   cost: "5.5 ETH",
   daysLeft: 25,
  },
  {
   id: "contract4",
   title: "Token Vesting Smart Contract",
   freelancer: {
    id: "web3_innovations",
    name: "Web3 Innovations",
   },
   dueDate: "Completed on March 28, 2023",
   status: "Completed",
   cost: "3.8 ETH",
   daysLeft: 0,
  },
  {
   id: "contract5",
   title: "Cross-chain Bridge Implementation",
   freelancer: {
    id: "crypto_builders",
    name: "Crypto Builders Inc",
   },
   dueDate: "Completed on April 5, 2023",
   status: "Completed",
   cost: "8.2 ETH",
   daysLeft: 0,
  },
  {
   id: "contract6",
   title: "DeFi Yield Farming Protocol",
   freelancer: {
    id: "fintech_labs",
    name: "FinTech Labs",
   },
   dueDate: "Completed on February 15, 2023",
   status: "Completed",
   cost: "12.0 ETH",
   daysLeft: 0,
  },
 ];
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

export const getFreelancerJobs = async (): Promise<JobsData> => {
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
  : await getFreelancerJobs();
};
