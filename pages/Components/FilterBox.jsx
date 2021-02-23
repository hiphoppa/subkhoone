import React, { Fragment, useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap'
const FilterBox = () => {
    const [getclicked, setclicked] = useState(false)
    const [getDropDown, setDropDown] = useState(false)
    const [getDropDown1, setDropDown1] = useState(false)
    const [getDropDowntown, setDropDowntown] = useState(false)
    const [getCondition, setCondition] = useState(false)
    const [getlogin, setlogin] = useState(true)
    let dropDown = null;
    let login = null;
    let drop1 = null;
    let drop2 = null;
    let drop3 = null;
    const clicked = () => {
        // localStorage.clear();
        setlogin(!getlogin);
    }

    if (getclicked) {
        login = (<ul className="authDropDown"><li className="" onClick={clicked}><Link href="/components/LoginPage/Login"><a>
            ورود
        </a></Link></li></ul>)
    }
    if (getDropDown) {
        dropDown = (
            <div className="custom-header-dropdown mx-auto">
                <div className="list-group">
                    <a href="#" className="list-group-item list-group-item-action">  خانه </a>
                    <a href="#" className="list-group-item list-group-item-action"> املاک </a>
                    <a href="#" className="list-group-item list-group-item-action"> چرا ما </a>
                    <a href="#" className="list-group-item list-group-item-action"> تماس با ما </a>
                    <a href="#" className="list-group-item list-group-item-action"> وبلاگ </a>
                </div>
            </div>
        )
    }
    if (getDropDown1) {
        drop1 = (
            <div className="whole-city">
                <div className="input-group mb-3 input-group-sm">
                    <input type="text" className="form-control rounded" placeholder="جستوجو" />
                    <div className="input-group-prepend">
                        <span className="btn btn-primary rounded">
                            <i className="fa fa-search"></i>
                        </span>
                    </div>
                </div>
                <label className="label1">
                    <input type="checkbox" className="d-inline-block ml-2 custom-top-3" />
                    <p className="d-inline-block custom-small"> تهران </p>
                </label>
            </div>
        )
    }
    if (getDropDowntown) {
        drop2 = (
            <div className="whole-city">
                <div className="input-group mb-3 input-group-sm">
                    <input type="text" className="form-control rounded" placeholder="جستوجو" />
                    <div class="input-group-prepend">
                        <span className="btn btn-primary rounded">
                            <i className="fa fa-search"></i>
                        </span>
                    </div>
                </div>
                <label className="label1">
                    <input type="checkbox" className="d-inline-block ml-2 custom-top-3" />
                    <p className="d-inline-block custom-small"> تهران </p>
                </label>
            </div>
        )
    }
    if (getCondition) {
        drop3 = (
            <div className="whole-city w-95">
                <div className="input-group mb-3 input-group-sm">
                    <input type="text" className="form-control rounded" placeholder="جستوجو" />
                    <div className="input-group-prepend">
                        <span className="btn btn-primary rounded">
                            <i className="fa fa-search"></i>
                        </span>
                    </div>
                </div>
                <label className="label1 w-100">
                    <input type="checkbox" className="d-inline-block ml-2 custom-top-3" />
                    <p className="d-inline-block custom-small"> تجاری </p>
                </label>
                <br />
                <label className="label1 w-100">
                    <input type="checkbox" className="d-inline-block ml-2 custom-top-3" />
                    <p className="d-inline-block custom-small"> اداری </p>
                </label>
            </div>
        )
    }
    return (
        <Container className="mt-5 custom-rtl">
            <div className="custom-form">
                <div className="custom-total">
                    <h5 className="text-right pr-3 mt-5 pt-5 custom-small"> دوست داری صابخونه شی؟ </h5>
                    <h2 className="text-right custom-h2-bold pr-3 mb-5"> میتونی از یه متر شروع کنی </h2>
                    <Row>
                        <Col sm={6} xs={6} className="mb-4">
                            <div className="customTown text-right px-3 rounded" onClick={() => setDropDowntown(!getDropDowntown)}>
                                <small className="custom-small"> استان </small>
                                <div className="customTownSubtitle d-flex justify-content-between">
                                    <h5 className="custom-form-town"> تهران </h5>
                                    <i className="fa fa-location-arrow"></i>
                                </div>
                            </div>
                            {drop2}
                        </Col>
                        <Col sm={6} xs={6} className="mb-4">
                            <div className="customTown text-right px-3 rounded" onClick={() => setDropDown1(!getDropDown1)}>
                                <small className="custom-small"> شهر </small>
                                <div className="customTownSubtitle d-flex justify-content-between">
                                    <h5 className="custom-form-town"> همه </h5>
                                    <i className="fa fa-location-arrow"></i>
                                </div>
                            </div>
                            {drop1}
                        </Col>
                        <Col sm={12} xs={12} className="mb-4">
                            <div className="customTown text-right px-3 rounded" onClick={() => setCondition(!getCondition)}>
                                <small className="custom-small"> نوع ملک </small>
                                <div className="customTownSubtitle d-flex justify-content-between">
                                    <h5 className="custom-form-town"> همه </h5>
                                    <i className="fa fa-location-arrow"></i>
                                </div>
                            </div>
                            {drop3}
                        </Col>
                        <Col sm={6} xs={6} className="mb-4">
                            <div className="customTown text-right px-3 rounded">
                                <small className="custom-small"> مدل درآمدی </small>
                                <div className="customTownSubtitle d-flex justify-content-between">
                                    <h5 className="custom-form-town"> همه </h5>
                                    <i className="fa fa-location-arrow"></i>
                                </div>
                            </div>
                        </Col>
                        <Col sm={6} xs={6} className="mb-4">
                            <div className="customTown text-right px-3 rounded">
                                <small className="custom-small"> سن بیا </small>
                                <div className="customTownSubtitle d-flex justify-content-between">
                                    <h5 className="custom-form-town"> 0 تا 0 </h5>
                                    <i className="fa fa-location-arrow"></i>
                                </div>
                            </div>
                        </Col>
                        <Col sm={12} xs={12} className="mb-5">
                            <Button variant="danger" block>
                                <small> جست و جو کن</small>
                            </Button>
                        </Col>
                    </Row>
                </div>
            </div>
        </Container>
    );
}

export default FilterBox