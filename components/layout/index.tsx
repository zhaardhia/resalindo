import React from "react";
import Navbar from "./navbar";
import Footer from "./footer";
// import { getLayoutData } from "@/lib/queries/layout";
type LayoutType = {
  children: React.ReactNode;
  defaultTopHeight?: boolean
};

const LayoutPage = async ({ children, defaultTopHeight = true }: LayoutType) => {
  return (
    <div>
      <Navbar />
      {defaultTopHeight ? <div className="h-36"></div> : ''}
      <div className="overflow-hidden">{children}</div>
      <Footer />
    </div>
  );
};

export default LayoutPage;
