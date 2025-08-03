import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import Lenis from "lenis";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export const useLenis = () => {
 const lenisRef = useRef<Lenis | null>(null);
 const { pathname } = useLocation();
 const isDashboardRoute = pathname.startsWith("/dashboard");

 useEffect(() => {
  if (isDashboardRoute) {
   if (lenisRef.current) {
    lenisRef.current.destroy();
    lenisRef.current = null;
   }
   return;
  }

  const lenis = new Lenis({
   duration: 1.2,
   easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
   smoothWheel: true,
   wheelMultiplier: 1,
   touchMultiplier: 1,
  });

  lenisRef.current = lenis;

  function raf(time: number) {
   lenis.raf(time);
   requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);
  lenis.on("scroll", ScrollTrigger.update);

  return () => {
   lenis.destroy();
   lenisRef.current = null;
  };
 }, [isDashboardRoute]);

 return lenisRef.current;
};
