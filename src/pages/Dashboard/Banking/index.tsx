import PageContainer from "@/components/PageContainer";
import { Row, Col } from "antd";
import { TotalBalance, CurrentBalance } from "./components";
import { WebsiteVisits } from "../Analytics/components";
import { BestSalesman } from "../Ecommerce/components";

const index = () => {
  return (
    <PageContainer normalClassName="2xl:max-w-[1536px]">
      <Row gutter={[24, 24]}>
        <Col xs={24} sm={24} md={24} lg={16}>
          <div className="flex flex-col gap-6">
            <TotalBalance />
            <WebsiteVisits />
            <BestSalesman />
          </div>
        </Col>
        <Col xs={24} sm={24} md={24} lg={8}>
          <div className="">
            <CurrentBalance />
          </div>
        </Col>
      </Row>
    </PageContainer>
  );
};

export default index;
