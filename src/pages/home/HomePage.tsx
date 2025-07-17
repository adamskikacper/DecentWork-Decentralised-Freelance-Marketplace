import { Navbar } from "@/shared/ui/Header";
import { Footer } from "@/shared/ui/Footer";
import { HeroSection } from "@/components/organisms/HeroSection";
import { TitleSection, JourneySection, WorkEnvironment } from "./components";

export const HomePage = () => {
 const HERO_STATS = [
  { value: "12k+", label: "Active Jobs" },
  { value: "24k+", label: "Freelancers" },
  { value: "$8M+", label: "Paid Out" },
  { value: "99%", label: "Satisfaction" },
 ];

 const HERO_IMAGE = {
  src: "/images/hero-freelancer.jpeg",
  alt: "Developer working on a laptop with city skyline in the background",
 };

 const WORK_ENVIRONMENTS: WorkEnvironment[] = [
  {
   id: "home",
   title: "Your Home",
   description:
    "Work in ultimate comfort, turning your personal space into a focused, productive sanctuary.",
   image: "/images/home.webp",
   alt: "Freelancer working from home office",
  },
  {
   id: "coffee",
   title: "Local Cafes",
   description:
    "Tap into the vibrant energy of a cafe for fresh inspiration and casual connections.",
   image: "/images/coffee-shop.webp",
   alt: "Freelancer working from coffee shop",
  },
  {
   id: "coworking",
   title: "Coworking",
   description:
    "Boost productivity and connect with peers in a dedicated, growth-oriented environment.",
   image: "/images/coworking.webp",
   alt: "Freelancer working from coworking space",
  },
  {
   id: "anywhere",
   title: "Anywhere",
   description:
    "Experience total freedom, turning any stunning location into your office and truly redefining your life.",
   image: "/images/camper-van.webp",
   alt: "Freelancer working from anywhere",
  },
 ];

 return (
  <div className="min-h-screen flex flex-col">
   <Navbar />
   <main className="flex-grow">
    <HeroSection stats={HERO_STATS} heroImage={HERO_IMAGE} />
    <TitleSection title="You choose where you work from" />
    <JourneySection workEnvironments={WORK_ENVIRONMENTS} />
   </main>
   <Footer />
  </div>
 );
};
