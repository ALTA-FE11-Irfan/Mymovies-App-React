import React, { FC } from "react";

import Navbar from "./Navbar";
import Footer from "./Footer";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <div className="bg-black">
      <Navbar />
      <div className="py-20">{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
