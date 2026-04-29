import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import API from "../api/api";
import BuyModal from "../components/BuyModal";

function ProductDetail() {
  const { id } = useParams();

  const [product, setProduct] = useState(null);
  const [selectedImage, setSelectedImage] = useState("");
  const [showModal, setShowModal] = useState(false); // ✅ NEW

  useEffect(() => {
    API.get("/api/products")
      .then((res) => {
        const found = res.data.find((p) => p._id === id);
        setProduct(found);
        if (found) setSelectedImage(found.images[0]);
      })
      .catch((err) => console.log(err));
  }, [id]);

  if (!product) {
    return (
      <div className="text-white text-center mt-32">
        Loading...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white">

      {/* Spacer for navbar */}
      <div className="h-24"></div>

      <div className="max-w-6xl mx-auto px-6 pb-16 grid md:grid-cols-2 gap-10">

        {/* LEFT: Images */}
        <div>
          <img
            src={selectedImage}
            alt={product.name}
            className="w-full h-[400px] object-cover rounded-2xl mb-4"
          />

          <div className="flex gap-3">
            {product.images.map((img, index) => (
              <img
                key={index}
                src={img}
                onClick={() => setSelectedImage(img)}
                className="w-20 h-20 object-cover rounded-lg cursor-pointer border border-gray-700 hover:border-yellow-400"
              />
            ))}
          </div>
        </div>

        {/* RIGHT: Details */}
        <div>
          <h1 className="text-3xl font-bold">{product.name}</h1>

          <p className="text-yellow-400 text-2xl mt-3">
            ₹{product.price}
          </p>

          <div className="mt-4 text-gray-400 space-y-1">
            <p>Brand: {product.brand}</p>
            <p>Gender: {product.gender}</p>
            <p>Movement: {product.movement}</p>
            <p>Style: {product.style}</p>
          </div>

          <div className="mt-6 text-gray-300 whitespace-pre-line">
            {product.description}
          </div>

          {/* ✅ UPDATED BUY BUTTON */}
          <button
            onClick={() => setShowModal(true)}
            className="mt-8 bg-green-500 hover:bg-green-600 px-6 py-3 rounded-lg text-white w-full md:w-auto"
          >
            Buy on WhatsApp
          </button>
        </div>

      </div>

      {/* ✅ MODAL */}
      {showModal && (
        <BuyModal
          product={product}
          onClose={() => setShowModal(false)}
        />
      )}

    </div>
  );
}

export default ProductDetail;