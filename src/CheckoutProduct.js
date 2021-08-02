import React from 'react'
import { useStateValue } from "./StateProvider";
import "./CheckoutProduct.css"
import StarRateIcon from '@material-ui/icons/StarRate';

function CheckoutProduct({ id, image, title, price, rating, hideButton }) {
    const [,dispatch] = useStateValue();

    const removeFromBasket = () => {
        // remove the item from the basket
        dispatch({
            type: 'REMOVE_FROM_BASKET',
            id: id,
        })
    }
    return (
        <div className='checkoutProduct color-change-2x'>

        <img className='checkoutProduct__image' src={image} alt="che"/>

        <div className='checkoutProduct__info'>
            <p className='checkoutProduct__title'>{title}</p>
            <p className="checkoutProduct__price">
                <small>$</small>
                <strong>{price}</strong>
            </p>
            <div className="checkoutProduct__rating">
                {Array(rating)
                .fill()
                .map((_, i) => (
                    <StarRateIcon/>
                ))}
            </div>
                <button onClick={removeFromBasket}>Remove from Basket</button>
        </div>

    </div>
    )
}

export default CheckoutProduct
