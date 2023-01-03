import React, { Component } from "react";

interface CardProps {
  title: string;
  image: string;
}

export class CardFav extends Component<CardProps> {
  render() {
    return (
      <div className="card card-compact bg-neutral">
        <figure>
          <img src={this.props.image} alt={this.props.title} />
        </figure>
        <div className="card-body">
          <h2 className="card-title justify-center text-center">{this.props.title}</h2>
          <div className="card-actions justify-center">
            <button className="btn bg-third hover:btn-outline w-full">Add to Favorite</button>
          </div>
        </div>
      </div>
    );
  }
}
