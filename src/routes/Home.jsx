import HomeMainContent from "../components/HomeMainContent";
import RightSideMenu from "../components/RightSideMenu";
import LeftSideMenu from "../components/LeftSideMenu";

const Home = () => {
  return (
    <div className="home">
      <LeftSideMenu />
      <HomeMainContent />
      <RightSideMenu />
    </div>
  );
};

export default Home;
