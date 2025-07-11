import React from "react";
import { Link } from "react-router-dom";

export const HeroSection = () => {
 return (
  <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-16">
   <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
    <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
     <div className="max-w-2xl slide-in">
      <h1 className="heading-1 mb-6">
       The Future of Work is{" "}
       <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70">
        Decentralised
       </span>
      </h1>

      <p className="body-text mb-8 max-w-xl">
       Connect directly with clients and freelancers worldwide. No middlemen,
       secure payments via smart contracts, and complete ownership of your work.
      </p>

      <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
       <Link to="/dashboard" className="button-primary text-center">
        Start Earning
       </Link>
       <Link to="/dashboard" className="button-secondary text-center">
        Find Talent
       </Link>
      </div>

      <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-8">
       <div className="slide-up">
        <div className="text-3xl font-bold">12k+</div>
        <div className="text-sm text-muted-foreground">Active Jobs</div>
       </div>
       <div className="slide-up">
        <div className="text-3xl font-bold">24k+</div>
        <div className="text-sm text-muted-foreground">Freelancers</div>
       </div>
       <div className="slide-up">
        <div className="text-3xl font-bold">$8M+</div>
        <div className="text-sm text-muted-foreground">Paid Out</div>
       </div>
       <div className="slide-up">
        <div className="text-3xl font-bold">99%</div>
        <div className="text-sm text-muted-foreground">Satisfaction</div>
       </div>
      </div>
     </div>

     {/* Hero Image */}
     <div className="w-full max-w-md lg:max-w-lg xl:max-w-xl blur-in">
      <img
       src="/images/hero-freelancer.jpeg"
       alt="Developer working on a laptop with city skyline in the background"
       className="w-full rounded-2xl shadow-xl object-cover"
      />
     </div>
    </div>
   </div>
  </section>
 );
};
