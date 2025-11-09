import React, { useContext } from 'react'
import './CartItems.css'
import  {ShopContext} from '../../Context/ShopContext'
import remove_icon from '../assets/cart_cross_icon.png'

export const CartItems = () => {
    let {all_product ,cartItems, removeToCart,getToCartAmount} =useContext(ShopContext)
  return (
    <div className='cartitems'>
        <div className='cartitems-format-main'>
            <p>Product</p>
            <p> Tittle</p>
            <p> Prices</p>
            <p> Quantity</p>
            <p> Total</p>
            <p> Remove</p>

        </div>
        {
            all_product.map((e)=>{
                if (cartItems[e.id]>0){
                    return <div>
                        <div className="cartitems-format">
                            <img src={e.image} alt="" />
                            <p>{e.name}</p>
                            <p> ${e.new_price}</p>
                            <button className='cartitems-quantity'>{cartItems[e.id]}</button>
                            <p>${e.new_price * cartItems[e.id]}</p>
                            <img src={remove_icon} alt=""
                            onClick={()=> removeToCart(e.id)} />
                        </div>

                    </div>
                }
            return null
            })
        }
        <div className="cartitems-down">
            <div className="cartitems-total">
                <h1>Subtotal</h1>
                <div>
                     <div className="cartitems-total-item">
                        <p>SubTotal</p>
                        <p>${getToCartAmount()}</p>
                     </div>
                     <hr />
                      <div className="cartitems-total-item">
                        <h3>Shipping Fee</h3>
                        <h3>Free</h3>

                      </div>
                      <hr />
                       <div className="cartitems-total-item">
                        <h3>Total</h3>
                        <h3>${getToCartAmount()}</h3>


                       </div>

                </div>
                <button>Proceed  To Checkout</button>

            </div>
            <div className="cartitems-promocode">
                <p>If you have a promo code, Enter here</p>
                <div className="cartitems-promobox">
                    <input type="text" placeholder='promo code' />
                    <button>Submit</button>
                </div>

            </div>

        </div>
     

    </div>
  )
}
export default CartItems;
