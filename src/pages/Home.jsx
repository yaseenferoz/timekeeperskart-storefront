import Hero from "../components/Hero";
import Products from "../components/Products";
import Footer from "../components/Footer";

function Home() {
  return (
    <div className="bg-black">

      {/* HERO */}
      <Hero />

      {/* NEW ARRIVALS */}
      <Products title="New Arrivals" />

      {/* MEN */}
      <Products title="Style for Men" filter="men" />

      {/* WOMEN */}
      <Products title="Style for Women" filter="women" />

      {/* FOOTER */}
      <Footer />

    </div>
  );
}

export default Home;