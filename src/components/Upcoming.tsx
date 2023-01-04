import React, { Component } from "react";
import axios from "axios";

import { CardUpc } from "./Card";
import { LoadingSkeleton } from "./Loading";

interface DatasType {
  id: number;
  title: string;
  poster_path: string;
}

export class Upcoming extends Component {
  state = {
    datas: [],
    loading: true,
  };

  componentDidMount() {
    this.fetchData();
  }

  fetchData() {
    axios
      .get(`upcoming?api_key=${import.meta.env.VITE_API_KEY}&language=en-US&page=1`)
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
        <h1 className="pb-16 text-4xl md:text-5xl font-bold text-center">Upcoming</h1>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-3 px-6">
          {this.state.loading ? [...Array(20).keys()].map((data) => <LoadingSkeleton key={data} />) : this.state.datas.map((data: DatasType) => <CardUpc key={data.id} title={data.title} image={data.poster_path} />)}
        </div>
      </div>
    );
  }
}

export default Upcoming;
