import { useState } from "react";
import "./sizes.css";
const Sizes = ({ sizeProd, setSizeProd, products }) => {
  function sizeSearch(e) {
    let arr = [];

    products.map((elem) => {
      for (let i in elem.size) {
        if (elem.size[i] === e.target.id) {
          arr.push(elem);
          setSizeProd(arr);
          console.log();
        }
      }
    });
  }

  return (
    <div>
      <label htmlFor="XS">
        <span>XS</span>
        <input
          type="checkbox"
          onChange={(e) =>
            e.target.checked ? sizeSearch(e) : setSizeProd(products)
          }
          name=""
          id="XS"
        />
      </label>
      <label htmlFor="S">
        <span>S</span>
        <input
          type="checkbox"
          onChange={(e) =>
            e.target.checked ? sizeSearch(e) : setSizeProd(products)
          }
          name=""
          id="S"
        />
      </label>
      <label htmlFor="M">
        <span>M</span>
        <input
          type="checkbox"
          onChange={(e) =>
            e.target.checked ? sizeSearch(e) : setSizeProd(products)
          }
          name=""
          id="M"
        />
      </label>
      <label htmlFor="ML">
        <span>ML</span>
        <input
          type="checkbox"
          onChange={(e) =>
            e.target.checked ? sizeSearch(e) : setSizeProd(products)
          }
          name=""
          id="ML"
        />
      </label>
      <label htmlFor="L">
        <span>L</span>
        <input
          type="checkbox"
          onChange={(e) =>
            e.target.checked ? sizeSearch(e) : setSizeProd(products)
          }
          name=""
          id="L"
        />
      </label>
      <label htmlFor="XL">
        <span>XL</span>
        <input
          type="checkbox"
          onChange={(e) =>
            e.target.checked ? sizeSearch(e) : setSizeProd(products)
          }
          name=""
          id="XL"
        />
      </label>
      <label htmlFor="XXL">
        <span>XXL</span>
        <input
          type="checkbox"
          onChange={(e) =>
            e.target.checked ? sizeSearch(e) : setSizeProd(products)
          }
          name=""
          id="XXL"
        />
      </label>
    </div>
  );
};

export default Sizes;
