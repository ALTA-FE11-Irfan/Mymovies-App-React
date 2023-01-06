import React, { Component } from "react";
import axios from "axios";

import Layout from "../components/Layout";
import Hero from "../components/Hero";
import Nowplaying from "./NowPlaying";
import Card from "../components/Card";
import { LoadingSkeleton } from "../components/Loading";
import { MovieType } from "../utils/types/movie";

interface PropsType {}

interface StateType {
  loading: boolean;
  datas: MovieType[];
  page: number;
  totalPage: number;
}

export default class Index extends Component<PropsType, StateType> {
  constructor(props: PropsType) {
    super(props);
    this.state = {
      datas: [],
      loading: true,
      page: 1,
      totalPage: 1,
    };
  }

  componentDidMount() {
    this.fetchData(1);
  }

  fetchData(page: number) {
    axios
      .get(`now_playing?api_key=${import.meta.env.VITE_API_KEY}&language=en-US&page=${page}`)
      .then((data) => {
        const { results, total_pages } = data.data;
        this.setState({ datas: results, totalPage: total_pages });
      })
      .catch((error) => {
        alert(error.toString());
      })
      .finally(() => {
        this.setState({ loading: false });
      });
  }

  nextPage() {
    const newPage = this.state.page + 1;
    this.setState({ page: newPage });
    this.fetchData(newPage);
  }

  prevPage() {
    const newPage = this.state.page - 1;
    this.setState({ page: newPage });
    this.fetchData(newPage);
  }

  handleFav(data: MovieType) {
    const checkExist = localStorage.getItem("FavMovie");
    if (checkExist) {
      let parseFav: MovieType[] = JSON.parse(checkExist);
      parseFav.push(data);
      localStorage.setItem("FavMovie", JSON.stringify(parseFav));
    } else {
      localStorage.setItem("FavMovie", JSON.stringify([data]));
      alert("Movie added to favorite");
    }
  }

  render() {
    return (
      <Layout>
        <Hero />
        <Nowplaying />
        <h1 className="pb-16 text-4xl md:text-5xl font-bold text-center">Latest</h1>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-3 px-6">
          {this.state.loading
            ? [...Array(20).keys()].map((data) => <LoadingSkeleton key={data} />)
            : this.state.datas.map((data) => <Card key={data.id} title={data.title} image={data.poster_path} id={data.id} labelFav="ADD TO FAVORITE" labelWatch="WATCH" onClickFav={() => this.handleFav(data)} />)}
        </div>
        <div className="btn-group gap-1 w-full justify-center pt-5">
          <button className="btn hover:btn-outline" onClick={() => this.prevPage()} disabled={this.state.page === 1}>
            «
          </button>
          <button className="btn hover:btn-outline">{this.state.page}</button>
          <button className="btn hover:btn-outline" onClick={() => this.nextPage()} disabled={this.state.page === this.state.totalPage}>
            »
          </button>
        </div>
      </Layout>
    );
  }
}
