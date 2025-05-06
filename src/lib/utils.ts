import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function* intersperse<A, B>(
  array: A[],
  delim: (prev: A, index?: number, array?: A[]) => B
) {
  let prev: A | null = null;
  let isDelim = false;
  let index = 0;
  for (const a of array) {
    if (isDelim) {
      yield delim(prev as A, index, array);
      index += 1;
    }
    isDelim = true;
    prev = a;
    yield a;
    index += 1;
  }
}
