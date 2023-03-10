import react from "react";
import Sizes from "../Sizes/Sizes";
import "./sidebar.css";

const Sidebar = ({ sizeProd, setSizeProd, products }) => {
  return (
    <aside className="sidebar">
      <Sizes
        products={products}
        sizeProd={sizeProd}
        setSizeProd={setSizeProd}
      />
    </aside>
  );
};

export default Sidebar;
