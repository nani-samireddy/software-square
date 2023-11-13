export const containerVariants = {
  hidden: {
    opacity: 0,
    display: "hidden",
    zIndex: -1,
    transition: {
      duration: 0.5,
      staggerChildren: 0.2,
      delayChildren: 0.6,
    },
  },
  visible: {
    zIndex: 100,
    opacity: 1,
    display: "block",
    transition: {
      duration: 0.5,
      delayChildren: 0.6,
      staggerChildren: 0.2,
    },
  },
};

export const itemVariants = {
  hidden: {
    opacity: 0,
    y: -100,
    transition: {
      duration: 0.5,
    },
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};
