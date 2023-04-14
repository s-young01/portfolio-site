import React, { Component } from 'react';
import './Work2.scss';
import Univershop from './Univershop';
import Moviezip from './Moviezip';
import Writtenforest from './Writtenforest';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// interface
interface ImgArr {
  images: string[];
  images2: string[];
  images3: string[];
}

export default class Work extends Component<ImgArr> {
    render() {
        const { images, images2, images3 } = this.props;
        console.log(this.props);
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
        };
        return (
            <div className='work'> 
                <h1>PROJECTS</h1>
                <Slider {...settings}>
                    <Univershop images={images} />
                    <Moviezip images2={images2} />
                    <Writtenforest images3={images3} />
                </Slider>  
            </div>
        );
    };
};