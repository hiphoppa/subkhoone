import React from 'react';
import {Container, Row} from 'react-bootstrap'
import Offers from './Offers';
function Offer({ posts }) {
    const { data } = posts.stars;
    
    return (
        <Container className="my-5">
            <Row className="mt-5 custom-rtl">
                {data.map(post => (
                <Offers
                name={post.name}
                market={post.present_secondary_market_id}
                model={post.income_model_id}
                key={post.id}
                />
                )
                )}
            </Row>
        </Container>
    )
};

export default Offer;