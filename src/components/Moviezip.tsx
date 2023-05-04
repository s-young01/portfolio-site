import React, { useState } from 'react';
import './Projects2.scss';
import { FaSearchPlus } from "react-icons/fa";
import { IoIosClose } from "react-icons/io";
import { Link } from 'react-router-dom';
import { IoLogoGithub } from "react-icons/io";
import { RiExternalLinkLine } from "react-icons/ri";

// interface
interface ImgArr {
    images2: string[];
}

const Moviezip = ({ images2 }:ImgArr) => {
    // 이미지 상태관리
    const [mainImg2, setMainImg2] = useState<string>(images2[0]);

    const [select2, setSelect2] = useState<number | null>(null);
    const onClick_Img2 = (imageUrl2: string, index2: number) => {
        setMainImg2(imageUrl2);
        setSelect2(index2);
    }

    // 확대 이미지 상태관리
    const [close2, setClose2] = useState(false);
    const onClick_Big2 = () => {
        setClose2(!close2);
    }
    return (
        <div className='univershop'>
            {close2 ? 
                <div className={close2 ? 'big_img' : ''}>
                    <nav className='close_btn'>
                        <IoIosClose className='close' onClick={onClick_Big2}/>
                    </nav>
                    <nav className='big_imgzone'>
                        <img src={mainImg2} alt='' onClick={onClick_Big2}/>
                    </nav>
                </div>
            : null}
            <div className='content'>
                <div className='img_zone'>
                    <div className='img_box'>
                        <div className='main_box' onClick={onClick_Big2}>
                            <FaSearchPlus className='plus_icon'/>
                            <img src={mainImg2} alt=''/>
                        </div>
                        <ul className='sub_boxs'>
                            {images2.map((imageUrl2, index2) => (
                                <li key={imageUrl2} id={String(index2)} 
                                onClick={() => onClick_Img2(imageUrl2, index2)}>
                                    <img src={imageUrl2} alt='' 
                                    style={{filter: select2 === index2 ? 'brightness(0.7)' : 'none'}}/>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className='info_zone'>
                    <span className='font'>Movie.Zip</span>
                    <nav className='info1'>
                        <span className='color2'>팀 프로젝트</span>
                        <span> (4명)</span>
                    </nav>
                    <nav className='info2'>
                        <p>
                            React + Redux + Node.js를 이용해 만든 영화 커뮤니티 사이트입니다.
                            게시판 페이지에 글을 등록 / 수정할 수 있는 기능과 
                            한줄평, 영화 추천 카운트 기능을 구현했습니다.
                        </p>
                    </nav>
                    <nav className='use_tech'>
                        <ul>
                            <li># SASS</li>
                            <li># React</li>
                            <li># Redux</li>
                            <li># Node.js</li>
                            <li># MySQL</li>
                        </ul>
                    </nav>
                    <nav className='btn_zone'>
                        <button className='to_site'>
                            <Link to='https://movie-react-eight.vercel.app/' target='_blank'>
                                <RiExternalLinkLine className='link_icon'/>
                                <span>사이트 바로가기</span>
                            </Link>
                        </button>
                        <button className='to_git'>
                            <Link to='https://github.com/s-young01/movie-react-1' target='_blank'>
                                <IoLogoGithub className='link_icon'/>
                                <span>github</span>
                            </Link>
                        </button>
                    </nav>
                </div>
            </div>
        </div>
    );
};

export default Moviezip;