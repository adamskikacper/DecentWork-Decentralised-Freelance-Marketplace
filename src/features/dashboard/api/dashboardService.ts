import type {
 DashboardHomeData,
 FreelancerSummary,
 JobOpportunity,
 DashboardStats,
 JobSummary,
} from "@/types/dashboard";

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

export const getTopFreelancers = async (): Promise<FreelancerSummary[]> => {
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
  },
 ];
};

export const getJobOpportunities = async (): Promise<JobOpportunity[]> => {
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
   title: "NFT Marketplace UI Design",
   description:
    "Design a modern and intuitive user interface for NFT marketplace",
   budget: "4.5 ETH",
   postedDate: "1 day ago",
   proposals: 22,
   tags: ["UI/UX", "Figma", "Design", "NFT"],
  },
  {
   id: "job5",
   title: "Tokenomics Consultation",
   description:
    "Provide tokenomics analysis and recommendations for new DeFi protocol",
   budget: "6.0 ETH",
   postedDate: "4 days ago",
   proposals: 5,
   tags: ["Tokenomics", "DeFi", "Consulting", "Economics"],
  },
  {
   id: "job6",
   title: "Cross-chain Bridge Development",
   description:
    "Build a secure cross-chain bridge for transferring assets between Ethereum and Polygon",
   budget: "15.0 ETH",
   postedDate: "2 days ago",
   proposals: 18,
   tags: ["Solidity", "Cross-chain", "Bridge", "Security"],
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

export const getAllFreelancers = async (): Promise<FreelancerSummary[]> => {
 return [
  {
   id: "alex123",
   name: "Alex K.",
   title: "Blockchain Developer",
   specialty: "Solidity, React, Web3",
   jobsCount: "2 Active",
   status: "Online",
   rating: 4.9,
   reviewCount: 127,
   hourlyRate: "0.05 ETH/hr",
   skills: ["Solidity", "React", "Web3"],
   avatar: "/placeholder.svg",
  },
  {
   id: "maria123",
   name: "Maria S.",
   title: "Smart Contract Auditor",
   specialty: "Security, Solidity, Audit",
   jobsCount: "1 Active",
   status: "Offline",
   rating: 4.8,
   reviewCount: 89,
   hourlyRate: "0.08 ETH/hr",
   skills: ["Security", "Solidity", "Audit"],
   avatar: "/placeholder.svg",
  },
  {
   id: "david123",
   name: "David C.",
   title: "DeFi Specialist",
   specialty: "DeFi, TypeScript, Node.js",
   jobsCount: "0 Active",
   status: "Available",
   rating: 4.7,
   reviewCount: 156,
   hourlyRate: "0.06 ETH/hr",
   skills: ["DeFi", "TypeScript", "Node.js"],
   avatar: "/placeholder.svg",
  },
  {
   id: "sarah123",
   name: "Sarah L.",
   title: "Frontend Developer",
   specialty: "React, Vue.js, CSS",
   jobsCount: "3 Active",
   status: "Online",
   rating: 4.6,
   reviewCount: 203,
   hourlyRate: "0.04 ETH/hr",
   skills: ["React", "Vue.js", "CSS"],
   avatar: "/placeholder.svg",
  },
  {
   id: "james123",
   name: "James W.",
   title: "Full Stack Developer",
   specialty: "Node.js, React, MongoDB",
   jobsCount: "0 Active",
   status: "Available",
   rating: 4.8,
   reviewCount: 174,
   hourlyRate: "0.07 ETH/hr",
   skills: ["Node.js", "React", "MongoDB"],
   avatar: "/placeholder.svg",
  },
  {
   id: "emily123",
   name: "Emily R.",
   title: "UI/UX Designer",
   specialty: "Figma, Design Systems, Prototyping",
   jobsCount: "0 Active",
   status: "Available",
   rating: 4.9,
   reviewCount: 98,
   hourlyRate: "0.04 ETH/hr",
   skills: ["Figma", "Design Systems", "Prototyping"],
   avatar: "/placeholder.svg",
  },
  {
   id: "michael123",
   name: "Michael T.",
   title: "DevOps Engineer",
   specialty: "AWS, Docker, Kubernetes",
   jobsCount: "0 Active",
   status: "Available",
   rating: 4.7,
   reviewCount: 142,
   hourlyRate: "0.07 ETH/hr",
   skills: ["AWS", "Docker", "Kubernetes"],
   avatar: "/placeholder.svg",
  },
 ];
};

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
  topFreelancers: await getTopFreelancers(),
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
  jobOpportunities: await getJobOpportunities(),
 };
};
