import { useEffect, useState } from "react";
import { getMovieGenres } from "../api/genreAPI";
import useGlobalContext from "./useGlobalContext";

const useSetMovieGenres = () => {
  const [loading, setLoading] = useState(true);
  const { setMovieGenresMap } = useGlobalContext();

  useEffect(() => {
    (async () => {
      const genres = await getMovieGenres();
      setLoading(false);
      if (!genres) return;
      const genresMap = new Map();
      for (const genre of genres) {
        genresMap.set(genre.id, genre);
      }
      setMovieGenresMap(genresMap);
    })();
  }, [setMovieGenresMap]);

  return [loading];
};

export default useSetMovieGenres;
