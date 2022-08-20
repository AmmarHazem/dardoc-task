import { useState, useEffect } from "react";
import { searchMovies } from "../api/searchAPI";

const useSearchMovies = ({ searchText, page = 1 }) => {
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState(null);

  useEffect(() => {
    if (!page || !searchText) return;
    (async () => {
      setLoading(true);
      // console.log("--- search text", searchText);
      const res = await searchMovies({ searchText, page });
      setLoading(false);
      if (page > 1) {
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
      } else {
        setResponse(res);
      }
    })();
  }, [page, searchText]);

  return [loading, response];
};

export default useSearchMovies;
