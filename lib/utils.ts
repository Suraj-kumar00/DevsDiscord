import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

// this "cn" utils helps to create dynamic classes inside the tailwind
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
