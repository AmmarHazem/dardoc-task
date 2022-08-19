import image1 from "../assets/images/1.jpeg";
import image2 from "../assets/images/2.jpeg";

const HomeMovieCategoryList = ({ title }) => {
  return (
    <section className="home-movie-category-list">
      <h2 className="section-title seciton-x-padding">{title}</h2>
      <div className="movies-list seciton-x-padding no-scrollbar">
        <MovieCategoryListItem image={image1} title="House Of The Dragon" />
        <MovieCategoryListItem
          image={image2}
          title="Everything Everywhere All At Once"
        />
        <MovieCategoryListItem image={image1} title="House Of The Dragon" />
        <MovieCategoryListItem
          image={image2}
          title="Everything Everywhere All At Once"
        />
        <MovieCategoryListItem image={image1} title="House Of The Dragon" />
        <MovieCategoryListItem
          image={image2}
          title="Everything Everywhere All At Once"
        />
        <MovieCategoryListItem image={image1} title="House Of The Dragon" />
        <MovieCategoryListItem
          image={image2}
          title="Everything Everywhere All At Once"
        />
        <MovieCategoryListItem image={image1} title="House Of The Dragon" />
        <MovieCategoryListItem
          image={image2}
          title="Everything Everywhere All At Once"
        />
        <MovieCategoryListItem image={image1} title="House Of The Dragon" />
        <MovieCategoryListItem
          image={image2}
          title="Everything Everywhere All At Once"
        />
      </div>
    </section>
  );
};

const MovieCategoryListItem = ({ image, title }) => {
  return (
    <div className="movie-category-list-item">
      <img src={image} alt={title} />
    </div>
  );
};

export default HomeMovieCategoryList;
