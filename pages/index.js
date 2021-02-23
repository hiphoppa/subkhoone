import React from 'react';
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Header from './Components/Header';
import FilterBox from './Components/FilterBox';
import InfoBox from './Components/InfoBox';
import Offer from './Components/Offer';
import axios from 'axios';
import Contain from './Components/contain';

const Home = (props) => {
  console.log(props);
  return (
    <div>
      <Head>
        <title> subkhoone </title>
      </Head>
      <Contain />
      <InfoBox />
      <div className="container mt-5">
        <h5 className="custom-small text-right"> فرصت های سرمایه گذاری </h5>
        <h2 className="text-right"> پیشنهاد های ویژه </h2>
      </div>
      <Offer posts={props} />
    </div>
  )
}
Home.getInitialProps = async () => {
  const res = await fetch('https://api2.subkhoone.com/api/assets')
  const json = await res.json()
  return { stars: json }
}
export default Home;