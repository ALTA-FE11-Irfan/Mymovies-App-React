import React, { Component } from "react";

export class Favorite extends Component {
  render() {
    return (
      <div id="Favorite" className="bg-black py-20">
        <h1 className="pb-16 text-5xl font-bold text-center">Favorite</h1>
        <div className="container flex flex-col md:flex-row  justify-center mx-auto">
          <div className="card w-96 bg-neutral shadow-xl mx-auto md:mx-3 my-5">
            <figure>
              <img src="src/assets/Movie1.jpg" alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Black Panther</h2>
              <p className="text-sm">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus cupiditate veniam expedita voluptatibus corrupti minima libero aliquam eveniet vel ea!</p>
              <div className="card-actions justify-end">
                <button className="btn bg-third hover:btn-outline">Watch</button>
              </div>
            </div>
          </div>
          <div className="card w-96 bg-neutral shadow-xl mx-auto md:mx-3 my-5">
            <figure>
              <img src="src/assets/Movie2.jpg" alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">300</h2>
              <p className="text-sm">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus cupiditate veniam expedita voluptatibus corrupti minima libero aliquam eveniet vel ea!</p>
              <div className="card-actions justify-end">
                <button className="btn bg-third hover:btn-outline">Watch</button>
              </div>
            </div>
          </div>
          <div className="card w-96 bg-neutral shadow-xl mx-auto md:mx-3 my-5">
            <figure>
              <img src="src/assets/Movie3.jpg" alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Batman Begins</h2>
              <p className="text-sm">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus cupiditate veniam expedita voluptatibus corrupti minima libero aliquam eveniet vel ea!</p>
              <div className="card-actions justify-end">
                <button className="btn bg-third hover:btn-outline">Watch</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Favorite;
