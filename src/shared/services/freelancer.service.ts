import type { FreelancerSummary } from "@/shared/models/dashboard";

export const getAllFreelancers = async (): Promise<FreelancerSummary[]> => {
 const freelancers = [
  {
   id: "alex123",
   name: "Alex K.",
   title: "Blockchain Developer",
   specialty: "Solidity, React, Web3",
   jobsCount: "2 Active",
   rating: 4.9,
   reviewCount: 127,
   hourlyRate: "0.05 ETH/hr",
   skills: ["Solidity", "React", "Web3"],
   avatar: "/placeholder.svg",
   hireHistory: "current" as const,
  },
  {
   id: "maria123",
   name: "Maria S.",
   title: "Smart Contract Auditor",
   specialty: "Security, Solidity, Audit",
   jobsCount: "1 Active",
   rating: 4.8,
   reviewCount: 89,
   hourlyRate: "0.08 ETH/hr",
   skills: ["Security", "Solidity", "Audit"],
   avatar: "/placeholder.svg",
   hireHistory: "current" as const,
  },
  {
   id: "david123",
   name: "David C.",
   title: "DeFi Specialist",
   specialty: "DeFi, TypeScript, Node.js",
   jobsCount: "0 Active",
   rating: 4.7,
   reviewCount: 156,
   hourlyRate: "0.06 ETH/hr",
   skills: ["DeFi", "TypeScript", "Node.js"],
   avatar: "/placeholder.svg",
   hireHistory: "previous" as const,
  },
  {
   id: "sarah123",
   name: "Sarah L.",
   title: "Frontend Developer",
   specialty: "React, Vue.js, CSS",
   jobsCount: "3 Active",
   rating: 4.6,
   reviewCount: 203,
   hourlyRate: "0.04 ETH/hr",
   skills: ["React", "Vue.js", "CSS"],
   avatar: "/placeholder.svg",
   hireHistory: "current" as const,
  },
  {
   id: "james123",
   name: "James W.",
   title: "Full Stack Developer",
   specialty: "Node.js, React, MongoDB",
   jobsCount: "0 Active",
   rating: 4.8,
   reviewCount: 174,
   hourlyRate: "0.07 ETH/hr",
   skills: ["Node.js", "React", "MongoDB"],
   avatar: "/placeholder.svg",
   hireHistory: "previous" as const,
  },
  {
   id: "emily123",
   name: "Emily R.",
   title: "UI/UX Designer",
   specialty: "Figma, Design Systems, Prototyping",
   jobsCount: "0 Active",
   rating: 4.9,
   reviewCount: 98,
   hourlyRate: "0.04 ETH/hr",
   skills: ["Figma", "Design Systems", "Prototyping"],
   avatar: "/placeholder.svg",
   hireHistory: "never" as const,
  },
  {
   id: "michael123",
   name: "Michael T.",
   title: "DevOps Engineer",
   specialty: "AWS, Docker, Kubernetes",
   jobsCount: "0 Active",
   rating: 4.7,
   reviewCount: 142,
   hourlyRate: "0.07 ETH/hr",
   skills: ["AWS", "Docker", "Kubernetes"],
   avatar: "/placeholder.svg",
   hireHistory: "never" as const,
  },
 ];

 return freelancers.map((freelancer) => {
  const activeJobsCount = parseInt(freelancer.jobsCount.split(" ")[0]);
  return {
   ...freelancer,
   status: activeJobsCount > 0 ? "Engaged" : "Available",
  };
 });
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

export const getFreelancerDetails = async (freelancerId: string) => {
 if (!freelancerId) return null;
 return {
  id: freelancerId,
  name: "Alex K.",
  role: "Frontend Developer",
  rating: 4.9,
  totalJobs: 23,
  completedJobs: 18,
  joinedDate: "January 2023",
  skills: ["React", "Web3", "TypeScript", "Solidity", "UI/UX"],
  bio: "Experienced frontend developer specializing in Web3 applications and blockchain integration. Strong focus on creating intuitive and responsive user interfaces.",
  recentJobs: [
   {
    id: "1",
    title: "NFT Marketplace UI",
    status: "Completed",
    rating: 5,
   },
   {
    id: "2",
    title: "DeFi Dashboard",
    status: "Completed",
    rating: 4.8,
   },
   {
    id: "3",
    title: "Wallet Integration",
    status: "In Progress",
   },
  ],
 };
};

export const getFreelancerPortfolio = async (freelancerId: string) => {
 return null;
};

export const getFreelancerReviews = async (freelancerId: string) => {
 return null;
};
