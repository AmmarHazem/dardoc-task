import CategoryFilterButton from "./CategoryFilterButton";

const SideMenuCategoryFilterButtons = () => {
  return (
    <div className="side-menu-category-filter-btns">
      <CategoryFilterButton name="Hollywood" selected />
      <CategoryFilterButton name="Desney" />
      <CategoryFilterButton name="Pixar" />
      <CategoryFilterButton name="Viu" />
      <CategoryFilterButton name="Hollywood" />
      <CategoryFilterButton name="Desney" />
      <CategoryFilterButton name="Pixar" />
      <CategoryFilterButton name="Viu" />
    </div>
  );
};

export default SideMenuCategoryFilterButtons;
