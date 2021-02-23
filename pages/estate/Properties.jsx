import React, { useState } from 'react';
import Box from './Box';
import EstateOffers from './EstateOffers';
import Pics from './Pics'
import { Modal, Form } from 'react-bootstrap'
const Properties = ({ info, handleBuyOffer, range, ranged, hidden, handleSubmitModal }) => {
    const { data } = info.res;
    let sumi = null;
    let clickedImg = null;
    let notClicked = null;
    let newactive = null;
    let [activeid, setactiveid] = useState(null)
    const [lgShow, setLgShow] = useState(false);
    const [image, setimage] = useState({})
    const [classes, setclasses] = useState(1)
    const [ax, setax] = useState('/img/slider1.jpg')
    const pics = [
        { src: '/img/slider1.jpg', id: 0 },
        { src: '/img/slider2.jpg', id: 1 },
        { src: "/img/slider3.jpg", id: 2 },
        { src: '/img/slider4.jpg', id: 3 },
        { src: '/img/slider5.jpg', id: 4 }
    ]
    const clicked = id => {
        newactive = classes === 0.3 ? 1 : 0.3;
        setclasses(newactive)
        setactiveid(id)
        const pic = [...pics];
        sumi = pic.findIndex(picture => picture.id === id);
        clickedImg = pic[sumi];
        notClicked = pic.filter(picture => picture.id !== id);
        setimage(clickedImg)
        setax(clickedImg.src)
    }
    const setTrue = () => {
        setLgShow(true)
    }
    const setFalse = () => {
        setLgShow(false)
    }
    return (
        <div className="container rtl mt-3">
            <Modal
                size="lg"
                show={lgShow}
                onHide={() => setLgShow(false)}
                aria-labelledby="example-modal-sizes-title-lg"
                className='rtl'
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title id="example-modal-sizes-title-lg">
                        <h5>
                            <i className="fa fa-handshake-o"></i>&nbsp;
                            ثبت پیشنهاد خرید
                        </h5>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="text-center my-4">
                        <h5 className='custom-h2-bold'>مشخص کردن ارقام</h5>
                    </div>
                    <Form onSubmit={handleSubmitModal}>
                        <div className="custom-but">
                            <h6 className='mx-1 d-inline-flex custom16'> ثبت پیشنهاد خرید </h6>
                            <div className=' d-inline-flex custom-input-modal rounded'>
                                <input type="text" className='w-100 rounded text-center' placeholder='0' onChange={handleBuyOffer}/>
                            </div>
                            <h6 className='d-inline-flex mx-1 custom16'> صاب به قیمت هر صاب </h6>
                            <Form.Group controlId="formBasicRangeCustom" className='d-inline-flex mx-2'>
                                {/* <Form.Label>Range</Form.Label> */}
                                <span className="num-before">29</span>
                                <div className="position-rel dir-ltr">
                                    <Form.Control type="range" custom min='20000' max='29000' className='custom-range' onChange={ranged} />
                                    <span className="num-main">{ range }</span>
                                </div>
                                <span className="num-after">20</span>
                            </Form.Group>
                            <h6 className='d-inline-flex mx-2 custom16'> میلیون تومان </h6>
                        </div>
                        <div className="custom-but-l2 mt-4 px-4">
                            <span className="hidden-price d-inline-block"> قیمت نهان:  </span>&nbsp;
                            <h6 className='d-inline-flex custom16 mr-2'> هر صاب </h6>
                            <div className=' d-inline-flex custom-input-modal rounded'>
                                <input type="text" className='w-100 rounded text-center' placeholder='0' onChange={hidden}/>
                            </div>
                            <h6 className='d-inline-flex mx-1 custom16 ml-2'> میلیون تومان </h6>
                            <h6 className='d-inline-flex custom14 ml-2'> (این قیمت به صورت محرمانه تا زمان پایان بازار ثانویه محفوظ می ماند) </h6>
                        </div>
                        <div className="text-center my-5">
                            <button className='btn btn-danger custom-btn-submit' type="submit"> ثبت </button>
                        </div>
                    </Form>
                </Modal.Body>
            </Modal>
            <div className="row">
                <div className="col-md-9 col-10">
                    <div className="slider">
                        <img src={ax} alt="slider1" className="w-100 custom-slider-info" />

                        <ul className="slider-pics list-group list-group-horizontal">
                            {pics.map(pic => (
                                <Pics
                                    src={pic.src}
                                    clicked={() => clicked(pic.id)}
                                    key={pic.id}
                                    id={pic.id}
                                    classes={classes}
                                    property={pic.id === activeid ? 'opa' : 'opa1'}

                                />

                            ))}

                        </ul>
                    </div>
                    <h2 className="custom-small"></h2>
                    <h2 className="custom-h2-bold"></h2>
                    <Box details={info.detail} />
                    <div className="more-posts d-block w-100 text-center mb-5">
                        <button className="btn btn-light mx-auto px-5 py-3 more-posts-btn rounded custom-smalll">
                            نمایش بیشتر
                            &nbsp;&nbsp;
                        <i className="fa fa-rotate-left custom-smalll"></i>
                        </button>
                    </div>
                    <div className="my-5 sugestion">
                        <h3 className="custom-h2-bold ml-4 my-4 d-inline-block">
                            <i className="fa fa-instagram"></i> &nbsp;
                            توضیحات
                        </h3>
                        <h6 className='ml-4 mb-4'>
                            ملک نوساز افسریه شمالی با بیست واحد فضا
                        </h6>
                    </div>
                </div>
                <div className="col-md-3 col-10 p-0 custom-left-info">
                    <EstateOffers
                        numberShare={data.all_number_of_shares}
                        largeShare={data.largest_shares}
                        smallShare={data.smallest_shares}
                        contributers={data.number_of_contributors}
                        key={data.id}
                        settrue={setTrue}
                    />
                </div>
            </div>
        </div>
    );
}
Properties.getInitialProps = async () => {
    const res = await fetch('https://api2.subkhoone.com/api/assets/5')
    const json = await res.json()
    return { stars: json }
}
export default Properties;