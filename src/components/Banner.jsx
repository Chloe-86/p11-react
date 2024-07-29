import "../styles/banner.css";

const Banner = ({ classBanner, titleClass, title }) => {
  return (
    <section className="banner">
      <div className={classBanner}>
        <h2 className={titleClass}>{title}</h2>
      </div>
    </section>
  );
};

export default Banner;
