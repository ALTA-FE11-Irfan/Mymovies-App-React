import React, { Component } from "react";

export class Nowplaying extends Component {
  render() {
    return (
      <div id="Nowplaying" className="bg-black py-20">
        <h1 className="pb-16 text-5xl font-bold text-center">Now Playing</h1>
        <div className="carousel w-4/5 mx-auto rounded-3xl">
          <div id="item1" className="carousel-item w-full">
            <img src="src\assets\Movie1.jpg" className="w-full" />
          </div>
          <div id="item2" className="carousel-item w-full">
            <img src="src\assets\Movie2.jpg" className="w-full" />
          </div>
          <div id="item3" className="carousel-item w-full">
            <img src="src\assets\Movie3.jpg" className="w-full" />
          </div>
          <div id="item4" className="carousel-item w-full">
            <img src="src\assets\Movie4.jpg" className="w-full" />
          </div>
        </div>
        <div className="flex justify-center w-full pt-8 gap-2">
          <a href="#item1" className="btn btn-md">
            1
          </a>
          <a href="#item2" className="btn btn-md">
            2
          </a>
          <a href="#item3" className="btn btn-md">
            3
          </a>
          <a href="#item4" className="btn btn-md">
            4
          </a>
        </div>
      </div>
    );
  }
}

export default Nowplaying;
