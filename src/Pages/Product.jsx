import React, { useContext } from 'react'
import  {ShopContext}  from '../Context/ShopContext'
import { useParams } from 'react-router-dom'
import Breadcrum from '../Components/Breadcrum/Breadcrum'
import ProductDisplay from '../Components/ProductDisplay/ProductDisplay'
import DescriptionBox from '../Components/DescriptionBox/DescriptionBox'
import RelatedItems from '../Components/RelatedItems/RelatedItems'

const Product = () => {
  let {all_product} =useContext(ShopContext)
  let {productID} =useParams();
  let product =all_product.find((e)=>e.id === Number(productID))
  return (
    <div className=''>
      <Breadcrum product={product}/>
      <ProductDisplay product={product}/>
      <DescriptionBox product={product}/>
      <RelatedItems product={product}/>

    </div>
  )
}

export default Product;