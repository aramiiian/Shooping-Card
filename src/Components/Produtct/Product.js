import { useState } from "react";
import "./product.css";

const Product = ({
  productImage,
  productImageHov,
  productName,
  productPrice,
  prodSale,
}) => {
  const [ishover, setIshover] = useState(true);
  return (
    <div
      className="prod"
      onMouseEnter={() => setIshover(false)}
      onMouseLeave={() => setIshover(true)}
    >
      <img src={ishover ? productImage : productImageHov} alt="product-photo" />
      <h2>{productName}</h2>
      <h5>{productPrice}</h5>
      <p>{prodSale}</p>
      <button style={{ background: ishover ? "#1B1A20" : "#F4CA16" }}>
        Add to cart
      </button>
    </div>
  );
};

export default Product;
