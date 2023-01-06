import React, { Component, ButtonHTMLAttributes } from "react";
import { ButtonFav, ButtonWatch } from "./Button";
import { withRouter } from "../utils/Navigation";

interface CardProps {
  title: string;
  image: string;
  id: number;
  labelFav: string;
  labelWatch: string;
  onClickFav?: () => void;
  navigate?: any;
  params?: any;
}

export class Card extends Component<CardProps> {
  onClickDetail() {
    this.props.navigate(`/movie/${this.props.id}`);
  }

  render() {
    return (
      <div className="card card-compact bg-neutral hover:scale-110 mx-1 my-3">
        <figure onClick={() => this.onClickDetail()}>
          <img src={`https://image.tmdb.org/t/p/w500${this.props.image}`} alt={this.props.title} />
        </figure>
        <div className="card-body justify-between">
          <h2 className="card-title justify-center text-center" onClick={() => this.onClickDetail()}>
            {this.props.title}
          </h2>
          <div className="card-actions w-full grid grid-cols-2">
            <ButtonFav label={this.props.labelFav} onClick={this.props.onClickFav} />
            <ButtonWatch label={this.props.labelWatch} onClick={() => this.onClickDetail()} />
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Card);
