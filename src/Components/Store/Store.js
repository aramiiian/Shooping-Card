import { useState } from "react";
import { shopData } from "../../data/data";
import Sidebar from "../Sidebar/Sidebar";
import ProductSheet from "../ProductSheet/ProductSheet";
import "./store.style.css";

const Store = () => {
  const [products, setProducts] = useState(shopData);
  const [sizeProd, setSizeProd] = useState(shopData);
  return (
    <>
      <main className="main">
        <Sidebar
          sizeProd={sizeProd}
          setSizeProd={setSizeProd}
          products={products}
        />
        <ProductSheet products={products} sizeProd={sizeProd} />
      </main>
    </>
  );
};

export default Store;
