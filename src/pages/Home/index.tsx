import PageContainer from "@/components/PageContainer";
import { Row, Col, theme } from "antd";
import BannerCard from "./components/BannerCard";
import CarouselCard from "./components/CarouselCard";
import TotalCard from "./components/TotalCard";
import CurrentDownloadCard from "./components/CurrentDownloadCard";
import AreaInstalledCard from "./components/AreaInstalledCard";
import NewInvoice from "./components/NewInvoice";
import RelatedApplications from "./components/RelatedApplications";
import TopAuthors from "./components/TopAuthors";
import TopInstalledCountries from "./components/TopInstalledCountries";
import Conversion from "./components/Conversion";
import Applications from "./components/Applications";

const Home = () => {
  const { token } = theme.useToken();

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
              title="活跃用户总数"
              count={18765}
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
              title="总安装量"
              count={4876}
              increase
              percent="0.2%"
              chartColor="rgb(0, 184, 217)"
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
              title="总下载量"
              count={678}
              increase={false}
              percent="0.1%"
              chartColor="rgb(255, 86, 48)"
              chartData={[
                { label: "Jan", value: 3 },
                { label: "Feb", value: 6 },
                { label: "Mar", value: 11 },
                { label: "Apr", value: 5 },
                { label: "May", value: 7 },
                { label: "Jun", value: 11 },
                { label: "Jul", value: 2 },
                { label: "Aug", value: 9 },
              ]}
            />
          </Col>
        </Row>

        <Row gutter={24} className="mt-6">
          <Col span={8}>
            <CurrentDownloadCard />
          </Col>
          <Col span={16}>
            <AreaInstalledCard />
          </Col>
        </Row>

        <Row gutter={24} className="mt-6">
          <Col span={16}>
            <NewInvoice />
          </Col>
          <Col span={8}>
            <RelatedApplications />
          </Col>
        </Row>

        <Row gutter={24} className="mt-6">
          <Col span={8}>
            <TopInstalledCountries />
          </Col>
          <Col span={8}>
            <TopAuthors />
          </Col>
          <Col span={8}>
            <div className="flex flex-col gap-6">
              <Conversion />
              <Applications />
            </div>
          </Col>
        </Row>
      </div>
    </PageContainer>
  );
};

export default Home;
