import useGlobalContext from "../customHooks/useGlobalContext";
import { movieCategories } from "../data";
import CategoryFilterButton from "./CategoryFilterButton";

const SideMenuCategoryFilterButtons = () => {
  const { selectedCategoryIDs, selectCategoryID } = useGlobalContext();

  return (
    <div className="side-menu-category-filter-btns">
      {movieCategories.map((item) => {
        return (
          <CategoryFilterButton
            key={item.id}
            name={item.name}
            selected={selectedCategoryIDs.includes(item.id)}
            onClick={() => {
              selectCategoryID({ id: item.id });
            }}
          />
        );
      })}
    </div>
  );
};

export default SideMenuCategoryFilterButtons;
