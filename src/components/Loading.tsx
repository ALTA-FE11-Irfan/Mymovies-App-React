import React, { Component } from "react";
import Lottie from "lottie-react";
import Loading from "../assets/cuthless-loading.json";

export class LoadingAnimation extends Component {
  render() {
    return (
      <div>
        <Lottie animationData={Loading} loop={true} autoplay />
      </div>
    );
  }
}
