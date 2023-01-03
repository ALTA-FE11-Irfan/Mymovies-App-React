import React, { Component } from "react";
import { LoadingAnimation } from "../components/Loading";
import { CarouselNP } from "../components/Carousel";

interface DatasType {
  id: string;
  title: string;
  image: string;
}

export class Nowplaying extends Component {
  state = {
    datas: [],
    loading: true,
  };

  componentDidMount() {
    this.fetchData();
  }

  fetchData() {
    setTimeout(() => {
      this.setState({
        datas: [
          {
            id: "item1",
            image: "src/assets/Movie1.jpg",
          },
          {
            id: "item2",
            image: "src/assets/Movie2.jpg",
          },
          {
            id: "item3",
            image: "src/assets/Movie3.jpg",
          },
          {
            id: "item4",
            image: "src/assets/Movie4.jpg",
          },
        ],
        loading: false,
      });
    }, 1000);
  }

  render() {
    return (
      <div id="Nowplaying" className="bg-black py-20">
        <h1 className="pb-16 text-5xl font-bold text-center">Now Playing</h1>
        <div>{this.state.loading ? <LoadingAnimation /> : this.state.datas.map((data: DatasType) => <CarouselNP id={data.id} image={data.image} />)}</div>
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
