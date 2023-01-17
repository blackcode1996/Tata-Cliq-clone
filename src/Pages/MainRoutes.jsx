import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { ReqAuth } from '../Components/ReqAuth'
import { Cart } from './Cart'
import { Checkout } from './Checkout'
import { HomePage } from './HomePage'
import { Login } from './Login'
import { ProductList } from './ProductList'
import { SingleProduct } from './SingleProduct'
import {Admin} from '../Admin/Pages/Admin'
export const MainRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<HomePage/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/products" element={<ProductList/>}></Route>
        <Route path="/products:id" 
        element={
        <ReqAuth>
            <SingleProduct/>
        </ReqAuth>}>
        </Route>
        <Route path="/checkout" 
        element={
        <ReqAuth>
            <Checkout/>
        </ReqAuth>}>
        </Route>
        <Route path="/cart" 
        element={
        <ReqAuth>
            <Cart/>
        </ReqAuth>}>
        </Route>
        <Route path="*">{<div>Page Not Found</div>}</Route>
        <Route path='/admin' element={<Admin/>}></Route>
    </Routes>
  )
}
