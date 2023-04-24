import React, { useState } from 'react';
import './Projects2.scss';
import { FaSearchPlus } from "react-icons/fa";
import { IoIosClose } from "react-icons/io";
import { Link } from 'react-router-dom';
import { IoLogoGithub } from "react-icons/io";
import { RiExternalLinkLine } from "react-icons/ri"

// interface
interface ImgArr {
    images3: string[];
}

const Writtenforest = ({ images3 }:ImgArr) => {
    // 이미지 상태관리
    const [mainImg3, setMainImg3] = useState<string>(images3[0]);

    const [select3, setSelect3] = useState<number | null>(null);
    const onClick_Img3 = (imageUrl3: string, index3: number) => {
        setMainImg3(imageUrl3);
        setSelect3(index3);
    }

    // 확대 이미지 상태관리
    const [close3, setClose3] = useState(false);
    const onClick_Big3 = () => {
        setClose3(!close3);
    }
    return (
        <div className='univershop'>
            {close3 ? 
                <div className={close3 ? 'big_img' : ''}>
                    <nav className='close_btn'>
                        <IoIosClose className='close' onClick={onClick_Big3}/>
                    </nav>
                    <nav className='big_imgzone'>
                        <img src={mainImg3} alt='' onClick={onClick_Big3}/>
                    </nav>
                </div>
            : null}
            <div className='content'>
                <div className='img_zone'>
                    <div className='img_box'>
                        <div className='main_box' onClick={onClick_Big3}>
                            <FaSearchPlus className='plus_icon'/>
                            <img src={mainImg3} alt=''/>
                        </div>
                        <ul className='sub_boxs'>
                            {images3.map((imageUrl3, index3) => (
                                <li key={imageUrl3} id={String(index3)} 
                                onClick={() => onClick_Img3(imageUrl3, index3)}>
                                    <img src={imageUrl3} alt='' 
                                    style={{filter: select3 === index3 ? 'brightness(0.7)' : 'none'}}/>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className='info_zone'>
                    <span className='font'>Written_Forest</span>
                    <nav className='info1'>
                        <p className='color2'>개인 프로젝트</p>
                    </nav>
                    <nav className='info2'>
                        <p>
                            React + Redux + Node.js를 이용해 만든 블로그 사이트입니다.
                            다크모드, 글 수정 / 삭제 기능과 댓글 기능을 구현했으며 나머지 기능들은
                            추후에 계속 업데이트 될 예정입니다.
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
                            <Link to='http://portfolio-client-rosy.vercel.app/' target='_blank'>
                                <RiExternalLinkLine className='link_icon'/>
                                <span>사이트 바로가기</span>
                            </Link>
                        </button>
                        <button className='to_git'>
                            <Link to='https://github.com/s-young01/portfolio-client' target='_blank'>
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

export default Writtenforest;