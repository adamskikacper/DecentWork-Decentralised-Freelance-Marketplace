import React from "react";
import { Navbar } from "@/shared/ui/Header";
import { Footer } from "@/shared/ui/Footer";
import { HeroSection } from "@/components/organisms/HeroSection";
import { RemoteWorkSection } from "@/components/organisms/RemoteWorkSection";

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

 return (
  <div className="min-h-screen flex flex-col">
   <Navbar />
   <main className="flex-grow">
    <HeroSection stats={HERO_STATS} heroImage={HERO_IMAGE} />
    <RemoteWorkSection />
   </main>
   <Footer />
  </div>
 );
};
