import React from "react";

const Product = ({ productImage, productName, productPrice, prodSale }) => {
  return (
    <div className="prod">
      <div className="img">
        <img src={productImage} alt="" />
      </div>
      <h2>{productName}</h2>
      <h5>{productPrice}</h5>
      <p>{prodSale}</p>
    </div>
  );
};

export default Product;
