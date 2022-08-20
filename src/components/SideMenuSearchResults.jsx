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

  const onListScroll = (e) => {
    if (page >= response.total_pages) return;
    if (loading) return;
    const viewWidth = e.target.offsetWidth + 100;
    if (e.target.scrollLeft >= e.target.scrollWidth - viewWidth) {
      setPage((prevState) => prevState + 1);
    }
  };

  let content;
  if (loading && !response) {
    content = (
      <div className="flex justify-center">
        <Loading size={70} />
      </div>
    );
  } else if (!response) {
    content = <h4 className="text-white">Something went wrong</h4>;
  } else if (response.results.length === 0) {
    content = <h4 className="text-white">No Movies found</h4>;
  } else {
    content = (
      <>
        {response.results.map((item, index) => {
          const component = (
            <SideMenuMovieItem
              key={item.id}
              title={item.original_title}
              image={item.poster_path}
              description={item.overview}
              likes={0}
              rating={item.vote_average}
            />
          );
          if (loading && index === response.results.length - 1) {
            return (
              <div
                key={item.id}
                className="flex flex-column align-center justify-center"
              >
                {component}
                <div className="pt-3">
                  <Loading />
                </div>
              </div>
            );
          }
          return component;
        })}
      </>
    );
  }

  return (
    <div
      onScroll={onListScroll}
      className="side-menu-search-results flex flex-column"
    >
      {content}
    </div>
  );
};

export default SideMenuSearchResults;
