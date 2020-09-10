import React from 'react';
import './CheckoutProduct.css';
import { useStateValue } from './StateProvider';



function CheckoutProduct(props) {
    return (
        <div className='checkoutProduct'>
            <img 
                className='checkoutProductImage' 
                src={props.image} 
            />

            <div className='checkoutProduct_info'>
                <p className='checkoutProductTitle'>{props.title}</p>
                <p className='checkoutProductPrice'>
                    <small>$</small>
                    <strong>{props.price}</strong>
                </p>
                <div className='checkoutProductRating'>
                    {Array(props.rating)
                        .fill()
                        .map((_, i) => (
                            <p>⭐</p>
                        ))}
                </div>
                <button>Remove from Basket</button>
            </div>
        </div>
    )
}

export default CheckoutProduct
