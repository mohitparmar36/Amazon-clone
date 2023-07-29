import React from 'react'
import './CheckoutProduct.css';
import { useStatevalue } from './StateProvider';

function CheckoutProduct({id, title, price, rating,image}) {
    const [{basket},dispatch] = useStatevalue();
    const removeFromBasket = ()=> {
        // REMOVE FROM BASKET
        dispatch({
            type : "REMOVE_FROM_BASKET",
            id : id,
        });
    };
  return (
    <div className="checkoutProduct">
      <img className="checkoutProduct__image" src={image} alt="" />
      <div className="checkoutProduct__info">
        <p className="checkoutProduct__title">{title}</p>

        <p className="checkoutProduct__price">
          <strong>₹</strong>
          <strong>{price}</strong>
        </p>
        <div className="checkoutProduct__rating">
        {Array(rating)
          .fill()
          .map((_) => (
            <p>⭐</p>
          ))}
        </div>
        <button onClick={removeFromBasket}>Remove Item</button>    
      </div>
    </div>
  );
}

export default CheckoutProduct
