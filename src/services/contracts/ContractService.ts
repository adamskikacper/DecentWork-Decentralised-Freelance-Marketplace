import { ethers } from "ethers";
import FreelanceMarketplaceABI from "./abis/FreelanceMarketplace.json";
import EscrowABI from "./abis/Escrow.json";
import ReputationSystemABI from "./abis/ReputationSystem.json";

// Contract addresses (Polygon Amoy Testnet)
export const CONTRACT_ADDRESSES = {
 MARKPLACE: "0x1FD8613F0eae0770B844844A5775e3541De30617",
 ESCROW: "0x2f3969D38d195Bb24D919C4b2B103F4Aa2B2A4C3",
 REPUTATION: "0xd55E5C13b4423ad5cb0fC7b5B1c3507B9FE87B7d",
};

export class ContractService {
 provider: ethers.BrowserProvider | null = null;
 signer: ethers.Signer | null = null;
 marketplace: ethers.Contract | null = null;
 escrow: ethers.Contract | null = null;
 reputation: ethers.Contract | null = null;

 /**
  * Initialize the contract service with a provider and signer
  * @param provider BrowserProvider
  */
 async init(provider: ethers.BrowserProvider): Promise<void> {
  this.provider = provider;
  this.signer = await provider.getSigner();
  this.initContracts();
 }

 /**
  * Initialize contract instances
  */
 private initContracts(): void {
  if (!this.provider || !this.signer) return;

  this.marketplace = new ethers.Contract(
   CONTRACT_ADDRESSES.MARKPLACE,
   FreelanceMarketplaceABI,
   this.signer
  );

  this.escrow = new ethers.Contract(
   CONTRACT_ADDRESSES.ESCROW,
   EscrowABI,
   this.signer
  );

  this.reputation = new ethers.Contract(
   CONTRACT_ADDRESSES.REPUTATION,
   ReputationSystemABI,
   this.signer
  );
 }

 // Project Methods
 async createProject(
  title: string,
  description: string,
  budget: string,
  deadline: number,
  requiredSkills: string[],
  experienceLevel: string | number,
  projectDuration: string | number,
  projectType: string | number,
  attachmentHashes: string[]
 ): Promise<string> {
  if (!this.marketplace) throw new Error("Contracts not initialized");

  const tx = await this.marketplace.createProject(
   title,
   description,
   ethers.parseEther(budget),
   deadline,
   requiredSkills,
   experienceLevel,
   projectDuration,
   projectType,
   attachmentHashes
  );

  const receipt = await tx.wait();
  const event = receipt.logs
   .filter(
    (log: any) =>
     this.marketplace?.interface.parseLog(log)?.name === "ProjectCreated"
   )
   .map((log: any) => this.marketplace?.interface.parseLog(log))[0];

  return event?.args?.projectId.toString() || "";
 }

 async getAllProjects(): Promise<any[]> {
  if (!this.marketplace) throw new Error("Contracts not initialized");

  const projectIds = await this.marketplace.getAllProjectIds();
  const projects = await Promise.all(
   projectIds.map(async (id: bigint) => {
    const project = await this.marketplace?.getProject(id);
    return this.formatProject(project, id);
   })
  );

  return projects;
 }

 async getProject(projectId: string): Promise<any> {
  if (!this.marketplace) throw new Error("Contracts not initialized");

  const project = await this.marketplace.getProject(projectId);
  return this.formatProject(project, projectId);
 }

 // Milestone Methods
 async createMilestone(
  projectId: string,
  description: string,
  amount: string,
  deadline: number
 ): Promise<string> {
  if (!this.marketplace) throw new Error("Contracts not initialized");

  const tx = await this.marketplace.createMilestone(
   projectId,
   description,
   ethers.parseEther(amount),
   deadline
  );

  const receipt = await tx.wait();
  const event = receipt.logs
   .filter(
    (log: any) =>
     this.marketplace?.interface.parseLog(log)?.name === "MilestoneCreated"
   )
   .map((log: any) => this.marketplace?.interface.parseLog(log))[0];

  return event?.args?.milestoneId.toString() || "";
 }

 async getProjectMilestones(projectId: string): Promise<any[]> {
  if (!this.marketplace) throw new Error("Contracts not initialized");

  const milestoneIds = await this.marketplace.getProjectMilestoneIds(projectId);
  const milestones = await Promise.all(
   milestoneIds.map(async (id: bigint) => {
    const milestone = await this.marketplace?.getMilestone(id);
    return {
     id: id.toString(),
     projectId: milestone.projectId.toString(),
     description: milestone.description,
     amount: ethers.formatEther(milestone.amount),
     deadline: new Date(Number(milestone.deadline) * 1000),
     status: this.getMilestoneStatusText(milestone.status),
    };
   })
  );

  return milestones;
 }

 // Proposal Methods
 async submitProposal(
  projectId: string,
  description: string,
  price: string,
  estimatedTime: number
 ): Promise<string> {
  if (!this.marketplace) throw new Error("Contracts not initialized");

  const tx = await this.marketplace.submitProposal(
   projectId,
   description,
   ethers.parseEther(price),
   estimatedTime
  );

  const receipt = await tx.wait();
  const event = receipt.logs
   .filter(
    (log: any) =>
     this.marketplace?.interface.parseLog(log)?.name === "ProposalSubmitted"
   )
   .map((log: any) => this.marketplace?.interface.parseLog(log))[0];

  return event?.args?.proposalId.toString() || "";
 }

 async getProjectProposals(projectId: string): Promise<any[]> {
  if (!this.marketplace) throw new Error("Contracts not initialized");

  const proposalIds = await this.marketplace.getProjectProposalIds(projectId);
  const proposals = await Promise.all(
   proposalIds.map(async (id: bigint) => {
    const proposal = await this.marketplace?.getProposal(id);
    return {
     id: id.toString(),
     projectId: proposal.projectId.toString(),
     freelancer: proposal.freelancer,
     description: proposal.description,
     price: ethers.formatEther(proposal.price),
     estimatedTime: Number(proposal.estimatedTime),
     status: this.getProposalStatusText(proposal.status),
     timestamp: new Date(Number(proposal.timestamp) * 1000),
    };
   })
  );

  return proposals;
 }

 async acceptProposal(proposalId: string): Promise<boolean> {
  if (!this.marketplace) throw new Error("Contracts not initialized");

  const tx = await this.marketplace.acceptProposal(proposalId);
  await tx.wait();
  return true;
 }

 // Reputation Methods
 async createReview(
  projectId: string,
  reviewee: string,
  rating: number,
  comment: string
 ): Promise<string> {
  if (!this.reputation) throw new Error("Contracts not initialized");

  const tx = await this.reputation.createReview(
   projectId,
   reviewee,
   rating,
   comment
  );

  const receipt = await tx.wait();
  const event = receipt.logs
   .filter(
    (log: any) => this.reputation?.interface.parseLog(log)?.name === "NewReview"
   )
   .map((log: any) => this.reputation?.interface.parseLog(log))[0];

  return event?.args?.reviewId || "";
 }

 async getUserReviews(address: string): Promise<any[]> {
  if (!this.reputation) throw new Error("Contracts not initialized");

  const reviews = await this.reputation.getUserReviews(address);
  return reviews.map((review: any) => ({
   id: review.id.toString(),
   projectId: review.projectId.toString(),
   reviewer: review.reviewer,
   reviewee: review.reviewee,
   rating: review.rating,
   comment: review.comment,
   timestamp: new Date(Number(review.timestamp) * 1000),
  }));
 }

 async getUserAverageRating(address: string): Promise<number> {
  if (!this.reputation) throw new Error("Contracts not initialized");

  const rating = await this.reputation.getAverageRating(address);
  return Number(rating) / 10; // Assuming rating is stored as 1-50 and divided by 10 for display (0.1-5.0)
 }

 // Helper methods
 private formatProject(project: any, projectId: string | bigint): any {
  return {
   id: projectId.toString(),
   title: project.title,
   description: project.description,
   client: project.client,
   freelancer: project.freelancer,
   budget: ethers.formatEther(project.budget),
   deadline: new Date(Number(project.deadline) * 1000),
   createdAt: new Date(Number(project.createdAt) * 1000),
   status: this.getProjectStatusText(project.status),
   requiredSkills: project.requiredSkills,
   experienceLevel: project.experienceLevel,
   projectDuration: project.projectDuration,
   projectType: project.projectType,
   attachmentHashes: project.attachmentHashes,
  };
 }

 private getProjectStatusText(status: number): string {
  const statuses = ["Open", "InProgress", "Completed", "Cancelled"];
  return statuses[status] || "Unknown";
 }

 private getMilestoneStatusText(status: number): string {
  const statuses = ["Pending", "Funded", "Completed", "Cancelled"];
  return statuses[status] || "Unknown";
 }

 private getProposalStatusText(status: number): string {
  const statuses = ["Pending", "Accepted", "Rejected"];
  return statuses[status] || "Unknown";
 }
}

// Create singleton instance
const contractService = new ContractService();
export default contractService;
