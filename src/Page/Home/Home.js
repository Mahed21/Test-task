import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import DisplayProduct from "../DisplayProduct/DisplayProduct";

const Home = () => {
  const [product, setProduct] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3002/product")
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, []);
  return (
    <div className="container mt-5">
      <nav className="navbar navbar-light">
        <div className="container-fluid">
          <a className="navbar-brand">Product List</a>
          <form className="d-flex">
            <Link to="/addproduct" className="me-2">
              <button className="btn">ADD</button>
            </Link>
            <Link to="">
              <button className="btn">Mass Delete</button>
            </Link>
          </form>
        </div>
      </nav>
      <hr />
      <div className="row row-cols-lg-4 row-cols-1 ">
        {product.map((products) => (
          <DisplayProduct
            products={products}
            // key={products.Id}
          ></DisplayProduct>
        ))}
      </div>
    </div>
  );
};

export default Home;
