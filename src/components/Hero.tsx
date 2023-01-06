import React, { Component } from "react";
import "../styles/Hero.css";
import { FaSearch } from "react-icons/fa";

export class Hero extends Component {
  render() {
    return (
      <div className="hero min-h-screen" style={{ backgroundImage: `url("src/assets/cuthless-bg.jpg")` }}>
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center">
          <div className="max-w-md">
            <img src="src/assets/cuthless-icon.png" className="logo w-52 mx-auto" alt="cuthless-icon" />
            <h1 className="mb-5 text-4xl md:text-6xl font-bold">Wazzup!</h1>
            <p className="mb-5 text-sm md:text-md">Enjoy exclusive Cuthless Originals as well as popular movies and TV shows. Watch now!</p>
            <div className="bg-neutral rounded-full mx-10 flex border border-forth">
              <input type="text" placeholder="Search" className="input bg-neutral w-full max-w-xs" />
              <button className="btn bg-third border border-third text-white hover:btn-outline w-20">
                <FaSearch className="text-xl" />
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Hero;
