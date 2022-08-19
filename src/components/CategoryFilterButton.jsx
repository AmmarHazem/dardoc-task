import { Button } from "antd";

const CategoryFilterButton = ({ name, onClick, selected = false }) => {
  return (
    <Button
      className={`category-filter-btn ${selected ? "selected" : ""}`}
      onClick={onClick}
      type="text"
    >
      {name}
    </Button>
  );
};

export default CategoryFilterButton;
