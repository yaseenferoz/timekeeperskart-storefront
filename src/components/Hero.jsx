function Hero() {
  return (
    <section className="h-screen flex items-center justify-center text-center px-4 pt-20 bg-black">
      <div>
        <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">
          Timeless <span style={{ color: "#d4af37" }}>Luxury</span>
        </h1>

        <p className="text-gray-400 mb-8 max-w-xl mx-auto">
          Discover premium watches crafted with elegance and precision.
        </p>

        <button
          onClick={() => {
            document.getElementById("products")?.scrollIntoView({
              behavior: "smooth",
            });
          }}
          className="px-8 py-3 rounded-full font-semibold"
          style={{
            backgroundColor: "#d4af37",
            color: "#000",
          }}
        >
          Explore Collection
        </button>
      </div>
    </section>
  );
}

export default Hero;