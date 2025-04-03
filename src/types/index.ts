// This file contains global shared types used across the application
export interface User {
 id: string;
 name: string;
 email: string;
 type: "client" | "freelancer";
}

export interface Skill {
 value: string;
 label: string;
}

export interface WalletInfo {
 address: string;
 balance: string;
 isConnected: boolean;
}

export interface ProjectSummary {
 id: string;
 title: string;
 freelancer: {
  id: string;
  name: string;
 };
 dueDate: string;
 status: string;
 cost: string;
 progress: number;
}

export interface FreelancerSummary {
 id: string;
 name: string;
 title: string;
 specialty: string;
 rating: number;
 projectsCount: number | string;
 status: string;
}
