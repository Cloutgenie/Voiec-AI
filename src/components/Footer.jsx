import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  const footerSections = [
    {
      title: 'Product',
      links: ['Features', 'Pricing', 'Documentation', 'API Reference']
    },
    {
      title: 'Company',
      links: ['About', 'Blog', 'Careers', 'Press']
    },
    {
      title: 'Resources',
      links: ['Community', 'Help Center', 'Partners', 'Status']
    },
    {
      title: 'Legal',
      links: ['Privacy', 'Terms', 'Security', 'Compliance']
    }
  ];

  return (
    <footer className="bg-gray-900 border-t border-white/10">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {footerSections.map((section, index) => (
            <div key={index}>
              <h3 className="text-white font-semibold mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <motion.a
                      href="#"
                      whileHover={{ x: 5 }}
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      {link}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="mt-12 border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-4">
            <img src="/voice.svg" alt="Logo" className="h-8 w-auto" />
            <p className="text-gray-400">© 2023 Voice AI. All rights reserved.</p>
          </div>
          
          <div className="flex space-x-6 mt-4 md:mt-0">
            <motion.a
              href="#"
              whileHover={{ y: -2 }}
              className="text-gray-400 hover:text-white"
            >
              Twitter
            </motion.a>
            <motion.a
              href="#"
              whileHover={{ y: -2 }}
              className="text-gray-400 hover:text-white"
            >
              LinkedIn
            </motion.a>
            <motion.a
              href="#"
              whileHover={{ y: -2 }}
              className="text-gray-400 hover:text-white"
            >
              GitHub
            </motion.a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;