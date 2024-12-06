import React from 'react';
import { motion } from 'framer-motion';
import {
  ClockIcon,
  ChartBarIcon,
  CurrencyDollarIcon,
  ShieldCheckIcon,
  ChatBubbleLeftRightIcon,
  CpuChipIcon
} from '@heroicons/react/24/outline';

const features = [
  {
    icon: ClockIcon,
    title: '24/7 Availability',
    description: 'Always ready to assist your customers, any time of day or night.'
  },
  {
    icon: ChartBarIcon,
    title: 'Advanced Analytics',
    description: 'Gain insights from every interaction to improve your service.'
  },
  {
    icon: CurrencyDollarIcon,
    title: 'Cost-Effective',
    description: 'Pay only for what you use with our flexible pricing plans.'
  },
  {
    icon: ShieldCheckIcon,
    title: 'Secure & Compliant',
    description: 'Enterprise-grade security and compliance standards.'
  },
  {
    icon: ChatBubbleLeftRightIcon,
    title: 'Natural Conversations',
    description: 'AI-powered natural language processing for human-like interactions.'
  },
  {
    icon: CpuChipIcon,
    title: 'Smart Learning',
    description: 'Continuously improves from interactions to serve better.'
  }
];

const FeaturesSection = () => {
  return (
    <section className="py-20 px-4 bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Powerful Features for Modern Business
          </h2>
          <p className="text-xl text-white/80">
            Everything you need to deliver exceptional customer service
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10"
            >
              <feature.icon className="h-12 w-12 text-purple-400 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-white/70">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;