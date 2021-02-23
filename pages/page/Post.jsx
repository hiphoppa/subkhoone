import React from 'react';
import Link from 'next/link'
const Post = ({ name, market, model }) => {
    return (
        <div className="col-12 col-sm-6 col-md-4 d-inline-block col-lg-3 px-3 mt-3 rounded-pill custom-content">
            <Link href='../estate/Estate'>
                <a className="custom-link">
                    <div className="card-container">
                        <div className="card">
                            <h6 className="text-right pr-3 py-3 pos-abs custom-color-hover"> {name} </h6>
                            <div className="topImageHolder mt-5">
                                <div className="imageHolder">
                                    <img className="card-img-top rounded-corner" src='/img/2.jpg' alt="Card image cap" />
                                    <span className="tip px-3 py-2 rounded-pill"> {market == 1 ? 'بازار اولیه' : 'بازار ثانویه'} </span>
                                </div>
                            </div>
                            <div className="card-body custom-rtl text-right">
                                <i className="fa fa-money"></i>
                                <div className="d-inline-block">
                                    <h5 className="card-title custom-h4-subtitle text-right pr-3"> نوع ملک </h5>
                                    <p className="card-text text-right pr-3"> {model == 2 ? "تجاری" : "اداری"} </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </a>
            </Link>
        </div>
    );
}

export default Post;