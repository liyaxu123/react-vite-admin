import PageContainer from "@/components/PageContainer";
import { Row, Col } from "antd";
import BannerCard from "./components/BannerCard";
import CarouselCard from "./components/CarouselCard";

const Home = () => {
  return (
    <PageContainer normalClassName="2xl:max-w-[1536px]">
      <div className="box-border">
        <Row gutter={24}>
          <Col span={16}>
            <BannerCard />
          </Col>
          <Col span={8}>
            <CarouselCard />
          </Col>
        </Row>
      </div>
    </PageContainer>
  );
};

export default Home;
