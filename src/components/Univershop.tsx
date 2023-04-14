import React, { useState } from 'react';
import './Projects2.scss';
import { FaSearchPlus } from "react-icons/fa";
import { IoIosClose } from "react-icons/io";
import { Link } from 'react-router-dom';
import { IoLogoGithub } from "react-icons/io";
import { RiExternalLinkLine } from "react-icons/ri";

// interface
interface ImgArr {
    images: string[];
}

const Univershop = ({ images }:ImgArr) => {
    console.log(images);
    
    // 이미지 상태관리
    const [mainImg, setMainImg] = useState<string>(images[0]);

    const [select, setSelect] = useState<number | null>(null);
    const onClick_Img = (imageUrl: string, index: number) => {
        setMainImg(imageUrl);
        setSelect(index);
    }

    // 확대 이미지 상태관리
    const [close, setClose] = useState(false);
    const onClick_Big = () => {
        setClose(!close);
    }
    return (
        <div className='univershop'>
            {close ? 
                <div className={close ? 'big_img' : ''}>
                    <nav className='close_btn'>
                        <IoIosClose className='close' onClick={onClick_Big}/>
                    </nav>
                    <nav className='big_imgzone'>
                        <img src={mainImg} alt='' onClick={onClick_Big}/>
                    </nav>
                </div>
            : null}
            <div className='content'>
                <div className='img_zone'>
                    <div className='main_box' onClick={onClick_Big}>
                        <FaSearchPlus className='plus_icon'/>
                        <img src={mainImg} alt=''/>
                    </div>
                    <ul className='sub_boxs'>
                        {images.map((imageUrl, index) => (
                            <li key={imageUrl} id={String(index)} 
                            onClick={() => onClick_Img(imageUrl, index)}>
                                <img src={imageUrl} alt='' 
                                style={{filter: select === index ? 'brightness(0.7)' : 'none'}}/>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className='info_zone'>
                    <span className='font'>UNIVERSHOP</span>
                    <nav className='info1'>
                        <span className='color2'>팀 프로젝트</span>
                        <span className='people'> (3명)</span>
                    </nav>
                    <nav className='info2'>
                        <p>
                            php + Javascript + CSS3를 이용해 만든 게임 굿즈 사이트입니다.
                            장바구니 / 마이페이지 / 상품등록 기능과 등록한 상품을 추천순, 가격순 등으로
                            정렬했습니다.
                        </p>
                    </nav>
                    <nav className='use_tech'>
                        <ul>
                            <li># php</li>
                            <li># CSS3</li>
                            <li># Javascript</li>
                            <li># MySQL</li>
                        </ul>
                    </nav>
                    <nav className='btn_zone'>
                        <button className='to_site'>
                            <Link to='http://corona0113.dothome.co.kr/teamplay/'>
                                <RiExternalLinkLine className='link_icon'/>
                                <span>사이트 바로가기</span>
                            </Link>
                        </button>
                        <button className='to_git'>
                            <Link to='https://github.com/s-young01/PHP-UNIVERSHOP-Team-'>
                                <IoLogoGithub className='link_icon git'/>
                                <span>github</span>
                            </Link>
                        </button>
                    </nav>
                </div>
            </div>
        </div>
    );
};

export default Univershop;