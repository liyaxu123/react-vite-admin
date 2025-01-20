import PageContainer from "@/components/PageContainer";
import { Row, Col } from "antd";
import BannerCard from "./components/BannerCard";
import CarouselCard from "./components/CarouselCard";
import TotalCard from "./components/TotalCard";

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

        <Row gutter={24} className="mt-6">
          <Col span={8}>
            <TotalCard
              title="Total active users"
              count={18765}
              increase
              percent="2.6%"
              chartData={[10, 20, 30, 40, 50, 60, 70]}
            />
          </Col>
          <Col span={8}>
            <TotalCard
              title="Total installed"
              count={4876}
              increase
              percent="0.2%"
              chartData={[10, 20, 30, 40, 50, 60, 70]}
            />
          </Col>
          <Col span={8}>
            <TotalCard
              title="Total downloads"
              count={678}
              increase={false}
              percent="0.1%"
              chartData={[10, 20, 30, 40, 50, 60, 70]}
            />
          </Col>
        </Row>
      </div>
    </PageContainer>
  );
};

export default Home;
