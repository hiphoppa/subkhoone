import React from 'react';
import { Table } from 'react-bootstrap'

const Box = ({ details }) => {
    const { data } = details;
    return (
        <div className="my-5 sugestion">
            <div className="row">
                <div className="col-12 col-lg-6">
                    <h3 className="custom-h2-bold ml-4 my-4 d-inline-block">
                        <i className="fa fa-bitcoin"></i> &nbsp;
                            خرید
                        </h3>
                    <Table striped bordered className='custom-table mx-auto'>
                        <thead>
                            <tr>
                                <th className='text-center'>تعداد افراد</th>
                                <th className='text-center'>صاب</th>
                                <th className='text-center'>
                                    قیمت
                                        <span className='custom-small'>(تومان)</span>
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map(detail => (
                                <tr>
                                    <td className='text-center'>{detail.secondary_market_id}</td>
                                    <td className='text-center'>{detail.number_of_shares} صاب</td>
                                    <td className='text-center'>{detail.price}</td>
                                </tr>
                            ))}
                        </tbody>

                    </Table>
                </div>
                <div className="col-12 col-lg-6">
                    <h3 className="custom-h2-bold ml-4 my-4 d-inline-block">
                        <i className="fa fa-bitcoin"></i> &nbsp;
                            فروش
                        </h3>
                    <Table striped bordered className='custom-table mx-auto'>
                        <thead>
                            <tr>
                                <th className='text-center'>تعداد افراد</th>
                                <th className='text-center'>صاب</th>
                                <th className='text-center'>
                                    قیمت
                                        <span className='custom-small'>(تومان)</span>
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className='text-center'>1</td>
                                <td className='text-center'>1</td>
                                <td className='text-center'>100000</td>
                            </tr>
                        </tbody>
                    </Table>
                </div>
            </div>
        </div>
    );
}

export default Box;