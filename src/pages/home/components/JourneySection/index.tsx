import React, { useEffect, useRef, useCallback } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { WorkEnvironment } from "../types";

gsap.registerPlugin(ScrollTrigger);

interface JourneySectionProps {
 workEnvironments: WorkEnvironment[];
 className?: string;
}

export const JourneySection = ({
 workEnvironments,
 className = "",
}: JourneySectionProps) => {
 const containerRef = useRef<HTMLDivElement>(null);
 const sectionsRef = useRef<HTMLDivElement[]>([]);
 const imagesRef = useRef<HTMLDivElement[]>([]);

 const scrollTriggerRef = useRef<ScrollTrigger | null>(null);
 const currentSectionRef = useRef<number>(0);
 const animationTimelinesRef = useRef<gsap.core.Timeline[]>([]);

 const initializeAnimation = useCallback(() => {
  const container = containerRef.current;
  if (!container) return;

  const sections = sectionsRef.current;
  const images = imagesRef.current;

  if (sections.length === 0 || images.length === 0) return;

  if (scrollTriggerRef.current) {
   scrollTriggerRef.current.kill();
  }

  animationTimelinesRef.current.forEach((tl) => tl.kill());
  animationTimelinesRef.current = [];

  sections.forEach((section, index) => {
   if (index === 0) {
    gsap.set(section, { opacity: 1, y: 0 });
    gsap.set(images[0], { opacity: 1, y: 0 });
   } else {
    gsap.set(section, { opacity: 0, y: 100 });
    gsap.set(images[index], { opacity: 0, y: -50 });
   }
  });

  currentSectionRef.current = 0;

  scrollTriggerRef.current = ScrollTrigger.create({
   trigger: container,
   start: "top 5%",
   end: "bottom bottom",
   pin: ".pin-target",
   anticipatePin: 1,
   pinSpacing: true,

   snap: {
    snapTo: 1 / (sections.length - 1),
    duration: { min: 0.3, max: 0.6 },
    ease: "power4.inOut",
   },
   onUpdate: (self) => {
    const progress = self.progress;
    const sectionIndex = Math.round(progress * (sections.length - 1));

    if (sectionIndex !== currentSectionRef.current) {
     const previousIndex = currentSectionRef.current;
     currentSectionRef.current = sectionIndex;

     animationTimelinesRef.current.forEach((tl) => tl.kill());
     animationTimelinesRef.current = [];

     const tl = gsap.timeline();
     animationTimelinesRef.current.push(tl);

     tl
      .to(sections[previousIndex], {
       opacity: 0,
       y: -50,
       duration: 0.4,
       ease: "sine.out",
      })
      .to(
       images[previousIndex],
       {
        opacity: 0,
        y: -50,
        duration: 0.3,
        ease: "sine.out",
       },
       "<"
      )
      .fromTo(
       sections[sectionIndex],
       { opacity: 0, y: 100 },
       {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: "sine.out",
       },
       "-=0.2"
      )
      .fromTo(
       images[sectionIndex],
       { opacity: 0, y: 50 },
       {
        opacity: 1,
        y: 0,
        duration: 0.4,
        ease: "sine.out",
       },
       "<+=0.1"
      );
    }
   },
  });

  return () => {
   if (scrollTriggerRef.current) {
    scrollTriggerRef.current.kill();
    scrollTriggerRef.current = null;
   }
   animationTimelinesRef.current.forEach((tl) => tl.kill());
   animationTimelinesRef.current = [];
  };
 }, []);

 useEffect(() => {
  const cleanup = initializeAnimation();
  return cleanup;
 }, [initializeAnimation]);

 return (
  <div className={`relative ${className}`}>
   <div
    ref={containerRef}
    className="h-[200vh] md:h-[250vh] lg:h-[400vh] relative bg-gray-100 dark:bg-gray-900"
    style={{
     scrollSnapType: "y mandatory",
     scrollBehavior: "smooth",
    }}
   >
    <div
     className="pin-target sticky top-0 h-screen flex items-center justify-center overflow-hidden"
     style={{ scrollSnapAlign: "start" }}
    >
     <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
       <div className="relative h-[400px] md:h-[500px] w-full lg:max-w-2xl order-2 lg:order-1">
        {workEnvironments.map((env, index) => (
         <div
          key={env.id}
          ref={(el) => (sectionsRef.current[index] = el!)}
          className="absolute inset-0 flex flex-col justify-center space-y-4 md:space-y-6 px-2 sm:px-0"
         >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-8xl font-bold text-foreground">
           {env.title}
          </h2>

          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground leading-relaxed">
           {env.description}
          </p>
          <div className="w-16 sm:w-20 h-3 bg-primary rounded-full"></div>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground leading-relaxed">
           {index + 1} / {workEnvironments.length}
          </p>
         </div>
        ))}
       </div>

       <div className="relative h-[300px] md:h-[400px] lg:h-[500px] w-full max-w-md lg:max-w-lg xl:max-w-xl flex items-center justify-center order-1 lg:order-2">
        {workEnvironments.map((env, index) => (
         <div
          key={env.id}
          ref={(el) => (imagesRef.current[index] = el!)}
          className="absolute w-full h-full"
         >
          <div className="absolute w-full h-full -translate-x-4 translate-y-4 bg-gradient-to-tr from-primary to-primary/10 rounded-2xl shadow-lg"></div>
          <img
           src={env.image}
           alt={env.alt}
           className="absolute w-full h-full object-cover  rounded-2xl shadow-2xl z-10"
          />
         </div>
        ))}
       </div>
      </div>
     </div>
    </div>
   </div>
  </div>
 );
};
