import React from "react";
import { Link } from "react-router-dom";

export interface HeroStat {
 value: string;
 label: string;
}

export interface HeroSectionProps {
 stats: HeroStat[];
 heroImage: {
  src: string;
  alt: string;
 };
 title?: string;
 subtitle?: string;
 primaryButtonText?: string;
 secondaryButtonText?: string;
 primaryButtonLink?: string;
 secondaryButtonLink?: string;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
 stats,
 heroImage,
 title = "The Future of Work is Decentralised",
 subtitle = "Connect directly with clients and freelancers worldwide. No middlemen, secure payments via smart contracts, and complete ownership of your work.",
 primaryButtonText = "Start Earning",
 secondaryButtonText = "Find Talent",
 primaryButtonLink = "/dashboard",
 secondaryButtonLink = "/dashboard",
}) => {
 return (
  <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-16">
   <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
    <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
     <div className="max-w-2xl slide-in">
      <h1 className="heading-1 mb-6">
       {title.split("Decentralised")[0]}
       <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70">
        Decentralised
       </span>
      </h1>

      <p className="body-text mb-8 max-w-xl">{subtitle}</p>

      <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
       <Link to={primaryButtonLink} className="button-primary text-center">
        {primaryButtonText}
       </Link>
       <Link to={secondaryButtonLink} className="button-secondary text-center">
        {secondaryButtonText}
       </Link>
      </div>

      <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-8">
       {stats.map((stat) => (
        <div className="slide-up" key={stat.label}>
         <div className="text-3xl font-bold">{stat.value}</div>
         <div className="text-sm text-muted-foreground">{stat.label}</div>
        </div>
       ))}
      </div>
     </div>

     <div className="w-full max-w-md lg:max-w-lg xl:max-w-xl blur-in">
      <img
       src={heroImage.src}
       alt={heroImage.alt}
       className="w-full rounded-2xl shadow-xl object-cover"
      />
     </div>
    </div>
   </div>
  </section>
 );
};
