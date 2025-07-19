import React, { useRef } from "react";
import { Button } from "@/shared";
import { useNavigation, useHeroAnimation } from "@/shared/hooks/ui";

export interface HeroSectionProps {
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

export const HeroSection = ({
 heroImage,
 title = "The Future of Work is Decentralised",
 subtitle = "Connect directly with clients and freelancers worldwide. No middlemen, secure payments via cryptocurrencies, and complete ownership of your money.",
 primaryButtonText = "Start Earning",
 secondaryButtonText = "Find Talent",
}: HeroSectionProps) => {
 const { goToDashboard } = useNavigation();

 const textBoxRef = useRef<HTMLDivElement>(null);
 const heroImgRef = useRef<HTMLImageElement>(null);
 const titleRef = useRef<HTMLHeadingElement>(null);
 const subtitleRef = useRef<HTMLParagraphElement>(null);
 const buttonsRef = useRef<HTMLDivElement>(null);

 useHeroAnimation({
  textBoxRef,
  heroImgRef,
  titleRef,
  subtitleRef,
  buttonsRef,
 });

 return (
  <section className="relative h-screen overflow-hidden ">
   <div className="absolute inset-0">
    <img
     ref={heroImgRef}
     src={heroImage.src}
     alt={heroImage.alt}
     className="w-full h-full object-cover"
    />
   </div>

   <div
    ref={textBoxRef}
    className="absolute top-0 left-0 w-full md:w-1/2 h-full bg-white dark:bg-gradient-to-br dark:from-sky-900 dark:to-slate-800 flex items-center justify-center z-10"
    style={{ position: "relative" }}
   >
    <div className="absolute inset-0 -z-10"></div>

    <div className="container mx-auto max-w-2xl px-4 sm:px-6 lg:px-8 pt-20 pb-8 lg:pt-0 lg:pb-0">
     <h1 ref={titleRef} className="text-heading-1 mb-6">
      {title}
     </h1>

     <p
      ref={subtitleRef}
      className="text-body-md text-muted-foreground mb-8 max-w-xl"
     >
      {subtitle}
     </p>

     <div ref={buttonsRef} className="flex flex-col sm:flex-row gap-4 sm:gap-6">
      <Button variant="outline" onClick={goToDashboard}>
       {primaryButtonText}
      </Button>
      <Button className="text-center">{secondaryButtonText}</Button>
     </div>
    </div>
   </div>
  </section>
 );
};
