import { HeartFilled, StarFilled } from "@ant-design/icons";
import { imagesBaseURL } from "../constants";

const descriptionMaxLenght = 100;
const titleMaxLenght = 60;

const SideMenuMovieItem = ({ title, image, description, likes, rating }) => {
  return (
    <div className="side-menu-movie-item">
      <div className="img-container">
        <img src={`${imagesBaseURL}${image}`} alt={title} />
        <div className="flex justify-between w-100">
          <div className="likes text-shadow">
            <HeartFilled /> {likes}
          </div>
          <div className="rating text-shadow">
            <StarFilled />
            {rating}
          </div>
        </div>
      </div>
      <div className="details">
        <h5 className="title">
          {title.substring(0, titleMaxLenght)}
          {title.length > titleMaxLenght ? "..." : ""}
        </h5>
        <p className="description">
          {description.substring(0, descriptionMaxLenght)}
          {description.length > descriptionMaxLenght ? "..." : ""}
        </p>
      </div>
    </div>
  );
};

export default SideMenuMovieItem;
