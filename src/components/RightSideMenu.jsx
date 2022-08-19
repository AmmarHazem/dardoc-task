import SideMenuCategoryFilterButtons from "./SideMenuCategoryFilterButtons";
import SideMenuPopularMovies from "./SideMenuPopularMovies";
import SideMenuSearchInput from "./SideMenuSearchInput";
import UserBar from "./UserBar";

const RightSideMenu = () => {
  return (
    <div className="right-side-menu seciton-x-padding">
      <UserBar />
      <SideMenuSearchInput />
      <SideMenuCategoryFilterButtons />
      <SideMenuPopularMovies />
    </div>
  );
};

export default RightSideMenu;
