import { Link } from "react-router-dom";
import { useState } from "react";
import logo from "../assets/logo.jpeg";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed w-full top-0 z-50 bg-black/80 backdrop-blur-md border-b border-gray-800">

      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* LOGO */}
        <Link to="/" className="flex items-center gap-2">
          <img src={logo} alt="logo" className="h-10 w-10 object-contain" />
          <span className="text-white font-semibold text-lg hidden sm:block">
            MA Quality Products
          </span>
        </Link>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex gap-8 text-sm text-gray-300">
          <Link to="/" className="hover:text-yellow-400">Home</Link>
          <Link to="/products" className="hover:text-yellow-400">All Products</Link>
          <Link to="/policies" className="hover:text-yellow-400">Policies</Link>
          <Link to="/about" className="hover:text-yellow-400">About</Link>
        </div>

        {/* CONTACT */}
        <a
          href="https://wa.me/919980419466"
          target="_blank"
          rel="noreferrer"
          className="hidden md:block bg-yellow-400 text-black px-4 py-2 rounded-full text-sm font-semibold"
        >
          Contact
        </a>

        {/* HAMBURGER */}
        <button
          onClick={() => setOpen(true)}
          className="md:hidden flex flex-col gap-1 z-50"
        >
          <span className="w-6 h-[2px] bg-white"></span>
          <span className="w-6 h-[2px] bg-white"></span>
          <span className="w-6 h-[2px] bg-white"></span>
        </button>
      </div>

      {/* 🔥 FULL SCREEN MOBILE MENU */}
      <div
        className={`fixed inset-0 bg-black z-50 transform transition-transform duration-300 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >

        {/* TOP BAR */}
        <div className="flex items-center justify-between p-5 border-b border-gray-800">

          <div className="flex items-center gap-2">
            <img src={logo} className="h-8 w-8" />
            <span className="text-white font-semibold">
              MA Quality
            </span>
          </div>

          <button
            onClick={() => setOpen(false)}
            className="text-white text-2xl"
          >
            ✕
          </button>
        </div>

        {/* MENU ITEMS */}
        <div className="flex flex-col items-center justify-center h-full gap-8 text-white text-xl">

          <Link to="/" onClick={() => setOpen(false)}>
            Home
          </Link>

          <Link to="/products" onClick={() => setOpen(false)}>
            All Products
          </Link>

          <Link to="/about" onClick={() => setOpen(false)}>
            About
          </Link>

          <Link to="/policies" onClick={() => setOpen(false)}>
            Policies
          </Link>

          <a
            href="https://wa.me/919980419466"
            target="_blank"
            rel="noreferrer"
            className="bg-yellow-400 text-black px-8 py-3 rounded-full mt-4 font-semibold"
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;