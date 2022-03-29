import React from 'react'
import './index.css'
import {useStateValue} from '../../Reducer/StateProvider'

export default function Product({ id, title, image, price, rating }) {
  const [state,dispatch] = useStateValue();

  const addtoBasket = ()=> {
    dispatch({
      type: "add_Product",
      item: {
          id: id,
          image: image,
          price: price,
          rating: rating,
      },
  });
};
  return (

    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>⭐</p>
            ))}
        </div>
      </div>

      <img src={image} alt="product__img" />

      <button onClick={addtoBasket}>Add to Basket</button>
    </div>

  )
}
