import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
 return twMerge(clsx(inputs));
}

export const calculateProgressPercentage = (daysLeft?: number): number => {
 if (daysLeft === undefined) return 0;

 if (daysLeft <= 0) return 100;

 if (daysLeft > 30) {
  return Math.max(0, 100 - (daysLeft - 30) * 2);
 }

 return Math.max(0, 100 - daysLeft * 3.33);
};
