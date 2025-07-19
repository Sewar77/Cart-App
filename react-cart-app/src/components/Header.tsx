import React from "react";
import CartDropdown from "./CartDropdown";

interface HeaderProps {
  cartCount: number;
  onCartClick: () => void;
  isCartOpen: boolean;
}

const Header: React.FC<HeaderProps> = ({
  cartCount,
  onCartClick,
  isCartOpen,
}) => (
  <header className="w-full bg-gradient-to-r from-blue-600 to-blue-400 shadow-md border-b border-blue-700 sticky top-0 z-50">
    <div className="max-w-screen-2xl mx-auto flex items-center justify-between px-4 sm:px-6 py-3 sm:py-4">
      <a
        href="/"
        className="flex items-center gap-2 sm:gap-3 text-xl sm:text-2xl font-extrabold text-white tracking-tight hover:text-yellow-300 transition-colors"
        aria-label="Go to homepage"
      >
        <svg
          className="w-8 sm:w-10 h-8 sm:h-10 text-yellow-300"
          fill="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
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
        <span className="hidden xs:inline">Cartify Store</span>
      </a>

      <div className="relative">
        <button
          onClick={onCartClick}
          className="relative p-2 rounded-md hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-yellow-300 group transition"
          aria-label="View your shopping cart"
        >
          <svg
            className="w-7 sm:w-8 h-7 sm:h-8 text-white group-hover:text-yellow-300 transition"
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
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-[10px] sm:text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center border-2 border-white">
              {cartCount}
            </span>
          )}
        </button>

        {isCartOpen && <CartDropdown />}
      </div>
    </div>
  </header>
);

export default Header;
