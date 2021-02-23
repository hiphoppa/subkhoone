import Link from 'next/link';
import React from 'react';
import { useState } from 'react';
import { Container, Row } from 'react-bootstrap'
const LoginContent = ({ change, submit, code, password, submitCode, correct, name, lastname, submitInfo }) => {
    let tags = null;
    switch (code) {
        case 0:
            tags = (
                <form className='' onSubmit={submit}>
                    <div className="input-border mb-4 text-right">
                        <h5 className="custom-small"> موبایل </h5>
                        <div className="input-holder mb-3 ">
                            <input type="text" className='w-100 myinput' placeholder='موبایل' onChange={change} />
                        </div>
                    </div>
                    <button type="submit" className='btn btn-primary btn-block rounded-pill'> دریافت کد </button>
                </form>
            )
            break;
        case 1:
            tags = (
                <div>
                    <form className='' onSubmit={submitCode}>
                        <div className="input-border mb-4 text-right">
                            <h5 className="custom-small"> کد </h5>
                            <div className="input-holder mb-3 ">
                                <input type="text" className='w-100 myinput' placeholder='کد' onChange={password} />
                            </div>
                        </div>
                        <button type="submit" className='btn btn-primary btn-block rounded-pill'> ثبت کد </button>
                    </form>
                    <div className="w-100 text-center mt-3">
                        <div className="custom-return mt-4" onClick={correct}> ویرایش شماره تلفن </div>
                    </div>
                </div>
            )
            break;
        case 2:
            tags = (
                <div>
                    <form className='' onSubmit={submitInfo}>
                        <div className="input-border mb-4 text-right">
                            <h5 className="custom-small"> نام </h5>
                            <div className="input-holder mb-3 ">
                                <input type="text" className='w-100 myinput' placeholder='مهران' onChange={name} />
                            </div>
                        </div>
                        <div className="input-border mb-4 text-right">
                            <h5 className="custom-small"> نام خانوادگی </h5>
                            <div className="input-holder mb-3 ">
                                <input type="text" className='w-100 myinput' placeholder='محمودی' onChange={lastname} />
                            </div>
                        </div>
                        <button type="submit" className='btn btn-primary btn-block rounded-pill'> ورود </button>
                    </form>
                </div>
            )
            break;
    }
    return (
        <Container className="mt-5">
            <div className="custom-form-width mt-5">
                <div className="custom-login-position custom-rtl">
                    <h2 className="custom-h2-bold text-right"> ورود </h2>
                    <h5 className="custom-small text-right"> تمام فیلد را به طور صحیح وارد کنید </h5>
                    {tags}
                </div>
            </div>
        </Container>
    );
}

export default LoginContent;