import Hero from "../../components/main/Hero";
import Services from "../../components/main/Services";
import FeaturedProducts from "../../components/main/FeaturedProducts";
import WhyUs from "../../components/main/WhyUs";
import Brands from "../../components/main/Brands";
import Review from "../../components/main/Review";
import Newsletter from "../../components/main/Newsletter";

const Home = () => {
  return (
    <div>
      <Hero />
      <Services />
      <FeaturedProducts />
      <Brands />
      <WhyUs />
      <Review />
      <Newsletter />
    </div>
  );
};

export default Home;
