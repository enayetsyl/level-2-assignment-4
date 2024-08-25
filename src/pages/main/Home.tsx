import React from 'react';
import Hero from '../../components/main/Hero';
import Services from '../../components/main/Services';
import FeaturedProducts from '../../components/main/FeaturedProducts';
import WhyUs from '../../components/main/WhyUs';
import Brands from '../../components/main/Brands';
import Review from '../../components/main/Review';
import Newsletter from '../../components/main/Newsletter';

type Props = {}

const Home = (props: Props) => {
  return (
    <div>
      <Hero/>
      <Services/>
      <FeaturedProducts/>
      <Brands/>
      <WhyUs/>
      <Review/>
      <Newsletter/>
    </div>
  );
};

export default Home;
