import React, { useEffect, useRef, useMemo, useCallback } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface RemoteWorkSectionProps {
 className?: string;
}

interface WorkEnvironment {
 id: string;
 title: string;
 description: string;
 image: string;
 alt: string;
}

export const RemoteWorkSection: React.FC<RemoteWorkSectionProps> = ({
 className = "",
}) => {
 const containerRef = useRef<HTMLDivElement>(null);
 const sectionsRef = useRef<HTMLDivElement[]>([]);
 const imagesRef = useRef<HTMLImageElement[]>([]);

 const workEnvironments: WorkEnvironment[] = useMemo(
  () => [
   {
    id: "home",
    title: "Work from Home",
    description:
     "Create your perfect workspace in the comfort of your own home. Set your own schedule and eliminate commute time.",
    image: "/images/freelancer-home-office.png",
    alt: "Freelancer working from home office",
   },
   {
    id: "coffee",
    title: "Work from Coffee Shop",
    description:
     "Enjoy the buzz of a coffee shop while staying productive. Perfect for those who thrive in social environments.",
    image: "/images/freelancer-coffee-shop.png",
    alt: "Freelancer working from coffee shop",
   },
   {
    id: "coworking",
    title: "Work from Coworking Space",
    description:
     "Collaborate with like-minded professionals in modern coworking spaces designed for productivity.",
    image: "/images/freelancer-coworking.png",
    alt: "Freelancer working from coworking space",
   },
   {
    id: "anywhere",
    title: "Work from Anywhere",
    description:
     "The world is your office. Co-working spaces, libraries, or any inspiring location that fuels your creativity.",
    image: "/images/hero-freelancer-generated.png",
    alt: "Freelancer working from anywhere",
   },
  ],
  []
 );

 const initializeAnimation = useCallback(() => {
  const container = containerRef.current;
  if (!container) return;

  const sections = sectionsRef.current;
  const images = imagesRef.current;

  // Validate refs
  if (sections.length === 0 || images.length === 0) return;
  if (!gsap || !ScrollTrigger) {
   console.warn("GSAP or ScrollTrigger not available");
   return;
  }

  // Initialize all sections and images
  sections.forEach((section, index) => {
   if (index === 0) {
    gsap.set(section, { opacity: 1 });
    gsap.set(images[0], { opacity: 1 });
   } else {
    gsap.set(section, { opacity: 0 });
    gsap.set(images[index], { opacity: 0 });
   }
  });

  // Single ScrollTrigger with discrete sections
  ScrollTrigger.create({
   trigger: container,
   start: "top top",
   end: "bottom bottom",
   pin: true,
   anticipatePin: 1,
   snap: {
    snapTo: 1 / (sections.length - 1),
    duration: { min: 0.2, max: 0.4 },
    delay: 0.1,
    ease: "power2.inOut"
   },
   onUpdate: (self) => {
    const progress = self.progress;
    const sectionIndex = Math.round(progress * (sections.length - 1));
    
    // Show only the current section
    sections.forEach((section, index) => {
     if (index === sectionIndex) {
      gsap.to(section, { opacity: 1, duration: 0.2, ease: "power2.out" });
      gsap.to(images[index], { opacity: 1, duration: 0.2, ease: "power2.out" });
     } else {
      gsap.to(section, { opacity: 0, duration: 0.2, ease: "power2.out" });
      gsap.to(images[index], { opacity: 0, duration: 0.2, ease: "power2.out" });
     }
    });
   }
  });

  return () => {
   ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
  };
 }, []);

 useEffect(() => {
  initializeAnimation();
 }, [initializeAnimation]);

 return (
  <div className={`relative ${className}`}>
   <div 
    ref={containerRef} 
    className="h-[500vh] md:h-[600vh] lg:h-[700vh] relative"
    style={{ 
     scrollSnapType: 'y mandatory',
     scrollBehavior: 'smooth'
    }}
   >
    <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden" style={{ scrollSnapAlign: 'start' }}>
     <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl">
      <div className="relative h-[500px]">
       {workEnvironments.map((env, index) => (
        <div
         key={env.id}
         ref={(el) => (sectionsRef.current[index] = el!)}
         className="absolute inset-0 flex flex-col justify-center space-y-6"
        >
         <h2 className="text-4xl lg:text-5xl font-bold text-foreground animate-element">
          {env.title}
         </h2>
         <p className="text-lg lg:text-xl text-muted-foreground max-w-lg leading-relaxed animate-element">
          {env.description}
         </p>
         <div className="w-20 h-1 bg-primary rounded-full animate-element"></div>
        </div>
       ))}
      </div>

      <div className="relative h-[500px] flex items-center justify-center">
       {workEnvironments.map((env, index) => (
        <img
         key={env.id}
         ref={(el) => (imagesRef.current[index] = el!)}
         src={env.image}
         alt={env.alt}
         className="absolute inset-0 w-full h-full object-cover rounded-2xl shadow-2xl"
        />
       ))}
      </div>
     </div>
    </div>
   </div>
  </div>
 );
};
