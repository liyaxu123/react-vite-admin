import React, { Suspense } from "react";
import { Layout } from "antd";
import { CircleLoading } from "../../components/loading";
import Nav from "./nav";
import Header from "./header";
import Main from "./main";

const DashboardLayout: React.FC = () => {
  return (
    <Suspense fallback={<CircleLoading />}>
      <Layout className="h-full">
        <Nav />
        <Layout className="bg-[var(--body-bg-color)] overflow-y-auto">
          <Header />
          <Main />
        </Layout>
      </Layout>
    </Suspense>
  );
};

export default DashboardLayout;
