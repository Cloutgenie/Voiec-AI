import React from 'react';
import { motion } from 'framer-motion';
import GradientBackground from '../../common/GradientBackground';

const AuthLayout = ({ children }) => {
  return (
    <GradientBackground>
      <div className="min-h-screen flex items-center justify-center p-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-md bg-white/10 backdrop-blur-lg p-8 rounded-lg shadow-xl border border-white/20"
        >
          {children}
        </motion.div>
      </div>
    </GradientBackground>
  );
};

export default AuthLayout;