import { useEffect, useState } from "react";
import API from "../api/api";
import { useNavigate } from "react-router-dom";

function Products() {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    API.get("/api/products")
      .then((res) => setProducts(res.data))
      .catch((err) => console.log(err));
  }, []);

  const handleBuyNow = (product) => {
    // ✅ Use your live domain directly (avoids cache/env issues)
    const productUrl = `https://www.timekeeperskart.online/product/${product._id}`;

    const message = `Hi 👋

I want to buy this watch:

Name: ${product.name}
Price: ₹${product.price}
Product Link: ${productUrl}`;

    const url = `https://wa.me/919980419466?text=${encodeURIComponent(message)}`;

    console.log("WhatsApp Message:", message); // debug
    window.open(url, "_blank");
  };

  return (
    <div
      id="products"
      className="max-w-7xl mx-auto px-6 py-16 scroll-mt-24"
    >
      <h2 className="text-3xl font-bold mb-10 text-center text-white">
        Our Collection
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {products.map((p) => (
          <div
            key={p._id}
            onClick={() => navigate(`/product/${p._id}`)}
            className="bg-[#111] rounded-2xl overflow-hidden shadow-lg group cursor-pointer"
          >
            {/* Image */}
            <div className="overflow-hidden">
              <img
                src={p.images[0]}
                alt={p.name}
                className="w-full h-72 object-cover group-hover:scale-110 transition duration-500"
              />
            </div>

            {/* Content */}
            <div className="p-4">
              <h3 className="text-lg font-semibold text-white">
                {p.name}
              </h3>

              <p className="text-yellow-400 text-xl mt-1">
                ₹{p.price}
              </p>

              {/* WhatsApp Button */}
              <button
                onClick={(e) => {
                  e.stopPropagation(); // prevent navigation
                  handleBuyNow(p);
                }}
                className="mt-4 w-full bg-green-500 hover:bg-green-600 py-2 rounded-lg text-white"
              >
                Buy on WhatsApp
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;