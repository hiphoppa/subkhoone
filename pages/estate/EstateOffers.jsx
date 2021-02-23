import React from 'react';

const EstateOffers = ({numberShare, largeShare, smallShare, contributers, settrue}) => {
    return (
        <div className="left-info ">
            <div className="left-line d-flex justify-content-between my-3">
                <span className="estate-info-right pl-2">
                    <i className="fa fa-clock-o"></i> &nbsp;
                                کل صاب
                            </span>
                <span className="estate-info-left pr-2">
                    {numberShare} صاب
                            </span>
            </div>
            <div className="left-line d-flex justify-content-between my-3">
                <span className="estate-info-right pl-2">
                    <i className="fa fa-calendar"></i> &nbsp;
                                کمترین صاب خریداری شده
                            </span>
                <span className="estate-info-left pr-2">
                    {smallShare} صاب
                            </span>
            </div>
            <div className="left-line d-flex justify-content-between my-3">
                <span className="estate-info-right pl-2">
                    <i className="fa fa-circle-o-notch"></i> &nbsp;
                                بیشترین صاب خریداری شده
                            </span>
                <span className="estate-info-left pr-2">
                    {largeShare} صاب
                            </span>
            </div>
            <div className="left-line d-flex justify-content-between my-3">
                <span className="estate-info-right pl-2">
                    <i className="fa fa-area-chart"></i> &nbsp;
                                تعداد مشارکت کننده ها
                            </span>
                <span className="estate-info-left pr-2">
                    {contributers}
                            </span>
            </div>
            <div className="left-line d-flex justify-content-between my-3">
                <span className="estate-info-right pl-2">
                    <i className="fa fa-users"></i> &nbsp;
                                تاریخ شروع فروش
                            </span>
                <span className="estate-info-left pr-2">
                    11/112/1398
                            </span>
            </div>
            <div className="left-line d-flex justify-content-between my-3">
                <span className="estate-info-right pl-2">
                    <i className="fa fa-users"></i> &nbsp;
                                زمان اتمام فروش
                            </span>
                <span className="estate-info-left pr-2">
                    250 روز
                            </span>
            </div>
            <div className="left-line d-flex justify-content-between my-3 pb-5">
                <span className="estate-info-right pl-2 custom-text-blue">
                    <i className="fa fa-dollar custom-text-blue"></i> &nbsp;
                                سهم من از ملک
                            </span>
                <span className="estate-info-left pr-2 custom-text-blue">
                    0 صاب
                            </span>
            </div>
            <div>
                <button className='btn btn-block btn-danger rounded py-3' onClick={settrue}>
                    ثبت پیشنهاد خرید
                            </button>
            </div>
            <div>
                <button className='btn btn-block btn-info rounded py-3 '>
                    برای ثبت پیشنهاد ابتدا وارد شوید
                            </button>
            </div>
        </div>
    );
}

export default EstateOffers;