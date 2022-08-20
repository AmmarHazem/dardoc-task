import { Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";

const Loading = ({ size = 24 }) => {
  return (
    <Spin
      indicator={
        <LoadingOutlined
          className="loading-spin"
          style={{ fontSize: size }}
          spin
        />
      }
    />
  );
};

export default Loading;
