
import "../styles/banner.css"


const Banner = ({classBanner, titleClass, title}) => {

  return (
    <div className="banner">
    <div className={classBanner}>
    <div className={titleClass}>{title}</div>
    </div>
    </div>
  );
};

export default Banner;
