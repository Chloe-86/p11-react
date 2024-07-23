
import Info from "../components/Info.jsx";
import { useParams, Navigate } from "react-router-dom";
import SlideShow from "../components/SlideShow.jsx"
import { useJsonDataContext } from "../api/jsonDataContext.jsx";

const PageDetail = () => {
    // Récupérer l'ID à partir des paramètres de l'URL
  const { id } = useParams();
  const { jsonData } = useJsonDataContext();

  // Si les données ne sont pas encore disponibles, affichez un message de chargement
  if (!jsonData) {
    return <div aria-live="polite">Loading...</div>;
  }
    // Trouver l'élément correspondant dans le tableau de données en fonction de l'ID
  const page = jsonData.find(page => page.id === id);

  if (!page) {
    return <Navigate to="*" />;
  }
  return (
    <div className="template">
      <SlideShow item={page} />
      <Info item={page} />
    </div>
  );
};

export default PageDetail;
