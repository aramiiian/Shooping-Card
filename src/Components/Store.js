import { useState } from "react";
import { shopData } from "../data/data";
import Sidebar from "./Sidebar";
import ProductSheet from "./ProductSheet";
import "./store.style.css";

const Store = () => {
  const [products, setProducts] = useState(shopData);
  return (
    <>
      <main className="main">
        <Sidebar />
        <ProductSheet products={products} />
      </main>
    </>
  );
};

export default Store;
