import React from "react";
import { Route, Routes } from "react-router-dom";
// import { ReqAuth } from '../Components/ReqAuth'

import { Cart } from "./Cart";
import { Checkout } from "./Checkout";
import HomePage from "./HomePage";
import { Login } from "./Login";
import { ProductListPage } from "./ProductListPage";
import { SingleProduct } from "./SingleProduct";
import { Admin } from "../Admin/Pages/Admin";
import Pagenotfound from "./Pagenotfound";
import EditUser from "../Admin/Components/Users/EditUser";
import EditProduct from "../Admin/Components/Product/EditProduct";
import {Wishlist} from './Wishlist';
export const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/products" element={<ProductListPage />}></Route>
      <Route path="/products/:id" element={<SingleProduct />}></Route>
      <Route path="/checkout" element={<Checkout />}></Route>
      <Route path="/cart" element={<Cart />}></Route>
      <Route path="*" element={<Pagenotfound />}></Route>
      <Route path="/admin" element={<Admin />}></Route>
      <Route path="/admin/edit/:id" element={<EditUser />}></Route>
      <Route path="/admin/upadte/:id" element={<EditProduct />}></Route>
      <Route path='/wishlist' element={<Wishlist/>}></Route>
    </Routes>
  );
};
