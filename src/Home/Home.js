import React from 'react';
import './Home.css';
import '../Product/Product';
import Product from '../Product/Product';

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
                <Product title="Cracking The Coding Interview" price={29.99} image="https://images-na.ssl-images-amazon.com/images/I/410hiaPGyCL._SX348_BO1,204,203,200_.jpg" rating={5} />
                <Product />
            </div>
            <div className="home__row">
                <Product />
                <Product />
                <Product />
            </div>
            <div className="home__row">
                <Product />
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
