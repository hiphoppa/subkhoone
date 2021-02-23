import React from 'react';
import Header from '../Components/Header';
import Posts from './Posts';
import { Container, Row } from 'react-bootstrap'
import Footer from './Footer';
import faker from 'faker'
const Amlak = (props) => {
    return (
        <Container>
            {/* <Row> */}
                <Header />
                <Posts posts={props} key={faker.random.number()} />
                <div className="more-posts d-block w-100 text-center mb-5">
                    <button className="btn btn-light mx-auto px-5 py-3 more-posts-btn rounded custom-smalll">
                        نمایش بیشتر
                        &nbsp;&nbsp;
                        <i className="fa fa-rotate-left custom-smalll"></i>
                    </button>
                </div>
                <Footer />
            {/* </Row> */}
        </Container>
    );
}
Amlak.getInitialProps = async () => {
    const res = await fetch('https://api2.subkhoone.com/api/assets')
    const json = await res.json()
    return { stars: json }
  }

export default Amlak;