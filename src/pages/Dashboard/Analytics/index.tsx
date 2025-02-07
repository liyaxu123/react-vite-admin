import PageContainer from "@/components/PageContainer";
import { Col, Row } from "antd";
import {
  DataCard,
  CurrentVisits,
  WebsiteVisits,
  ConversionRates,
  CurrentSubject,
  News,
  OrderTimeline,
  TrafficBySite,
  Tasks,
} from "./components";

const index = () => {
  return (
    <PageContainer normalClassName="2xl:max-w-[1536px]">
      <h4 className="mb-10 text-2xl font-bold">Hi, Welcome back 👋</h4>
      <Row gutter={24}>
        <Col span={6}>
          <DataCard
            increase
            title="Weekly sales"
            count="714k"
            percent={2.6}
            icon="/src/assets/images/glass/ic-glass-bag.svg"
            bgColor="linear-gradient(135deg, rgba(200, 250, 214, 0.48), rgba(91, 228, 155, 0.48))"
            textColor="rgb(0,75,80)"
            lineColor="#007867"
            lineData={[
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
        <Col span={6}>
          <DataCard
            increase={false}
            title="New users"
            count="1.35m"
            percent={0.1}
            icon="/src/assets/images/glass/ic-glass-users.svg"
            bgColor="linear-gradient(135deg, rgba(239, 214, 255, 0.48), rgba(198, 132, 255, 0.48))"
            textColor="rgb(39, 9, 122)"
            lineColor="#5119b7"
            lineData={[
              { label: "Jan", value: 23 },
              { label: "Feb", value: 19 },
              { label: "Mar", value: 16 },
              { label: "Apr", value: 28 },
              { label: "May", value: 16 },
              { label: "Jun", value: 14 },
              { label: "Jul", value: 8 },
              { label: "Aug", value: 25 },
            ]}
          />
        </Col>
        <Col span={6}>
          <DataCard
            increase
            title="Purchase orders"
            count="1.72m"
            percent={2.8}
            icon="/src/assets/images/glass/ic-glass-buy.svg"
            bgColor="linear-gradient(135deg, rgba(255, 245, 204, 0.48), rgba(255, 214, 102, 0.48))"
            textColor="rgb(122, 65, 0)"
            lineColor="#b76e00"
            lineData={[
              { label: "Jan", value: 40 },
              { label: "Feb", value: 70 },
              { label: "Mar", value: 40 },
              { label: "Apr", value: 30 },
              { label: "May", value: 35 },
              { label: "Jun", value: 46 },
              { label: "Jul", value: 23 },
              { label: "Aug", value: 47 },
            ]}
          />
        </Col>
        <Col span={6}>
          <DataCard
            increase
            title="Messages"
            count="234"
            percent={3.6}
            icon="/src/assets/images/glass/ic-glass-message.svg"
            bgColor="linear-gradient(135deg, rgba(255, 233, 213, 0.48), rgba(255, 172, 130, 0.48))"
            textColor="rgb(122, 9, 22)"
            lineColor="#b71d18"
            lineData={[
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
      </Row>

      <Row gutter={24} className="mt-6">
        <Col span={8}>
          <CurrentVisits />
        </Col>
        <Col span={16}>
          <WebsiteVisits />
        </Col>
      </Row>

      <Row gutter={24} className="mt-6">
        <Col span={16}>
          <ConversionRates />
        </Col>
        <Col span={8}>
          <CurrentSubject />
        </Col>
      </Row>

      <Row gutter={24} className="mt-6">
        <Col span={16}>
          <News />
        </Col>
        <Col span={8}>
          <OrderTimeline />
        </Col>
      </Row>

      <Row gutter={24} className="mt-6">
        <Col span={8}>
          <TrafficBySite />
        </Col>
        <Col span={16}>
          <Tasks />
        </Col>
      </Row>
    </PageContainer>
  );
};

export default index;
