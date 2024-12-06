import React from 'react';
import PricingCard from './PricingCard';

const pricingTiers = [
  {
    name: "Pay As You Go",
    description: "Perfect for small projects and occasional usage",
    price: "1.25",
    unit: "/min",
    features: [
      "No commitment required",
      "24/7 availability",
      "Basic voice analytics",
      "Standard support",
      "Pay only for what you use"
    ],
    buttonText: "Get Started"
  },
  {
    name: "Growth",
    description: "Ideal for growing businesses",
    price: "999",
    unit: "/1000 mins",
    features: [
      "All Pay As You Go features",
      "Priority support",
      "Advanced analytics",
      "Custom voice personas",
      "Bulk minute savings"
    ],
    buttonText: "Choose Growth",
    isPopular: true
  },
  {
    name: "Scale",
    description: "Best value for high volume usage",
    price: "1899",
    unit: "/2500 mins",
    features: [
      "All Growth features",
      "Volume discounts",
      "Dedicated account manager",
      "API access",
      "Custom integration support"
    ],
    buttonText: "Choose Scale"
  },
  {
    name: "Enterprise",
    description: "Custom solutions for large organizations",
    features: [
      "Unlimited minutes",
      "24/7 premium support",
      "Custom AI model training",
      "SLA guarantees",
      "Advanced security features",
      "On-premise deployment options"
    ],
    buttonText: "Contact Sales"
  }
];

const PricingSection = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Simple, Transparent Pricing</h2>
          <p className="text-xl text-white/80">Choose the perfect plan for your needs</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {pricingTiers.map((tier, index) => (
            <PricingCard
              key={index}
              tier={tier}
              isPopular={tier.isPopular}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;