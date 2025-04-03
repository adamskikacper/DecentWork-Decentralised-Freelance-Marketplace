import React, { memo } from "react";
import { ProjectSummary } from "../../../types";
import SectionHeader from "../../../components/SectionHeader";
import ProjectsList from "../../../components/ProjectsList";
import Breadcrumbs from "@/components/Breadcrumbs";
import { DASHBOARD_LINKS, NAV_LINKS } from "@/constants";

interface ClientMyProjectsProps {
 onMessage: (userId: string) => void;
 onProjectDetails: (projectId: string) => void;
}

// Sample project data for client
const CLIENT_PROJECTS: ProjectSummary[] = [
 {
  id: "project1",
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
  id: "project2",
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
  id: "project3",
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
];

const ClientMyProjects = memo(
 ({ onMessage, onProjectDetails }: ClientMyProjectsProps) => {
  return (
   <>
    <Breadcrumbs
     items={[
      { label: "Dashboard", path: DASHBOARD_LINKS.HOME },
      { label: "Projects" },
     ]}
    />
    <SectionHeader
     title="Projects"
     description="View and manage all your current and past projects."
    />

    <ProjectsList
     projects={CLIENT_PROJECTS}
     showCreationDate={true}
     onMessage={onMessage}
     onDetails={onProjectDetails}
    />
   </>
  );
 }
);

ClientMyProjects.displayName = "ClientMyProjects";

export default ClientMyProjects;
