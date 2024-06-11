
import "../styles/banner.css"


const Banner = ({classBanner, titleClass, title}) => {

  return (
    <div className="banner">
    <div className={classBanner}>
    <h2 className={titleClass}>{title}</h2>
    </div>
    </div>
  );
};

export default Banner;
