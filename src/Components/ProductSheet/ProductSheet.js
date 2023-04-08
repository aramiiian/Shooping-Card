import React from "react";
import uuid from "../../helpers/uuid";
import Product from "../Produtct/Product";
import "./productSheet.css";

const ProductSheet = ({ products }) => {
  return (
    <div className="prodSheet">
      <h3>{products.length} Product(s) found</h3>
      <div className="products">
        {products.map((elem) => {
          return <Product {...elem} key={uuid()} />;
        })}
      </div>
    </div>
  );
};

export default ProductSheet;
