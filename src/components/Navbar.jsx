import { Link } from "react-router-dom";
import { useState } from "react";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed w-full top-0 z-50 bg-black/80 backdrop-blur-md border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <Link to="/" className="text-xl font-bold text-white">
          Timekeepers<span className="text-gold">Kart</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 text-sm text-gray-300">
          <Link to="/" className="hover:text-gold">Home</Link>
          <Link to="/" className="hover:text-gold">Collection</Link>
          <Link to="/" className="hover:text-gold">About</Link>
        </div>

        {/* Contact Button */}
        <a
          href="https://wa.me/919980419466"
          target="_blank"
          rel="noreferrer"
          className="hidden md:block bg-gold text-black px-4 py-2 rounded-full text-sm font-semibold"
        >
          Contact
        </a>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-white text-2xl"
        >
          ☰
        </button>

      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-black px-6 pb-4 space-y-4 text-white">
          <Link to="/" onClick={() => setOpen(false)}>Home</Link>
          <Link to="/" onClick={() => setOpen(false)}>Collection</Link>
          <Link to="/" onClick={() => setOpen(false)}>About</Link>

          <a
            href="https://wa.me/919980419466"
            target="_blank"
            rel="noreferrer"
            className="block bg-gold text-black px-4 py-2 rounded-full text-center"
          >
            Contact
          </a>
        </div>
      )}
    </nav>
  );
}

export default Navbar;