import { useState, useRef, useEffect } from "react";

/**
 * A hook that handles click outside detection for dropdowns
 */
export function useDropdownClickOutside() {
 const [isOpen, setIsOpen] = useState(false);
 const ref = useRef<HTMLDivElement>(null);

 useEffect(() => {
  const handleClickOutside = (event: MouseEvent) => {
   if (ref.current && !ref.current.contains(event.target as Node)) {
    setIsOpen(false);
   }
  };

  document.addEventListener("mousedown", handleClickOutside);
  return () => document.removeEventListener("mousedown", handleClickOutside);
 }, []);

 return { ref, isOpen, setIsOpen };
}
