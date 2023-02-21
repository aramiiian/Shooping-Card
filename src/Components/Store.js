import React from "react";
import "./Store.style.css";
import Sidebar from "./Sidebar";
import ProductSheet from "./ProductSheet";

const Store = () => {
  return (
    <>
      <main>
        <Sidebar />
        <ProductSheet />
      </main>
    </>
  );
};

export default Store;
