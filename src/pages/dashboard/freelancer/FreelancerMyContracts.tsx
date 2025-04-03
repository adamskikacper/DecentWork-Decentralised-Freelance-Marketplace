import React, { memo } from "react";
import { ProjectSummary } from "../../../types";
import SectionHeader from "../../../components/SectionHeader";
import ProjectsList from "../../../components/ProjectsList";
import Breadcrumbs from "@/components/Breadcrumbs";
import { NAV_LINKS } from "@/constants";

interface FreelancerMyContractsProps {
 onMessage: (userId: string) => void;
 onProjectDetails: (projectId: string) => void;
 onClientDetails: (clientId: string) => void;
}

// Sample project data for freelancer
const FREELANCER_PROJECTS: ProjectSummary[] = [
 {
  id: "project1",
  title: "Frontend Development for DEX Platform",
  freelancer: {
   id: "current-user",
   name: "You",
  },
  dueDate: "Due in 5 days",
  status: "In Progress",
  cost: "1.2 ETH",
  progress: 75,
 },
 {
  id: "project2",
  title: "Smart Contract Audit for NFT Marketplace",
  freelancer: {
   id: "current-user",
   name: "You",
  },
  dueDate: "Due in 12 days",
  status: "Just Started",
  cost: "2.5 ETH",
  progress: 25,
 },
 {
  id: "project3",
  title: "DApp UI/UX Design",
  freelancer: {
   id: "current-user",
   name: "You",
  },
  dueDate: "Completed on March 15, 2023",
  status: "Completed",
  cost: "1.8 ETH",
  progress: 100,
 },
];

const FreelancerMyContracts = memo(
 ({
  onMessage,
  onProjectDetails,
  onClientDetails,
 }: FreelancerMyContractsProps) => {
  return (
   <>
    <Breadcrumbs
     items={[
      { label: "Home", path: NAV_LINKS.HOME },
      { label: "Dashboard", path: NAV_LINKS.DASHBOARD },
      { label: "My Contracts", path: "/dashboard/contracts" },
     ]}
    />
    <SectionHeader
     title="My Contracts"
     description="View and manage your active and completed contracts."
    />

    <ProjectsList
     projects={FREELANCER_PROJECTS}
     showCreationDate={true}
     onMessage={onMessage}
     onDetails={onProjectDetails}
    />
   </>
  );
 }
);

FreelancerMyContracts.displayName = "FreelancerMyContracts";

export default FreelancerMyContracts;
