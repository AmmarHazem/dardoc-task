import { useEffect, useState } from "react";
import { getPopular } from "../api/moviesAPI";

const useGetPopularMovies = ({ page = 1 }) => {
  const [loading, setLoading] = useState(true);
  const [popularMovies, setPopularMovies] = useState(null);

  useEffect(() => {
    if (!page) return;
    (async () => {
      setLoading(true);
      const res = await getPopular({ page });
      setLoading(false);
      setPopularMovies((prevState) => {
        const prevResults = prevState?.results ?? [];
        const newResults = [...prevResults, ...res.results];
        return {
          page: res.page,
          results: newResults,
          total_pages: res.total_pages,
          total_results: res.total_results,
        };
      });
    })();
  }, [page]);

  return [loading, popularMovies];
};

export default useGetPopularMovies;
