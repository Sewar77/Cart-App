import React from "react";

const Footer: React.FC = () => (
  <footer className="flex items-center justify-center px-6 py-4 bg-gradient-to-r from-blue-600 to-blue-400 shadow-lg border-t border-blue-700 mt-8">
    <span className="text-white font-semibold tracking-tight text-lg">
      © {new Date().getFullYear()} Cartify Store. All rights reserved.
    </span>
  </footer>
);

export default Footer;
