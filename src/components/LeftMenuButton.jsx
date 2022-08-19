const LeftMenuButton = ({ icon, text, active = false }) => {
  return (
    <li className={`right-menu-btn ${active ? "active" : ""}`}>
      <div>{icon}</div>
      <div>{text}</div>
    </li>
  );
};

export default LeftMenuButton;
