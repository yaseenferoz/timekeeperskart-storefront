import { useEffect, useState } from "react";
import API from "../api/api";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

function AllProducts() {
  const [products, setProducts] = useState([]);
  const [filtered, setFiltered] = useState([]);

  const [filters, setFilters] = useState({
    brand: "",
    gender: "",
    movement: "",
    style: "",
  });

  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 6;

  const navigate = useNavigate();

  // Fetch
  useEffect(() => {
    API.get("/api/products")
      .then((res) => {
        setProducts(res.data);
        setFiltered(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  // Apply filters + search
  useEffect(() => {
    let data = [...products];

    // Filters
    if (filters.brand) {
      data = data.filter((p) => p.brand === filters.brand);
    }

    if (filters.gender) {
      data = data.filter(
        (p) =>
          p.gender?.toLowerCase() === filters.gender.toLowerCase()
      );
    }

    if (filters.movement) {
      data = data.filter(
        (p) =>
          p.movement?.toLowerCase() === filters.movement.toLowerCase()
      );
    }

    if (filters.style) {
      data = data.filter(
        (p) =>
          p.style?.toLowerCase() === filters.style.toLowerCase()
      );
    }

    // 🔍 SEARCH
    if (search) {
      data = data.filter(
        (p) =>
          p.name.toLowerCase().includes(search.toLowerCase()) ||
          p.brand.toLowerCase().includes(search.toLowerCase())
      );
    }

    setFiltered(data);
    setCurrentPage(1); // reset page on filter/search
  }, [filters, search, products]);

  // Pagination logic
  const indexOfLast = currentPage * itemsPerPage;
  const indexOfFirst = indexOfLast - itemsPerPage;
  const currentProducts = filtered.slice(indexOfFirst, indexOfLast);
  const totalPages = Math.ceil(filtered.length / itemsPerPage);

  // Dynamic filters
  const brands = [...new Set(products.map((p) => p.brand).filter(Boolean))];
  const genders = [...new Set(products.map((p) => p.gender?.toLowerCase()).filter(Boolean))];
  const movements = [...new Set(products.map((p) => p.movement?.toLowerCase()).filter(Boolean))];
  const styles = [...new Set(products.map((p) => p.style?.toLowerCase()).filter(Boolean))];

  const format = (t) => t.charAt(0).toUpperCase() + t.slice(1);

  const handleBuyNow = (product) => {
    const url = `https://www.ma-quality-products.online/product/${product._id}`;

    const message = `Hi 👋

I want to buy this watch:

Name: ${product.name}
Price: ₹${product.price}
Product Link: ${url}`;

    window.open(
      `https://wa.me/919980419466?text=${encodeURIComponent(message)}`
    );
  };

  return (
    <div className="bg-black text-white min-h-screen">

      <Navbar />

      <div className="pt-24 max-w-7xl mx-auto px-4 py-10 grid md:grid-cols-4 gap-6">

        {/* FILTER */}
        <div className="md:col-span-1 bg-[#111] p-5 rounded-2xl h-fit">

          <h3 className="text-xl mb-4">Filters</h3>

          {/* SEARCH */}
          <input
            type="text"
            placeholder="Search watches..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full mb-4 p-2 rounded bg-black border border-gray-700 text-white"
          />

          {/* BRAND */}
          <p className="text-gray-400 mb-2">Brand</p>
          <div className="flex flex-wrap gap-2 mb-4">
            {brands.map((b) => (
              <button
                key={b}
                onClick={() =>
                  setFilters({
                    ...filters,
                    brand: filters.brand === b ? "" : b,
                  })
                }
                className={`px-3 py-1 rounded-full text-sm ${
                  filters.brand === b
                    ? "bg-yellow-400 text-black"
                    : "bg-gray-800"
                }`}
              >
                {b}
              </button>
            ))}
          </div>

          {/* GENDER */}
          <p className="text-gray-400 mb-2">Gender</p>
          <div className="flex gap-2 mb-4">
            {genders.map((g) => (
              <button
                key={g}
                onClick={() =>
                  setFilters({
                    ...filters,
                    gender: filters.gender === g ? "" : g,
                  })
                }
                className={`px-3 py-1 rounded-full text-sm ${
                  filters.gender === g
                    ? "bg-yellow-400 text-black"
                    : "bg-gray-800"
                }`}
              >
                {format(g)}
              </button>
            ))}
          </div>

          {/* CLEAR */}
          <button
            onClick={() =>
              setFilters({
                brand: "",
                gender: "",
                movement: "",
                style: "",
              })
            }
            className="w-full bg-gray-700 py-2 rounded"
          >
            Clear Filters
          </button>
        </div>

        {/* PRODUCTS */}
        <div className="md:col-span-3">

          {/* GRID */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {currentProducts.map((p) => (
              <div
                key={p._id}
                onClick={() => navigate(`/product/${p._id}`)}
                className="bg-[#111] rounded-xl overflow-hidden cursor-pointer"
              >
                <img src={p.images[0]} className="h-60 w-full object-cover" />

                <div className="p-3">
                  <h4>{p.name}</h4>
                  <p className="text-yellow-400">₹{p.price}</p>

                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleBuyNow(p);
                    }}
                    className="mt-3 w-full bg-green-500 py-2 rounded"
                  >
                    Buy
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* PAGINATION */}
          <div className="flex justify-center mt-8 gap-2">
            {[...Array(totalPages)].map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentPage(i + 1)}
                className={`px-3 py-1 rounded ${
                  currentPage === i + 1
                    ? "bg-yellow-400 text-black"
                    : "bg-gray-700"
                }`}
              >
                {i + 1}
              </button>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
}

export default AllProducts;