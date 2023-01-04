import React, { Component } from "react";

interface CardProps {
  title: string;
  image: string;
}

export class CardFav extends Component<CardProps> {
  render() {
    return (
      <div className="card card-compact bg-neutral hover:scale-110 mx-1 my-3">
        <figure>
          <img src={`https://image.tmdb.org/t/p/w500${this.props.image}`} alt={this.props.title} />
        </figure>
        <div className="card-body justify-between">
          <h2 className="card-title justify-center text-center">{this.props.title}</h2>
          <div className="card-actions justify-center">
            <button className="btn bg-third text-white hover:btn-outline w-full tracking-wider text-xs">Remove from Favorite</button>
          </div>
        </div>
      </div>
    );
  }
}
export class CardUpc extends Component<CardProps> {
  render() {
    return (
      <div className="card card-compact bg-neutral hover:scale-110 mx-1 my-3">
        <figure>
          <img src={`https://image.tmdb.org/t/p/w500${this.props.image}`} alt={this.props.title} />
        </figure>
        <div className="card-body justify-between">
          <h2 className="card-title justify-center text-center">{this.props.title}</h2>
          <div className="card-actions justify-center">
            <button className="btn bg-third text-white hover:btn-outline w-full tracking-wider text-xs">Add to Favorite</button>
          </div>
        </div>
      </div>
    );
  }
}
