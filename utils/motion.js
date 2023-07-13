export const navVariants = {
  hidden: {
    opacity: 0,
    scale: 0,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 140,
    },
  },
  show: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 80,
      delay: 0.2,
      ease: "easeOut",
    },
  },
};