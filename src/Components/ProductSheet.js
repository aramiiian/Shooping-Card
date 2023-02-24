import React from "react";
import Product from "./Product";
import { v4 } from "uuid";

const ProductSheet = ({ products }) => {
  return (
    <div className="products">
      {products.map((elem) => {
        return <Product {...elem} key={v4()} />;
      })}
    </div>
  );
};

export default ProductSheet;
