import React from 'react';
import FilterBox from './FilterBox';
import Header from './Header';
import Svg from './Svg';

const Contain = () => {
    return (
        <div className="custom-bg-pic position-rel">
            {/* <Svg /> */}
            <Header />
            <FilterBox />
            <img className="custom-svg-home" src="./img/backsvg.svg" alt="svg" />
        </div>
    );
}

export default Contain;