import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
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
    </div>
  );
};

export default Home;
