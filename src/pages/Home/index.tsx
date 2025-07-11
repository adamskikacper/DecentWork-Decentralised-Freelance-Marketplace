import React from "react";
import { Navbar } from "@/shared/ui/Header";
import { Footer } from "@/shared/ui/Footer";
import { Hero } from "./Hero";

export const Home: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
      </main>
      <Footer />
    </div>
  );
};