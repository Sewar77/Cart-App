import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import ProductList from "./components/ProductList";
import Footer from "./components/Footer";
import { CartProvider, useCart } from "./context/CartContext";
import CartDropdown from "./components/CartDropdown";

function AppContent() {
  const { addToCart, getCartCount } = useCart();
  const [isCartOpen, setIsCartOpen] = useState(false);

  const handleAddToCart = (product: any) => {
    addToCart({ ...product, quantity: 1 });
  };

  return (
    <>
      <Header
        cartCount={getCartCount()}
        onCartClick={() => setIsCartOpen((prev) => !prev)}
        isCartOpen={isCartOpen}
      />
      {isCartOpen && <CartDropdown />}
      <ProductList onAddToCart={handleAddToCart} />
      <Footer />
    </>
  );
}

// This component wraps the entire app with CartProvider.
function App() {
  return (
    <CartProvider>
      <AppContent />
    </CartProvider>
  );
}

export default App;
