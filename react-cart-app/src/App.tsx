import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import ProductList from "./components/ProductList";
import { useState } from "react";
import Footer from "./components/Footer";
function App() {
  const [cart, setCart] = useState<number[]>([]);
  const handleAddToCart = (productId: number) => {
    setCart((prevCart) => [...prevCart, productId]);
  };
  const cartCount = cart.length;
  return (
    <div className="App">
      <Header cartCount={cartCount} onCartClick={() => {}} />
      <ProductList onAddToCart={handleAddToCart} />
      <Footer />
    </div>
  );
}

export default App;
