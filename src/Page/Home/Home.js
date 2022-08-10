import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="container mt-5">
      <nav class="navbar navbar-light">
        <div class="container-fluid">
          <a class="navbar-brand">Product List</a>
          <form class="d-flex">
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
