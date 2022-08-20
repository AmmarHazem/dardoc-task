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

  const onListScroll = (e) => {
    if (page >= popularMovies.total_pages) return;
    if (loading) return;
    const viewWidth = e.target.offsetWidth + 100;
    if (e.target.scrollLeft >= e.target.scrollWidth - viewWidth) {
      setPage((prevState) => prevState + 1);
    }
  };

  let content;
  if (loading && !popularMovies) {
    content = (
      <div className="flex justify-center w-100">
        <Loading size={70} />
      </div>
    );
  } else if (!popularMovies) {
    content = <h4 className="text-white">Something went wrong</h4>;
  } else if (popularMovies.results.lenght === 0) {
    content = <h4 className="text-white">No Movies found</h4>;
  } else {
    content = (
      <>
        {popularMovies.results.map((item, index) => {
          const component = (
            <DiscoverListItem
              key={item.id}
              image={item.poster_path}
              title={item.original_title}
              subtitle={item.overview}
              rating={item.vote_average}
            />
          );
          if (loading && index === popularMovies.results.length - 1) {
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
    <section className="home-discover-section">
      <h2 className="section-title seciton-x-padding">Discovers</h2>
      <div
        onScroll={onListScroll}
        className="discover-list no-scrollbar seciton-x-padding"
      >
        {content}
      </div>
    </section>
  );
};

export default HomeDiscoverSection;
