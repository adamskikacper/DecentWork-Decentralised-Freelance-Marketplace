import { useEffect, RefObject } from "react";
import { gsap } from "gsap";

interface HeroAnimationRefs {
 textBoxRef: RefObject<HTMLDivElement>;
 heroImgRef: RefObject<HTMLImageElement>;
 titleRef: RefObject<HTMLHeadingElement>;
 subtitleRef: RefObject<HTMLParagraphElement>;
 buttonsRef: RefObject<HTMLDivElement>;
}

export const useHeroAnimation = ({
 textBoxRef,
 heroImgRef,
 titleRef,
 subtitleRef,
 buttonsRef,
}: HeroAnimationRefs) => {
 useEffect(() => {
  const textBox = textBoxRef.current;
  const title = titleRef.current;
  const subtitle = subtitleRef.current;
  const buttons = buttonsRef.current;

  if (!textBox || !title || !subtitle || !buttons) return;

  gsap.set([title, subtitle, buttons], {
   y: 50,
   opacity: 0,
   clipPath: "inset(0 0 100% 0)",
  });

  const tl = gsap.timeline();

  tl
   .fromTo(
    textBox,
    {
     xPercent: -150,
    },
    {
     xPercent: 0,
     duration: 2,
     ease: "power4.out",
    }
   )
   .to(
    title,
    {
     y: 0,
     opacity: 1,
     clipPath: "inset(0 0 0% 0)",
     duration: 1,
     ease: "power1.out",
    },
    "-=0.5"
   )
   .to(
    subtitle,
    {
     y: 0,
     opacity: 1,
     clipPath: "inset(0 0 0% 0)",
     duration: 1,
     ease: "power1.out",
    },
    "-=0.4"
   )
   .to(buttons, {
    y: 0,
    opacity: 1,
    clipPath: "inset(0 0 0% 0)",
    duration: 0.5,
    ease: "power1.out",
   });

  return () => {
   tl.kill();
  };
 }, [buttonsRef, subtitleRef, textBoxRef, titleRef]);

 useEffect(() => {
  const heroImg = heroImgRef.current;
  if (!heroImg) return;

  gsap.fromTo(
   heroImg,
   {
    scale: 1,
   },
   {
    opacity: 1,
    scale: 1.1,
    duration: 3,
    ease: "power2.out",
   }
  );
 }, [heroImgRef]);
};
