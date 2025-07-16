import React, { useEffect, useRef, useMemo } from "react";
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

 useEffect(() => {
  const container = containerRef.current;
  if (!container) return;

  const sections = sectionsRef.current;
  const images = imagesRef.current;

  // Initialize all sections and images to be hidden except the first
  sections.forEach((section, index) => {
   if (index === 0) {
    gsap.set(section, { opacity: 1 });
    gsap.set(images[0], { opacity: 1 });
   } else {
    gsap.set(section, { opacity: 0 });
    gsap.set(images[index], { opacity: 0 });
   }
  });

  const tl = gsap.timeline({
   scrollTrigger: {
    trigger: container,
    start: "top top",
    end: "bottom bottom",
    scrub: 1,
    pin: true,
    anticipatePin: 1,
   },
  });

  // Create instant transitions between sections
  sections.forEach((section, index) => {
   if (index > 0) {
    const prevSection = sections[index - 1];
    const currentSection = section;
    const prevImage = images[index - 1];
    const currentImage = images[index];

    // Calculate timing for each section transition
    const transitionPoint = index / sections.length;

    // Instant hide previous section and show current section
    tl.set([prevSection, prevImage], { opacity: 0 }, transitionPoint)
      .set([currentSection, currentImage], { opacity: 1 }, transitionPoint);
   }
  });

  return () => {
   ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
  };
 }, []);

 return (
  <div className={`relative ${className}`}>
   <div ref={containerRef} className="h-[400vh] relative">
    <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
     <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl">
      <div className="relative h-[500px]">
       {workEnvironments.map((env, index) => (
        <div
         key={env.id}
         ref={(el) => (sectionsRef.current[index] = el!)}
         className="absolute inset-0 flex flex-col justify-center space-y-6"
        >
         <h2 className="text-4xl lg:text-5xl font-bold text-foreground">
          {env.title}
         </h2>
         <p className="text-lg lg:text-xl text-muted-foreground max-w-lg leading-relaxed">
          {env.description}
         </p>
         <div className="w-20 h-1 bg-primary rounded-full"></div>
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
