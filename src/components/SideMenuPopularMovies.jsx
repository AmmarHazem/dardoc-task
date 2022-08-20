import SideMenuMovieItem from "./SideMenuMovieItem";
import useGetPopularMovies from "../customHooks/useGetPopularMovies";

const SideMenuPopularMovies = () => {
  const [loading, response] = useGetPopularMovies({});

  return (
    <div className="side-menu-popular-movies">
      <h4 className="text-white text-start">Popular Movies</h4>
      {response &&
        response.results &&
        response.results.slice(0, 2).map((item) => {
          return (
            <SideMenuMovieItem
              key={item.id}
              title={item.original_title}
              image={item.poster_path}
              description={item.overview}
              likes="100"
              rating={item.vote_average}
            />
          );
        })}
    </div>
  );
};

export default SideMenuPopularMovies;
