import { Link } from "react-router-dom";
import { useState } from "react";
import logo from "../assets/logo.jpeg";
function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed w-full top-0 z-50 bg-black/80 backdrop-blur-md border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

       <Link to="/" className="flex items-center gap-2">
  <img src={logo} alt="logo" className="h-10 w-10 object-contain" />
  <span className="text-white font-semibold text-lg hidden sm:block">
    MA Quality Products
  </span>
</Link>
    

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 text-sm text-gray-300">
          <Link to="/" className="hover:text-yellow-400">Home</Link>
          <Link to="/products" className="hover:text-yellow-400">All Products</Link>
          <Link to="/policies" className="hover:text-yellow-400">Policies</Link>
          <Link to="/about" className="hover:text-yellow-400">
  About
</Link>
        </div>

        {/* Contact Button */}
        <a
          href="https://wa.me/919980419466"
          target="_blank"
          rel="noreferrer"
          className="hidden md:block bg-yellow-400 text-black px-4 py-2 rounded-full text-sm font-semibold"
        >
          Contact
        </a>

        {/* 🔥 BETTER HAMBURGER */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden flex flex-col gap-1"
        >
          <span className="w-6 h-[2px] bg-white"></span>
          <span className="w-6 h-[2px] bg-white"></span>
          <span className="w-6 h-[2px] bg-white"></span>
        </button>
      </div>

      {/* 🔥 OVERLAY (dark background) */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 bg-black/70 z-40"
        />
      )}

      {/* 🔥 MOBILE DRAWER */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-[#111] z-50 transform transition-transform duration-300 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-6 space-y-6 text-white">

          {/* Close Button */}
          <button
            onClick={() => setOpen(false)}
            className="text-2xl"
          >
            ✕
          </button>

          <Link
            to="/"
            onClick={() => setOpen(false)}
            className="block text-lg"
          >
            Home
          </Link>

          <Link
            to="/products"
            onClick={() => setOpen(false)}
            className="block text-lg"
          >
            All Products
          </Link>

          <Link
            to="/policies"
            onClick={() => setOpen(false)}
            className="block text-lg"
          >
            Policies
          </Link>

          {/* Contact */}
          <a
            href="https://wa.me/919980419466"
            target="_blank"
            rel="noreferrer"
            className="block bg-yellow-400 text-black py-3 rounded-full text-center font-semibold"
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;