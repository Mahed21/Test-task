import React, { useState } from "react";
import "./DisplayProduct.css";

const DisplayProduct = (props) => {
  const { onDeletedIdChange } = props;
  const { Id, sku, name, price, size, weight, height, width, length } =
    props.products;
  console.log(size);
  console.log(weight);
  console.log(height);

  return (
    <div className="mb-3">
      <div className="card pt-2 pb-5">
        <div>
          <input type="checkbox" id="myCheck" onChange={onDeletedIdChange} />
        </div>
        <h5 className="text-center">{sku}</h5>
        <h5 className="text-center">{name}</h5>
        <h5 className="text-center">{price}$</h5>
        {size ? (
          <h5 className="text-center">Size: {size} MB</h5>
        ) : weight ? (
          <h5 className="text-center">Weight: {weight} KG</h5>
        ) : height ? (
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
