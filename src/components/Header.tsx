import React, { useState } from 'react';
import './Header.scss';

const Header = () => {
    const [isopen, setOpen] = useState(false);
    const onClick_Menu = () => {
        setOpen(!isopen);
    }

    const Scroll_Intro = () => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
    }
    const Scroll_Skills = () => {
        window.scrollTo({
            top: 969,
            left: 0,
            behavior: 'smooth'
        });
    }
    const Scroll_Projects = () => {
        window.scrollTo({
            top: 1938,
            behavior: 'smooth'
        });
    }

    const Scroll_Intro2 = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
        setOpen(!isopen);
    }
    const Scroll_Skills2 = () => {
        window.scrollTo({
            top: 969,
            behavior: 'smooth'
        });
        setOpen(!isopen);
    }
    const Scroll_Projects2 = () => {
        window.scrollTo({
            top: 2538,
            behavior: 'smooth'
        });
        setOpen(!isopen);
    }
    return (
        <div className='header'>
            <ul className='navi'>
                <li onClick={Scroll_Intro}>
                    <span className='light'>〈</span>
                    <span className='color'>INTRO</span>
                    <span className='light'>／〉</span>
                </li>
                <li onClick={Scroll_Skills}>
                    <span className='light'>〈</span>
                    <span className='color'>SKILLS</span>
                    <span className='light'>／〉</span>
                </li>
                <li onClick={Scroll_Projects}>
                    <span className='light'>〈</span>
                    <span className='color'>PROJECTS</span>
                    <span className='light'>／〉</span>
                </li>
            </ul>
            <ul className={isopen ? 'change' : 'movile'} onClick={onClick_Menu}>
                <li className='bar bar1'></li>
                <li className='bar bar2'></li>
                <li className='bar bar3'></li>
            </ul>
            <div className={isopen ? 'menu' : 'close_menu'}>
                <nav>
                    <ul className='menu_list'>
                        <li onClick={Scroll_Intro2}>
                            <span className='light'>〈</span>
                            <span className='color'>INTRO</span>
                            <span className='light'>／〉</span>
                        </li>
                        <li onClick={Scroll_Skills2}>
                            <span className='light'>〈</span>
                            <span className='color'>SKILLS</span>
                            <span className='light'>／〉</span>
                        </li>
                        <li onClick={Scroll_Projects2}>
                            <span className='light'>〈</span>
                            <span className='color'>PROJECTS</span>
                            <span className='light'>／〉</span>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    );
};

export default Header;