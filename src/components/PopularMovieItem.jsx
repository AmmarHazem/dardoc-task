import { HeartFilled, StarFilled } from "@ant-design/icons";

const PopularMovieItem = ({ title, image, description, likes, rating }) => {
  return (
    <div className="popular-movie-item">
      <div className="img-container">
        <img src={image} alt={title} />
        <div className="flex justify-between w-100">
          <div className="likes">
            <HeartFilled /> {likes}
          </div>
          <div className="rating">
            <StarFilled />
            {rating}
          </div>
        </div>
      </div>
      <div className="flex flex-column">
        <h5>{title}</h5>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default PopularMovieItem;
