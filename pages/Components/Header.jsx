import Axios from 'axios';
import Link from 'next/link'
import React from 'react';
import { Container, Row, Col, Button, DropdownButton, Dropdown } from 'react-bootstrap'
import useSWR from 'swr';
import Coockies from 'js-cookie'

// const fetcher = url => {
//     Axios.get(url,
//         {
//             headers: {
//                 'Content-Type': 'application/json',
//                 Authorization: `Bearer ${Coockies.get('jwt')}`
//             }
//         }
//     );
// }

// function Profile() {
//     const { data, error } = useSWR('https://api2.subkhoone.com/api/users/my', fetcher)


// if (error) return i = <i className="fa fa-user custom-nav-size curser"></i>
// if (!data) return i = <i className="fa fa-trash custom-nav-size curser"></i>
// return i = <i className="fa fa-arrow-circle-down custom-nav-size curser"></i>
// }
const Header = () => {


    let ii = null;
    ii = <i className="fa fa-user custom-nav-size curser"></i>
    return (
        <Container className='custom-zindex'>
            <Row className="rtl pt-3">
                <Col sm={2} xs={2} className="justify-content-between d-flex">
                    <div className="text-right custom-display-off">
                        <Link href='/'><a><img src="/logo.svg" alt="logo" className="text-center" /></a></Link>
                    </div>
                    <button className="btn custom-display custom-zindex">
                        <i className="fa fa-toggle-down custom-nav-size"></i>
                    </button>
                </Col>
                <Col sm={7} xs={7} className="justify-content-between d-flex">
                    <div className="navbar navbar-expand custom-display-off">
                        <ul className="navbar-nav pr-0 custom-zindex">
                            <li className="nav-item mr-5 custom-nav-size curser"> <Link href='/'><a> خانه </a></Link> </li>
                            <li className="nav-item mr-5 custom-nav-size curser"> <Link href='/page/Amlak'><a> املاک </a></Link> </li>
                            <li className="nav-item mr-5 custom-nav-size curser"> چرا ما </li>
                            <li className="nav-item mr-5 custom-nav-size curser"> تماس با ما </li>
                            <li className="nav-item mr-5 custom-nav-size curser"> وبلاگ </li>
                        </ul>
                    </div>
                    <div className="text-center mx-auto custom-zindex">
                        <Link href='/'><a><img src="/logo.svg" alt="logo" className="text-center custom-display" /></a></Link>
                    </div>
                </Col>
                <Col sm={3} xs={3} className="">
                    <div className="justify-content-around align-items-center d-flex">
                        <Button variant="link">
                            <i className="fa fa-search custom-nav-size curser"></i>
                        </Button>
                        <DropdownButton
                            className="custom-button"
                            title={ii}
                            id="dropdown-menu-align-right" >
                            <Dropdown.Item><Link href='../Login/Login'><a> ورود </a></Link></Dropdown.Item>
                        </DropdownButton>

                        <Button variant="primary" className="p-3 custom-button-radios custom-display-off"> ملک خود را ثبت کنید </Button>
                    </div>
                </Col>
            </Row>
        </Container>
    );
}

export default Header;