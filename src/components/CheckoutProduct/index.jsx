import React from 'react'
import './index.css'
import {useStateValue} from '../../Reducer/StateProvider'
export default function CheckoutProduct({ id, image, title, price, rating }) {
    const [{basket},dispatch] = useStateValue();

    const handleRemove = ()=>{
        dispatch({
            type:'remove_Item',
            id:id
        })
    }
    return (

        <div className="checkoutProduct">
            <img src={image} alt="" className="checkoutProduct__image" />

            <div className="checkoutProduct__info">
                <p className="checkoutProduct__title">
                    {title}
                </p>
                <p className="checkoutProduct__price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="checkoutProduct__rating">
                    {Array(rating)
                        .fill()
                        .map((_, i) => (
                            <p>⭐</p>
                        ))}
                </div>
                <button onClick={handleRemove}>Remove from Basket</button>
            </div>
        </div>


    )
}
