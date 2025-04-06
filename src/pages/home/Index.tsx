import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../../components/layout/Header";
import Hero from "./Hero";
import Footer from "../../components/layout/Footer";
import JobCard from "../../components/job/JobCard";
import HowItWorks from "./HowItWorks";
import FeaturesSection from "./FeaturesSection";
import TestimonialCard from "../../components/profile/Reviews/TestimonialCard";

// Mock featured jobs data
const featuredJobs = [
 {
  id: 1,
  title: "DeFi Dashboard UI Design",
  description:
   "Looking for a skilled UI designer to create a modern and intuitive dashboard for our DeFi platform. The design should be clean, user-friendly, and align with our brand identity.",
  postedDate: "2 days ago",
  proposals: 8,
  tags: ["UI/UX", "Figma", "Dashboard", "DeFi"],
  budget: "1.5-2.0 ETH",
 },
 {
  id: 2,
  title: "NFT Marketplace UI Design",
  description:
   "Create a visually stunning UI for our NFT marketplace with focus on artwork presentation and user experience.",
  postedDate: "5 days ago",
  proposals: 7,
  tags: ["NFT", "Marketplace", "UI"],
  budget: "1.5-2.5 ETH",
 },
 {
  id: 3,
  title: "UI Design for Crypto Wallet",
  description:
   "Design a user-friendly interface for our cryptocurrency wallet app with focus on simplicity and security.",
  postedDate: "3 days ago",
  proposals: 5,
  tags: ["UI/UX", "Mobile", "Wallet"],
  budget: "0.8-1.2 ETH",
 },
];

const features = [
 {
  icon: (
   <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
   >
    <rect
     x="3"
     y="11"
     width="18"
     height="11"
     rx="2"
     stroke="currentColor"
     strokeWidth="2"
     strokeLinecap="round"
     strokeLinejoin="round"
    />
    <path
     d="M7 11V7C7 4.23858 9.23858 2 12 2C14.7614 2 17 4.23858 17 7V11"
     stroke="currentColor"
     strokeWidth="2"
     strokeLinecap="round"
     strokeLinejoin="round"
    />
   </svg>
  ),
  title: "Secure Smart Contracts",
  description:
   "Funds locked in escrow until job completion, protecting both parties.",
 },
 {
  icon: (
   <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
   >
    <path
     d="M22 12H16L14 15H10L8 12H2"
     stroke="currentColor"
     strokeWidth="2"
     strokeLinecap="round"
     strokeLinejoin="round"
    />
    <path
     d="M5.45 5.11L2 12V18C2 18.5304 2.21071 19.0391 2.58579 19.4142C2.96086 19.7893 3.46957 20 4 20H20C20.5304 20 21.0391 19.7893 21.4142 19.4142C21.7893 19.0391 22 18.5304 22 18V12L18.55 5.11C18.3844 4.77679 18.1292 4.49637 17.813 4.30028C17.4967 4.10419 17.1321 4.0002 16.76 4H7.24C6.86792 4.0002 6.50326 4.10419 6.18704 4.30028C5.87083 4.49637 5.61558 4.77679 5.45 5.11Z"
     stroke="currentColor"
     strokeWidth="2"
     strokeLinecap="round"
     strokeLinejoin="round"
    />
   </svg>
  ),
  title: "No Hidden Fees",
  description: "All fees are transparent and lower than traditional platforms.",
 },
 {
  icon: (
   <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
   >
    <path
     d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
     stroke="currentColor"
     strokeWidth="2"
     strokeLinecap="round"
     strokeLinejoin="round"
    />
    <path
     d="M12 6V12L16 14"
     stroke="currentColor"
     strokeWidth="2"
     strokeLinecap="round"
     strokeLinejoin="round"
    />
   </svg>
  ),
  title: "Instant Payments",
  description:
   "Get paid instantly upon work approval, no waiting periods or delays.",
 },
];

const Index = () => {
 return (
  <div className="min-h-screen flex flex-col">
   <Navbar />

   <main className="flex-grow">
    <Hero />

    {/* How It Works Section */}
    <HowItWorks />

    {/* Features Section */}
    <FeaturesSection features={features} />

    {/* Featured Jobs Section */}
    <section className="py-24 bg-background">
     <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center max-w-3xl mx-auto mb-16 fade-in">
       <h2 className="heading-2 mb-4">Featured Jobs</h2>
       <p className="body-text">
        Find exciting opportunities and collaborate with clients from around the
        world.
       </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
       {featuredJobs.map((job, index) => (
        <div
         key={job.id}
         className="slide-up"
         style={{ animationDelay: `${0.1 * index}s` }}
        >
         <JobCard
          id={job.id}
          title={job.title}
          description={job.description}
          postedDate={job.postedDate}
          proposals={job.proposals}
          tags={job.tags}
          budget={job.budget}
         />
        </div>
       ))}
      </div>

      <div className="text-center mt-12">
       <Link
        to="/jobs"
        className="inline-flex items-center justify-center h-10 px-6 font-medium text-primary hover:text-primary/80 transition-colors"
       >
        View all jobs
        <svg
         width="16"
         height="16"
         viewBox="0 0 24 24"
         fill="none"
         xmlns="http://www.w3.org/2000/svg"
         className="ml-2"
        >
         <path
          d="M5 12H19"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
         />
         <path
          d="M12 5L19 12L12 19"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
         />
        </svg>
       </Link>
      </div>
     </div>
    </section>

    {/* Testimonials/Stats Section - Keeping this as is */}
    <section className="py-24 bg-secondary/30">
     <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center max-w-3xl mx-auto mb-16 fade-in">
       <h2 className="heading-2 mb-4">Trusted by Blockchain Professionals</h2>
       <p className="body-text">
        Join thousands of freelancers and clients who trust DecentWork for Web3
        jobs.
       </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center mb-16">
       <div className="glass-card rounded-xl p-6 slide-up">
        <div className="text-3xl font-bold mb-2">5,000+</div>
        <div className="text-muted-foreground">Freelancers</div>
       </div>
       <div
        className="glass-card rounded-xl p-6 slide-up"
        style={{ animationDelay: "0.1s" }}
       >
        <div className="text-3xl font-bold mb-2">1,200+</div>
        <div className="text-muted-foreground">Clients</div>
       </div>
       <div
        className="glass-card rounded-xl p-6 slide-up"
        style={{ animationDelay: "0.2s" }}
       >
        <div className="text-3xl font-bold mb-2">10,000+</div>
        <div className="text-muted-foreground">Jobs</div>
       </div>
       <div
        className="glass-card rounded-xl p-6 slide-up"
        style={{ animationDelay: "0.3s" }}
       >
        <div className="text-3xl font-bold mb-2">$15M+</div>
        <div className="text-muted-foreground">Paid to Freelancers</div>
       </div>
      </div>

      <div className="flex overflow-x-auto gap-6 pb-6 no-scrollbar">
       <TestimonialCard
        rating={5.0}
        text="DecentWork transformed how I hire blockchain developers. The smart contract escrow system gives me peace of mind for every job."
        authorInitial="J"
        authorName="James Chen"
        authorRole="DeFi Job Founder"
       />

       <TestimonialCard
        rating={5.0}
        text="As a freelance smart contract developer, getting paid has never been easier. Instant payments directly to my wallet make this platform stand out."
        authorInitial="A"
        authorName="Aisha Johnson"
        authorRole="Solidity Developer"
       />

       <TestimonialCard
        rating={4.9}
        text="The transparency and security of DecentWork has helped me build a thriving freelance business in Web3 design. Highly recommended!"
        authorInitial="M"
        authorName="Miguel Santos"
        authorRole="UI/UX Designer"
       />

       <TestimonialCard
        rating={4.8}
        text="Found amazing blockchain talent for our startup within days. The quality of professionals on this platform is unmatched in the Web3 space."
        authorInitial="S"
        authorName="Sarah Kim"
        authorRole="Crypto Startup CEO"
       />
      </div>
     </div>
    </section>
   </main>

   <Footer />
  </div>
 );
};

export default Index;
