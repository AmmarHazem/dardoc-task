import image1 from "../assets/images/1.jpeg";
import image2 from "../assets/images/2.jpeg";

const SideMenuPopularActors = () => {
  return (
    <div className="side-menu-popular-actors">
      <h4 className="text-white text-start">Popular Actors</h4>
      <SideMenuActorItem
        image={image1}
        name="House Of The Dragon"
        county="USA"
        numberOfFollowers="100"
      />
      <SideMenuActorItem
        image={image2}
        name="Everything Everywhere All At Once"
        county="USA"
        numberOfFollowers="200"
      />
    </div>
  );
};

const SideMenuActorItem = ({ image, name, county, numberOfFollowers }) => {
  return (
    <div className="side-menu-actor-item">
      <img className="user-circle-image" src={image} alt={name} />
      <div className="details flex flex-column">
        <div className="flex justify-between">
          <div className="name">
            {name.substring(0, 50)}
            {name.length > 50 ? "..." : ""}
          </div>
          <div className="followers">{numberOfFollowers}</div>
        </div>
        <div className="flex justify-between">
          <div className="country">{county}</div>
          <div className="followers-label">Followers</div>
        </div>
      </div>
    </div>
  );
};

export default SideMenuPopularActors;
