import React from 'react';
import './Tech.scss';

const Tech = () => {
    return (
        <div className='tech'>
            <h1 className='h1'>SKILLS</h1>
            <div className='skills_box'>
                <div className='box'>
                    <div className='sub_title first'>
                        <span># FRONT-END</span>
                    </div>
                    <div className='icon_list height'>
                        <nav>
                            <ul>
                                <li>
                                    <img src='./images/html5.png' alt=''/>
                                    <div>
                                        <p>HTML5</p>
                                        <p>웹접근성, 표준성을 준수하며 시멘틱태그를
                                            이용해 마크업 할 수 있습니다.</p>
                                    </div>
                                </li>
                                <li>
                                    <img src='./images/css3.png' alt=''/>
                                    <div>
                                        <p>CSS3</p>
                                        <p>
                                            position, display를 적절히 사용하여
                                            반응형웹을 적용할 수 있습니다.
                                        </p>
                                    </div>
                                </li>
                                <li>
                                    <img src='./images/sass.png' alt=''/>
                                    <div>
                                        <p>SASS</p>
                                        <p>
                                            SCSS의 문법과 모듈화를 잘 활용하여 스타일 작업을
                                            원활히 할 수 있습니다.
                                        </p>
                                    </div>
                                </li>
                                <li>
                                    <img src='./images/js.png' alt=''/>
                                    <div>
                                        <p>Javascript</p>
                                        <p>
                                            Javascript의 배열, 메소드, DOM을 이해하며
                                            다양한 상황에 적용할 수 있습니다.
                                        </p>
                                    </div>
                                </li >
                                <li>
                                    <img src='./images/typescript.png' alt=''/>
                                    <div>
                                        <p>Typescript</p>
                                        <p>
                                            기본 타입 선언과 리액트와 함께
                                            사용할 수 있습니다.
                                        </p>
                                    </div>
                                </li>
                                <li className='visivle'>
                                    <img src='./images/reactjs.png' alt=''/>
                                    <div>
                                        <p>React</p>
                                        <p>
                                            React 구조와 여러가지 hook들을 잘 알고 있으며, 
                                            범용적이고 재사용가능한 컴포넌트 설계를 할 수 있습니다.
                                        </p>
                                    </div>
                                </li>
                                <li className='visivle'>
                                    <img src='./images/redux.png' alt=''/>
                                    <div>
                                        <p>Redux</p>
                                        <p>
                                            store를 사용해 각 컴포넌트들의 상태를
                                            전역으로 관리할 수 있습니다.
                                        </p>
                                    </div>
                                </li>
                            </ul>
                        </nav>
                        <nav className='not_visible'>
                            <ul>
                                <li>
                                    <img src='./images/reactjs.png' alt=''/>
                                    <div>
                                        <p>React</p>
                                        <p>
                                            React 구조와 여러가지 hook들을 잘 알고 있으며, 
                                            범용적이고 재사용가능한 컴포넌트 설계를 할 수 있습니다.
                                        </p>
                                    </div>
                                </li>
                                <li>
                                    <img src='./images/redux.png' alt=''/>
                                    <div>
                                        <p>Redux</p>
                                        <p>
                                            store를 사용해 각 컴포넌트들의 상태를
                                            전역으로 관리할 수 있습니다.
                                        </p>
                                    </div>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
                <div className='box'>
                    <div className='sub_title'>
                        <span># BACK-END</span>
                    </div>
                    <div className='icon_list'>
                        <nav>
                            <ul>
                                <li>
                                    <img src='./images/nodejs.png' alt=''/>
                                    <div>
                                        <p>Node.js</p>
                                        <p>
                                            Express 연동 후 데이터 관리와 
                                            cors라이브러리를 통해 cors이슈를 해결할 수 있습니다.
                                        </p>
                                    </div>  
                                </li>
                                <li>
                                    <img src='./images/php.png' alt=''/>
                                    <div>
                                        <p>PHP</p>
                                        <p>
                                            php를 이용해 동적 컨텐츠들을 제작할 수 있습니다.
                                        </p>
                                    </div>
                                </li>
                                <li>
                                    <img src='./images/mysql.png' alt=''/>
                                    <div>
                                        <p>MySQL</p>
                                        <p>
                                            데이터베이스의 구조를 이해하고 테이블 생성과
                                            데이터 삽입, 삭제, 업데이트 등을 할 수 있습니다.
                                        </p>
                                    </div>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
                <div className='box'>
                    <div className='sub_title'>
                        <span># DEPLOYMENT</span>
                    </div>
                    <div className='icon_list'>
                        <nav>
                            <ul>
                                <li>
                                    <img src='./images/aws.png' alt=''/>
                                    <div>
                                        <p>AWS</p>
                                        <p>
                                            설명입니다.설명입니다.설명입니다.설명입니다.
                                            설명입니다.설명입니다.
                                        </p>
                                    </div>
                                </li>
                                <li>
                                    <img src='./images/vercel.png' alt=''/>
                                    <div>
                                        <p>Vercel</p>
                                        <p>
                                            Vercel를 사용하여 웹 배포를 할 수 있습니다.
                                        </p>
                                    </div>
                                </li>
                                <li>
                                    <img src='./images/postman.png' alt=''/>
                                    <div>
                                        <p>Postman</p>
                                        <p>
                                            Postman을 이용해 서버에 GET, POST 요청을 
                                            해서 서버 디버깅을 할 수 있습니다.
                                        </p>
                                    </div>
                                </li>
                                <li>
                                    <img src='./images/git.png' alt=''/>
                                    <div>
                                        <p>Github</p>
                                        <p>
                                            commit, push, pull, clone 등 git 명령어를 
                                            사용하여 레파지토리에 접근할 수 있습니다.
                                        </p>
                                    </div>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Tech;