import React from "react";
import { Link } from "react-router-dom";
import { HOW_IT_WORKS_DEFAULTS } from "../../../constants";

interface Step {
 number: number;
 title: string;
 description: string;
 link: {
  text: string;
  url: string;
 };
}

interface HowItWorksProps {
 title?: string;
 subtitle?: string;
 steps?: Step[];
}

const HowItWorks: React.FC<HowItWorksProps> = ({
 title = HOW_IT_WORKS_DEFAULTS.TITLE,
 subtitle = HOW_IT_WORKS_DEFAULTS.SUBTITLE,
 steps = HOW_IT_WORKS_DEFAULTS.STEPS,
}) => {
 return (
  <section className="py-24 bg-background">
   <div className="container mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center max-w-3xl mx-auto mb-16 fade-in">
     <h2 className="heading-2 mb-4">{title}</h2>
     <p className="body-text">{subtitle}</p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
     {steps.map((step, index) => (
      <div
       key={index}
       className="glass-card rounded-xl p-6 slide-up"
       style={{ animationDelay: `${0.2 * (index + 1)}s` }}
      >
       <div className="w-12 h-12 flex items-center justify-center rounded-full bg-primary/10 text-primary mb-6">
        <span className="text-lg font-semibold">{step.number}</span>
       </div>
       <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
       <p className="text-muted-foreground text-sm mb-4">{step.description}</p>
       <Link
        to={step.link.url}
        className="text-sm font-medium text-primary hover:underline"
       >
        {step.link.text}
       </Link>
      </div>
     ))}
    </div>
   </div>
  </section>
 );
};

export default HowItWorks;
