import React from 'react'
import ProductList from '../Components/ProductList'
import Sidebar from '../Components/Sidebar'
import {Navbar} from '../Components/Navbar'
import {Footer} from '../Components/Footer'

export const ProductListPage = () => {
  return (
    <div>
        <Navbar/>
        <Sidebar/>
        <ProductList/>
        <Footer/>
    </div>
  )
}

