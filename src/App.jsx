import React from "react"
import Navbar from "./Components/Navbar/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Shop from "./Pages/Shop";
import ShopCategory from "./Pages/ShopCategory";
import Card from "./Pages/Card";
import LoginSignUp from "./Pages/LoginSignUp";
import Product from "./Pages/product";
import Footer from "./Components/Footer/Footer";
import men_banner from './Components/assets/banner_mens.png'
import women_banner from './Components/assets/banner_women.png'
import kids_banner from './Components/assets/banner_kids.png'


function App() {


  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/shop" element={<Shop />} />
          <Route path="/men" element={<ShopCategory banner={men_banner} category={"men"} />} />
          <Route path="/women" element={<ShopCategory banner={women_banner} category={"women"} />} />
          <Route path="/kid" element={<ShopCategory banner={kids_banner} category={"kid"} />} />
          <Route path="/product" element={<Product />}>
            <Route path=":productID" element={<Product />} />
          </Route>
          <Route path="/cart" element={<Card />} />
          <Route path="/" element={<LoginSignUp />} />
        </Routes>
        <Footer />

      </BrowserRouter>

    </>
  )
}

export default App;
