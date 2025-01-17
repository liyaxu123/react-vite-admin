import PageContainer from "@/components/PageContainer";
import { Button } from "antd";

const Home = () => {
  return (
    <PageContainer normalClassName="xl:max-w-[1200px]">
      <div className="h-[800vh] bg-red-100 p-4 rounded-lg">
        Home Page
        <Button type="primary">点我</Button>
      </div>
    </PageContainer>
  );
};

export default Home;
