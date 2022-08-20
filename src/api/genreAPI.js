import axios from "../axios";

export const getMovieGenre = async () => {
  try {
    const res = await axios.get("/genre/movie/list");
    return res.data.genres;
  } catch (e) {
    console.log("--- getMovieGenre error");
    console.log(e);
    return null;
  }
};
