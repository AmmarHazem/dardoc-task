import HomeDiscoverSection from "./HomeDiscoverSection";
import HomeMovieCategoryList from "./HomeMovieCategoryList";

const HomeMainContent = () => {
  return (
    <main className="home-main-content no-scrollbar">
      <HomeDiscoverSection />
      <HomeMovieCategoryList title="Popular Film" />
      <HomeMovieCategoryList title="Hollywood" />
      <HomeMovieCategoryList title="Popular Film" />
      <HomeMovieCategoryList title="Hollywood" />
    </main>
  );
};

export default HomeMainContent;
