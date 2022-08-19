import {
  HomeOutlined,
  BookOutlined,
  WalletOutlined,
  ClockCircleOutlined,
  FileOutlined,
  PlayCircleOutlined,
  SaveOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import LeftMenuButton from "./LeftMenuButton";

const LeftSideMenu = () => {
  return (
    <aside className="left-side-menu">
      <h1 className="logo">
        <span className="text-primary">Mov</span>
        <span className="text-white">.time</span>
      </h1>
      <ul className="menu-items">
        <li className="menu-section-title">MENU</li>
        <LeftMenuButton text="Home" icon={<HomeOutlined />} active />
        <LeftMenuButton text="Favorite" icon={<BookOutlined />} />
        <LeftMenuButton text="Purchase" icon={<WalletOutlined />} />
        <LeftMenuButton text="Reminder" icon={<ClockCircleOutlined />} />
        <li className="menu-section-title">OTHER</li>
        <LeftMenuButton text="Playlist" icon={<FileOutlined />} />
        <LeftMenuButton text="Live" icon={<PlayCircleOutlined />} />
        <LeftMenuButton text="Bookmarks" icon={<SaveOutlined />} />
        <LeftMenuButton text="Settings" icon={<SettingOutlined />} />
      </ul>
    </aside>
  );
};

export default LeftSideMenu;
