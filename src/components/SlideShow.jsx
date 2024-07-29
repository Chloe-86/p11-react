import arrowRight from "../assets/img/arrow-right.svg";
import arrowLeft from "../assets/img/arrow-left.svg";
import { useState } from "react";
import "../styles/slideshow.css";

// + item.pictures.length : On ajoute item.pictures.length (le nombre total d'images dans item.pictures)
//  pour éviter les valeurs négatives lorsque index est 0. Cela garantit que l'index résultant reste positif ou nul.
// % item.pictures.length : L'opérateur modulo (%) est utilisé pour faire en sorte que l'index reste dans les limites valides 
// (entre 0 et item.pictures.length - 1). Cela crée un effet de "bouclage" où, si l'index devient négatif, il revient à la fin de la liste des images.

const SlideShow = ({ item }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleBeforeClick = () => {
    setCurrentIndex((index) => (index - 1 + item.pictures.length) % item.pictures.length);
  };

  const  handleNextClick = () => {
    setCurrentIndex((index) => (index + 1) % item.pictures.length);
  };

  if (item.pictures.length === 0) {
    return null;
  }

  if (item.pictures.length === 1) {
    return (
      <div className="ref">
        <img className="cover" src={item.pictures[currentIndex]} alt={item.title} />
      </div>
    );
  }

  return (
    <div className="ref">
      <img className="cover" src={item.pictures[currentIndex]} alt={item.title} />
      <div className="arrow-right" onClick={handleBeforeClick}>
        <img src={arrowRight} alt="fleche" />
      </div>
      <div className="arrow-left" onClick={handleNextClick}>
        <img src={arrowLeft} alt="fleche" />
      </div>
      <div className="index">
        {currentIndex + 1}/{item.pictures.length}
      </div>
    </div>
  );
};

export default SlideShow;
