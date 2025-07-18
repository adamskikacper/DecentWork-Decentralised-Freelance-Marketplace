import { useEffect, useRef, useCallback, RefObject } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface JourneyAnimationRefs {
 containerRef: RefObject<HTMLDivElement>;
 sectionsRef: RefObject<HTMLDivElement[]>;
 imagesRef: RefObject<HTMLDivElement[]>;
}

export const useJourneyAnimation = ({
 containerRef,
 sectionsRef,
 imagesRef,
}: JourneyAnimationRefs) => {
 const scrollTriggerRef = useRef<ScrollTrigger | null>(null);
 const currentSectionRef = useRef<number>(0);
 const animationTimelinesRef = useRef<gsap.core.Timeline[]>([]);

 const initializeAnimation = useCallback(() => {
  const container = containerRef.current;
  if (!container) return;

  const sections = sectionsRef.current;
  const images = imagesRef.current;

  if (!sections || !images || sections.length === 0 || images.length === 0)
   return;

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
 }, [containerRef, sectionsRef, imagesRef]);

 useEffect(() => {
  const cleanup = initializeAnimation();
  return cleanup;
 }, [initializeAnimation]);
};
