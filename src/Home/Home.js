import React from 'react';
import Product from '../Product/Product';
import './Home.css';
import '../Product/Product';

const Home = () => {
    return (
        <div className="home">
            <div className="home__container">
                <img
                    className="home__image"
                    src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
                    alt="Amazon Background on Prime Video Releases"
                />
            </div>

            <div className="home__row">
                <Product
                    id="67e283b1-b074-41a4-b71a-628febbcce27"
                    key="67e283b1-b074-41a4-b71a-628febbcce27"
                    title="Cracking The Coding Interview"
                    price={29.99}
                    image="https://images-na.ssl-images-amazon.com/images/I/410hiaPGyCL._SX348_BO1,204,203,200_.jpg"
                    rating={5}
                />
                <Product
                    id="92e68754-6861-4101-aeea-90ad1ea50e71"
                    key="92e68754-6861-4101-aeea-90ad1ea50e71"
                    title="Code: The Hidden Language of Computer Hardware and Software"
                    price={21.56}
                    image="https://images-na.ssl-images-amazon.com/images/I/21R7kFvnskL._SX332_BO1,204,203,200_.jpg"
                    rating={5}
                />
            </div>
            <div className="home__row">
                <Product
                    id="25fa36da-f110-48ea-9f78-3254c0adea16"
                    key="25fa36da-f110-48ea-9f78-3254c0adea16"
                    title="adidas RPT-01 Bluetooth Sport On-Ear Headphones - Night Grey"
                    price={169.99}
                    image="https://images-na.ssl-images-amazon.com/images/I/81wSMudPG8L._AC_SX522_.jpg"
                    rating={4}
                />
                <Product
                    id="4dfb42b4-fc33-4034-b9d0-ce3d73a7ea34"
                    key="4dfb42b4-fc33-4034-b9d0-ce3d73a7ea34"
                    title="Imegny Extended Gaming Mouse Pad, Mouse Mat for High DPI Professional Gaming Quality"
                    price={17.99}
                    image="https://m.media-amazon.com/images/I/61QkkzreVoL._AC_SL1000_.jpg"
                    rating={4}
                />
                <Product
                    id="231ec5b6-9dd5-4cbc-a3ac-ac8bbd839e2a"
                    key="231ec5b6-9dd5-4cbc-a3ac-ac8bbd839e2a"
                    title="SUNY Modern Circle Lamp, UV Free LED Table Lamp with 3 Color Temperature Brightness Levels, Touch Control & Timer Function Bedside Lamp"
                    price={49.99}
                    image="https://m.media-amazon.com/images/I/61yv8yUsYiL._AC_SL1500_.jpg"
                    rating={5}
                />
            </div>
            <div className="home__row">
                <Product
                    id="3d687e62-0a7c-405c-8402-03930dfbdcc3"
                    key="3d687e62-0a7c-405c-8402-03930dfbdcc3"
                    title="Protecu Cloud Light Neon Sign, LED Signs for Bedroom Neon Signs for Wall Decor"
                    price={13.99}
                    image="https://images-na.ssl-images-amazon.com/images/I/61UiATMq5aL._AC_SL1000_.jpg"
                    rating={5}
                />
            </div>
        </div>
    );
};

export default Home;

/* ------------------------------ Other Images ------------------------------ */

/*

https://images-na.ssl-images-amazon.com/images/G/01/kindle/journeys/YTQzYWRkNWYt/YTQzYWRkNWYt-NDMyMTM2NjEt-w1500._CB413865406_.jpg

https://images-na.ssl-images-amazon.com/images/G/01/AMAZON_FASHION/2020/journeys/NWIxMGIwNWIt/NWIxMGIwNWIt-MjVlNjE0YzQt-w1500._CB417942671_.jpg

https://images-na.ssl-images-amazon.com/images/G/01/digital/video/merch/2020/Other/TNFL_20_GWBleedingHero_1500x600_Final_Football_en-US_PVD5843_Week15Players_02218_V1._CB415629528_.jpg

https://images-na.ssl-images-amazon.com/images/G/01/kindle/journeys/ZjIzNmM3ZWUt/ZjIzNmM3ZWUt-ZDM0MWFhZTMt-w1500._CB413250588_.jpg

*/
