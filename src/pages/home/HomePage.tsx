import React from "react";
import { Navbar } from "@/shared/ui/Header";
import { Footer } from "@/shared/ui/Footer";
import { HeroSection } from "@/components/organisms/HeroSection";

export const HomePage = () => {
 return (
  <div className="min-h-screen flex flex-col">
   <Navbar />
   <main className="flex-grow">
    <HeroSection />
   </main>
   <Footer />
  </div>
 );
};
