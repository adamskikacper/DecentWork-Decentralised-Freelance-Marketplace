import React from "react";
import { Link } from "react-router-dom";
import { FeatureCard } from "@/components/Common";
import {
 FEATURES_SECTION_DEFAULTS,
 ANIMATION_DELAYS,
 DEMO_CONTENT,
} from "@/constants";

interface Feature {
 icon: React.ReactNode;
 title: string;
 description: string;
}

interface FeaturesSectionProps {
 title?: string;
 subtitle?: string;
 features?: Feature[];
 demoImageContent?: React.ReactNode;
}

const FeaturesSection: React.FC<FeaturesSectionProps> = ({
 title = FEATURES_SECTION_DEFAULTS.TITLE,
 subtitle = FEATURES_SECTION_DEFAULTS.SUBTITLE,
 features = [],
 demoImageContent,
}) => {
 return (
  <section className="py-24 bg-secondary/30">
   <div className="container mx-auto px-4 sm:px-6 lg:px-8">
    <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16">
     {/* Image/Visual */}
     <div className="w-full md:w-1/2 fade-in">
      <div className="aspect-video glass-card rounded-2xl overflow-hidden relative">
       <div className="absolute inset-0 bg-gradient-to-br from-white/50 to-transparent"></div>
       <div className="absolute inset-0 flex items-center justify-center">
        {demoImageContent || (
         <div className="text-center p-8">
          <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
           <svg
            width="32"
            height="32"
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
          </div>
          <h3 className="text-lg font-medium mb-2">{DEMO_CONTENT.TITLE}</h3>
          <p className="text-sm text-muted-foreground">
           {DEMO_CONTENT.DESCRIPTION}
          </p>
         </div>
        )}
       </div>
      </div>
     </div>

     {/* Content */}
     <div
      className="w-full md:w-1/2 slide-in"
      style={{ animationDelay: ANIMATION_DELAYS.FEATURES_CONTENT }}
     >
      <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
       <span>{subtitle}</span>
      </div>
      <h2 className="heading-2 mb-6">{title}</h2>
      <div className="space-y-6">
       {features.map((feature, index) => (
        <FeatureCard
         key={index}
         icon={feature.icon}
         title={feature.title}
         description={feature.description}
        />
       ))}
      </div>
     </div>
    </div>
   </div>
  </section>
 );
};

export default FeaturesSection;
