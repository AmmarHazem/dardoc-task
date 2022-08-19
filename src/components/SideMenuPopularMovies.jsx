import PopularMovieItem from "./PopularMovieItem";
import image1 from "../assets/images/1.jpeg";
import image2 from "../assets/images/2.jpeg";

const SideMenuPopularMovies = () => {
  return (
    <div className="side-menu-popular-movies">
      <h4 className="text-white text-start">Popular Movies</h4>
      <PopularMovieItem
        title="House Of The Dragon"
        image={image1}
        description="House of the dragon is an amazing fantasy serise"
        likes="100"
        rating="4.4"
      />
      <PopularMovieItem
        title="House Of The Dragon"
        image={image2}
        description="House of the dragon is an amazing fantasy serise"
        likes="100"
        rating="4.4"
      />
    </div>
  );
};

export default SideMenuPopularMovies;
