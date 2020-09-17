import { Check } from '@material-ui/icons';
import React, { useState } from 'react';
import './Payment.css';
import { useStateValue } from './StateProvider';
import CheckoutProduct from './CheckoutProduct';
import { Link } from 'react-router-dom';
import { useElements, useStripe, CardElement } from '@stripe/react-stripe-js';
import CurrencyFormat from "react-currency-format";
import { getBasketTotal } from './reducer';



function Payment() {
    const [{ basket, user }, dispatch] = useStateValue();


    const stripe = useStripe();
    const elements = useElements();


    const [succeeded, setSucceeded] = useState(false);
    const [processing, setProcessing] = useState('');
    const [error, setError] = useState(null);
    const [disabled, setDisabled] = useState(true);
    const [clientSecret, setClientSecret] = useState(true);

    useEffect(() => {
        // generates special stripe secret which allows us to charge a customer

        const getClientSecret = async () => {
            const response = await axios({
                method: 'post',
                // stripe expects the total in a currencies subunits
                url: `/payments/create?total=${getBasketTotal(basket) * 100}`
            });
            setClientSecret(response.data.clientSecret)
        }

        getClientSecret();
    }, [basket])

    const handleSubmit = async (e) => {
        e.preventDefault();
        setProcessing(true);

        const payload = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: elements.getElement(CardElement)
            }
        }).then(({ paymentIntent }) => {
            // paymentIntent means payment confirmation

            setSucceeded(true);
            setError(null);
            setProcessing(false);

            history.replaceState('./orders');
        })
    }

    const handleChange = (e) => {
        // disable the button if event is empty
        setDisabled(e.empty);
        // if there's error in event, show the error otherwise do not show any error
        setError(e.error ? e.error.message : '');
    }


    return (
        <div className='payment'>
            <div className='payment_container'>
                <h1>
                    Checkout (
                        <Link to='/checkout'>{basket?.length} items</Link>
                    )
                </h1>

                <div className='payment_section'>
                    <div className='payment_title'>
                        <h3>Delivery Address</h3>
                    </div>
                    <div className='payment_address'>
                        <p>{user?.email}</p>
                        <p>123 React Lane</p>
                        <p>Los Angeles, CA</p>
                    </div>
                </div>

                <div className='payment_section'>
                    <div className='payment_title'>
                        <h3>Review items and delivery</h3>
                    </div>
                    <div className='payment_items'>
                        {basket.map(item => (
                            <CheckoutProduct
                                id={item.id}
                                title={item.title}
                                image={item.image}
                                price={item.price}
                                rating={item.rating}
                            />
                        ))}
                    </div>
                </div>

                <div className='payment_section'>
                    <div className='payment_title'>
                        <h3>Payment Method</h3>
                    </div>
                    <div className='payment_details'>

                        <from onSubmit={handleSubmit}>
                            <CardElement onChange={handleChange} />

                            <div className='payment_priceContainer'>
                                <CurrencyFormat
                                    renderText={(value) => (
                                        <>
                                            <h3>Order Total: {value}</h3>
                                        </>
                                    )}
                                    decimalScale={2}
                                    value={getBasketTotal(basket)}
                                    displayType={'text'}
                                    thousandSeperator={true}
                                    prefix={'$'}
                                />
                                
                                <button 
                                    disabled={processing || disabled || succeeded}
                                >
                                    <span>{processing ? <p>Processing</p> : 'Buy Now'}</span>
                                </button>

                            </div>

                            {/* show error if there's any */}
                            {error && <div>{error}</div>}

                        </from>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Payment
