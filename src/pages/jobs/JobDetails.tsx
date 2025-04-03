import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import JobDetailHeader from "../../components/JobDetailHeader";
import JobDescription from "../../components/JobDescription";
import BidForm from "../../components/BidForm";
import ClientInfo from "../../components/ClientInfo";

import SimilarJobsSection from "../../components/SimilarJobsSection";
import Breadcrumbs from "../../components/Breadcrumbs";

// Mock jobs data - would be fetched from an API in a real application
const MOCK_JOBS = [
 {
  id: 1,
  title: "DeFi Dashboard UI Design",
  description:
   "Looking for a skilled UI designer to create a modern and intuitive dashboard for our DeFi platform. The design should be clean, user-friendly, and align with our brand identity.",
  longDescription: `We are looking for a talented UI designer to help us create a modern and intuitive dashboard for our decentralized finance (DeFi) platform. The ideal candidate will have experience designing interfaces for financial applications and understand the unique challenges of presenting complex data in a clear and accessible way.

The dashboard will serve as the main interface for users to monitor their investments, track portfolio performance, and execute transactions. It should be visually appealing while maintaining a focus on usability and providing easy access to key information.

Key requirements:
- Design a responsive dashboard that works well on desktop and mobile devices
- Create intuitive visualizations for portfolio performance, token prices, and other financial metrics
- Design components for transaction history, wallet management, and settings
- Ensure consistency with our existing brand guidelines
- Provide deliverables in Figma format with organized layers and components

The final deliverable should include all necessary screens, components, and interactive prototypes that clearly demonstrate user flows.`,
  category: "Design",
  client: "FinDEX",
  clientRating: "4.9",
  clientLocation: "United States",
  clientHiringRate: "90%",
  clientJobs: "12",
  budget: "1.5-2.0 ETH",
  duration: "10-15 days",
  postedDate: "2 days ago",
  proposals: 8,
  tags: ["UI/UX", "Figma", "Dashboard", "DeFi"],
  skills: [
   "UI Design",
   "UX Design",
   "Figma",
   "Responsive Design",
   "Data Visualization",
  ],
  attachments: [
   { name: "Project_Brief.pdf", size: "2.3 MB" },
   { name: "Brand_Guidelines.pdf", size: "5.1 MB" },
   { name: "Reference_Examples.zip", size: "8.7 MB" },
  ],
 },
 {
  id: 2,
  title: "UI Design for Crypto Wallet",
  description:
   "Design a user-friendly interface for our cryptocurrency wallet app with focus on simplicity and security.",
  longDescription: `We are seeking a talented UI designer to create an intuitive and secure interface for our cryptocurrency wallet application. The ideal candidate should have experience in designing financial applications and understand the importance of security in crypto applications.

Key requirements:
- Design a clean and modern interface for our wallet app
- Create intuitive flows for sending and receiving crypto
- Design secure authentication and transaction confirmation screens
- Ensure the design works well on both mobile and desktop
- Provide all deliverables in Figma format`,
  category: "Design",
  client: "CryptoWallet Inc",
  clientRating: "4.7",
  clientLocation: "Singapore",
  clientHiringRate: "85%",
  clientJobs: "8",
  budget: "0.8-1.2 ETH",
  duration: "5-7 days",
  postedDate: "3 days ago",
  proposals: 5,
  tags: ["UI/UX", "Mobile", "Wallet"],
  skills: ["UI Design", "Mobile Design", "Figma", "Crypto", "Security UX"],
  attachments: [
   { name: "Requirements.pdf", size: "1.8 MB" },
   { name: "Brand_Assets.zip", size: "4.2 MB" },
  ],
 },
 {
  id: 3,
  title: "Dashboard UI for Blockchain Explorer",
  description:
   "Design a comprehensive dashboard for our blockchain explorer with intuitive data visualization components.",
  longDescription: `We need a skilled UI designer to create a comprehensive dashboard for our blockchain explorer. The dashboard should make complex blockchain data accessible and understandable to both novice and experienced users.

Key requirements:
- Design intuitive visualizations for blockchain metrics
- Create responsive layouts for all screen sizes
- Design advanced search and filtering interfaces
- Implement dark and light themes
- Provide Figma files with organized components`,
  category: "Design",
  client: "BlockExplorer",
  clientRating: "4.8",
  clientLocation: "Germany",
  clientHiringRate: "92%",
  clientJobs: "15",
  budget: "2.0-3.0 ETH",
  duration: "12-15 days",
  postedDate: "1 week ago",
  proposals: 12,
  tags: ["Dashboard", "Data Viz", "UI"],
  skills: [
   "UI Design",
   "Data Visualization",
   "Dashboard Design",
   "Figma",
   "Responsive Design",
  ],
  attachments: [
   { name: "Technical_Specs.pdf", size: "3.1 MB" },
   { name: "Design_System.sketch", size: "6.5 MB" },
  ],
 },
 {
  id: 4,
  title: "NFT Marketplace Redesign",
  description:
   "Redesign our NFT marketplace with a focus on showcasing digital art and improving the bidding experience.",
  longDescription: `We're looking for a creative UI designer to reimagine our NFT marketplace. The new design should better showcase digital artworks and make the bidding process more engaging and intuitive.

Key requirements:
- Design an immersive browsing experience for NFT collections
- Create intuitive bidding and auction interfaces
- Design artist profile and collection pages
- Implement responsive layouts for all devices
- Deliver complete Figma files with components`,
  category: "Design",
  client: "NFTVerse",
  clientRating: "4.6",
  clientLocation: "United States",
  clientHiringRate: "88%",
  clientJobs: "10",
  budget: "2.5-3.5 ETH",
  duration: "15-20 days",
  postedDate: "4 days ago",
  proposals: 9,
  tags: ["NFT", "Marketplace", "UI/UX"],
  skills: ["UI Design", "NFT", "Marketplace Design", "Figma", "Web3"],
  attachments: [
   { name: "Current_Design.pdf", size: "2.8 MB" },
   { name: "Requirements.docx", size: "1.2 MB" },
  ],
 },
];

const JobDetails = () => {
 const { id } = useParams();
 const jobId = parseInt(id || "0");

 // Find the job from mock data
 const job = MOCK_JOBS.find((j) => j.id === jobId);

 // If job not found, show error state
 if (!job) {
  return (
   <div className="min-h-screen flex flex-col">
    <Navbar />
    <main className="flex-grow pt-24 pb-12 bg-background">
     <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center py-16">
       <h1 className="text-2xl font-bold mb-4">Job Not Found</h1>
       <p className="text-muted-foreground mb-8">
        The job you're looking for doesn't exist or has been removed.
       </p>
       <Link to="/jobs" className="text-primary hover:underline">
        Browse all jobs
       </Link>
      </div>
     </div>
    </main>
    <Footer />
   </div>
  );
 }

 // Get similar jobs (excluding current job)
 const similarJobs = MOCK_JOBS.filter(
  (j) => j.id !== job.id && j.category === job.category
 )
  .slice(0, 3)
  .map((j) => ({
   id: j.id,
   title: j.title,
   description: j.description,
   postedDate: j.postedDate,
   proposals: j.proposals,
   budget: j.budget,
   tags: j.tags,
  }));

 const handleSubmitBid = (bidData: {
  bidAmount: string;
  deliveryDays: string;
  proposal: string;
 }) => {
  // In a real application, this would submit the bid to the backend
  console.log("Submitting bid:", bidData);
 };

 // Breadcrumbs configuration
 const breadcrumbItems = [
  { label: "Jobs", path: "/jobs" },
  { label: job.title },
 ];

 return (
  <div className="min-h-screen flex flex-col">
   <Navbar />

   <main className="flex-grow pt-24 pb-12 bg-background">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
     <div className="flex flex-col lg:flex-row gap-8">
      {/* Main Content */}
      <div className="flex-1 fade-in">
       {/* Breadcrumbs */}
       <Breadcrumbs items={breadcrumbItems} />

       {/* Job Header */}
       <JobDetailHeader
        id={job.id}
        title={job.title}
        postedDate={job.postedDate}
        proposals={job.proposals}
        duration={job.duration}
        budget={job.budget}
        tags={job.tags}
        client={job.client}
        clientRating={job.clientRating}
        clientLocation={job.clientLocation}
       />

       {/* Job Description with Client Info */}
       <div className="glass-card rounded-xl p-6 mb-6">
        <JobDescription
         description={job.longDescription}
         skills={job.skills}
         attachments={job.attachments}
        />

        <ClientInfo
         clientLocation={job.clientLocation}
         clientHiringRate={job.clientHiringRate}
         clientJobs={job.clientJobs}
         clientRating={job.clientRating}
        />
       </div>
      </div>

      {/* Sidebar - Submit Proposal */}
      <div className="w-full lg:w-96 shrink-0">
       <div
        className="sticky top-24 glass-card rounded-xl p-6 slide-in"
        style={{ animationDelay: "0.3s" }}
       >
        <BidForm onSubmit={handleSubmitBid} />
       </div>
      </div>
     </div>

     {/* Similar Jobs */}
     {similarJobs.length > 0 && <SimilarJobsSection jobs={similarJobs} />}
    </div>
   </main>

   <Footer />
  </div>
 );
};

export default JobDetails;
