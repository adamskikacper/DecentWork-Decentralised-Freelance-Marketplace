import React, { useEffect, useRef, useMemo } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface WorkEnvironment {
 id: string;
 title: string;
 description: string;
 imageSrc: string;
 imageAlt: string;
}

export const RemoteWorkSection: React.FC = () => {
 const sectionRef = useRef<HTMLDivElement>(null);
 const textRef = useRef<HTMLDivElement>(null);
 const imageRef = useRef<HTMLDivElement>(null);

 const workEnvironments: WorkEnvironment[] = useMemo(
  () => [
   {
    id: "home",
    title: "Work from Home",
    description:
     "Create your perfect workspace in the comfort of your own home. Enjoy the flexibility and productivity of remote work.",
    imageSrc: "/images/hero-freelancer.jpeg",
    imageAlt: "Freelancer working from home office setup",
   },
   {
    id: "coffee",
    title: "Work from Coffee Shop",
    description:
     "Find inspiration in the buzzing atmosphere of your favorite coffee shop. Network while you work.",
    imageSrc: "/images/hero-freelancer.jpeg",
    imageAlt: "Freelancer working from coffee shop",
   },
   {
    id: "coworking",
    title: "Work from Coworking Space",
    description:
     "Collaborate with like-minded professionals in modern coworking spaces designed for productivity.",
    imageSrc: "/images/hero-freelancer.jpeg",
    imageAlt: "Freelancer working from coworking space",
   },
   {
    id: "anywhere",
    title: "Work from Anywhere",
    description:
     "The world is your office. Work from any location that inspires you and fits your lifestyle.",
    imageSrc: "/images/hero-freelancer.jpeg",
    imageAlt: "Freelancer working from anywhere",
   },
  ],
  []
 );

 useEffect(() => {
  if (!sectionRef.current || !textRef.current || !imageRef.current) return;

  const section = sectionRef.current;
  const textContainer = textRef.current;
  const imageContainer = imageRef.current;

  // Set up the scroll trigger animation
  const tl = gsap.timeline({
   scrollTrigger: {
    trigger: section,
    start: "top 0%",
    end: "bottom 0%",
    scrub: 1,
    pin: true,
    anticipatePin: 1,
    onUpdate: (self) => {
     const progress = self.progress;
     const currentIndex = Math.floor(progress * workEnvironments.length);

     if (currentIndex < workEnvironments.length) {
      // Update text content
      const currentEnv = workEnvironments[currentIndex];
      const titleElement = textContainer.querySelector(".work-title");
      const descElement = textContainer.querySelector(".work-description");

      if (titleElement && descElement) {
       titleElement.textContent = currentEnv.title;
       descElement.textContent = currentEnv.description;
      }

      // Update image
      const imageElement = imageContainer.querySelector(
       ".work-image"
      ) as HTMLImageElement;
      if (imageElement && imageElement.src !== currentEnv.imageSrc) {
       gsap.to(imageElement, {
        opacity: 0,
        duration: 0.3,
        onComplete: () => {
         imageElement.src = currentEnv.imageSrc;
         imageElement.alt = currentEnv.imageAlt;
         gsap.to(imageElement, { opacity: 1, duration: 0.3 });
        },
       });
      }
     }
    },
   },
  });

  return () => {
   tl.kill();
   ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
  };
 }, [workEnvironments]);

 return (
  <section
   ref={sectionRef}
   className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center py-20"
  >
   <div className="container mx-auto px-4">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
     {/* Text Content */}
     <div ref={textRef} className="space-y-6">
      <div className="space-y-4">
       <h2 className="work-title text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
        {workEnvironments[0].title}
       </h2>
       <p className="work-description text-lg text-gray-600 leading-relaxed">
        {workEnvironments[0].description}
       </p>
      </div>

      {/* Progress indicator */}
      <div className="flex space-x-2">
       {workEnvironments.map((_, index) => (
        <div
         key={index}
         className="h-1 bg-gray-300 rounded-full flex-1 overflow-hidden"
        >
         <div className="h-full bg-blue-600 rounded-full transition-all duration-300 w-0"></div>
        </div>
       ))}
      </div>
     </div>

     {/* Image Content */}
     <div ref={imageRef} className="flex justify-center">
      <div className="relative">
       <img
        src={workEnvironments[0].imageSrc}
        alt={workEnvironments[0].imageAlt}
        className="work-image max-w-full h-auto rounded-lg shadow-2xl object-cover"
        style={{ maxHeight: "500px" }}
       />
       <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-lg"></div>
      </div>
     </div>
    </div>
   </div>
  </section>
 );
};
