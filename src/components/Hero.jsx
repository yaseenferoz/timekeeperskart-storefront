import { useEffect, useState } from "react";

function Hero() {

const slides = [
  {
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=1600&q=80",
  },
   {
    image: "https://images.unsplash.com/photo-1539874754764-5a96559165b0?w=1600&q=80",
  },
{
    image: "https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=1600&q=80",
  },
  {
    image: "https://images.unsplash.com/photo-1508057198894-247b23fe5ade?w=1600&q=80",
  },
  {
    image: "https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?w=1600&q=80",
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