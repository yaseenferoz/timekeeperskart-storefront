import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function About() {
  return (
    <div className="bg-black text-white min-h-screen">

      <Navbar />

      {/* Fix navbar overlap */}
      <div className="pt-24 max-w-5xl mx-auto px-6 py-12">

        <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center">
          About Us
        </h1>

        <div className="space-y-6 text-gray-300 leading-relaxed text-lg">

          <p>
            Welcome to <span className="text-yellow-400 font-semibold">MA Quality Products</span> — 
            your destination for stylish, premium-quality watches at affordable prices.
          </p>

          <p>
            We carefully curate our collection to bring you elegant timepieces 
            that combine luxury design with everyday usability. Every product is 
            checked before dispatch to ensure you receive the best quality.
          </p>

          <p>
            Our goal is simple — to provide high-quality watches with a smooth 
            and trustworthy buying experience.
          </p>

          <p>
            We offer fast dispatch, direct WhatsApp support, and transparent 
            policies so you can shop with confidence.
          </p>

          <p className="text-yellow-400 font-semibold">
            Thank you for choosing MA Quality Products.
          </p>

        </div>

      </div>

      <Footer />
    </div>
  );
}

export default About;