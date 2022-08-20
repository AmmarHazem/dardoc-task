import { StarFilled } from "@ant-design/icons";
import { imagesBaseURL } from "../constants";

const DiscoverListItem = ({ image, title, subtitle, rating }) => {
  return (
    <div className="discover-list-item">
      <img src={`${imagesBaseURL}${image}`} alt={title} />
      <div className="content">
        <h3 className="title">{title}</h3>
        <div className="flex justify-between">
          <p className="subtitle">{subtitle}</p>
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
