import React from 'react';

import WhyCard from './WhyCard';
import { WhyUsContent } from '../../constant';

type Props = {};



const WhyUs: React.FC<Props> = () => {
  return (
    <div className="bg-light-black text-white py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-serif text-medium-gold mb-8">
          Why Choose Us
        </h2>
        <p className="text-2xl font-sans mb-12">
          Reasons for choosing our mechanical keyboards
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {WhyUsContent.map((item, index) => (
            <WhyCard 
              key={index}
              icon={item.icon}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyUs;
