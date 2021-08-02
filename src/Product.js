import React from 'react'
import "./Product.css"
import StarRateIcon from '@material-ui/icons/StarRate';
import {useStateValue} from './StateProvider';
function Product({ id, title, image, price, rating }) {
  const [,dispatch]=useStateValue();
  const addToBasket=()=>{
dispatch({
  type:'ADD_TO_BASKET',
  item:{
   id:id,
   title:title,
   image:image,
   price:price,
   rating:rating, 
  }
})
 }
    return (
      <div className="product color-change-2x">
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
                <StarRateIcon/>
              ))}
          </div>
        </div>
  
        <img src={image} alt="imageco" />
  
        <button onClick={addToBasket}>Add to Basket</button>
      </div>
    );
  }

export default Product
