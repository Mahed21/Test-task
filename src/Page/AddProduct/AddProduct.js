import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./AddProduct.css";
import { useNavigate } from "react-router";

const AddProduct = () => {
  let navigate = useNavigate();
  const [selects, setSelect] = useState("00");
  const [sku, setSku] = useState("00");
  const [name, setName] = useState("00");
  const [price, setPrice] = useState("00");
  const [size, setSize] = useState("00");
  const [weight, setweight] = useState("00");
  const [height, setHeight] = useState("00");
  const [width, setWidth] = useState("00");
  const [length, setLength] = useState("00");

  const addProduct = () => {
    axios
      .post("http://localhost:3002/product", {
        sku: sku,
        name: name,
        price: price,
        size: size,
        weight: weight,
        height: height,
        width: width,
        length: length,
      })
      .then(() => {
        console.log("success");
      });
  };
  return (
    <div className="container mt-5">
      <nav className="navbar navbar-light">
        <div className="container-fluid">
          <a className="navbar-brand">Product Add</a>
          <form className="d-flex">
            <Link to="" className="me-2">
              <button className="btn">Save</button>
            </Link>
            <Link to="">
              <button className="btn">Cancel</button>
            </Link>
          </form>
        </div>
      </nav>
      <hr />
      <div className="mb-3 row">
        <div className="col-2 col-lg-1">
          <label for="inputPassword" className="col-form-label">
            SKU
          </label>
        </div>
        <div className="col-10 col-lg-11">
          <input
            type="text"
            className="form-control w-25 input"
            id="inputPassword"
            onChange={(e) => setSku(e.target.value)}
          />
        </div>
      </div>

      <div className="mb-3 row">
        <label for="inputPassword" className="col-2 col-lg-1 col-form-label">
          Name
        </label>
        <div className="col-10 col-lg-11">
          <input
            type="text"
            className="form-control w-25 input"
            id="inputPassword"
            onChange={(e) => setName(e.target.value)}
          />
        </div>
      </div>

      <div className="mb-3 row">
        <label for="inputPassword" className="col-2 col-lg-1 col-form-label">
          Price
        </label>
        <div className="col-10 col-lg-11">
          <input
            type="text"
            className="form-control w-25 input"
            id="inputPassword"
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>
      </div>

      <div className="mb-3 row">
        <label for="inputPassword" className="col-2 col-lg-1 col-form-label">
          Type Switcher
        </label>
        <div className="col-10 col-lg-11">
          <select
            className="input w-25"
            value={selects}
            onChange={(e) => setSelect(e.target.value)}
          >
            <option value="">Type Switcher</option>
            <option>DVD</option>
            <option>Book</option>
            <option>Furniture</option>
          </select>
        </div>
      </div>

      <br />
      {selects === "DVD" ? (
        <div>
          {" "}
          <div className="mb-3 row">
            <label
              for="inputPassword"
              className="col-2 col-lg-1 col-form-label"
            >
              Size (MB)
            </label>
            <div className="col-10 col-lg-11">
              <input
                type="text"
                className="form-control w-25 input"
                id="inputPassword"
                placeholder="#size"
                onChange={(e) => setSize(e.target.value)}
              />
            </div>
          </div>
        </div>
      ) : selects === "Book" ? (
        <div>
          <div className="mb-3 row">
            <label
              for="inputPassword"
              className="col-2 col-lg-1 col-form-label"
            >
              Height (CM)
            </label>
            <div className="col-10 col-lg-11">
              <input
                type="text"
                className="form-control w-25 input"
                id="inputPassword"
                placeholder="#height"
                onChange={(e) => setHeight(e.target.value)}
              />
            </div>
          </div>
          <div className="mb-3 row">
            <label
              for="inputPassword"
              className="col-2 col-lg-1 col-form-label"
            >
              width (CM)
            </label>
            <div className="col-10 col-lg-11">
              <input
                type="text"
                className="form-control w-25 input"
                id="inputPassword"
                placeholder="#width"
                onChange={(e) => setWidth(e.target.value)}
              />
            </div>
          </div>
          <div className="mb-3 row">
            <label
              for="inputPassword"
              className="col-2 col-lg-1 col-form-label"
            >
              length (CM)
            </label>
            <div className="col-10 col-lg-11">
              <input
                type="text"
                className="form-control w-25 input"
                id="inputPassword"
                placeholder="#length"
                onChange={(e) => setLength(e.target.value)}
              />
            </div>
          </div>
        </div>
      ) : selects === "Furniture" ? (
        <div className="mb-3 row">
          <label for="inputPassword" className="col-2 col-lg-1 col-form-label">
            Weight (Kg)
          </label>
          <div className="col-10 col-lg-11">
            <input
              type="text"
              className="form-control w-25 input"
              id="inputPassword"
              placeholder="#weight"
              onChange={(e) => setweight(e.target.value)}
            />
          </div>
        </div>
      ) : (
        ""
      )}
      <br />
      <button className="btn" onClick={addProduct}>
        Submit
      </button>
    </div>
  );
};

export default AddProduct;
