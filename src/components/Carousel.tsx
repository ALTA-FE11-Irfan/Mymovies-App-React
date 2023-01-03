import React, { Component } from "react";

interface CaroProps {
  id: string;
  image: string;
}

export class CarouselNP extends Component<CaroProps> {
  render() {
    return (
      <div className="carousel w-5/6 mx-auto my-3 rounded-xl">
        <div id={this.props.id} className="carousel-item w-full">
          <img src={this.props.image} className="w-full" />
        </div>
      </div>
    );
  }
}

export class Carousel extends Component {
  render() {
    return (
      <div>
        <div>
          <div className="carousel w-full">
            <div id="item1" className="carousel-item w-full">
              <img src="https://placeimg.com/800/200/arch" className="w-full" />
            </div>
            <div id="item2" className="carousel-item w-full">
              <img src="https://placeimg.com/800/200/arch" className="w-full" />
            </div>
            <div id="item3" className="carousel-item w-full">
              <img src="https://placeimg.com/800/200/arch" className="w-full" />
            </div>
            <div id="item4" className="carousel-item w-full">
              <img src="https://placeimg.com/800/200/arch" className="w-full" />
            </div>
          </div>
        </div>
        <div className="flex justify-center w-full py-2 gap-2">
          <a href="#item1" className="btn btn-xs">
            1
          </a>
          <a href="#item2" className="btn btn-xs">
            2
          </a>
          <a href="#item3" className="btn btn-xs">
            3
          </a>
          <a href="#item4" className="btn btn-xs">
            4
          </a>
        </div>
      </div>
    );
  }
}
