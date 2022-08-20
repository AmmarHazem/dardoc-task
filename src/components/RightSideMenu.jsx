import SideMenuCategoryFilterButtons from "./SideMenuCategoryFilterButtons";
import SideMenuPopularMovies from "./SideMenuPopularMovies";
import SideMenuSearchInput from "./SideMenuSearchInput";
import UserBar from "./UserBar";
import useGlobalContext from "../customHooks/useGlobalContext";
import SideMenuSearchResults from "./SideMenuSearchResults";
import SideMenuPopularActors from "./SideMenuPopularActors";

const RightSideMenu = () => {
  const { searchText } = useGlobalContext();
  const showSearchResults = searchText.trim().length > 1;

  return (
    <div className="right-side-menu seciton-x-padding">
      <UserBar />
      <SideMenuSearchInput />
      {!showSearchResults && <SideMenuCategoryFilterButtons />}
      {!showSearchResults && <SideMenuPopularMovies />}
      {!showSearchResults && <SideMenuPopularActors />}
      {showSearchResults && <SideMenuSearchResults />}
    </div>
  );
};

export default RightSideMenu;
