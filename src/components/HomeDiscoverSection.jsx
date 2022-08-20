import { useEffect, useState } from "react";
import DiscoverListItem from "./DiscoverListItem";
import useGetPopularMovies from "../customHooks/useGetPopularMovies";
import Loading from "./Loading";

const HomeDiscoverSection = () => {
  const [page, setPage] = useState(0);
  const [loading, popularMovies] = useGetPopularMovies({ page });

  useEffect(() => {
    setPage(1);
  }, []);

  console.log({ popularMovies });

  let content;
  if (loading) {
    content = <Loading size={70} />;
  } else if (!popularMovies) {
    content = <h4 className="text-white">Something went wrong</h4>;
  } else if (popularMovies.results.lenght === 0) {
    content = <h4 className="text-white">No Movies found</h4>;
  } else {
    content = (
      <div className="discover-list no-scrollbar seciton-x-padding">
        {popularMovies.results.map((item) => (
          <DiscoverListItem
            key={item.id}
            image={item.poster_path}
            title={item.original_title}
            subtitle={item.overview}
            rating={item.vote_average}
          />
        ))}
      </div>
    );
  }

  return (
    <section className="home-discover-section">
      <h2 className="section-title seciton-x-padding">Discovers</h2>
      {content}
    </section>
  );
};

export default HomeDiscoverSection;
