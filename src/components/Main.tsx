import React from 'react';
import './Main.scss';

const Main = () => {
    return (
        <div className='main'>
            <div/>
            <div className='main_font'>
                <p className='middle'>
                    <span className='blue'>｛</span>
                    <span className='skyblue'>FRONT-END</span>
                    <span className='white'>: </span>
                    <span className='lightgreen'>DEVELOPER</span>
                    <span className='blue'>｝</span>
                    <span className='white'>;</span>
                </p>
                <p className='orange'>SE-YOUNG'S PORTFOLIO</p>
            </div>
            <div className='s1_arrow'>
                <div className='scroll-arrow'></div>
                <div className='scroll-arrow'></div>
                <div className='scroll-arrow'></div>
                <span className='scroll_info'>Scroll Down</span>
            </div>
        </div>
    );
};

export default Main;