import HomeDiscoverSection from "./HomeDiscoverSection";
import HomeMovieCategoryList from "./HomeMovieCategoryList";
import { movieCategories } from "../data";
import useGlobalContext from "../customHooks/useGlobalContext";

const HomeMainContent = () => {
  const { selectedCategoryIDs } = useGlobalContext();

  return (
    <main className="home-main-content no-scrollbar">
      <HomeDiscoverSection />
      {movieCategories
        .filter((item) => {
          if (selectedCategoryIDs.length === 0) {
            return true;
          }
          return selectedCategoryIDs.includes(item.id);
        })
        .map((item) => {
          return <HomeMovieCategoryList key={item.id} category={item} />;
        })}
    </main>
  );
};

export default HomeMainContent;
