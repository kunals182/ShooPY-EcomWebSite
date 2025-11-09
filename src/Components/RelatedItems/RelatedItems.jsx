import React from 'react'
import './RelatedItems.css'
import data_product from '../assets/data'
import Item from '../Item/Item'


const RelatedItems = () => {
  return (
    <div className='reletedProducts'>
        <h1>Related Products</h1>
        <hr />
        <div className='reletedProducts-items'>
            {data_product.map((item,i)=>{
                return<Item key={i} id={item.id} name ={item.name} image={item.image}
                new_price={item.new_price} old_price={item.old_price}/>

            })}
        </div>

    </div>
  )
}

export default RelatedItems