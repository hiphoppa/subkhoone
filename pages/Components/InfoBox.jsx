import React from 'react';
import { Container, Row, Col } from 'react-bootstrap'
const InfoBox = () => {
    return (
        <Container className="custom-margin-top">
            <div className="topTitle1">
                <h5 className="custom-small text-center"> دوست داری صابخونه باشی </h5>
                <h2 className="text-center custom-h2-bold"> چرا در صابخونه ملک بخریم </h2>
            </div>
            <Row>
                <Col sm={12} xs={12} md={6} lg={4} className="custom-hover-info">
                    <div className="pt-5 px-3 mt-5 custom-border rounded">
                        <i className="fa custom-after fa-openid text-center mx-auto mb-5 "></i>
                        <h4 className="custom-h4-title text-center mb-3 custom-h2-bold"> بازدهی بالا در حوزه املاک </h4>
                        <p className="text-center mb-3 custom-h4-subtitle">سهیم بودن در پروژه های بزرگ ملکی می تواند سود قابل قبولی را برای شما فراهم کند</p>
                    </div>
                </Col>
                <Col sm={12} xs={12} md={6} lg={4} className="d-md-inline-block d-none custom-hover-info">
                    <div className="pt-5 px-3 mt-5 custom-border rounded">
                        <i className="fa fa-openid custom-after text-center mx-auto mb-5"></i>
                        <h4 className="custom-h4-title text-center mb-3 custom-h2-bold"> ارزش ملک رشد میکند </h4>
                        <p className="text-center mb-3 custom-h4-subtitle">نرخ رشد قیمت املاک به طور متوسط از دلار بالاتر است و دارای ریسک پایین تری است</p>
                    </div>
                </Col>
                <Col sm={12} xs={12} md={12} lg={4} className="d-none d-lg-inline-block custom-hover-info">
                    <div className="pt-5 px-3 mt-5 custom-border rounded">
                        <i className=" fa fa-openid custom-after text-center mx-auto mb-5"></i>
                        <h4 className="text-center mb-3 custom-h4-title custom-h2-bold"> کم ریسک و مطمعن </h4>
                        <p className="text-center mb-3 custom-h4-subtitle">سرمایه گذاران در حوزه املاک در نوسانات اقتصادی معمولا آسیبی کمتری میبینند</p>
                    </div>
                </Col>
            </Row>
        </Container>
    );
}

export default InfoBox;