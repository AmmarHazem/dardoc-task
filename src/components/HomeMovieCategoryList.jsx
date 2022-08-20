import { useState, useEffect } from "react";
import useGetMovieCategory from "../customHooks/useGetMovieCategory";
import Loading from "./Loading";
import { imagesBaseURL } from "../constants";

const HomeMovieCategoryList = ({ category }) => {
  const [page, setPage] = useState(0);
  const [loading, response] = useGetMovieCategory({
    endpoint: category.endpoint,
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
  } else if (response.results.lenght === 0) {
    content = <h4 className="text-white">No Movies found</h4>;
  } else {
    content = (
      <>
        {response.results.map((item, index) => {
          const component = (
            <MovieCategoryListItem key={item.id} movie={item} />
          );
          if (loading && index === response.results.length - 1) {
            return (
              <div key={item.id} className="flex align-center">
                {component}
                <div className="px-3">
                  <Loading size={40} />
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
    <section className="home-movie-category-list">
      <h2 className="section-title seciton-x-padding">{category.name}</h2>
      <div
        onScroll={onListScroll}
        className="movies-list seciton-x-padding no-scrollbar"
      >
        {content}
      </div>
    </section>
  );
};

const MovieCategoryListItem = ({ movie }) => {
  return (
    <div className="movie-category-list-item">
      <img
        src={`${imagesBaseURL}${movie.poster_path}`}
        alt={movie.original_title}
      />
    </div>
  );
};

export default HomeMovieCategoryList;
