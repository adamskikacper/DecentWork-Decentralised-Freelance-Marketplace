import React, { memo } from "react";
import { FreelancerSummary } from "../../../types";
import SectionHeader from "../../../components/layout/SectionHeader";
import FreelancerTable from "../../../components/profile/FreelancerTable";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import { DASHBOARD_LINKS, NAV_LINKS } from "@/constants";

interface ClientMyFreelancersProps {
 onMessage: (userId: string) => void;
 onFreelancerDetails: (freelancerId: string) => void;
}

// Sample data - would come from API in a real app
const HIRED_FREELANCERS: FreelancerSummary[] = [
 {
  id: "alex123",
  name: "Alex Kotov",
  title: "Frontend Developer",
  specialty: "React, Web3",
  projectsCount: "2 Active",
  status: "Active",
  rating: 4.9,
 },
 {
  id: "maria123",
  name: "Maria Solovey",
  title: "Smart Contract Developer",
  specialty: "Solidity, Audits",
  projectsCount: "1 Active",
  status: "Active",
  rating: 4.8,
 },
];

const ClientMyFreelancers = memo(
 ({ onMessage, onFreelancerDetails }: ClientMyFreelancersProps) => {
  return (
   <>
    <Breadcrumbs
     items={[
      { label: "Dashboard", path: DASHBOARD_LINKS.HOME },
      { label: "Freelancers" },
     ]}
    />

    <SectionHeader
     title="My Freelancers"
     description="Manage your hired freelancers and their projects."
    />

    <FreelancerTable
     freelancers={HIRED_FREELANCERS}
     onMessage={onMessage}
     onView={onFreelancerDetails}
    />
   </>
  );
 }
);

ClientMyFreelancers.displayName = "ClientMyFreelancers";

export default ClientMyFreelancers;
