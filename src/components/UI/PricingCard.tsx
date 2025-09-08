import React from 'react';
import { Check } from 'lucide-react';
import Button from './Button';

interface PricingCardProps {
  name: string;
  price: string;
  description: string;
  features: string[];
  outcomes: string[];
  popular?: boolean;
}

const PricingCard: React.FC<PricingCardProps> = ({
  name,
  price,
  description,
  features,
  outcomes,
  popular = false,
}) => {
  return (
    <div className={`relative bg-white rounded-2xl shadow-lg ${popular ? 'ring-2 ring-accent-600' : ''}`}>
      {popular && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
          <span className="bg-accent-600 text-white px-4 py-1 rounded-full text-sm font-medium">
            Most Popular
          </span>
        </div>
      )}
      
      <div className="p-8">
        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-2">{name}</h3>
          <div className="text-4xl font-bold text-gray-900 mb-2">{price}</div>
          <p className="text-gray-600">{description}</p>
        </div>

        <div className="mb-8">
          <h4 className="font-semibold text-gray-900 mb-4">What's included:</h4>
          <ul className="space-y-3">
            {features.map((feature, index) => (
              <li key={index} className="flex items-start">
                <Check className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mb-8">
          <h4 className="font-semibold text-gray-900 mb-4">Expected outcomes:</h4>
          <ul className="space-y-2">
            {outcomes.map((outcome, index) => (
              <li key={index} className="text-gray-600">• {outcome}</li>
            ))}
          </ul>
        </div>

        <Button 
          variant={popular ? 'primary' : 'outline'}
          size="lg"
          className="w-full"
          href="/contact"
        >
          Get Started
        </Button>
      </div>
    </div>
  );
};

export default PricingCard;