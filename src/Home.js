import React from 'react';
import './Home.css';
import Product from './Product';
import Subtotal from './Subtotal';


function Home() {
    return (
        <div className='home'>
            <img className='home_image' src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" alt="" />

        <div className='home_row'>
            <Product 
                    id='f45e4fefg54'
                    title='Atomic Habits: An Easy & Proven Way to Build Good Habits' 
                    price='16.20' 
                    image='https://jamesclear.com/wp-content/uploads/2020/05/2-Million-Badge-e1590421323971-994x1200.png'
                    rating= {5}
            />
            <Product 
                id='fuebufc5485'
                title='Realme X2 64MP Performance Xpert' 
                price='285.00' 
                image='https://www.gizmochina.com/wp-content/uploads/2019/09/Realme-X2-2.jpg'
                rating= {5}
            />
            <Product 
                id='hfurr58755'
                title='Apple MacBook Pro 2020 16″ MVVK2 1TB 2.3GHz Space Gray ' 
                price='1299.00'
                image= 'https://www.climaxcomputer.com/wp-content/uploads/2019/11/mbp16touch-space-gallery1-201911_1_1.png'
                rating= {5}
            />
        </div>

        <div className='home_row'>
                <Product 
                id='ucrb87t8r5r'
                title='LG 164 cm (65 inches) 4K Ultra HD Smart IPS LED TV 65UM7290PTD (Ceramic Black) (2020 Model)' 
                price='1890.00' 
                image='https://images-na.ssl-images-amazon.com/images/I/71SCFpCWGrL._SL1500_.jpg'
                rating= {4}
            />
        </div>

        <div className='home_row'>
            <Product 
                id='ofr77g8w7'
                title='Jaipuri Style Rajasthani Prints Bedsheet for Double Bed Cotton Jaipur Prints Bedsheets' 
                price='15.50' 
                image='https://images-na.ssl-images-amazon.com/images/I/51HOkOhdpbL._SY450_.jpg'
                rating= {3} 
            />
            <Product 
                id='hf4ytw878'
                title='Amazon Kindle Paperwhite (2018) 32GB WiFi IPX 8 - Black' 
                price='120.50' 
                image='https://cdn.tobydeals.co.uk/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/a/m/amazon-kindle-paperwhite-2018-8gb-wifi-ipx-8-black.jpg'
                rating= {4}
            />
        </div>
        </div>
    )
}

export default Home;
