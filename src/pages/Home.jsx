
import List from "../components/List";
import Banner from "../components/Banner";


const Home = () => {
  
  return (
    <div>
      <Banner classBanner={"cover"} titleClass={"description"} title={"Chez vous partout et ailleurs"} />
      <List />
    </div>
  );
};

export default Home;
