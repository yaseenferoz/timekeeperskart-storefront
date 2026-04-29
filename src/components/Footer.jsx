function Footer() {
  return (
    <footer className="bg-[#111] text-gray-400 text-center py-6 mt-10">
      <p>© {new Date().getFullYear()} MA Quality Products</p>
      <p className="text-sm mt-2">All rights reserved</p>
    </footer>
  );
}

export default Footer;