
import List from "../components/List";
import Banner from "../components/Banner";


const Home = () => {
  return (
    <>
      <Banner classBanner={"cover"} titleClass={"description"} title={"Chez vous partout et ailleurs"} />
      <List />
    </>
  );
};

export default Home;
