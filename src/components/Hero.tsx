import axios from "axios";
import { useState, useEffect } from "react";

import Input from "./Input";
import "../styles/Hero.css";
import { FaSearch } from "react-icons/fa";

const Hero = () => {
  return (
    <div className="hero min-h-screen" style={{ backgroundImage: `url("https://i.ibb.co/D7HBf4s/cuthless-bg.jpg")` }}>
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center">
        <div className="max-w-md">
          <img src="https://i.ibb.co/HtQcbVm/cuthless-icon.png" className="logo w-52 mx-auto" alt="cuthless-icon" />
          <h1 className="mb-5 text-4xl md:text-6xl font-bold">Wazzup!</h1>
          <p className="mb-5 text-sm md:text-md">Enjoy exclusive Cuthless Originals as well as popular movies and TV shows. Watch now!</p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
