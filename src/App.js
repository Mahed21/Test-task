import "./App.css";

import { Route, Routes } from "react-router-dom";
import AddProduct from "./Page/AddProduct/AddProduct";
import Home from "./Page/Home/Home";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/addproduct" element={<AddProduct />} />
      </Routes>
    </div>
  );
}

export default App;
