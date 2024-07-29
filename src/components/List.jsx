import "../styles/list.css";
import "../styles/banner.css";
import { useJsonDataContext } from "../api/jsonDataContext";
import { Card } from "./Card";

const List = () => {
  const { jsonData } = useJsonDataContext();
  if (!jsonData) {
    return <div aria-live="polite">Loading...</div>;
  }

  return (
    <>
      <section>
        <h2 className="hidden-for-visual" aria-hidden="true">
          Liste
        </h2>
        <ul className="grid-container">
          {jsonData.map((item, index) => (
            <li className="grid-item" key={index}>
              <Card item={item} />
            </li>
          ))}
        </ul>
      </section>
    </>
  );
};

export default List;
