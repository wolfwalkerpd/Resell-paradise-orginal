import { useState } from "react";
import React from "react";
import Head from "./head";
import "./App.css";
import Cardshop from "./card-shop";
import Footer from "./footer";
import ProductPage from "./product-page/productPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./Homepage";
import Paying from "./shopping/payingpage";
import Sign from "./sign-up/sign";
import Login from "./login/login"
import Currency from "./currency/currency";

function App() {
  const [itemid, setItemid] = useState();
  const [selecteditem, setSelecteditem] = useState([]);

  const getitemid = (id) => {
    setItemid(id);
    setSelecteditem(id);
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route
          path="/Product"
          element={
            <ProductPage selecteditem={selecteditem} getitemid={getitemid} />
          }
          onClick={window.scrollTo(0, 0)}
        />
        <Route path="/Shopping" element={<Paying />} />
        <Route path="/pay" element={<Paying />} />
        <Route path="/sign" element={<Sign />} />
        <Route path="/login" element={<Login />} />
        <Route path="/currency" element={<Currency />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
