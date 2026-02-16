// utils/navbarVariants.ts
export const navContainer = {
  hidden: { y: -40, opacity: 0 },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.8, 0.25, 1],
      staggerChildren: 0.12,
    },
  },
};

export const navItem = {
  hidden: { y: -10, opacity: 0 },
  show: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.3 },
  },
};
