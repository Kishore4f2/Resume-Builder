import React from 'react';
import { motion } from 'framer-motion';

function GlowCard({ children, className = '' }) {
  return (
    <motion.div
      className={`card shadow-lg border-0 ${className}`}
      whileHover={{ y: -6 }}
      transition={{ duration: 0.35, ease: [0.22, 0.61, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

export default GlowCard;


