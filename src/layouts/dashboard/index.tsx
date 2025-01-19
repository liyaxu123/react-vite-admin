import React, { Suspense } from "react";
import { Layout } from "antd";
import { CircleLoading } from "@/components/loading";
import Nav from "./nav";
import Header from "./header";
import Main from "./main";
import { useSettings } from "@/store/settingStore";
import { ThemeLayout } from "@/types/enum";

const DashboardLayout: React.FC = () => {
  const settings = useSettings();

  return (
    <Layout className="h-screen overflow-hidde">
      <Suspense
        fallback={
          <div className="h-screen">
            <CircleLoading />
          </div>
        }
      >
        {settings.themeLayout !== ThemeLayout.Horizontal && <Nav />}
        <Layout className="bg-[var(--body-bg-color)] overflow-y-auto">
          <Header />
          <Main />
        </Layout>
      </Suspense>
    </Layout>
  );
};

export default DashboardLayout;
