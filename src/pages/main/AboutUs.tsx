

const AboutUs = () => {
  return (
    <div className="bg-gradient-to-r from-light-gold  to-pink-500 animate-fade-in text-white py-10">
      <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold text-center py-5 px-10">
        About Us - Passionate About Mechanical Keyboards
      </h1>

      {/* Section 1: Introduction */}
      <section className="py-8 px-5 md:px-10 lg:px-20 text-lg md:text-xl">
        <h2 className="text-2xl md:text-3xl font-semibold mb-4">Introduction</h2>
        <p>
          We are a team of mechanical keyboard enthusiasts dedicated to bringing you the best selection of high-quality mechanical keyboards from around the world. Our journey started with a simple idea: to create a one-stop-shop for everything related to mechanical keyboards, where beginners and pros alike can find the perfect match.
        </p>
      </section>

      {/* Section 2: Our Mission */}
      <section className="py-8 px-5 md:px-10 lg:px-20 text-lg md:text-xl">
        <h2 className="text-2xl md:text-3xl font-semibold mb-4">Our Mission</h2>
        <p>
          Our mission is to empower keyboard enthusiasts by providing an extensive range of products, in-depth reviews, and a platform to share their passion. We believe in the power of customization and the joy of typing on a perfectly tuned keyboard. Our curated collection ensures that every keyboard enthusiast finds what they need.
        </p>
      </section>

      {/* Section 3: Our Values */}
      <section className="py-8 px-5 md:px-10 lg:px-20 text-lg md:text-xl">
        <h2 className="text-2xl md:text-3xl font-semibold mb-4">Our Values</h2>
        <ul className="list-disc list-inside space-y-2">
          <li><strong>Quality:</strong> We only stock products that meet our rigorous standards for quality and performance.</li>
          <li><strong>Community:</strong> We are more than just a store; we are a community of keyboard enthusiasts who share a common love for mechanical keyboards.</li>
          <li><strong>Customer Satisfaction:</strong> We are committed to providing exceptional customer service and support, ensuring every customer has a positive experience.</li>
        </ul>
      </section>

      {/* Section 4: Our Story */}
      <section className="py-8 px-5 md:px-10 lg:px-20 text-lg md:text-xl">
        <h2 className="text-2xl md:text-3xl font-semibold mb-4">Our Story</h2>
        <p>
          Founded in [Year], our journey began when a group of keyboard enthusiasts recognized the need for a dedicated platform for mechanical keyboards. We started small, with just a few products, but thanks to our community's support, we've grown into a trusted name in the mechanical keyboard world. Today, we offer a wide range of products, from the latest models to classic designs, catering to both novices and experts.
        </p>
      </section>

      {/* Section 5: Meet the Team */}
      <section className="py-8 px-5 md:px-10 lg:px-20 text-lg md:text-xl">
        <h2 className="text-2xl md:text-3xl font-semibold mb-4">Meet the Team</h2>
        <p>
          Meet our passionate team of mechanical keyboard enthusiasts who work tirelessly to bring you the best products and experiences. Our team includes product experts, customer service professionals, and content creators who are all united by their love for mechanical keyboards.
        </p>
      </section>

      {/* Section 6: Join Our Community */}
      <section className="py-8 px-5 md:px-10 lg:px-20 text-lg md:text-xl">
        <h2 className="text-2xl md:text-3xl font-semibold mb-4">Join Our Community</h2>
        <p>
          Join our community of mechanical keyboard lovers! Follow us on social media, subscribe to our newsletter, and participate in our forums to stay updated on the latest trends, products, and tips.
        </p>
      </section>

      {/* Footer */}
      <footer className="py-5 px-10 text-center text-sm md:text-base lg:text-lg">
        Thank you for choosing us as your trusted source for mechanical keyboards. We look forward to serving you!
      </footer>
    </div>
  )
}

export default AboutUs
