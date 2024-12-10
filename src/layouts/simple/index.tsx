import React from "react";

type Props = {
  children: React.ReactNode;
};

const SimpleLayout: React.FC<Props> = ({ children }) => {
  return <div className="flex h-screen w-full flex-col">{children}</div>;
};

export default SimpleLayout;
