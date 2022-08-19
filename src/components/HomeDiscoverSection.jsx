import { Col, Row } from "antd";
import DiscoverListItem from "./DiscoverListItem";
import image1 from "../assets/images/1.jpeg";
import image2 from "../assets/images/2.jpeg";

const HomeDiscoverSection = () => {
  return (
    <section className="home-discover-section seciton-x-padding">
      <h2 className="section-title">Discovers</h2>
      <Row gutter={16}>
        <Col md={12} lg={14}>
          <DiscoverListItem
            image={image1}
            title="House Of The Dragon"
            subtitle="Fantasy, Action, Adventure"
            rating="4.4"
          />
        </Col>
        <Col md={12} lg={10}>
          <DiscoverListItem
            image={image2}
            title="Everything Everywhere All At Once"
            subtitle="Fantasy, Action, Adventure"
            rating="4.4"
          />
        </Col>
      </Row>
    </section>
  );
};

export default HomeDiscoverSection;
