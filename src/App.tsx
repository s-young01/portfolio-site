import React from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Tech from './components/Tech';
import Work from './components/Work';
import CustomScroll from './components/CustomScroll';

function App() {
  // 이미지 배열
  const images = [
    './images/univershop_1.png',
    './images/univershop_2.png',
    './images/univershop_3.png',
    './images/univershop_4.png',
  ];

  const images2 = [
    './images/movie.zip_1.png',
    './images/movie.zip_2.png',
    './images/movie.zip_3.png',
    './images/movie.zip_4.png',
  ];

  const images3 = [
    './images/written_forest_1.png',
    './images/written_forest_2.png',
    './images/written_forest_3.png',
  ];

  return (
    <div className="App">
      <CustomScroll/>
      <Header/>
      <Main/>
      <Tech/>
      <Work images={images}
      images2={images2}
      images3={images3}/>   
    </div>
  );
}

export default App;
