// src/components/PricingSelect.tsx
import React from 'react';

interface PricingSelectProps {
  selectedPricing: string;
  onChange: (value: string) => void;
}

const PricingSelect: React.FC<PricingSelectProps> = ({ selectedPricing, onChange }) => {
  return (
    <div className="w-full">
    <label htmlFor="pricing" className="font-Hanken font-bold text-lg">
      Pricing
    </label>
    <select
      id="pricing"
      name="pricing"
      className="focus:outline-none p-2 w-full border border-Neutra30 rounded-md"
      value={selectedPricing}
      onChange={(e) => onChange(e.target.value)}
    >
      <option value="">Select your Preferred Price</option>
      <option value="19.99">$19.99/month</option>
      <option value="29.99">$29.99/month</option>
      <option value="39.99">$39.99/month</option>
    </select>
  </div>
  );
};

export default PricingSelect;
