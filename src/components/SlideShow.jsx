

import arrowRight from "../assets/img/arrow-right.svg";
import arrowLeft from "../assets/img/arrow-left.svg";
import { useState } from 'react';
import '../styles/slideshow.css'

const SlideShow = ({item}) =>{

  const [currentIndex, setCurrentIndex] = useState(0);

  
  const handleNextClick = () => {
    setCurrentIndex((index) => (index - 1 + item.pictures.length) % item.pictures.length);
  };


  const handleBeforeClick = () => {
    setCurrentIndex((index) => (index + 1) % item.pictures.length);
  };

  return (
    <div className="ref">
      <img className="cover" src={item.pictures[currentIndex]} alt={item.title} /> 
      <div className="arrow-right" onClick={handleNextClick}> 
        <img src={arrowLeft} alt="fleche" />
      </div>
      <div className="arrow-left" onClick={handleBeforeClick}> 
        <img src={arrowRight} alt="fleche" />
      </div>
      <div className="index">{currentIndex+1}/{item.pictures.length}</div>
    </div>
  );
};

export default SlideShow;
