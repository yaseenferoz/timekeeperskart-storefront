import { useState } from "react";

function BuyModal({ product, onClose }) {
  const [customer, setCustomer] = useState({
    name: "",
    phone: "",
    email: "",
    altPhone: "",
    address: "",
    landmark: "",
    city: "",
    pincode: "",
  });

  const handleChange = (e) => {
    setCustomer({ ...customer, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    if (!customer.name || !customer.phone || !customer.address) {
      alert("Please fill required fields");
      return;
    }

    const productUrl = `${window.location.origin}/product/${product._id}`;

    const message = `Hi 👋

I want to buy this watch:

Name: ${product.name}
Price: ₹${product.price}
Product Link: ${productUrl}

--- Customer Details ---

Name: ${customer.name}
Phone: ${customer.phone}
Email: ${customer.email}
Alternate: ${customer.altPhone}

Address: ${customer.address}
Landmark: ${customer.landmark}
City: ${customer.city}
Pincode: ${customer.pincode}
`;

    window.open(
      `https://wa.me/919980419466?text=${encodeURIComponent(message)}`
    );

    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4">

      <div className="bg-white w-full max-w-md p-5 rounded-xl max-h-[90vh] overflow-y-auto">

        <h3 className="text-lg font-semibold mb-4 text-center text-black">
          Enter Details
        </h3>

        {/* ✅ FIXED INPUT STYLES */}
        <div className="space-y-3">
          <input name="name" placeholder="Name *" onChange={handleChange}
            className="border p-2 w-full rounded text-black bg-white border-gray-300"/>

          <input name="phone" placeholder="Phone *" onChange={handleChange}
            className="border p-2 w-full rounded text-black bg-white border-gray-300"/>

          <input name="email" placeholder="Email" onChange={handleChange}
            className="border p-2 w-full rounded text-black bg-white border-gray-300"/>

          <input name="altPhone" placeholder="Alternate Phone" onChange={handleChange}
            className="border p-2 w-full rounded text-black bg-white border-gray-300"/>

          <input name="address" placeholder="Address *" onChange={handleChange}
            className="border p-2 w-full rounded text-black bg-white border-gray-300"/>

          <input name="landmark" placeholder="Landmark" onChange={handleChange}
            className="border p-2 w-full rounded text-black bg-white border-gray-300"/>

          <input name="city" placeholder="City" onChange={handleChange}
            className="border p-2 w-full rounded text-black bg-white border-gray-300"/>

          <input name="pincode" placeholder="Pincode" onChange={handleChange}
            className="border p-2 w-full rounded text-black bg-white border-gray-300"/>
        </div>

        {/* BUTTONS */}
        <div className="flex gap-3 mt-5">
          <button
            onClick={onClose}
            className="w-full bg-gray-300 text-black py-2 rounded"
          >
            Cancel
          </button>

          <button
            onClick={handleSubmit}
            className="w-full bg-green-500 text-white py-2 rounded"
          >
            Continue
          </button>
        </div>

      </div>
    </div>
  );
}

export default BuyModal;