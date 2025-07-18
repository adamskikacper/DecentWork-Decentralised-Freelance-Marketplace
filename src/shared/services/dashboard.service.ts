import type {
 DashboardHomeData,
 DashboardStats,
 JobSummary,
 FreelancerSummary,
} from "@/shared/models/dashboard";

export const getDashboardStats = async (
 userType: "client" | "freelancer"
): Promise<DashboardStats[]> => {
 const data = await getDashboardData(userType);
 return data.dashboardStats;
};

export const getActiveJobs = async (
 userType: "client" | "freelancer"
): Promise<JobSummary[]> => {
 const data = await getDashboardData(userType);
 return data.activeJobs;
};

export const getDashboardTopFreelancers = async (): Promise<
 FreelancerSummary[]
> => {
 return [
  {
   id: "alex123",
   name: "Alex K.",
   title: "Blockchain Developer",
   specialty: "Solidity, React, Web3",
   jobsCount: "2 Active",
   status: "Active",
   rating: 4.9,
   reviewCount: 127,
   hourlyRate: "0.05 ETH/hr",
   skills: ["Solidity", "React", "Web3"],
   avatar: "/placeholder.svg",
   hireHistory: "current",
  },
  {
   id: "maria123",
   name: "Maria S.",
   title: "Smart Contract Auditor",
   specialty: "Security, Solidity, Audit",
   jobsCount: "1 Active",
   status: "Active",
   rating: 4.8,
   reviewCount: 89,
   hourlyRate: "0.08 ETH/hr",
   skills: ["Security", "Solidity", "Audit"],
   avatar: "/placeholder.svg",
   hireHistory: "current",
  },
  {
   id: "david123",
   name: "David C.",
   title: "DeFi Specialist",
   specialty: "DeFi, TypeScript, Node.js",
   jobsCount: "1 Active",
   status: "Active",
   rating: 4.7,
   reviewCount: 156,
   hourlyRate: "0.06 ETH/hr",
   skills: ["DeFi", "TypeScript", "Node.js"],
   avatar: "/placeholder.svg",
   hireHistory: "current",
  },
 ];
};

export const getDashboardData = async (
 userType: "client" | "freelancer"
): Promise<DashboardHomeData> => {
 return userType === "client"
  ? await getClientDashboardData()
  : await getFreelancerDashboardData();
};

const getClientDashboardData = async (): Promise<DashboardHomeData> => {
 return {
  dashboardStats: [
   {
    title: "Active Jobs",
    value: "5",
    icon: null,
    change: {
     value: "2",
     isPositive: true,
     label: "from last month",
    },
   },
   {
    title: "Hired Freelancers",
    value: "12",
    icon: null,
    change: {
     value: "3",
     isPositive: true,
     label: "from last month",
    },
   },
   {
    title: "Total Spent",
    value: "32.5 ETH",
    icon: null,
    change: {
     value: "12.5 ETH",
     isPositive: true,
     label: "from last month",
    },
   },
   {
    title: "Completed Jobs",
    value: "28",
    icon: null,
    change: {
     value: "5",
     isPositive: true,
     label: "from last month",
    },
   },
  ],
  activeJobs: [
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
    progress: 60,
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
    progress: 15,
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
    progress: 100,
   },
  ],
  topFreelancers: await getDashboardTopFreelancers(),
  jobOpportunities: [],
 };
};

const getFreelancerDashboardData = async (): Promise<DashboardHomeData> => {
 return {
  dashboardStats: [
   {
    title: "Current Balance",
    value: "3.2 ETH",
    icon: null,
    change: {
     value: "0.5 ETH",
     isPositive: true,
     label: "from last month",
    },
   },
   {
    title: "Active Jobs",
    value: "3",
    icon: null,
    change: {
     value: "1",
     isPositive: true,
     label: "from last month",
    },
   },
   {
    title: "Completed Jobs",
    value: "12",
    icon: null,
    change: {
     value: "3",
     isPositive: true,
     label: "from last month",
    },
   },
   {
    title: "Average Rating",
    value: "4.8/5",
    icon: null,
    change: {
     value: "0.2",
     isPositive: true,
     label: "from last month",
    },
   },
  ],
  activeJobs: [
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
    progress: 45,
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
    progress: 10,
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
    progress: 75,
   },
  ],
  topFreelancers: [],
  jobOpportunities: [],
 };
};
