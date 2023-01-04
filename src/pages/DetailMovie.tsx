import React, { Component } from "react";

import axios from "axios";
import moment from "moment";

import { LoadingAnimation } from "../components/Loading";

type GenreType = {
  id?: number;
  name?: string;
};

interface DataType {
  id?: number;
  title?: string;
  poster_path?: string;
  overview?: string;
  release_date?: string;
  runtime?: number;
  genres?: GenreType[];
}

interface PropsType {}

interface StateType {
  loading: boolean;
  data: DataType;
}

export class DetailMovie extends Component<PropsType, StateType> {
  constructor(props: PropsType) {
    super(props);
    this.state = {
      data: {},
      loading: true,
    };
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData() {
    fetch(`https://api.themoviedb.org/3/movie/505642?api_key=${import.meta.env.VITE_API_KEY}&language=en-US`, { method: "GET" })
      .then((response) => response.json())
      .then((data) => {
        this.setState({ data });
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
      <div className="bg-black px-5">
        {this.state.loading ? (
          <LoadingAnimation />
        ) : (
          <div className="card card-compact lg:card-side bg-neutral">
            <figure className="w-full">
              <img src={`https://image.tmdb.org/t/p/w500${this.state.data.poster_path}`} alt={this.state.data.title} />
            </figure>
            <div className="card-body my-3 justify-between items-end md:mx-6">
              <div className="text-md md:text-xl">
                <h1 className="font-bold text-center text-3xl md:text-4xl">{this.state.data.title}</h1>
                <br />
                <p>
                  <span className="font-bold">Release Date: </span>
                  {moment(this.state.data.release_date).format("DD MMMM YYYY")}
                </p>
                <p>
                  <span className="font-bold">Runtime: </span>
                  {this.state.data.runtime}
                </p>
                <p>
                  <span className="font-bold">Genre: </span>
                  {this.state.data.genres
                    ?.map((genre) => {
                      return genre.name;
                    })
                    .join(", ")}
                </p>
                <p className="text-justify">
                  <span className="font-bold">Overview: </span>
                  {this.state.data.overview}
                </p>
              </div>
              <div className="card-actions">
                <button className="btn bg-third text-white hover:btn-outline w-full tracking-wider">Watch</button>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default DetailMovie;
