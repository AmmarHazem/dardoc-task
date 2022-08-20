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
          <MovieCategoryListItem key={item.id} movie={item} />
        ))}
      </>
    );
  }

  return (
    <section className="home-movie-category-list">
      <h2 className="section-title seciton-x-padding">{category.name}</h2>
      <div className="movies-list seciton-x-padding no-scrollbar">
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
