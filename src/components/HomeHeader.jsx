import { Button, Drawer } from "antd";
import { MenuOutlined } from "@ant-design/icons";
import image2 from "../assets/images/2.jpeg";
import LeftSideMenu from "./LeftSideMenu";
import { useState } from "react";
import RightSideMenu from "./RightSideMenu";

const HomeHeader = () => {
  const [leftDrawerVisible, setLeftDrawerVisible] = useState(false);
  const [rightDrawerVisible, setRightDrawerVisible] = useState(false);

  const onLeftDrawerClose = () => {
    setLeftDrawerVisible(false);
  };

  const onRightDrawerClose = () => {
    setRightDrawerVisible(false);
  };

  return (
    <header className="home-header">
      <Button
        onClick={() => {
          setLeftDrawerVisible(true);
        }}
        type="text"
      >
        <MenuOutlined />
      </Button>
      <Drawer
        // closable={false}
        placement="left"
        visible={leftDrawerVisible}
        className="left-side-menu-drawer"
        onClose={onLeftDrawerClose}
      >
        <LeftSideMenu />
      </Drawer>
      <Button
        onClick={() => {
          setRightDrawerVisible(true);
        }}
        className="p-0"
        type="text"
      >
        <img className="user-circle-image" src={image2} alt="User Name" />
      </Button>
      <Drawer
        // closable={false}
        placement="right"
        visible={rightDrawerVisible}
        className="right-side-menu-drawer"
        onClose={onRightDrawerClose}
      >
        <RightSideMenu />
      </Drawer>
    </header>
  );
};

export default HomeHeader;
