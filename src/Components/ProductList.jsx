import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProducts } from '../Redux/ProductReducer/action'
import { ProductCard } from './ProductCard'
import styled from 'styled-components';

const ProductList = () => {

    const dispatch=useDispatch()

    const products=useSelector((store)=>store.ProductReducer.clothing)


    useEffect(()=>{
        dispatch(getProducts)
    },[])

  return (
    <DivWrapper>
        {products.length>0 && products.map((el)=>{
            return <ProductCard key={el.id} product={el}/>
        })}

    </DivWrapper>
  )
}

const DivWrapper=styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit,minmax(300px,max-content));
    grid-gap:15px;
`

export default ProductList