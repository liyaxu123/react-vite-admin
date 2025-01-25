import PageContainer from "@/components/PageContainer";
import { Col, Row, theme } from "antd";
import {
  BannerCard,
  CarouselCard,
  TotalCard,
  SaleByGender,
  YearlySales,
} from "./components";

const index = () => {
  const { token } = theme.useToken();

  return (
    <PageContainer normalClassName="2xl:max-w-[1536px]">
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
            title="已售产品"
            count={765}
            increase
            percent="2.6%"
            chartColor={token.colorPrimary}
            chartData={[
              { label: "Jan", value: 3 },
              { label: "Feb", value: 4 },
              { label: "Mar", value: 6 },
              { label: "Apr", value: 5 },
              { label: "May", value: 4.9 },
              { label: "Jun", value: 11 },
              { label: "Jul", value: 7 },
              { label: "Aug", value: 9 },
            ]}
          />
        </Col>
        <Col span={8}>
          <TotalCard
            title="总余额"
            count={18765}
            percent="0.1%"
            increase={false}
            chartColor="#ffac02"
            chartData={[
              { label: "Jan", value: 11 },
              { label: "Feb", value: 4 },
              { label: "Mar", value: 3.5 },
              { label: "Apr", value: 8 },
              { label: "May", value: 4 },
              { label: "Jun", value: 11 },
              { label: "Jul", value: 7 },
              { label: "Aug", value: 9 },
            ]}
          />
        </Col>
        <Col span={8}>
          <TotalCard
            title="销售利润"
            count={4876}
            increase
            percent="0.6%"
            chartColor="#ff5f38"
            chartData={[
              { label: "Jan", value: 70 },
              { label: "Feb", value: 65 },
              { label: "Mar", value: 60 },
              { label: "Apr", value: 58 },
              { label: "May", value: 7 },
              { label: "Jun", value: 25 },
              { label: "Jul", value: 36 },
              { label: "Aug", value: 30 },
            ]}
          />
        </Col>
      </Row>

      <Row gutter={24} className="mt-6">
        <Col span={8}>
          <SaleByGender />
        </Col>
        <Col span={16}>
          <YearlySales />
        </Col>
      </Row>
    </PageContainer>
  );
};

export default index;
