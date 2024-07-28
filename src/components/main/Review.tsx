import React from 'react';
import ReviewCard from './ReviewCard';
import { reviews } from '../../constant';

type Props = {};



const Review: React.FC<Props> = () => {
  return (
    <div className="py-32">
      <div className="md:bg-medium-gold md:h-32 "></div>
      <div className="md:-mt-14">
        <div className="flex justify-center items-center">
          <div className="grid lg:grid-cols-3 grid-cols-1 md:grid-cols-2 gap-10">
            {reviews.map((review, index) => (
              <ReviewCard
                key={index}
                image={review.image}
                name={review.name}
                role={review.role}
                review={review.review}
                className={index === 1 ? 'bg-silver lg:bg-transparent' : 'bg-silver'} // Conditional class
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
