import { twMerge } from 'tailwind-merge';

export const clsx = (...params: Parameters<typeof twMerge>) => {
  return twMerge(params);
};
