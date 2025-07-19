import React from "react";
import { useProducts } from "../hooks/useProducts";
import ProductCard from "./ProductCard";
import { Product } from "../hooks/useProducts";

const ProductList: React.FC<{ onAddToCart: (product: Product) => void }> = ({
  onAddToCart,
}) => {
  const { data, isLoading, error } = useProducts();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error Loading Products...</div>;

  return (
    <div className="max-w-screen-2xl mx-auto px-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
        {data?.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onAddToCart={() => onAddToCart(product)}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
