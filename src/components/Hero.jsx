import { useEffect, useState } from "react";

function Hero() {
  const slides = [
    {
      image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30",
    },
    {
      image: "https://images.unsplash.com/photo-1649357585015-179ed98f513d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGx1eHVyeSUyMHdhdGNofGVufDB8fDB8fHww",
    },
    {
      image: "https://images.unsplash.com/photo-1619976396248-56d05beb2919?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

  const [current, setCurrent] = useState(0);

  // Auto slide
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden">

      {/* Background Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute w-full h-full transition-opacity duration-1000 ${
            index === current ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={slide.image}
            className="w-full h-full object-cover"
          />
        </div>
      ))}

      {/* Overlay Content (YOUR ORIGINAL DESIGN) */}
      <div className="absolute inset-0 bg-black/70 flex items-center justify-center text-center px-4 pt-20">
        <div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">
            Timeless <span style={{ color: "#d4af37" }}>Luxury</span>
          </h1>

          <p className="text-gray-300 mb-8 max-w-xl mx-auto">
            Discover premium watches crafted with elegance and precision.
          </p>

          <button
            onClick={() => {
              document.getElementById("products")?.scrollIntoView({
                behavior: "smooth",
              });
            }}
            className="px-8 py-3 rounded-full font-semibold hover:scale-105 transition"
            style={{
              backgroundColor: "#d4af37",
              color: "#000",
            }}
          >
            Explore Collection
          </button>
        </div>
      </div>

      {/* Dots Indicator */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-2">
        {slides.map((_, index) => (
          <div
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full cursor-pointer ${
              current === index ? "bg-yellow-400" : "bg-gray-500"
            }`}
          />
        ))}
      </div>
    </section>
  );
}

export default Hero;