import React from 'react';
import { motion } from 'framer-motion';

const testimonials = [
  {
    content: "Voice AI has transformed our customer service. Our response times are down 70% and customer satisfaction is at an all-time high.",
    author: "Sarah Johnson",
    role: "Customer Success Manager",
    company: "TechCorp Inc.",
    image: "https://randomuser.me/api/portraits/women/1.jpg"
  },
  {
    content: "The natural language processing is incredible. Our customers often can't tell they're talking to an AI.",
    author: "Michael Chen",
    role: "Operations Director",
    company: "Global Solutions",
    image: "https://randomuser.me/api/portraits/men/1.jpg"
  },
  {
    content: "Setup was seamless and the analytics provide invaluable insights. It's like having a 24/7 support team.",
    author: "Emily Rodriguez",
    role: "CTO",
    company: "StartUp Labs",
    image: "https://randomuser.me/api/portraits/women/2.jpg"
  }
];

const TestimonialSection = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Trusted by Industry Leaders
          </h2>
          <p className="text-xl text-white/80">
            See what our customers have to say about Voice AI
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10"
            >
              <div className="flex items-center mb-6">
                <img
                  src={testimonial.image}
                  alt={testimonial.author}
                  className="h-12 w-12 rounded-full mr-4"
                />
                <div>
                  <h4 className="text-white font-semibold">{testimonial.author}</h4>
                  <p className="text-white/70 text-sm">{testimonial.role}</p>
                  <p className="text-white/50 text-sm">{testimonial.company}</p>
                </div>
              </div>
              <p className="text-white/90 italic">"{testimonial.content}"</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;