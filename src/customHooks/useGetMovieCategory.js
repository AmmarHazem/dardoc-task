import { useEffect, useState } from "react";
import { getMovieCategory } from "../api/moviesAPI";

const useGetMovieCategory = ({ endpoint, page = 1 }) => {
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState(null);

  useEffect(() => {
    if (!page) return;
    (async () => {
      setLoading(true);
      const res = await getMovieCategory({ endpoint, page });
      setLoading(false);
      setResponse((prevState) => {
        const prevResults = prevState?.results ?? [];
        const newResults = [...prevResults, ...res.results];
        return {
          page: res.page,
          results: newResults,
          total_pages: res.total_pages,
          total_results: res.total_results,
        };
      });
      // setResponse(res);
    })();
  }, [page, endpoint]);

  return [loading, response];
};

export default useGetMovieCategory;
