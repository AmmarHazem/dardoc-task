import { Input } from "antd";
import useGlobalContext from "../customHooks/useGlobalContext";

const SideMenuSearchInput = () => {
  const { searchText, setSearchText } = useGlobalContext();

  return (
    <Input.Search
      value={searchText}
      allowClear
      className="side-menu-search-input"
      onChange={(e) => setSearchText(e.target.value ?? "")}
      onSearch={(value) => {
        setSearchText(value ?? "");
      }}
    />
  );
};

export default SideMenuSearchInput;
