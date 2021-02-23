import Axios from 'axios';
import React, { useState } from 'react';
import Header from '../Components/Header'
import Offer from '../Components/Offer';
// import Offer from '../Components/Offer';
import Footer from '../page/Footer';
// import EstateOffer from './EstateOffer';
import Properties from './Properties';

const Estate = (props) => {
    let [buyOffer, setBuyOffer] = useState('')
    let [range, setrange] = useState('')
    let [hidden, setHidden] = useState('')
    const handleSubmitModal = e => {
        e.preventDefault();
        let info = {
            'secondary_buy_offer':{
                'number_of_shares': buyOffer,
                'price': range,
                'hidden_price': hidden
            }
        }
        console.log(info);
        console.log(JSON.stringify(info));
        Axios.post('https://api2.subkhoone.com/api/assets/1/secondary_markets/1/secondary_buy_offers',
        JSON.stringify(info),
        {
            headers:{
                "Content-Type": "application/json"
            }
        })
        .then(r => console.log(r))
        .catch(err => console.log(err))
    }
    let handleBuyOffer = e => {
        setBuyOffer(e.target.value)
    }
    let handleRangeInput = e => {
        setrange(e.target.value)
    }
    let handleHiddenPrice = e => {
        setHidden(e.target.value)
    }
    return (
        <div>
            <Header />
            <Properties info={props} handleBuyOffer={handleBuyOffer} range={range} ranged={handleRangeInput} hidden={handleHiddenPrice} handleSubmitModal={handleSubmitModal}/>
            <div className="container rtl">
                <h3 className="custom-h2-bold ml-4 my-4 d-inline-block">
                    <i className="fa"></i>
                            پیشنهاد ما
                </h3>
            </div>
            {/* <EstateOffer /> */}
            {/* <Offer posts={stars} /> */}
            <Offer posts={props}/>
            <Footer />
        </div>
    );
}
Estate.getInitialProps = async () => {
    const [res, stars, detail] = await Promise.all([
        fetch('https://api2.subkhoone.com/api/assets/5').then(r => r.json()),
        fetch('https://api2.subkhoone.com/api/assets').then(r => r.json()),
        fetch('https://api2.subkhoone.com/api/assets/1/secondary_markets/1/secondary_buy_offers').then(r => r.json())
    ]) 
    // const json = await res.json()
    return { res, stars, detail }
}

export default Estate;