import React from "react";
import ProductCard from "../components/ProductCard";

const dummyProducts = [
  { id: 1, name: "Sofa Set", description: "Luxury modern sofa", price: 899, image: "https://picsum.photos/300/200?1" },
  { id: 2, name: "Lamp", description: "Minimalist table lamp", price: 120, image: "https://picsum.photos/300/200?2" },
  { id: 3, name: "Wall Art", description: "Abstract wall decoration", price: 200, image: "https://picsum.photos/300/200?3" },
];

function Products() {
  return (
    <section className="page products">
      <h2>Our Products</h2>
      <div className="products-grid">
        {dummyProducts.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </section>
  );
}

export default Products;
