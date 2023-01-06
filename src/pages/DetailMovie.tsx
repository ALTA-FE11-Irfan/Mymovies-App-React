import React, { Component } from "react";
import moment from "moment";

import Layout from "../components/Layout";
import { LoadingAnimation } from "../components/Loading";
import Carousel from "../components/Carousel";
import { withRouter } from "../utils/Navigation";
import { MovieType, VideosType } from "../utils/types/movie";

interface PropsType {
  params?: any;
}

interface StateType {
  loading: boolean;
  data: MovieType;
  videos: VideosType[];
}

export class DetailMovie extends Component<PropsType, StateType> {
  constructor(props: PropsType) {
    super(props);
    this.state = {
      data: {},
      videos: [],
      loading: true,
    };
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData() {
    const { id_movie } = this.props.params;
    fetch(`https://api.themoviedb.org/3/movie/${id_movie}?api_key=${import.meta.env.VITE_API_KEY}&language=en-US&append_to_response=videos`, { method: "GET" })
      .then((response) => response.json())
      .then((data) => {
        this.setState({ data, videos: data.videos.results });
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
      <Layout>
        {this.state.loading ? (
          <LoadingAnimation />
        ) : (
          <>
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
            <Carousel
              datas={this.state.videos.slice(0, 5)}
              content={(data) => (
                <iframe
                  width="100%"
                  height="315"
                  src={`https://www.youtube.com/embed/${data.key}`}
                  title={data.name}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              )}
            />
          </>
        )}
      </Layout>
    );
  }
}

export default withRouter(DetailMovie);
