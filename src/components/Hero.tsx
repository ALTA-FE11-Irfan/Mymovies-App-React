import React, { Component } from "react";
import "../styles/Hero.css";

export class Hero extends Component {
  render() {
    return (
      <div className="hero min-h-screen" style={{ backgroundImage: `url("src/assets/cuthless-bg.jpg")` }}>
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center">
          <div className="max-w-md">
            <a href="#" target="_blank">
              <img src="src/assets/cuthless-icon.png" className="logo w-52 mx-auto" alt="cuthless-icon" />
            </a>
            <h1 className="mb-5 text-5xl font-bold ">Wazzup!</h1>
            <p className="mb-5">Enjoy exclusive Cuthless Originals as well as popular movies and TV shows. Watch now!</p>
            <button className="btn bg-third hover:btn-outline">Get Started</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Hero;
