

const ContactUs = () => {
  return (
    <div className="bg-gradient-to-r from-blue-500 to-purple-500 text-white animate-fade-in py-20">
      <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold text-center py-5 px-10">
        Contact Us
      </h1>

      {/* Contact Information Section */}
      <section className="py-8 px-5 md:px-10 lg:px-20 text-lg md:text-xl">
        <h2 className="text-2xl md:text-3xl font-semibold mb-4">We'd Love to Hear From You!</h2>
        <p className="mb-12">
          Whether you have a question about our products, need assistance with an order, or just want to share your feedback, we're here to help! Reach out to us through any of the following methods, and we'll get back to you as soon as possible.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-5 bg-white text-black rounded-lg shadow-lg transform transition duration-500 hover:scale-105">
            <h3 className="text-xl font-bold mb-2">Email Us</h3>
            <p className="mb-2">For general inquiries: <a href="mailto:support@keyboardshop.com" className="text-blue-600 underline">support@keyboardshop.com</a></p>
            <p>For technical support: <a href="mailto:techsupport@keyboardshop.com" className="text-blue-600 underline">techsupport@keyboardshop.com</a></p>
          </div>
          <div className="p-5 bg-white text-black rounded-lg shadow-lg transform transition duration-500 hover:scale-105">
            <h3 className="text-xl font-bold mb-2">Call Us</h3>
            <p className="mb-2">Customer Service: <a href="tel:+1234567890" className="text-blue-600 underline">+1 (234) 567-890</a></p>
            <p>Technical Support: <a href="tel:+0987654321" className="text-blue-600 underline">+1 (098) 765-4321</a></p>
          </div>
        </div>
        <div className="mt-6 p-5 bg-white text-black rounded-lg shadow-lg transform transition duration-500 hover:scale-105">
          <h3 className="text-xl font-bold mb-2">Visit Us</h3>
          <p>123 Mechanical Keyboard Ave, Typing City, TX 78901, USA</p>
        </div>
      </section>

  
        <p className="mt-5 text-center">
          We appreciate your interest in our products and services. Feel free to reach out anytime!
        </p>
    </div>
  );
}

export default ContactUs;
