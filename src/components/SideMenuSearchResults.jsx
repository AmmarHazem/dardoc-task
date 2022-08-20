import { useEffect, useState } from "react";
import useGlobalContext from "../customHooks/useGlobalContext";
import useSearchMovies from "../customHooks/useSearchMovies";
import Loading from "./Loading";
import SideMenuMovieItem from "./SideMenuMovieItem";

const SideMenuSearchResults = () => {
  const { searchText } = useGlobalContext();
  const [page, setPage] = useState(0);
  const [loading, response] = useSearchMovies({
    searchText: searchText?.trim() ?? "",
    page,
  });

  useEffect(() => {
    setPage(1);
  }, []);

  let content;
  if (loading) {
    content = <Loading size={70} />;
  } else if (!response) {
    content = <h4 className="text-white">Something went wrong</h4>;
  } else if (response.results.lenght === 0) {
    content = <h4 className="text-white">No Movies found</h4>;
  } else {
    content = (
      <>
        {response.results.map((item) => (
          <SideMenuMovieItem
            key={item.id}
            title={item.original_title}
            image={item.poster_path}
            description={item.overview}
            likes={0}
            rating={item.vote_average}
          />
        ))}
      </>
    );
  }

  return (
    <div className="side-menu-search-results flex flex-column">{content}</div>
  );
};

export default SideMenuSearchResults;
