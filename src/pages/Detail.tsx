import React, { Component } from "react";

export class Detail extends Component {
  render() {
    return (
      <div id="Detail" className="bg-black py-20">
        <h1 className="pb-16 text-5xl font-bold text-center">New Movie</h1>
        <div className="card lg:card-side bg-neutral shadow-xl">
          <figure>
            <img src="src/assets/Movie4.jpg" alt="New Movie" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Avatar: The Way of Water</h2>
            <p>
              Jake Sully and Ney'tiri have formed a family and are doing everything to stay together. However, they must leave their home and explore the regions of Pandora. When an ancient threat resurfaces, Jake must fight a difficult war
              against the humans.
            </p>
            <div className="card-actions justify-end">
              <button className="btn bg-third hover:btn-outline">Watch</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Detail;
