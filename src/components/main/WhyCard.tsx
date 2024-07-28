import React from 'react';

type WhyCardProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
};

const WhyCard: React.FC<WhyCardProps> = ({ icon, title, description }) => {
  return (
    <div className="flex items-center">
      <div className="text-medium-gold text-3xl">
        {icon}
      </div>
      <div className="ml-4">
        <h3 className="text-xl font-semibold text-medium-gold">
          {title}
        </h3>
        <p className="text-white pt-2">
          {description}
        </p>
      </div>
    </div>
  );
};

export default WhyCard;
