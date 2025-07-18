import { Navbar } from "@/shared/ui/Header";
import { Footer } from "@/shared/ui/Footer";
import { HeroSection } from "@/components/organisms/HeroSection";
import { TitleSection, JourneySection, WorkEnvironment } from "./components";

export const HomePage = () => {
 const HERO_IMAGE = {
  src: "/images/hero-freelancer.jpg",
  alt: "Developer working on a laptop with city skyline in the background",
 };

 const WORK_ENVIRONMENTS: WorkEnvironment[] = [
  {
   id: "profile-setup",
   title: "Create Your Profile",
   description:
    "Set up your professional profile with skills, experience level, hourly rate, and showcase your portfolio to attract clients.",
   image: "/images/home.webp",
   alt: "Freelancer setting up profile",
  },
  {
   id: "find-jobs",
   title: "Find Perfect Jobs",
   description:
    "Browse through available jobs, filter by categories like DeFi, Smart Contracts, NFTs, and apply to projects that match your expertise.",
   image: "/images/coffee-shop.webp",
   alt: "Freelancer browsing job opportunities",
  },
  {
   id: "communicate",
   title: "Connect & Collaborate",
   description:
    "Chat with clients, discuss project requirements, track progress, and manage all your active jobs from one dashboard.",
   image: "/images/coworking.webp",
   alt: "Freelancer communicating with clients",
  },
  {
   id: "get-paid",
   title: "Get Paid in Crypto",
   description:
    "Complete projects and receive secure payments directly in ETH. Track your earnings, build your reputation, and grow your decentralized career.",
   image: "/images/camper-van.webp",
   alt: "Freelancer receiving crypto payments",
  },
 ];

 return (
  <div className="min-h-screen flex flex-col">
   <Navbar />
   <main className="flex-grow">
    <HeroSection heroImage={HERO_IMAGE} />
    <TitleSection title="Your Journey to Success" />
    <JourneySection workEnvironments={WORK_ENVIRONMENTS} />
    <TitleSection title="Start earning in crypto today" />
   </main>
   <Footer />
  </div>
 );
};
