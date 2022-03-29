import React from 'react'
import './index.css'
import CurrencyFormat from 'react-currency-format'
import {useStateValue} from '../../Reducer/StateProvider'
import { getBasketTotal } from '../../Reducer/reducer'

export default function Subtotal() {

    const [{basket},dispatch] = useStateValue();

  return (  
    <div className='subtotal'>
        
        <CurrencyFormat
            renderText = {(value) => (
                <>
                <p>
                    Subtotal ({basket.length} items): <strong>${value}</strong>
                </p>
                <small className="subtotal__gift">
                    <input type="checkbox" /> This order contains a gift
                </small>
                </>
            )}

            decimalScale={2}
            value={getBasketTotal(basket)}
            displayType={'text'}
            thousandSeparator={true}
            


        />
        <button>Proceed to Checkout</button>
    </div>
  )
}
