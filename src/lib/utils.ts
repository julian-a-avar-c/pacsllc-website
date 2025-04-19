import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function* intersperse<A, B>(
  array: A[],
  delim: (prev: A, index: number) => B,
) {
  let index = 0;
  for (const curr of array) {
    yield delim(curr, index);
    index++;
  }
}
