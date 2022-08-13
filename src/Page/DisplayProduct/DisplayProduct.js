import React, { useState } from "react";
import "./DisplayProduct.css";

const DisplayProduct = (props) => {
  const [deleteId, setDeleteId] = useState([]);
  const { Id, sku, name, price, size, weight, height, width, length } =
    props.products;
  const handleChange = (event, id) => {
    if (event.target.checked) {
      setDeleteId(...deleteId, id);
      console.log(deleteId);
    }
  };

  return (
    <div className="mb-3">
      <div className="card pt-2 pb-5">
        <div>
          <input
            type="checkbox"
            id="myCheck"
            onChange={(event) => handleChange(event, Id)}
          />
        </div>
        <h5 className="text-center">{sku}</h5>
        <h5 className="text-center">{name}</h5>
        <h5 className="text-center">{price}$</h5>
        {size !== "00" ? (
          <h5 className="text-center">Size: {size} MB</h5>
        ) : weight !== "00" ? (
          <h5 className="text-center">Weight: {weight} KG</h5>
        ) : height !== "00" ? (
          <h5 className="text-center">
            Dimension : {height}x{width}x{length}
          </h5>
        ) : (
          ""
        )}
        {}
      </div>
    </div>
  );
};

export default DisplayProduct;
