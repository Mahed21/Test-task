import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./AddProduct.css";
import { useNavigate } from "react-router";

const AddProduct = () => {
  let navigate = useNavigate();
  const [selects, setSelect] = useState(null);
  const [sku, setSku] = useState(null);
  const [name, setName] = useState(null);
  const [price, setPrice] = useState(null);
  const [size, setSize] = useState(null);
  const [weight, setweight] = useState(null);
  const [height, setHeight] = useState(null);
  const [width, setWidth] = useState(null);
  const [length, setLength] = useState(null);

  const addProduct = (e) => {
    e.preventDefault();
    if (sku && price && name) {
      if (size || weight || (height && width && length)) {
        const newUser = {
          sku,
          name,
          price,
          size,
          weight,
          height,
          width,
          length,
        };
        fetch("https://secure-escarpment-75090.herokuapp.com/products", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(newUser),
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.insertedId) {
              navigate("/");
              e.target.reset();
            }
          });
      } else {
        alert("fill all input data");
      }
    } else {
      alert("fill all input data");
    }
  };
  return (
    <div className="container mt-5">
      <form onSubmit={addProduct}>
        <nav className="navbar navbar-light">
          <div className="container-fluid">
            <h5 className="navbar-brand">Product Add</h5>
            <div className="d-flex">
              <input type="submit" value="save" className="btn me-2" />
              <Link to="/">
                <button className="btn">Cancel</button>
              </Link>
            </div>
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
            Price $
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
            <label
              for="inputPassword"
              className="col-2 col-lg-1 col-form-label"
            >
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
      </form>
    </div>
  );
};

export default AddProduct;
