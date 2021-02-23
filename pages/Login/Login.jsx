import axios from 'axios';
import React, { useState } from 'react';
import Header from '../Components/Header';
import LoginContent from './LoginContent';
// import { useRouter } from 'next/router'
// import Coockies from 'universal-cookie'
// import Coockies from 'js-cookie'
import { useCookies } from 'react-cookie';
import cookieCutter from 'cookie-cutter'

import Axios from 'axios';
const Login = () => {
    const [coockie, setcoockie] = useCookies(['token'])
    const [number, setnumber] = useState('')
    const [nationalcode, setnationalcode] = useState("")
    const [regCode, setRegCode] = useState("")
    const [code, setcode] = useState(0)
    const [name, setname] = useState('')
    const [lastName, setLastName] = useState('')
    const [registered, setregistered] = useState(false)
    const handleChangeNumber = e => {
        setnumber(e.target.value)
    }
    const handlePassword = e => {
        setRegCode(e.target.value)
    }
    const correctNumber = () => {
        setcode(0)
    }
    const handleSubmitNumber = event => {
        event.preventDefault();
        const cellpgone = {
            phone_number: number
        }
        axios.post("https://api2.subkhoone.com/api/users/one_time_password/new",
            JSON.stringify(cellpgone),
            {
                headers: {
                    "Content-Type": "application/json"
                }
            }).then((res) => {
                // localStorage.setItem("phnumber", number)
                // Cookies.set('phone', number)
                console.log(res)
                setcode(1)
                // localStorage.setItem("mytemp", res.data.data.temp_token)
                // Cookies.set('temp-token', res.data.data.temp_token)
                // setcoockie('token', res.data.data.temp_token)
                cookieCutter.set('token', res.data.data.temp_token)
                console.log(cookieCutter.get('token'));
            })
            .catch(err => console.log(err))
    }
    const handleSubmitCode = event => {
        event.preventDefault();
        const info = {
            phone_number: number,
            password: regCode,
            // temp_token: localStorage.getItem('mytemp')
            temp_token: cookieCutter.get('token')
        }
        console.log(JSON.stringify(info));
        axios.post("https://api2.subkhoone.com/api/users/one_time_password/login",
            JSON.stringify(info),
            {
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            .then((res) => {
                
                // localStorage.setItem('myjwt', res.data.data.jwt_token)
                // Cookies.set('jwt', res.data.data.jwt_token)
                cookieCutter.set('jwt', res.data.data.jwt_token)
                console.log(res);
                setcode(2)
                setregistered(res.data.data.user.is_registered)
                setnationalcode('0019284349')
                // console.log(localStorage.getItem('myjwt'));
                console.log(cookieCutter.get('jwt'));
            })
            .catch(err => console.log(err))
    }
    const handleGetName = e => {
        setname(e.target.value);
    }
    const handleGetLastName = e => {
        setLastName(e.target.value);
    }
    const handleSubmitInfo = e => {
        e.preventDefault();
        let fullInfo = {
            user: {
                first_name: name,
                is_registered: true,
                last_name: lastName,
                national_code: nationalcode,
                phone_number: '+989307065673'
            }
        }
        console.log(JSON.stringify(fullInfo));
        console.log(fullInfo);
        console.log(cookieCutter.get('jwt'));
        // console.log(mycoockie.get('jwt'));
        axios.put('https://api2.subkhoone.com/api/users/my/update',
            JSON.stringify(fullInfo),
            {
                headers: {
                    'Content-Type': 'application/json',
                    // Authorization: `Bearer ${localStorage.getItem('myjwt')}`
                    'Authorization': `Bearer ${cookieCutter.get('jwt')}`,
                    'Access-Control-Allow-Origin': '*',
                    'withCredentials': true
                }
            }
        ).then(res => console.log(res))
        .catch(err => console.log(err))
    }
    return (
        <div>
            <div className="login-bg"></div>
            <div className="custom-white"></div>
            <img src="/img/login.svg" alt="login" className="custom-svg" />
            <Header />
            <LoginContent
                change={handleChangeNumber}
                submit={handleSubmitNumber}
                correct={correctNumber}
                submitCode={handleSubmitCode}
                code={code}
                password={handlePassword}
                name={handleGetName}
                lastname={handleGetLastName}
                submitInfo={handleSubmitInfo}
            />
        </div>
    );
}

export default Login;