import { useEffect, useRef } from "react";
import Lenis from "lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export const useLenis = () => {
 const lenisRef = useRef<Lenis | null>(null);

 useEffect(() => {
  const lenis = new Lenis({
   duration: 1.2,
   easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
   orientation: "vertical",
   gestureOrientation: "vertical",
   smoothWheel: true,
   wheelMultiplier: 0.7,
   touchMultiplier: 2,
   infinite: false,
  });

  lenisRef.current = lenis;

  function raf(time: number) {
   lenis.raf(time);
   requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);

  lenis.on("scroll", ScrollTrigger.update);

  gsap.ticker.lagSmoothing(0);

  return () => {
   lenis.destroy();
   lenisRef.current = null;
  };
 }, []);

 return lenisRef.current;
};
