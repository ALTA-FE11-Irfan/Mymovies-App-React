import React, { Component } from "react";

import Navbar from "./Navbar";
import Footer from "./Footer";

interface LayoutProps {
  children: React.ReactNode;
}

export default class Layout extends Component<LayoutProps> {
  render() {
    return (
      <div className="bg-black">
        <Navbar />
        <div className="py-20">{this.props.children}</div>
        <Footer />
      </div>
    );
  }
}
