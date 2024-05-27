import React, { useState } from "react";
import about from "../styles/about.css";
import arrow from "../assets/img/arrow.svg";


const About = () => {
    const [visibleDropdowns, setVisibleDropdowns] = useState([]);

    const toggleVisibilite = (id) => {

      if (visibleDropdowns.includes(id)) {
        setVisibleDropdowns(visibleDropdowns.filter(item => item !== id));
      } else {
        setVisibleDropdowns([...visibleDropdowns, id]);
      }
    };
  return (
  
<div className="wrapper-dropdown">
<div className="dropdown">
  <div className="bar" onClick={() => toggleVisibilite("fiabilite")}>
    <h2 className="title">Fiabilité</h2>
    <img src={arrow} alt="flèche" className={visibleDropdowns.includes("fiabilite") ? "arrow" : "arrow-active"}/>
  </div>
  {visibleDropdowns.includes("fiabilite") && (
    <p className="description">
      Les annonces postées sur Kasa garantissent une fiabilité totale. Les
      photos sont conformes aux logements, et toutes les informations sont
      régulièrement vérifiées par nos équipes.
    </p>
  )}
</div>
<div className="dropdown">
  <div className="bar" onClick={() => toggleVisibilite("respect")}>
    <h2 className="title">Respect</h2>
    <img src={arrow} alt="flèche"  className={visibleDropdowns.includes("respect") ? "arrow" : "arrow-active"} />
  </div>
  {visibleDropdowns.includes("respect") && (
    <p className="description">
      La bienveillance fait partie des valeurs fondatrices de Kasa. Tout
      comportement discriminatoire ou de perturbation du voisinage
      entraînera une exclusion de notre plateforme.
    </p>
  )}
</div>
<div className="dropdown">
  <div className="bar" onClick={() => toggleVisibilite("Service")}>
    <h2 className="title">Service</h2>
    <img src={arrow} alt="flèche"  className={visibleDropdowns.includes("Service") ? "arrow" : "arrow-active"} />
  </div>
  {visibleDropdowns.includes("Service") && (
    <p className="description">
      La bienveillance fait partie des valeurs fondatrices de Kasa. Tout
      comportement discriminatoire ou de perturbation du voisinage
      entraînera une exclusion de notre plateforme.
    </p>
  )}
</div>
<div className="dropdown">
  <div className="bar" onClick={() => toggleVisibilite("Sécurité")}>
    <h2 className="title">Sécurité</h2>
    <img src={arrow} alt="flèche"  className={visibleDropdowns.includes("Sécurité") ? "arrow" : "arrow-active"} />
  </div>
  {visibleDropdowns.includes("Sécurité") && (
    <p className="description">
      La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que
      pour les voyageurs, chaque logement correspond aux critères de
      sécurité établis par nos services. En laissant une note aussi bien à
      l'hôte qu'au locataire, cela permet à nos équipes de vérifier que
      les standards sont bien respectés. Nous organisons également des
      ateliers sur la sécurité domestique pour nos hôtes.
    </p>
  )}
</div>
</div>
  );
};

export default About;
