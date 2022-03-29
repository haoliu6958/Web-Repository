import React from 'react'
import CheckoutProduct from '../CheckoutProduct'
import Subtotal from '../Subtotal'
import './index.css'
import { useStateValue } from '../../Reducer/StateProvider'
export default function Checkoutpage() {
  const [{basket},dispatch] = useStateValue()
  return (
    <div>
        <div className="checkout">
          <div className="checkout__left">
            <img src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg" alt="" className="checkout__ad" />
          <div>
            <h2 className="checkout_title">
              Your Shopping Basket
            </h2>
            {
              basket.map((item)=>(
                <CheckoutProduct
                id = {item.id}
                title = {item.title}
                image = {item.image}
                price = {item.price}
                rating = {item.rating}
                />
              ))
            }
          </div>
          
          </div>

          <div className="checkout__right">
            <Subtotal/>
          </div>
        </div>
    </div>
  )
}
