import React from "react";

interface HeaderProps {
  cartCount: number;
  onCartClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ cartCount, onCartClick }) => (
  <header className="flex items-center justify-between px-6 py-4 bg-gradient-to-r from-blue-600 to-blue-400 shadow-lg border-b border-blue-700">
    <a
      href="/"
      className="flex items-center gap-3 text-2xl sm:text-3xl font-extrabold text-white tracking-tight hover:text-yellow-300 transition"
    >
      <svg
        className="w-10 h-10 text-yellow-300"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <circle cx="12" cy="12" r="10" />
        <text
          x="12"
          y="16"
          textAnchor="middle"
          fontSize="10"
          fill="#2563eb"
          fontWeight="bold"
        >
          C
        </text>
      </svg>
      Cartify Store
    </a>
    <button
      className="relative group"
      onClick={onCartClick}
      aria-label="View cart"
    >
      <svg
        className="w-9 h-9 text-white group-hover:text-yellow-300 transition"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        viewBox="0 0 24 24"
      >
        <path
          d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2 9h14l-2-9M10 21a2 2 0 104 0"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      {cartCount > 0 && (
        <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full px-2 py-0.5 border-2 border-white">
          {cartCount}
        </span>
      )}
    </button>
  </header>
);

export default Header;
