import React from "react";
import Navbar from "./navbar";
import Footer from "./footer";
// import { getLayoutData } from "@/lib/queries/layout";
type LayoutType = {
  children: React.ReactNode;
};

const LayoutPage = async ({ children }: LayoutType) => {
  return (
    <div>
      <Navbar />
      <div className="h-36"></div>
      <div className="overflow-hidden">{children}</div>
      <Footer />
    </div>
  );
};

export default LayoutPage;
