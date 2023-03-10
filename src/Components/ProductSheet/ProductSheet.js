import React from "react";
import uuid from "../../helpers/uuid";
import Product from "../Produtct/Product";
import "./productSheet.css";

const ProductSheet = ({ products, sizeProd }) => {
  return (
    <div className="products">
      {sizeProd.map((elem) => {
        return <Product {...elem} key={uuid()} />;
      })}
    </div>
  );
};

export default ProductSheet;
