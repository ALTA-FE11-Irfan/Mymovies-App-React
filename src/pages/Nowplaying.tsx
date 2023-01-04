import React, { Component } from "react";
import axios from "axios";

import { LoadingAnimation } from "../components/Loading";
import Carousel from "../components/Carousel";

interface DatasType {
  id: number;
  title: string;
  poster_path: string;
}

interface PropsType {}

interface StateType {
  loading: boolean;
  datas: DatasType[];
}

export class Nowplaying extends Component<PropsType, StateType> {
  constructor(props: PropsType) {
    super(props);
    this.state = {
      datas: [],
      loading: true,
    };
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData() {
    axios
      .get(`now_playing?api_key=${import.meta.env.VITE_API_KEY}&language=en-US&page=1`)
      .then((data) => {
        const { results } = data.data;
        this.setState({ datas: results });
      })
      .catch((error) => {
        alert(error.toString());
      })
      .finally(() => {
        this.setState({ loading: false });
      });
  }

  render() {
    return (
      <div className="bg-black py-20">
        <h1 className="pb-16 text-4xl md:text-5xl font-bold text-center">Now Playing</h1>
        {!this.state.loading && (
          <Carousel
            datas={this.state.datas.slice(0, 5)}
            content={(data) => (
              <div
                className="w-full h-full flex justify-center items-center bg-cover bg-center"
                style={{
                  backgroundImage: `linear-gradient(
                    rgba(0, 0, 0, 0.35),
                    rgba(0, 0, 0, 0.35)
                  ), url(https://image.tmdb.org/t/p/original${data.poster_path})`,
                }}
              >
                <a href="">
                  <p className="text-white tracking-widest font-bold break-words text-xl max-w-xs md:max-w-full text-center hover:scale-110">{data.title}</p>
                </a>
              </div>
            )}
          />
        )}
      </div>
    );
  }
}

export default Nowplaying;
