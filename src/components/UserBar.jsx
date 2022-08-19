import { Button } from "antd";
import {
  DownOutlined,
  BellOutlined,
  EnvironmentOutlined,
} from "@ant-design/icons";
import image2 from "../assets/images/2.jpeg";

const UserBar = () => {
  return (
    <div className="user-bar">
      <div className="leading flex align-center">
        <img className="user-circle-image" src={image2} alt="User Name" />
        <Button className="user-name-drop-down-btn" type="text">
          <span>User Name</span>
          <DownOutlined />
        </Button>
      </div>
      <div className="trailing flex align-center">
        <Button type="text">
          <EnvironmentOutlined />
        </Button>
        <Button className="notifications-btn" type="text">
          <BellOutlined />
          <div className="unseen-notifications"></div>
        </Button>
      </div>
    </div>
  );
};

export default UserBar;
