import React from "react";
import { useProducts } from "../hooks/useProducts";
import ProductCard from "./ProductCard";

const ProductList: React.FC<{ onAddToCart: (productId: number) => void }> = ({
  onAddToCart,
}) => {
  const { data, isLoading, error } = useProducts();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error Loading Products...</div>;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4 ">
      {data?.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          onAddToCart={() => onAddToCart(product.id)}
        />
      ))}
    </div>
  );
};

export default ProductList;
