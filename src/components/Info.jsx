import StarRating from '../components/StarRating';
import DropDown from "../components/DropDown";
import "../styles/template.css";
import '../styles/info.css'
import { Title } from "./Title";

const Info = ({item}) => {

  return (
    <>
      <div className="columns top">
        <div className="left-part">
          <h2 className="title red typo"><Title item={item} naming={item.title} /></h2>
          <p><Title item={item} naming={item.location} /></p>
          <ul>
            {item.tags.map((tag, index) => (
              <li className="bg-red-white tag center" key={index}>
                {tag}
              </li>
            ))}
          </ul>
        </div>
        <div className="right-part">
          <div className="columns">
            <h2 className="name center">{item.host.name}</h2>
            <div className="cercle-profil">
              <img src={item.host.picture} alt={item.title} />
            </div>
          </div>

          <StarRating rating={item.rating} />
        </div>
      </div>
      <div className="columns space">
        <div className="left-part">
          <DropDown
            title="Description"
            content={item.description}
            customClassName="title-bar"
          />
        </div>
        <div className="right-part">
          <DropDown
            title="Equipements"
            content={
              <ul className="equipements">
                {item.equipments.map((equipment, index) => (
                  <li key={index}>{equipment}</li>
                ))}
              </ul>
            }
            customClassName="title-bar"
          />
        </div>
      </div>
    </>
  );
};

export default Info;