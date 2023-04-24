import React from 'react';
import './Main.scss';

const Main = () => {
    return (
        <div className='main'>
            <div className='main_font'>
                <p className='middle'>
                    <span className='skyblue'>FRONT-END DEVELOPER</span>
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