import React, { Component } from "react";

import Layout from "../components/Layout";
import Card from "../components/Card";
import { LoadingSkeleton } from "../components/Loading";
import { MovieType } from "../utils/types/movie";

interface PropsType {}

interface StateType {
  loading: boolean;
  datas: MovieType[];
}

export class Favorite extends Component<PropsType, StateType> {
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
    const getFav = localStorage.getItem("FavMov");
    if (getFav) {
      this.setState({ datas: JSON.parse(getFav) });
    }
    this.setState({ loading: false });
  }

  removeFav(data: MovieType) {
    let dupeDatas: MovieType[] = this.state.datas.slice();
    const filterData = dupeDatas.filter((item) => item.id !== data.id);
    localStorage.setItem("FavMovie", JSON.stringify(filterData));
    alert(`${data.title} was removed from Favorite`);
  }

  render() {
    return (
      <Layout>
        <h1 className="pb-16 text-4xl md:text-5xl font-bold text-center">Favorite</h1>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-3 px-6">
          {this.state.loading
            ? [...Array(20).keys()].map((data) => <LoadingSkeleton key={data} />)
            : this.state.datas.map((data) => <Card key={data.id} title={data.title} image={data.poster_path} id={data.id} labelButton="REMOVE FROM FAVORITE" onClickFav={() => this.removeFav(data)} />)}
        </div>
      </Layout>
    );
  }
}

export default Favorite;
