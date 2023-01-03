import React, { Component } from "react";
import { CardFav } from "../components/Card";
import { LoadingAnimation } from "../components/Loading";

interface DatasType {
  id: number;
  title: string;
  image: string;
}

export class Favorite extends Component {
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
            id: 1,
            title: "Black Panther: Wakanda Forever",
            image: "https://media.21cineplex.com/webcontent/gallery/pictures/166573267866338_405x594.jpg",
          },
          {
            id: 2,
            title: "Avatar: The Way of Water",
            image: "https://media.21cineplex.com/webcontent/gallery/pictures/166937899876573_405x594.jpg",
          },
          {
            id: 3,
            title: "Puss in Boots: The Last Wish",
            image: "https://media.21cineplex.com/webcontent/gallery/pictures/166875712221648_405x594.jpg",
          },
          {
            id: 4,
            title: "Wolf Pack",
            image: "https://media.21cineplex.com/webcontent/gallery/pictures/167272214154278_405x594.jpg",
          },
        ],
        loading: false,
      });
    }, 1000);
  }

  render() {
    return (
      <div id="Favorite" className="bg-black py-20">
        <h1 className="pb-16 text-5xl font-bold text-center">Favorite</h1>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 px-6">{this.state.loading ? <LoadingAnimation /> : this.state.datas.map((data: DatasType) => <CardFav key={data.id} title={data.title} image={data.image} />)}</div>
      </div>
    );
  }
}

export default Favorite;
