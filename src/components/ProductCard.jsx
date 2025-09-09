import React from "react";
import "../styles/ProductCard.css";

function ProductCard({ product }) {
  return (
    <div className="product-card slide-up">
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <span>${product.price}</span>
    </div>
  );
}

export default ProductCard;
