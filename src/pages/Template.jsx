import jsonData from "../data/data.json";
import { useParams } from "react-router-dom";
import template from "../styles/template.css";

const DataComponentDisplay = () => {
  const { id } = useParams(); // Récupérer l'ID à partir des paramètres de l'URL

  // Trouver l'élément correspondant dans le tableau de données en fonction de l'ID
  const item = jsonData.find((item) => item.id === id);

  if (!item) {
    return <div>L'élément avec l'ID {id} n'existe pas.</div>;
  }

  return (
    <div className="template">
      <img src={item.cover} alt={item.title} />
      <div className="columns">
        <h2>{item.title}</h2>
        <p>{item.location}</p>
        <ul>
          {item.tags.map((tag, index) => (
            <li key={index}>{tag}</li>
          ))}
        </ul>
      </div>
      <div>
      <h2>{item.author}</h2>
      </div>
      <p>{item.description}</p>
      <ul>
        {item.equipments.map((equipments, index) => (
          <li key={index}>{equipments}</li>
        ))}
      </ul>
    </div>
  );
};

export default DataComponentDisplay;
