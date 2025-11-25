import React from 'react';
import { motion } from 'framer-motion';

function LuxuryButton({ children, className = '', ...props }) {
  return (
    <motion.button
      whileTap={{ scale: 0.98 }}
      whileHover={{ y: -2 }}
      transition={{ duration: 0.2, ease: [0.22, 0.61, 0.36, 1] }}
      className={`btn btn-primary ${className}`}
      {...props}
    >
      {children}
    </motion.button>
  );
}

export default LuxuryButton;


