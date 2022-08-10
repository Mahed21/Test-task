import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./AddProduct.css";

const AddProduct = () => {
  const [selects, setSelect] = useState(null);
  return (
    <div className="container mt-5">
      <nav class="navbar navbar-light">
        <div class="container-fluid">
          <a class="navbar-brand">Product Add</a>
          <form class="d-flex">
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
      <div class="mb-3 row">
        <div className="col-2 col-lg-1">
          <label for="inputPassword" class="col-form-label">
            SKU
          </label>
        </div>
        <div class="col-10 col-lg-11">
          <input
            type="password"
            class="form-control w-25 input"
            id="inputPassword"
          />
        </div>
      </div>

      <div class="mb-3 row">
        <label for="inputPassword" class="col-2 col-lg-1 col-form-label">
          Name
        </label>
        <div class="col-10 col-lg-11">
          <input
            type="password"
            class="form-control w-25 input"
            id="inputPassword"
          />
        </div>
      </div>

      <div class="mb-3 row">
        <label for="inputPassword" class="col-2 col-lg-1 col-form-label">
          Price
        </label>
        <div class="col-10 col-lg-11">
          <input
            type="password"
            class="form-control w-25 input"
            id="inputPassword"
          />
        </div>
      </div>

      <div class="mb-3 row">
        <label for="inputPassword" class="col-2 col-lg-1 col-form-label">
          Type Switcher
        </label>
        <div class="col-10 col-lg-11">
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
          <div class="mb-3 row">
            <label for="inputPassword" class="col-2 col-lg-1 col-form-label">
              Size (MB)
            </label>
            <div class="col-10 col-lg-11">
              <input
                type="password"
                class="form-control w-25 input"
                id="inputPassword"
                placeholder="#size"
              />
            </div>
          </div>
        </div>
      ) : selects === "Book" ? (
        <div>
          <div class="mb-3 row">
            <label for="inputPassword" class="col-2 col-lg-1 col-form-label">
              Height (CM)
            </label>
            <div class="col-10 col-lg-11">
              <input
                type="password"
                class="form-control w-25 input"
                id="inputPassword"
                placeholder="#height"
              />
            </div>
          </div>
          <div class="mb-3 row">
            <label for="inputPassword" class="col-2 col-lg-1 col-form-label">
              width (CM)
            </label>
            <div class="col-10 col-lg-11">
              <input
                type="password"
                class="form-control w-25 input"
                id="inputPassword"
                placeholder="#width"
              />
            </div>
          </div>
          <div class="mb-3 row">
            <label for="inputPassword" class="col-2 col-lg-1 col-form-label">
              length (CM)
            </label>
            <div class="col-10 col-lg-11">
              <input
                type="password"
                class="form-control w-25 input"
                id="inputPassword"
                placeholder="#length"
              />
            </div>
          </div>
        </div>
      ) : selects === "Furniture" ? (
        <div class="mb-3 row">
          <label for="inputPassword" class="col-2 col-lg-1 col-form-label">
            Weight (Kg)
          </label>
          <div class="col-10 col-lg-11">
            <input
              type="password"
              class="form-control w-25 input"
              id="inputPassword"
              placeholder="#weight"
            />
          </div>
        </div>
      ) : (
        ""
      )}
      <br />
      <button className="btn">Submit</button>
    </div>
  );
};

export default AddProduct;
