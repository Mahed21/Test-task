import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";

import DisplayProduct from "../DisplayProduct/DisplayProduct";

const Home = () => {
  let deleteIds = [];
  const [product, setProduct] = useState([]);

  const handleChange = (event, id) => {
    console.log(id);
    if (event.target.checked) {
      deleteIds = [...deleteIds, id];
      console.log(deleteIds);
    } else {
      deleteIds = deleteIds.filter((deleteId) => deleteId !== id);
      console.log(deleteIds);
    }
  };

  //react query
  const { isLoading, error, data, refetch } = useQuery(["repoData"], () =>
    fetch("https://secure-escarpment-75090.herokuapp.com/products").then(
      (res) => res.json().then((data) => setProduct(data))
    )
  );

  const massDelete = () => {
    for (let i = 0; i < deleteIds.length; i++) {
      fetch(`http://localhost:5000/products/${deleteIds[i]}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            const products = product.filter(
              (user) => user._id !== deleteIds[i]
            );
            setProduct(products);
            refetch();
          }
        });
    }
  };

  return (
    <div className="container mt-5">
      <nav className="navbar navbar-light">
        <div className="container-fluid">
          <h5 className="navbar-brand">Product List</h5>
          <form className="d-flex">
            <Link to="/addproduct" className="me-2">
              <button className="btn">ADD</button>
            </Link>
            <Link to="">
              <button className="btn" onClick={massDelete}>
                Mass Delete
              </button>
            </Link>
          </form>
        </div>
      </nav>
      <hr />
      <div className="row row-cols-lg-4 row-cols-1 ">
        {product.map((products) => (
          <DisplayProduct
            products={products}
            key={products.Id}
            onDeletedIdChange={(event) => handleChange(event, products._id)}
          ></DisplayProduct>
        ))}
      </div>
    </div>
  );
};

export default Home;
