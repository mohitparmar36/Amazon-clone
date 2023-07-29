import React from 'react'
import { useStatevalue } from './StateProvider';
import './Checkout.css';
import CheckoutProduct from './CheckoutProduct';
import Subtotal from './Subtotal';

function Checkout() {
  const [{basket}] = useStatevalue();
  return (
    <div className="checkout">
        <div className="checkout__left">
            
        

        <img className="checkout__ad" src="https://images-eu.ssl-images-amazon.com/images/G/31/IMG_22/Varun/HSBC-and-YES-Bankstripe_PC_1500.jpg" alt=""/>

        {basket?.length === 0 ? (
            <><div>
                  <h1  className="checkout__title">Your Amazon Basket is empty</h1>
              </div>
              <p>You have no items in your Basket.To buy one or more items click "Add To Basket" next to the item. </p></>
        ) : (
            <div>
                <div>
                <h1 className="checkout__title">Your Shopping Basket</h1>
                </div>
                
                {basket.map(item =>(
                        <CheckoutProduct
                
                        id = {item.id}
                        title = {item.title}
                        price = {item.price}
                        rating = {item.rating}
                        image = {item.image}
                    
                    />
                ))}
                

            </div>
        )}
        </div>
    
        {basket.length > 0 && (
                <div className="checkout__right">
                    <Subtotal/>
                </div>
        )}
    
    </div>
  )
}

export default Checkout
