import React from 'react';

type ReviewCardProps = {
  image: string;
  name: string;
  role: string;
  review: string;
  className?: string; // Add className prop
};

const ReviewCard: React.FC<ReviewCardProps> = ({ image, name, role, review, className }) => {
  return (
    <div className={`w-60 h-56 flex justify-center flex-col items-center ${className}`}>
      <img src={image} alt={name} className="h-[80px] w-[80px] rounded-full" />
      <div className="flex justify-center flex-col items-center space-y-1">
        <h3 className='font-bold text-base pt-2'>{name}</h3>
        <p className='text-sm'>{role}</p>
        <p className='text-xs text-justify px-3 pb-2'>{review}</p>
      </div>
    </div>
  );
};

export default ReviewCard;
