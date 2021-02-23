import React from 'react';
import { Container, Row } from 'react-bootstrap'
const Footer = () => {
    return (
        <Container>
            <Row className='custom-rtl'>
                <div className='col-lg-4 d-lg-inline-block custom-rtl text-right col-12'>
                    <img src="/logo.svg" alt="logo" className="footer-logo" />
                    <p className='footer-info'>صابخونه یک سکو برای خرید و فروش متری املاک است که در آن امکان ورود با هر حجم سرمایه در فرصت های جذاب ملکی وجود دارد</p>
                    <div className="custom-tags">
                        <i className="fa fa-instagram custom-small ml-3"></i>
                        <i className="fa fa-twitter custom-small ml-3"></i>
                        <i className="fa fa-google custom-small ml-3"></i>
                    </div>
                </div>
                <div className="col-lg-2 custom-rtl d-lg-inline-block d-none">
                    <h6 className="text-right pr-0 footer-title">خدمات</h6>
                    <ul className="text-dec pr-0">
                        <li className="text-right"> مجوز های لازم برای خرید  </li>
                        <li className="text-right"> فروش خانه  </li>
                        <li className="text-right"> سرمایه گذاری </li>
                    </ul>
                </div>
                <div className="col-lg-2 custom-rtl d-lg-inline-block d-none">
                    <h6 className="text-right pr-0 footer-title"> پیوند ها </h6>
                    <ul className="text-dec pr-0">
                        <li className="text-right"> ورود به پنل </li>
                        <li className="text-right"> شرایط و قوانین </li>
                        <li className="text-right"> سوالات متداول </li>
                        <li className="text-right"> همکاری با ما </li>
                        <li className="text-right"> تماس با ما </li>
                    </ul>
                </div>
                <div className="col-lg-2 custom-rtl d-lg-inline-block d-none">
                    <h6 className="text-right pr-0 footer-title"> لینک های پر کاربرد </h6>
                    <ul className="text-dec pr-0">
                        <li className="text-right"> محاسبه آنلاین خانه </li>
                        <li className="text-right"> یک متن تستی </li>
                    </ul>
                </div>
                <div className="col-lg-2 custom-rtl d-lg-inline-block d-none">
                    <h6 className="text-right pr-0 footer-title"> جوایز دریافت شده </h6>

                </div>
            </Row>
        </Container>
    );
}

export default Footer;