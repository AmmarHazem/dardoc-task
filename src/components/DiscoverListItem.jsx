import { StarFilled } from "@ant-design/icons";
import { imagesBaseURL } from "../constants";
import useGlobalContext from "../customHooks/useGlobalContext";

const DiscoverListItem = ({ image, title, rating, id, genresIDs }) => {
  const { movieGenresMap } = useGlobalContext();
  const genresNames = genresIDs
    .map((item) => movieGenresMap.get(item).name)
    .join(", ");

  return (
    <div id={id} className="discover-list-item">
      <img src={`${imagesBaseURL}${image}`} alt={title} />
      <div className="content">
        <h3 className="title">{title}</h3>
        <div className="flex justify-between">
          <p className="subtitle text-start">
            {/* {subtitle?.substring(0, 100)} {subtitle.length >= 100 ? "..." : ""} */}
            {genresNames}
          </p>
          <div className="flex rating">
            <StarFilled />
            <span className="rating-text">{rating}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DiscoverListItem;
