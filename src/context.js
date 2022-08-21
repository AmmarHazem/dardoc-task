import { createContext, useState } from "react";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [searchText, setSearchText] = useState("");
  const [selectedCategoryIDs, setSelectedCategoryIDs] = useState([]);
  const [movieGenresMap, setMovieGenresMap] = useState(null);

  const selectCategoryID = ({ id }) => {
    if (selectedCategoryIDs.includes(id)) {
      setSelectedCategoryIDs(selectedCategoryIDs.filter((item) => item !== id));
    } else {
      setSelectedCategoryIDs((prevState) => [...prevState, id]);
    }
  };

  return (
    <AppContext.Provider
      value={{
        searchText,
        setSearchText,
        selectedCategoryIDs,
        selectCategoryID,
        movieGenresMap,
        setMovieGenresMap,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
