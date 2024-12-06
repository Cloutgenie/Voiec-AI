import React from 'react';
import { motion } from 'framer-motion';
import { CheckIcon } from '@heroicons/react/24/outline';

const PricingCard = ({ tier, isPopular }) => {
  const cardClass = isPopular
    ? "border-purple-500 bg-white/15"
    : "border-white/20 bg-white/10";

  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      className={`backdrop-blur-lg rounded-2xl p-8 border-2 ${cardClass} relative`}
    >
      {isPopular && (
        <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-purple-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
          Most Popular
        </span>
      )}
      
      <h3 className="text-2xl font-bold text-white mb-2">{tier.name}</h3>
      <p className="text-white/70 mb-6">{tier.description}</p>
      
      <div className="mb-6">
        {tier.price ? (
          <>
            <span className="text-4xl font-bold text-white">${tier.price}</span>
            <span className="text-white/70">{tier.unit}</span>
          </>
        ) : (
          <span className="text-2xl font-bold text-white">Contact Us</span>
        )}
      </div>

      <ul className="space-y-4 mb-8">
        {tier.features.map((feature, index) => (
          <li key={index} className="flex items-center text-white/90">
            <CheckIcon className="h-5 w-5 text-purple-400 mr-2 flex-shrink-0" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      <motion.button
        whileTap={{ scale: 0.95 }}
        className={`w-full py-3 rounded-lg font-semibold transition-all ${
          isPopular
            ? "bg-purple-500 text-white hover:bg-purple-600"
            : "bg-white/20 text-white hover:bg-white/30"
        }`}
      >
        {tier.buttonText}
      </motion.button>
    </motion.div>
  );
};

export default PricingCard;