import React from 'react';

const Pics = ({src, clicked, opacity, mystyle, property}) => {
    // console.log(src);
    return (
        <li className={`slider-pic-items list-group-item ${property}`} onClick={clicked}>
            <a>
                <img src={src} alt="slider" className={`slider-pic-item`} />
            </a>
        </li>
    );
}

export default Pics;